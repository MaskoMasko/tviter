import { types } from "mobx-state-tree";

const { string, number } = types;

export const Comment = types.model("Comment", {
  id: types.identifierNumber,
  user_id: number,
  post_id: number,
  created_at: string,
  updated_at: string,
  body: string,
});
