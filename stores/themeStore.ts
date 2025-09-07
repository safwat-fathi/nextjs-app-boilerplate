import { create } from "zustand";
import { getCookieAction } from "@/app/[locale]/actions/cookie-store.action";
import { COOKIE_NAMES } from "@/lib/constants";

interface ThemeState {
  theme: string | undefined;
  fetchTheme: () => Promise<void>;
  setTheme: (theme: string | undefined) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: undefined,
  fetchTheme: async () => {
    try {
      const themeValue = await getCookieAction(COOKIE_NAMES.THEME);
      set({ theme: themeValue });
    } catch (error) {
      console.error("Failed to fetch theme cookie:", error);
      set({ theme: undefined });
    }
  },
  setTheme: (theme) => set({ theme }),
}));
