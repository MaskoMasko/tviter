import { types } from "mobx-state-tree";

const { string } = types;

export const User = types.model("User", {
  id: types.identifierNumber,
  name: string,
  email: string,
  email_verified_at: types.maybeNull(string),
  created_at: string,
  updated_at: string,
});
