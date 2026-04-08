import { AUTH_ACTION } from "@/modules/auth/data/auth.store";
import { PureComponent } from "@/modules/core/component";

export const SignInForm: PureComponent = () => {
  return /*html*/`
    <div class="mx-auto max-w-md">
      <h1 class="mb-2 text-center text-3xl font-bold text-content-primary">
        Welcome back
      </h1>

      <p class="mb-8 text-center text-content-tertiary">
        Sign in to your account
      </p>

      <form
        id="sign-in-form"
        data-submit-action="${AUTH_ACTION.SIGN_IN}"
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

        <button
          type="submit"
          class="w-full cursor-pointer rounded-lg bg-accent px-4 py-2.5 font-medium text-content-primary hover:bg-accent-hover focus:ring-2 focus:ring-accent/20 focus:outline-none"
        >
          Sign in
        </button>

        <p class="text-center text-sm text-content-tertiary">
          Don't have an account?

          <a
            href="sign-up"
            class="text-accent-hover hover:text-accent-light"
          >
            Sign up
          </a>
        </p>
      </form>
    </div>
  `;
}
