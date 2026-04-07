import { Component } from "@/modules/core/component";

export class About extends Component {
  protected getHtml(): string {
    return /*html*/`
      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${this.getHeroHtml()}

        ${this.getFeaturesHtml()}
      </main>
    `;
  }

  private getHeroHtml(): string {
    return /*html*/`
      <section class="mb-16 text-center">
        <img
          src="/images/logo.svg"
          alt="BlogSpace logo"
          class="mx-auto mb-6 h-20 w-20"
        />

        <h1 class="mb-4 text-4xl font-bold text-content-primary md:text-5xl">
          BlogSpace
        </h1>

        <p class="mx-auto max-w-2xl text-lg text-content-secondary">
          A modern blogging platform where you can share your thoughts, engage
          with readers through comments, and build a community around your
          ideas.
        </p>

        <div class="mt-8 flex justify-center gap-4">
          <a
            href="feed"
            class="hidden auth:inline-block rounded-lg bg-accent px-6 py-2.5 font-medium text-content-primary hover:bg-accent-hover"
          >
            Browse the feed
          </a>

          <a
            href="sign-up"
            class="auth:hidden rounded-lg bg-accent px-6 py-2.5 font-medium text-content-primary hover:bg-accent-hover"
          >
            Get started
          </a>
        </div>
      </section>
    `;
  }

  private getFeaturesHtml(): string {
    return /*html*/`
      <section>
        <h2 class="mb-8 text-center text-2xl font-bold text-content-primary">
          Features
        </h2>

        <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          ${this.getFeatureCardHtml(
            /*html*/`<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>`,
            "Write Posts",
            "Create and publish blog posts with a clean, distraction-free editor.",
          )}

          ${this.getFeatureCardHtml(
            /*html*/`<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>`,
            "Comments",
            "Engage with your readers through a threaded comment system on every post.",
          )}

          ${this.getFeatureCardHtml(
            /*html*/`<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>`,
            "User Profiles",
            "Personalize your profile, manage your posts, and track your activity.",
          )}
        </div>
      </section>
    `;
  }

  private getFeatureCardHtml(icon: string, title: string, description: string): string {
    return /*html*/`
      <div class="rounded-xl border border-stroke-primary bg-surface-secondary p-6">
        <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-hover">
          ${icon}
        </div>

        <h3 class="mb-2 font-semibold text-content-primary">${title}</h3>

        <p class="text-sm text-content-secondary">
          ${description}
        </p>
      </div>
    `;
  }
}
