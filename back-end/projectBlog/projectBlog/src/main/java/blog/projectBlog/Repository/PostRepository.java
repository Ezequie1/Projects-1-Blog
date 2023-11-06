package blog.projectBlog.Repository;

import blog.projectBlog.Model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    @Query("SELECT p FROM Post p WHERE p.title LIKE %:search% OR p.text LIKE %:search%")
    List<Post> searchByTitleAndText(@Param("search") String keyword);
}
