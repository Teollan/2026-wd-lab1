import { signUpStore, SIGN_UP_ACTION } from "@/modules/auth/data/signUp.store";
import { ROUTES } from "@/utility/routes";

export const SignUpForm = () => {
  const { error } = signUpStore.getState();
  return /*html*/`
    <div class="mx-auto max-w-md">
      <h1 class="mb-2 text-center text-3xl font-bold text-content-primary">
        Create an account
      </h1>

      <p class="mb-8 text-center text-content-tertiary">
        Join BlogSpace today
      </p>

      <form
        id="sign-up-form"
        data-submit-action="${SIGN_UP_ACTION.SUBMIT}"
        class="space-y-5 rounded-xl border border-stroke-primary bg-surface-secondary p-6"
      >
        <div>
          <label
            for="name"
            class="mb-1 block text-sm font-medium text-content-secondary"
          >
            Username
          </label>

          <input
            name="username"
            id="name"
            type="text"
            required
            placeholder="John Doe"
            class="w-full rounded-lg border border-stroke-secondary bg-surface-tertiary px-4 py-2.5 text-content-primary placeholder-content-tertiary focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
          />
        </div>

        <div>
          <label
            for="email"
            class="mb-1 block text-sm font-medium text-content-secondary"
          >
            Email
          </label>

          <input
            name="email"
            id="email"
            type="email"
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

        <fieldset>
          <legend class="mb-2 text-sm font-medium text-content-secondary">
            Gender
          </legend>

          <div class="flex gap-6">
            <label
              class="flex items-center gap-2 text-sm text-content-secondary"
            >
              <input
                type="radio"
                name="gender"
                required
                value="male"
                class="border-stroke-secondary bg-surface-tertiary text-accent focus:ring-accent/20"
              />

              Male
            </label>

            <label
              class="flex items-center gap-2 text-sm text-content-secondary"
            >
              <input
                type="radio"
                name="gender"
                required
                value="female"
                class="border-stroke-secondary bg-surface-tertiary text-accent focus:ring-accent/20"
              />

              Female
            </label>

            <label
              class="flex items-center gap-2 text-sm text-content-secondary"
            >
              <input
                type="radio"
                name="gender"
                required
                value="other"
                class="border-stroke-secondary bg-surface-tertiary text-accent focus:ring-accent/20"
              />

              Other
            </label>
          </div>
        </fieldset>

        <div>
          <label
            for="date-of-birth"
            class="mb-1 block text-sm font-medium text-content-secondary"
          >
            Date of birth
          </label>

          <input
            name="dateOfBirth"
            id="date-of-birth"
            type="date"
            placeholder="You date of birth"
            required
            class="w-full rounded-lg border border-stroke-secondary bg-surface-tertiary px-4 py-2.5 text-content-primary focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
          />
        </div>

        <div>
          <label
            for="bio"
            class="mb-1 block text-sm font-medium text-content-secondary"
          >
            Bio
          </label>

          <textarea
            name="bio"
            id="bio"
            rows="3"
            required
            placeholder="Tell us about yourself..."
            class="w-full resize-none rounded-lg border border-stroke-secondary bg-surface-tertiary px-4 py-2.5 text-content-primary placeholder-content-tertiary focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
          ></textarea>
        </div>

        ${error
          ? /*html*/`
            <p class="rounded-lg bg-destructive/10 px-4 py-2.5 text-sm text-destructive">
              ${error}
            </p>
          `
          : ""
        }

        <button
          type="submit"
          class="w-full cursor-pointer rounded-lg bg-accent px-4 py-2.5 font-medium text-content-primary hover:bg-accent-hover focus:ring-2 focus:ring-accent/20 focus:outline-none"
        >
          Create account
        </button>

        <p class="text-center text-sm text-content-tertiary">
          Already have an account?

          <a
            href="${ROUTES.SIGN_IN}"
            class="text-accent-hover hover:text-accent-light"
          >
            Sign in
          </a>
        </p>
      </form>
    </div>
  `;
}
