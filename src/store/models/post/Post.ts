import { types } from "mobx-state-tree";
// import { Like } from "./Like";
import { Comment } from "./Comment";

const { string } = types;

export const Post = types.model("Post", {
  id: types.identifierNumber,
  title: string,
  body: string,
  user_id: types.number,
  created_at: string,
  updated_at: string,
  commments: types.array(Comment),
  //   likes: types.array(Like),
  likes: types.array(types.maybeNull(string)),
});
