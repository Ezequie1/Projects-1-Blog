package blog.projectBlog.Service;

import blog.projectBlog.Model.Post;
import blog.projectBlog.Model.RequestPost;
import blog.projectBlog.Repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository repository;
    public List<Post> getAll() {
        return repository.findAll();
    }

    public Post createPost(RequestPost post) {
        return repository.save(
                new Post(
                    post.getTitle(),
                    post.getText(),
                    false));
    }

    public Post favorite(Long id) {
        Post post = repository.getById(id);
        post.setFavorite(!post.isFavorite());

        return repository.save(post);
    }

    public Post editPost(RequestPost post, Long id) {
        Post postActual = repository.getById(id);

        postActual.setTitle(post.getTitle());
        postActual.setText(post.getText());

        return repository.save(postActual);
    }

    public String deletePost(Long id) {
        repository.deleteById(id);
        return  "Deletado com sucesso!";
    }

    public List<Post> getPostContaining(String value) {
        return repository.searchByTitleAndText(value);
    }
}
