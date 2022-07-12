import { useRoute } from "@react-navigation/native";
import { observer } from "mobx-react";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useQuery } from "react-query";
import { SinglePost } from "../coponents/SinglePost";
import { store } from "../store/RootStore";

export const ProfileScreen = () => {
  return (
    <View>
      <Username />
      <PostListView />
    </View>
  );
};

const Username = observer(function Username() {
  const route = useRoute();
  const params = route.params as { id: number };
  const userId: number = params.id;

  const userQuery = useQuery(["users", "user", userId], () =>
    store.userStore.readUserInfo(userId)
  );

  if (userQuery.isIdle || userQuery.isLoading) return <Text>Loading...</Text>;
  if (userQuery.isError) return <Text>Error :(</Text>;

  return <Text>Username: {JSON.stringify(userQuery.data.email)}</Text>;
});

const PostListView = observer(function PostListView() {
  const route = useRoute();
  const params = route.params as { id: number };
  const userId: number = params.id;

  const postListQuery = useQuery(["posts", "user", userId], () =>
    store.postsStore.readAllPostsFromUser(userId)
  );

  const isIdle = postListQuery.isIdle;
  const isLoading = postListQuery.isLoading;
  const isError = postListQuery.isError;

  if (isIdle || isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>Error :(</Text>;

  return (
    <ScrollView>
      {postListQuery.data.map((post) => {
        return <SinglePost key={post.id} data={{ post }} />;
      })}
    </ScrollView>
  );
});
