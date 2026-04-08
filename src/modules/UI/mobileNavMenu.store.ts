import { Store } from "@/modules/core/store";

interface MobileNavMenuState {
  isOpen: boolean;
}

export const MOBILE_NAV_MENU_ACTION = {
  TOGGLE: "mobile_nav_menu::toggle",
};

export const mobileNavMenuStore = new Store<MobileNavMenuState>({
  isOpen: false,
});

mobileNavMenuStore.addAction(MOBILE_NAV_MENU_ACTION.TOGGLE, (_, set, get) => {
  set({ isOpen: !get().isOpen });
});
