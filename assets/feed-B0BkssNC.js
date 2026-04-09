import{S as a,c as n,a as m,b as c,m as i,H as p,F as d}from"./Footer-Ca_XvyZW.js";import{P as E}from"./PostList-DZ5RGqRj.js";import{P as s,C as S}from"./posts.repository-e-mkoYc-.js";import"./IconEdit-DeJ4OMVs.js";const l=()=>`
    <div class="rounded-xl border border-stroke-primary bg-surface-secondary p-10 text-center">
      <p class="text-lg text-content-tertiary">
        No posts yet. Be the first to share something!
      </p>
    </div>
  `,r={CREATE_COMMENT:"feed::create_comment"},o=new a({posts:s.getFeed()});o.addAction(r.CREATE_COMMENT,(t,e)=>{S.create({postId:t.postId,content:t.content}),e({posts:s.getFeed()})});class u extends m{onComponentDidMount(){this.useStore(o),this.useStore(c),this.useStore(i)}getHtml(){const{posts:e}=o.getState();return`
      ${p()}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${E({title:"Feed",posts:e,EmptyState:l,actions:{createComment:r.CREATE_COMMENT}})}
      </main>

      ${d()}
    `}}n("root",u);
