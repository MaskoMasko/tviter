import { AxiosResponse } from "axios";
import { flow, Instance, types } from "mobx-state-tree";
// import { axiosInstance } from "~/services/axiosInstance";
import { axiosInstance } from "~/service/axiosInstance";
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
        const res: AxiosResponse<Instance<typeof Post>[]> = yield axiosInstance(
          {
            method: "get",
            url: "/posts",
          }
        );
        res.data = res.data.map((post) => {
          return self.posts.put(post);
        });
        return res.data;
      }),
      readAllPostsFromUser: flow(function* (userId) {
        const res: AxiosResponse<Instance<typeof Post>[]> = yield axiosInstance(
          {
            method: "get",
            url: `/user/${userId}/posts`,
          }
        );

        res.data = res.data.map((post) => {
          return self.userPosts.put(post);
        });
        return res.data;
      }),
      createPost: flow(function* () {
        const res: AxiosResponse<Instance<typeof Post>> = yield axiosInstance({
          method: "post",
          url: `/posts`,
          data: {
            title: "somethingmpoasdo[pasjd[asj[dao[jsd" + new Date(),
            body: "something else",
          },
        });
        return self.posts.put(res.data);
      }),
    };
  });
