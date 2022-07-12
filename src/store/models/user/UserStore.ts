import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../../../../constants";
import { flow, Instance, types } from "mobx-state-tree";
import { User } from "./User";

export const UserStore = types
  .model("UserStore", {
    //login, reigster, userToken rabi tu dojti...
    //map je ovode kao object --> set, put, get
    //create, read, update, delete
    selectedUser: types.map(User),
    users: types.map(User),
  })
  .actions((self) => {
    return {
      readUserInfo: flow(function* (userId) {
        self.selectedUser.clear();
        type Res = any;
        const res: Record<Res, Instance<typeof User>> = yield axios({
          method: "get",
          url: BASE_URL + `/user/${userId}`,
        });
        self.selectedUser.put(res.data);
        return res.data as Instance<typeof User>;
      }),
      readAllUsers: flow(function* () {
        const res: AxiosResponse<Instance<typeof User>[]> = yield axios({
          method: "get",
          url: BASE_URL + "/users",
        });

        res.data = res.data.map((person) => {
          return self.users.put(person);
        });
        return res.data;
      }),
    };
  });
