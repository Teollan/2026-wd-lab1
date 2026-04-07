import { authStore } from "@/modules/auth/data/auth.store";
import { Component } from "@/modules/core/component";

export class Profile extends Component<{}> {
  protected getHtml() {
    return /*html*/`
      <main class="mx-auto max-w-5xl px-4 py-12">
        <div class="mx-auto max-w-2xl">
          <h1 class="mb-8 text-3xl font-bold text-content-primary">Profile</h1>

          <div class="rounded-xl border border-stroke-primary bg-surface-secondary p-6">
            ${this.getAvatarHtml()}
            
            ${this.getInfoTableHtml()}

            ${this.getActionsHtml()}
          </div>
        </div>
      </main>
    `
  };

  private getAvatarHtml() {
    return /*html*/`
      <div class="mb-6 flex items-center gap-4">
        <div class="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-2xl font-bold text-accent-hover">
          JD
        </div>

        <div>
          <h2 class="text-xl font-semibold text-content-primary">
            John Doe
          </h2>

          <p class="text-sm text-content-tertiary">
            Member since January 2026
          </p>
        </div>
      </div>
    `;
  }

  private getInfoTableHtml() {
    return /*html*/`
      <table class="w-full">
        <tbody class="divide-y divide-stroke-primary text-sm text-content-primary">
          ${this.getInfoTableEntryHtml("Username", "John Doe")}
          ${this.getInfoTableEntryHtml("Email", "john.doe@example.com")}
          ${this.getInfoTableEntryHtml("Gender", "Male")}
          ${this.getInfoTableEntryHtml("Date of birth", "March 15, 1998")}
          ${this.getInfoTableEntryHtml("Bio", "Full-stack developer and tech blogger. Passionate about web standards and open source.")}
          ${this.getInfoTableEntryHtml("Posts", "12")}
          ${this.getInfoTableEntryHtml("Comments", "47")}
        </tbody>
      </table>
    `;
  }

  private getActionsHtml() {
    return /*html*/`
      <div class="mt-6 flex gap-3">
        <a
          href="my-posts"
          class="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-content-primary hover:bg-accent-hover"
        >
          View my posts
        </a>

        <a
          href="./"
          id="log-out-button"
          class="rounded-lg bg-destructive/20 px-5 py-2.5 text-sm font-medium text-destructive hover:bg-destructive/30"
        >
          Log Out
        </a>
      </div>
    `
  }

  private getInfoTableEntryHtml(label: string, value: string) {
    return /*html*/`
      <tr class="align-top">
        <td class="py-3 pr-4 font-medium text-content-secondary whitespace-nowrap">
          ${label}
        </td>

        <td class="py-3">${value}</td>
      </tr>
    `;
  }
}