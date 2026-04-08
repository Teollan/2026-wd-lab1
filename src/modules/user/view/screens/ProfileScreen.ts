import { authStore } from "@/modules/auth/data/auth.store";
import { ReactiveComponent } from "@/modules/core/component";
import { createScreen } from "@/modules/core/screen";
import { Header } from "@/modules/UI/Header";
import { Footer } from "@/modules/UI/Footer";
import { ProfileAvatar } from "@/modules/user/view/components/ProfileAvatar";
import { ProfileInfoTable } from "@/modules/user/view/components/ProfileInfoTable";
import { ProfileActions } from "@/modules/user/view/components/ProfileActions";
import { ROUTES } from "@/utility/routes";

export class ProfileScreen extends ReactiveComponent {
  protected onComponentDidMount(): void {
    authStore.subscribe(() => this.render());
  }

  protected getHtml() {
    const { user } = authStore.getState();
    const isAuthenticated = Boolean(user);

    if (!user) {
      window.location.href = ROUTES.SIGN_IN;

      return "";
    }

    return /*html*/`
      ${Header({ location: "profile", isAuthenticated })}

      <main class="mx-auto max-w-5xl flex-1 px-4 py-12">
        <div class="mx-auto max-w-2xl">
          <h1 class="mb-8 text-3xl font-bold text-content-primary">
            Profile
          </h1>

          <div class="rounded-xl border border-stroke-primary bg-surface-secondary p-6">
            ${ProfileAvatar({
              username: user.username,
              createdAt: user.createdAt,
            })}

            ${ProfileInfoTable({ entries: [
              { label: "Username", value: user.username },
              { label: "Email", value: user.email },
              { label: "Gender", value: formatGender(user.gender) },
              { label: "Date of birth", value: formatDate(user.dateOfBirth) },
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

const formatGender = (gender: string) => {
  switch (gender) {
    case "male":
      return "Male";

    case "female":
      return "Female";

    default:
      return "Other";
  }
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

createScreen("root", ProfileScreen);
