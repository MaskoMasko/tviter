import { types } from "mobx-state-tree";
import { PostStore } from "./models/post/PostStore";
import { UserStore } from "./models/user/UserStore";

export const RootStore = types.model("RootStore", {
  userStore: types.optional(UserStore, {}),
  postsStore: types.optional(PostStore, {}),
});
export const store = RootStore.create(undefined);
