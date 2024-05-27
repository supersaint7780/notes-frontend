import { create } from "zustand";
import { createNoteSlice } from "./noteSlice";
import { createAuthSlice } from "./authSlice";

export const useBoundStore = create((...a) => ({
  ...createNoteSlice(...a),
  ...createAuthSlice(...a),
}));
