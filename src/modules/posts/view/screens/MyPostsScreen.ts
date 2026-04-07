import { ReactiveComponent } from "@/modules/core/component";
import { PostsRepository } from "@/modules/posts/data/posts.repository";
import { Header } from "@/modules/UI/Header";
import { Footer } from "@/modules/UI/Footer";
import { PostList } from "@/modules/posts/view/components/PostList";

export class MyPostsScreen extends ReactiveComponent {
  protected getHtml(): string {
    const posts = PostsRepository.getMyPosts();

    return /*html*/`
      ${Header({ location: "my-posts", isAuthenticated: false })}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${PostList({ title: "My Posts", posts, withActions: true })}
      </main>

      ${Footer()}
    `;
  }
}

new MyPostsScreen(document.getElementById("root")!);
