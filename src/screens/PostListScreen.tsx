import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useQuery } from "react-query";
import { CreatePost } from "~/components/posts/CreatePost";
import { PostsList } from "~/components/posts/PostsList";
import { C } from "~/constants";
import useAuth from "../hooks/useAuth";
import { store } from "../store/RootStore";

export const PostsScreen = () => {
  const { meInfo, userToken } = useAuth();
  const [meData, setMeData] = useState<any>(undefined);

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
    const getMeData = async () => {
      const res = await meInfo!();
      if (res) setMeData(res);
      else throw new Error("Invalid call...");
    };
    getMeData();
  }, []);

  useEffect(() => {
    refetchPosts();
  }, [rerenderList]);

  if (
    !meData ||
    isLoading ||
    isIdle ||
    usersQuery.isLoading ||
    usersQuery.isIdle
  ) {
    return (
      <View style={{ flex: 1, backgroundColor: C.lightGreen }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 50 }}>
          Loading...
        </Text>
      </View>
    );
  }

  if (isError || usersQuery.isError)
    return (
      <View style={{ flex: 1, backgroundColor: C.lightGreen }}>
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
