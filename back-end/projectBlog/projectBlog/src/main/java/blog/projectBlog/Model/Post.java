package blog.projectBlog.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String text;
    private boolean favorite;
    private LocalDateTime dataPost = LocalDateTime.now();

    public Post(String title, String text, boolean favorite) {
        this.title = title;
        this.text = text;
        this.favorite = favorite;
    }

    public Post() {
    }
}
