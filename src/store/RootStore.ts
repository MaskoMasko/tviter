import axios from "axios";
import { flow, types } from "mobx-state-tree";
import { BASE_URL } from "../../constants";
import { User } from "./models/user/User";

export const RootStore = types
  .model("RootStore", {
    users: types.map(User),
  })
  .actions((self) => {
    // const getAllUsers = flow(function* (userToken) {
    //   try {
    //     const res = yield axios({
    //       method: "get",
    //       url: BASE_URL + "/users",
    //       headers: { Authorization: `Bearer ${userToken}` },
    //     });
    //     self.users.put(res.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   return self.users;
    // });
    // return { getAllUsers };
    return {
      getAllUsers: flow(function* (userToken) {
        try {
          const res = yield axios({
            method: "get",
            url: BASE_URL + "/users",
            headers: { Authorization: `Bearer ${userToken}` },
          });
          self.users.put(res.data);
          return res.data;
        } catch (error) {
          return error;
        }
      }),
    };
  });

export const store = RootStore.create({
  users: {},
});
