import{S as s,A as c,R as r,c as i,a as l,b as d,m as u,H as m,F as p}from"./Footer-Ca_XvyZW.js";const o={SUBMIT:"sign_in::submit"},t=new s({error:null});t.addAction(o.SUBMIT,(e,n)=>{try{c.signIn(e),window.location.href=r.FEED}catch(a){n({error:a.message})}});const x=()=>{const{error:e}=t.getState();return`
    <div class="mx-auto max-w-md">
      <h1 class="mb-2 text-center text-3xl font-bold text-content-primary">
        Welcome back
      </h1>

      <p class="mb-8 text-center text-content-tertiary">
        Sign in to your account
      </p>

      <form
        id="sign-in-form"
        data-submit-action="${o.SUBMIT}"
        class="space-y-5 rounded-xl border border-stroke-primary bg-surface-secondary p-6"
      >
        <div>
          <label
            for="email"
            class="mb-1 block text-sm font-medium text-content-secondary"
          >
            Email
          </label>

          <input
            name="email"
            type="email"
            id="email"
            required
            placeholder="you@example.com"
            class="w-full rounded-lg border border-stroke-secondary bg-surface-tertiary px-4 py-2.5 text-content-primary placeholder-content-tertiary focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
          />
        </div>

        <div>
          <label
            for="password"
            class="mb-1 block text-sm font-medium text-content-secondary"
          >
            Password
          </label>

          <input
            name="password"
            id="password"
            type="password"
            required
            placeholder="••••••••"
            class="w-full rounded-lg border border-stroke-secondary bg-surface-tertiary px-4 py-2.5 text-content-primary placeholder-content-tertiary focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
          />
        </div>

        <div class="flex items-center justify-between">
          <label
            class="flex items-center gap-2 text-sm text-content-secondary"
          >
            <input
              type="checkbox"
              class="rounded border-stroke-secondary bg-surface-tertiary text-accent focus:ring-accent/20"
            />
            Remember me
          </label>

          <a
            href="#"
            class="text-sm text-accent-hover hover:text-accent-light"
          >
            Forgot password?
          </a>
        </div>

        ${e?`
            <p class="rounded-lg bg-destructive/10 px-4 py-2.5 text-sm text-destructive">
              ${e}
            </p>
          `:""}

        <button
          type="submit"
          class="w-full cursor-pointer rounded-lg bg-accent px-4 py-2.5 font-medium text-content-primary hover:bg-accent-hover focus:ring-2 focus:ring-accent/20 focus:outline-none"
        >
          Sign in
        </button>

        <p class="text-center text-sm text-content-tertiary">
          Don't have an account?

          <a
            href="${r.SIGN_UP}"
            class="text-accent-hover hover:text-accent-light"
          >
            Sign up
          </a>
        </p>
      </form>
    </div>
  `};class b extends l{onComponentDidMount(){this.useStore(t),this.useStore(d),this.useStore(u)}getHtml(){return`
      ${m()}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${x()}
      </main>

      ${p()}
    `}}i("root",b);
