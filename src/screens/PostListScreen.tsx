import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useQuery } from "react-query";
import { CreatePost } from "~/components/posts/CreatePost";
import { PostsList } from "~/components/posts/PostsList";
import { store } from "../store/RootStore";

export const PostsScreen = () => {
  const [rerenderList, setRerenderList] = useState(false);

  //bottom inset za ios
  const insetsBottom = useSafeAreaInsets().bottom;

  const {
    isIdle,
    isLoading,
    isError,
    data: posts,
    refetch: refetchPosts,
  } = useQuery(["posts"], () => store.postsStore.readAllPosts());

  const usersQuery = useQuery(["users"], () => store.userStore.readAllUsers());

  useEffect(() => {
    store.userStore.readMeData();
  }, []);

  useEffect(() => {
    refetchPosts();
  }, [rerenderList]);

  if (isLoading || isIdle || usersQuery.isLoading || usersQuery.isIdle) {
    return (
      <View style={{ flex: 1, backgroundColor: "#f2ffe6" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 50 }}>
          Loading...
        </Text>
      </View>
    );
  }

  if (isError || usersQuery.isError)
    return (
      <View style={{ flex: 1, backgroundColor: "#f2ffe6" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 50 }}>
          Error...
        </Text>
      </View>
    );

  const users = usersQuery.data;

  return (
    <View
      style={{
        backgroundColor: "#f2ffe6",
        flex: 1,
      }}
    >
      <PostsList
        data={posts.reverse()}
        users={users}
        rerenderList={rerenderList}
      />
      <CreatePost setRerenderList={setRerenderList} />
      <View style={{ height: insetsBottom }}></View>
    </View>
  );
};
