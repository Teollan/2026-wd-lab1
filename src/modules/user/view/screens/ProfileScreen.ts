import { authStore } from "@/modules/auth/data/auth.store";
import { ReactiveComponent } from "@/modules/core/component";
import { createScreen } from "@/modules/core/screen";
import { Header } from "@/modules/UI/Header";
import { Footer } from "@/modules/UI/Footer";
import { ProfileAvatar } from "@/modules/user/view/components/ProfileAvatar";
import { ProfileInfoTable } from "@/modules/user/view/components/ProfileInfoTable";
import { ProfileActions } from "@/modules/user/view/components/ProfileActions";

export class ProfileScreen extends ReactiveComponent {
  protected onComponentDidMount(): void {
    authStore.subscribe(() => this.render());
  }

  protected getHtml() {
    const isAuthenticated = Boolean(authStore.getState().user);

    return /*html*/`
      ${Header({ location: "profile", isAuthenticated })}

      <main class="mx-auto max-w-5xl flex-1 px-4 py-12">
        <div class="mx-auto max-w-2xl">
          <h1 class="mb-8 text-3xl font-bold text-content-primary">
            Profile
          </h1>

          <div class="rounded-xl border border-stroke-primary bg-surface-secondary p-6">
            ${ProfileAvatar({ initials: "JD", username: "John Doe", memberSince: "Member since January 2026" })}

            ${ProfileInfoTable({ entries: [
              { label: "Username", value: "John Doe" },
              { label: "Email", value: "john.doe@example.com" },
              { label: "Gender", value: "Male" },
              { label: "Date of birth", value: "March 15, 1998" },
              { label: "Bio", value: "Full-stack developer and tech blogger. Passionate about web standards and open source." },
              { label: "Posts", value: "12" },
              { label: "Comments", value: "47" },
            ]})}

            ${ProfileActions()}
          </div>
        </div>
      </main>

      ${Footer()}
    `
  };
}

createScreen("root", ProfileScreen);
