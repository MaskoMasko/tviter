import { useRoute } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import React from "react";
import { useQuery } from "react-query";
import { C } from "~/constants";
import { store } from "~/store/RootStore";
import { View, Text, ScrollView } from "react-native";
import { SinglePost } from "../posts/SinglePost";

export const PostListView = observer(function PostListView() {
  const route = useRoute();
  const params = route.params as { id: number };
  const userId: number = params.id;

  const postListQuery = useQuery(["posts", "user", userId], () =>
    store.postsStore.readAllPostsFromUser(userId)
  );

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
    <ScrollView style={{ marginBottom: 30 }}>
      {postListQuery.data.map((post) => {
        return <SinglePost key={post.id} data={{ post, user: undefined }} />;
      })}
    </ScrollView>
  );
});
