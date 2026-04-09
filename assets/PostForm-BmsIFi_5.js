import{S as u,R as p,e as r}from"./Footer-Ca_XvyZW.js";import{P as b}from"./posts.repository-e-mkoYc-.js";const s={CREATE:"new_post::create"},m=new u({});m.addAction(s.CREATE,t=>{b.create({title:t.title,content:t.content}),window.location.href=p.MY_POSTS});const x=({action:t=s.CREATE,title:a="",content:c="",postId:e}={})=>{const o=!!e,i=o?"Edit Post":"New Post",l=o?"Update your post":"Create a new post",d=o?"Save changes":"Publish post",n=e?JSON.stringify({postId:e}):"";return`
    <div class="mx-auto max-w-2xl">
      <h1 class="mb-8 text-3xl font-bold text-content-primary">
        ${i}
      </h1>

      <section
        class="rounded-xl border border-stroke-primary bg-surface-secondary p-6"
      >
        <h2 class="mb-4 text-lg font-semibold text-content-primary">
          ${l}
        </h2>

        <form
          data-submit-action="${t}"
          ${n?`data-payload='${n}'`:""}
          class="space-y-4"
        >
          <div>
            <label
              for="post-title"
              class="mb-1 block text-sm font-medium text-content-secondary"
            >
              Title
            </label>

            <input
              name="title"
              type="text"
              id="post-title"
              required
              value="${r(a)}"
              placeholder="Your post title"
              class="w-full rounded-lg border border-stroke-secondary bg-surface-tertiary px-4 py-2.5 text-content-primary placeholder-content-tertiary focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
            />
          </div>

          <div>
            <label
              for="post-body"
              class="mb-1 block text-sm font-medium text-content-secondary"
            >
              Content
            </label>

            <textarea
              name="content"
              id="post-body"
              rows="4"
              required
              placeholder="Write your thoughts..."
              class="min-h-50 resize-none w-full rounded-lg border border-stroke-secondary bg-surface-tertiary px-4 py-2.5 text-content-primary placeholder-content-tertiary focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
            >${r(c)}</textarea>
          </div>

          <button
            type="submit"
            class="cursor-pointer rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-content-primary hover:bg-accent-hover focus:ring-2 focus:ring-accent/20 focus:outline-none"
          >
            ${d}
          </button>
        </form>
      </section>
    </div>
  `};export{x as P,m as n};
