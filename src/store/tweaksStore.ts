import { create } from "zustand";

import { TweakValues } from "@/type/commen.types";

const DEFAULTS: TweakValues = {
  palette: "forest",
  typography: "editorial",
  hero: "editorial",
  shopUnlocked: false,
  audienceCurrent: 1840,
  audienceTarget: 5000,
  dark: false,
  density: "regular",
};

interface TweaksState {
  t: TweakValues;
  setTweak: <K extends keyof TweakValues>(
    keyOrEdits: K | Partial<TweakValues>,
    val?: TweakValues[K],
  ) => void;
}

const tweaksStore = create<TweaksState>((set) => ({
  t: DEFAULTS,
  setTweak: (keyOrEdits, val) => {
    const edits =
      typeof keyOrEdits === "object" && keyOrEdits !== null
        ? (keyOrEdits as Partial<TweakValues>)
        : ({ [keyOrEdits as keyof TweakValues]: val } as Partial<TweakValues>);

    set((s) => ({ t: { ...s.t, ...edits } }));

    if (typeof window !== "undefined") {
      try {
        window.parent.postMessage({ type: "__edit_mode_set_keys", edits }, "*");
      } catch {
        /* no-op */
      }
      window.dispatchEvent(new CustomEvent("tweakchange", { detail: edits }));
    }
  },
}));

export default tweaksStore;
