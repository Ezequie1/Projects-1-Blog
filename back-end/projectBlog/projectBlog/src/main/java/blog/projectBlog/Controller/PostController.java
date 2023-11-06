package blog.projectBlog.Controller;

import blog.projectBlog.Model.Post;
import blog.projectBlog.Model.RequestPost;
import blog.projectBlog.Service.PostService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Posts")
@Validated
public class PostController {

    @Autowired
    private PostService service;

    @GetMapping
    public ResponseEntity<List<Post>> getPosts(){
        return ResponseEntity.status(200).body(service.getAll());
    }

    @GetMapping("/Search/{value}")
    public ResponseEntity<List<Post>> getPostContaining(@PathVariable String value){
        return ResponseEntity.status(200).body(service.getPostContaining(value));
    }

    @PostMapping("/Create")
    public ResponseEntity createPost(@RequestBody @Valid RequestPost post){
        return ResponseEntity.status(201).body(service.createPost(post));
    }

    @PutMapping("/Edit/{id}")
    public ResponseEntity createPost(@PathVariable Long id, @RequestBody @Valid RequestPost post){
        return ResponseEntity.status(200).body(service.editPost(post, id));
    }

    @PutMapping("/Favorite/{id}")
    public ResponseEntity favoritePost(@PathVariable @Valid Long id){
        return ResponseEntity.status(200).body(service.favorite(id));
    }

    @DeleteMapping("/Delete/{id}")
    public ResponseEntity createPost(@PathVariable Long id){
        return ResponseEntity.status(200).body(service.deletePost(id));
    }

}
