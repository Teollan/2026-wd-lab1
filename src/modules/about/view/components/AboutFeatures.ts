import { PureComponent } from "@/modules/core/component";
import { FeatureCard } from "@/modules/about/view/components/FeatureCard";
import { IconEdit } from "@/modules/UI/icons/IconEdit";
import { IconComment } from "@/modules/UI/icons/IconComment";
import { IconUser } from "@/modules/UI/icons/IconUser";

export const AboutFeatures: PureComponent = () => {
  return /*html*/ `
    <section>
      <h2 class="mb-8 text-center text-2xl font-bold text-content-primary">
        Features
      </h2>

      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        ${FeatureCard({
          Icon: IconEdit,
          title: "Write Posts",
          body: "Create and publish blog posts with a clean, distraction-free editor.",
        })}

        ${FeatureCard({
          Icon: IconComment,
          title: "Comments",
          body: "Engage with your readers through a threaded comment system on every post.",
        })}

        ${FeatureCard({
          Icon: IconUser,
          title: "User Profiles",
          body: "Personalize your profile, manage your posts, and track your activity.",
        })}
      </div>
    </section>
  `;
};
