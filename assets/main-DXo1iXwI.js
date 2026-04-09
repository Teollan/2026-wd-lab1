import{R as s,c as a,a as c,b as n,m as i,H as l,F as d}from"./Footer-Ca_XvyZW.js";import{I as m}from"./IconEdit-DeJ4OMVs.js";const r=({Icon:e,title:t,body:o})=>`
    <div class="rounded-xl border border-stroke-primary bg-surface-secondary p-6">
      <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-hover">
        ${e()}
      </div>

      <h3 class="mb-2 font-semibold text-content-primary">
        ${t}
      </h3>

      <p class="text-sm text-content-secondary">
        ${o}
      </p>
    </div>
  `,u=()=>`
  <svg
    class="h-5 w-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
`,h=()=>`
  <svg
    class="h-5 w-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
`,g=()=>`
    <section>
      <h2 class="mb-8 text-center text-2xl font-bold text-content-primary">
        Features
      </h2>

      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        ${r({Icon:m,title:"Write Posts",body:"Create and publish blog posts with a clean, distraction-free editor."})}

        ${r({Icon:u,title:"Comments",body:"Engage with your readers through a threaded comment system on every post."})}

        ${r({Icon:h,title:"User Profiles",body:"Personalize your profile, manage your posts, and track your activity."})}
      </div>
    </section>
  `,p=({isAuthenticated:e})=>`
    <section class="mb-16 text-center">
      <img
        src="/2026-wd-lab1/images/logo.svg"
        alt="BlogSpace logo"
        class="mx-auto mb-6 h-20 w-20"
      />

      <h1 class="mb-4 text-4xl font-bold text-content-primary md:text-5xl">
        BlogSpace
      </h1>

      <p class="mx-auto max-w-2xl text-lg text-content-secondary">
        A modern blogging platform where you can share your thoughts, engage
        with readers through comments, and build a community around your
        ideas.
      </p>

      <div class="mt-8 flex justify-center gap-4">
        ${e?`
            <a
              href="${s.FEED}"
              class="rounded-lg bg-accent px-6 py-2.5 font-medium text-content-primary hover:bg-accent-hover"
            >
              Browse the feed
            </a>
          `:`
            <a
              href="${s.SIGN_UP}"
              class="rounded-lg bg-accent px-6 py-2.5 font-medium text-content-primary hover:bg-accent-hover"
            >
              Get started
            </a>
          `}
      </div>
    </section>
  `;class x extends c{onComponentDidMount(){this.useStore(n),this.useStore(i)}getHtml(){const{user:t}=n.getState(),o=!!t;return`
      ${l()}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${p({isAuthenticated:o})}

        ${g()}
      </main>

      ${d()}
    `}}a("root",x);
