import { PureComponent } from "@/modules/core/component";
import { PostWithAuthorAndComments } from "@/modules/posts/model/Post";
import { PostCard } from "@/modules/posts/view/components/PostCard";

interface Props {
  title: string;
  posts: PostWithAuthorAndComments[];
  withActions?: boolean;
}

export const PostList: PureComponent<Props> = ({
  title,
  withActions = false,
  posts,
}) => {
  return /*html*/`
    <h1 class="mb-8 text-3xl font-bold text-content-primary">
      ${title}
    </h1>

    <div class="space-y-8">
      ${posts.map((post) => (
        PostCard({ post, withActions })
      )).join("")}
    </div>
  `;
}
