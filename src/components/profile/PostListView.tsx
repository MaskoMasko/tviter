import { useRoute } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import React from "react";
import { useQuery } from "react-query";
import { C } from "~/constants";
import { store } from "~/store/RootStore";
import { View, Text, ScrollView } from "react-native";
import { SinglePost } from "../posts/SinglePost";
import { Instance } from "mobx-state-tree";
import { Post } from "~/store/models/post/Post";
import { queryClient } from "~/queryClient";

export const PostListView = observer(function PostListView() {
  const route = useRoute();
  const params = route.params as { id: number };
  const userId: number = params.id;

  const postListQuery = useQuery(
    ["posts", "user", userId],
    () => store.postsStore.readAllPostsFromUser(userId),
    {
      initialData: () => {
        return queryClient
          .getQueryData("posts")
          .filter((post: Instance<typeof Post>) => post.user_id === userId)
          .reverse();
      },
    }
  );

  //u teoriji mi sve ovo ne rabi ali ajde
  const isIdle = postListQuery.isIdle;
  const isLoading = postListQuery.isLoading;
  const isError = postListQuery.isError;

  if (isIdle || isLoading)
    return (
      <View style={{ flex: 1, backgroundColor: C.moreYellowThanGreen }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 50 }}>
          Loading...
        </Text>
      </View>
    );
  if (isError)
    return (
      <View style={{ flex: 1, backgroundColor: C.moreYellowThanGreen }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 50 }}>
          Error...
        </Text>
      </View>
    );

  return (
    <ScrollView
      style={{ marginBottom: 30 }}
      contentContainerStyle={{ flexDirection: "column-reverse" }}
    >
      {postListQuery.data.map((post: any) => {
        return <SinglePost key={post.id} data={{ post, user: undefined }} />;
      })}
    </ScrollView>
  );
});
