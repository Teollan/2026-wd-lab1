import{R as a,S as n,c as i,a as c,b as p,m,H as d,F as E}from"./Footer-Ca_XvyZW.js";import{P as S}from"./PostList-DZ5RGqRj.js";import{P as r,C as T}from"./posts.repository-e-mkoYc-.js";import"./IconEdit-DeJ4OMVs.js";const y=()=>`
    <div class="rounded-xl border border-stroke-primary bg-surface-secondary p-10 text-center">
      <p class="text-lg text-content-tertiary">
        You haven't posted anything yet.
        <a
          href="${a.NEW_POST}"
          class="text-accent-hover hover:text-accent-light"
        >
          Create your first post!
        </a>
      </p>
    </div>
  `,e={CREATE_COMMENT:"my_posts::create_comment",EDIT_POST:"my_posts::edit_post",DELETE_POST:"my_posts::delete_post"},s=new n({posts:r.getMyPosts()});s.addAction(e.CREATE_COMMENT,(t,o)=>{T.create({postId:t.postId,content:t.content}),o({posts:r.getMyPosts()})});s.addAction(e.EDIT_POST,t=>{window.location.href=a.EDIT_POST+`?id=${t.postId}`});s.addAction(e.DELETE_POST,(t,o)=>{confirm("Are you sure you want to delete this post?")&&(r.delete(t.postId),o({posts:r.getMyPosts()}))});class P extends c{onComponentDidMount(){this.useStore(s),this.useStore(p),this.useStore(m)}getHtml(){const{posts:o}=s.getState();return`
      ${d()}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${S({title:"My Posts",posts:o,EmptyState:y,actions:{createComment:e.CREATE_COMMENT,editPost:e.EDIT_POST,deletePost:e.DELETE_POST}})}
      </main>

      ${E()}
    `}}i("root",P);
