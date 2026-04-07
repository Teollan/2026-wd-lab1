import { Component } from "@/modules/core/component";
import { Post } from "@/modules/posts/model/Post";
import { Comment } from "@/modules/posts/model/Comment";

interface Props {
  title: string;
  posts: Post[];
  showActions?: boolean;
}

export class PostList extends Component<Props> {
  protected getHtml(props: Props): string {
    return /*html*/`
      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        <h1 class="mb-8 text-3xl font-bold text-content-primary">
          ${props.title}
        </h1>

        <div class="space-y-8">
          ${props.posts.map(post => this.getPostHtml(post, props.showActions ?? false)).join("")}
        </div>
      </main>
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
            <div class="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent-hover">
              ${initials}
            </div>

            <div>
              <p class="text-sm font-medium text-content-primary">${post.author.username}</p>
              <p class="text-xs text-content-tertiary">${this.formatDate(post.createdAt)}</p>
            </div>
          </div>

          ${showActions ? this.getActionsHtml() : ""}
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

  private getActionsHtml(): string {
    return /*html*/`
      <div class="flex items-center gap-2">
        <button class="text-content-tertiary hover:text-accent-hover">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>

        <button class="text-content-tertiary hover:text-destructive">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
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
              ${comments.map(c => this.getCommentHtml(c)).join("")}
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

  private getCommentHtml(comment: Comment): string {
    return /*html*/`
      <div class="rounded-lg bg-surface-tertiary p-3">
        <div class="mb-1 flex items-center gap-2">
          <span class="text-sm font-medium text-content-primary">
            ${comment.author.username}
          </span>

          <span class="text-xs text-content-tertiary">
            ${this.formatDate(comment.createdAt)}
          </span>
        </div>

        <p class="text-sm text-content-secondary">
          ${comment.content}
        </p>
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
