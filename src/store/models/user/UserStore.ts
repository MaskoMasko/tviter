import { AxiosResponse } from "axios";
import { flow, Instance, types } from "mobx-state-tree";
import { axiosInstance } from "~/service/axiosInstance";
import { User } from "./User";

export const UserStore = types
  .model("UserStore", {
    //login, reigster, userToken rabi tu dojti...
    //map je ovode kao object --> set, put, get
    //create, read, update, delete
    me: types.map(User),
    selectedUser: types.map(User),
    users: types.map(User),
  })
  .actions((self) => {
    return {
      readMeData: flow(function* () {
        const res: Record<any, Instance<typeof User>> = yield axiosInstance({
          method: "get",
          url: `/auth/me`,
        });
        return self.me.put(res.data);
      }),
      readUserInfo: flow(function* (userId) {
        self.selectedUser.clear();
        type Res = any;
        const res: Record<Res, Instance<typeof User>> = yield axiosInstance({
          method: "get",
          url: `/user/${userId}`,
        });
        self.selectedUser.put(res.data);
        return res.data as Instance<typeof User>;
      }),
      readAllUsers: flow(function* () {
        const res: AxiosResponse<Instance<typeof User>[]> = yield axiosInstance(
          {
            method: "get",
            url: "/users",
          }
        );

        res.data = res.data.map((person) => {
          return self.users.put(person);
        });
        return res.data;
      }),
    };
  });
