import { create } from "zustand";

export const useCommentStore = create((set) => ({
  comments: [],
  addComments: (comment) =>
    set((state) => ({ comments: [...state.comments, comment] })),

  deleteComments: (id) =>
    set((state) => ({
      comments: state.comments.filter((comment) => comment.id !== id),
    })),
}));
