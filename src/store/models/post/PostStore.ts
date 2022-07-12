import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../../../../constants";
import { flow, Instance, types } from "mobx-state-tree";
import { Post } from "./Post";

export const PostStore = types
  .model("PostStore", {
    selectedPost: types.map(Post),
    posts: types.map(Post),
    userPosts: types.map(Post),
  })
  .actions((self) => {
    return {
      readAllPosts: flow(function* () {
        const res: AxiosResponse<Instance<typeof Post>[]> = yield axios({
          method: "get",
          url: BASE_URL + "/posts",
        });

        res.data = res.data.map((post) => {
          return self.posts.put(post);
        });
        return res.data;
      }),
      readAllPostsFromUser: flow(function* (userId) {
        const res: AxiosResponse<Instance<typeof Post>[]> = yield axios({
          method: "get",
          url: BASE_URL + `/user/${userId}/posts`,
        });

        res.data = res.data.map((post) => {
          return self.userPosts.put(post);
        });
        return res.data;
      }),
    };
  });
