import { ReactiveComponent } from "@/modules/core/component";
import { Post } from "@/modules/posts/model/Post";
import { Comment } from "@/modules/posts/model/Comment";
import { Avatar } from "@/modules/UI/Avatar";
import { Footer } from "@/modules/UI/Footer";
import { Header } from "@/modules/UI/Header";
import { CommentCard } from "@/modules/posts/view/components/CommentCard";
import { PostActions } from "@/modules/posts/view/components/PostActions";

interface Props {
  location: string;
  title: string;
  posts: Post[];
  showActions?: boolean;
}

export class PostList extends ReactiveComponent<Props> {
  protected getHtml(props: Props): string {
    return /*html*/`
      ${Header({ location: props.location, isAuthenticated: false })}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        <h1 class="mb-8 text-3xl font-bold text-content-primary">
          ${props.title}
        </h1>

        <div class="space-y-8">
          ${props.posts.map(post => this.getPostHtml(post, props.showActions ?? false)).join("")}
        </div>
      </main>

      ${Footer()}
    `;
  }

  private getPostHtml(post: Post, showActions: boolean): string {
    const initials = post.author.username
      .split(" ")
      .map(w => w[0])
      .join("");

    return /*html*/`
      <article class="rounded-xl border border-stroke-primary bg-surface-secondary p-6">
        <div class="mb-3 flex items-center ${showActions ? "justify-between" : "gap-3"}">
          <div class="flex items-center gap-3">
            ${Avatar({ initials })}

            <div>
              <p class="text-sm font-medium text-content-primary">${post.author.username}</p>
              <p class="text-xs text-content-tertiary">${this.formatDate(post.createdAt)}</p>
            </div>
          </div>

          ${showActions ? PostActions() : ""}
        </div>

        <h2 class="mb-2 text-xl font-semibold text-content-primary">
          ${post.title}
        </h2>

        <p class="mb-4 text-content-secondary">
          ${post.content}
        </p>

        ${this.getCommentsHtml(post.comments)}
      </article>
    `;
  }

  private getCommentsHtml(comments: Comment[]): string {
    return /*html*/`
      <div class="border-t border-stroke-primary pt-4">
        <h3 class="mb-3 text-sm font-semibold text-content-secondary">
          Comments (${comments.length})
        </h3>

        <form class="mb-4 flex gap-3">
          <textarea
            rows="1"
            placeholder="Add a comment..."
            class="min-h-9 resize-none flex-1 content-end rounded-lg border border-stroke-secondary bg-surface-tertiary px-4 py-1.5 text-sm field-sizing-content text-content-primary placeholder-content-tertiary focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            class="cursor-pointer self-end rounded-lg bg-accent px-4 py-2 text-sm font-medium text-content-primary hover:bg-accent-hover focus:ring-2 focus:ring-accent/20 focus:outline-none"
          >
            Post
          </button>
        </form>

        ${comments.length > 0
          ? /*html*/`
            <div class="space-y-3">
              ${comments.map(c => CommentCard({ comment: c })).join("")}
            </div>
          `
          : /*html*/`
            <p class="text-sm text-content-tertiary">
              No comments yet. Be the first to share your thoughts!
            </p>
          `
        }
      </div>
    `;
  }

  private formatDate(date: Date): string {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
}
