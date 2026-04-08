import { PureComponent } from "@/modules/core/component";
import { PostWithAuthorAndComments } from "@/modules/posts/model/Post";
import { PostCard } from "@/modules/posts/view/components/PostCard";

interface Actions {
  createComment: string;
  editPost?: string;
  deletePost?: string;
}

interface Props {
  title: string;
  posts: PostWithAuthorAndComments[];
  actions: Actions;
}

export const PostList: PureComponent<Props> = ({
  title,
  posts,
  actions,
}) => {
  return /*html*/`
    <h1 class="mb-8 text-3xl font-bold text-content-primary">
      ${title}
    </h1>

    <div class="space-y-8">
      ${posts.map((post) => (
        PostCard({ post, actions })
      )).join("")}
    </div>
  `;
}
