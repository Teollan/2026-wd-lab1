import { ReactiveComponentConstructor } from "@/modules/core/component";
import { dispatcher } from "@/modules/core/dispatcher";

function parsePayload(raw: string | undefined): Record<string, unknown> | null {
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch {
    console.error("Failed to parse data-payload:", raw);

    return null;
  }
}

export const createScreen = (
  rootNodeId: string,
  Screen: ReactiveComponentConstructor,
) => {
  const root = document.getElementById(rootNodeId);

  if (!root) {
    console.error(`Failed to get the screen root with id #${rootNodeId}`);

    return;
  }

  new Screen(root);

  root.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const source = event.target.closest("[data-action]");

    if (!(source instanceof HTMLElement)) {
      return;
    }

    const type = source.dataset.action;

    if (!type) {
      return;
    }

    const payload = parsePayload(source.dataset.payload);

    dispatcher.dispatch({ type, payload });
  });

  root.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!(event.target instanceof HTMLFormElement)) {
      return;
    }

    const form = event.target.closest("[data-submit-action]");

    if (!(form instanceof HTMLFormElement)) {
      return;
    }

    const type = form.dataset.submitAction;

    if (!type) {
      return;
    }

    const formPayload = Object.fromEntries(new FormData(form));

    const componentPayload = parsePayload(form.dataset.payload);

    const payload = { ...componentPayload, ...formPayload };

    dispatcher.dispatch({ type, payload });
  });
};
