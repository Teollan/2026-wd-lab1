import{e as r,d as s}from"./Footer-Ca_XvyZW.js";import{I as c}from"./IconEdit-DeJ4OMVs.js";const i=()=>`
  <svg
    class="h-6 w-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
`,d=({postId:t,editAction:e,deleteAction:n})=>`
    <div class="flex items-center gap-2">
      <button
        data-action="${e}"
        data-payload='${JSON.stringify({postId:t})}'
        class="text-content-tertiary hover:text-accent-hover"
      >
        ${c()}
      </button>

      <button
        data-action="${n}"
        data-payload='${JSON.stringify({postId:t})}'
        class="text-content-tertiary hover:text-destructive"
      >
        ${i()}
      </button>
    </div>
  `,l=({comment:t})=>`
    <div class="rounded-lg bg-surface-tertiary p-3">
      <div class="mb-1 flex items-center gap-2">
        <span class="text-sm font-medium text-content-primary">
          ${r(t.author.username)}
        </span>

        <span class="text-xs text-content-tertiary">
          ${m(t.createdAt)}
        </span>
      </div>

      <p class="text-sm text-content-secondary">
        ${r(t.content)}
      </p>
    </div>
  `;function m(t){return t.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}const u=({postId:t,comments:e,createCommentAction:n})=>`
    <div class="border-t border-stroke-primary pt-4">
      <h3 class="mb-3 text-sm font-semibold text-content-secondary">
        Comments (${e.length})
      </h3>

      <form
        data-submit-action="${n}"
        data-payload='${JSON.stringify({postId:t})}'
        class="mb-4 flex gap-3"
      >
        <textarea
          name="content"
          rows="1"
          placeholder="Add a comment..."
          class="min-h-9 resize-none flex-1 content-end rounded-lg border border-stroke-secondary bg-surface-tertiary px-4 py-1.5 text-sm field-sizing-content text-content-primary placeholder-content-tertiary focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
        ></textarea>

        <button
          type="submit"
          class="cursor-pointer self-end rounded-lg bg-accent px-4 py-2 text-sm font-medium text-content-primary hover:bg-accent-hover focus:ring-2 focus:ring-accent/20 focus:outline-none"
        >
          Post
        </button>
      </form>

      ${e.length>0?`
          <div class="space-y-3">
            ${e.map(o=>l({comment:o})).join("")}
          </div>
        `:`
          <p class="text-sm text-content-tertiary">
            No comments yet. Be the first to share your thoughts!
          </p>
        `}
    </div>
  `,x=({post:t,actions:e})=>{const n=!!(e.editPost&&e.deletePost);return`
    <article class="rounded-xl border border-stroke-primary bg-surface-secondary p-6">
      <div class="mb-3 flex items-center ${n?"justify-between":"gap-3"}">
        <div class="flex items-center gap-3">
          ${s({user:t.author})}

          <div>
            <p class="text-sm font-medium text-content-primary">
              ${r(t.author.username)}
            </p>

            <p class="text-xs text-content-tertiary">
              ${p(t.createdAt)}
            </p>
          </div>
        </div>

        ${n?d({postId:t.id,editAction:e.editPost,deleteAction:e.deletePost}):""}
      </div>

      <h2 class="mb-2 text-xl font-semibold text-content-primary">
        ${r(t.title)}
      </h2>

      <p class="mb-4 text-content-secondary">
        ${r(t.content)}
      </p>

      ${u({postId:t.id,comments:t.comments,createCommentAction:e.createComment})}
    </article>
  `};function p(t){return t.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}const h=({title:t,posts:e,actions:n,EmptyState:o})=>e.length?`
    <h1 class="mb-8 text-3xl font-bold text-content-primary">
      ${t}
    </h1>

    <div class="space-y-8">
      ${e.map(a=>x({post:a,actions:n})).join("")}
    </div>
  `:`
      <h1 class="mb-8 text-3xl font-bold text-content-primary">
        ${t}
      </h1>

      ${o()}
    `;export{h as P};
