import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useQuery } from "react-query";
import { CreatePost } from "../coponents/CreatePost";
import { PostsList } from "../coponents/PostsList";
import useAuth from "../hooks/useAuth";
import { store } from "../store/RootStore";

export const PostsScreen = () => {
  const { meInfo, userToken } = useAuth();
  const [meData, setMeData] = useState<any>(undefined);

  const [rerenderList, setRerenderList] = useState(false);

  const {
    isLoading,
    isError,
    data: posts,
    refetch: refetchPosts,
  } = useQuery(["posts"], () => store.postsStore.readAllPosts());

  const { data: users } = useQuery(["users"], () =>
    store.userStore.readAllUsers()
  );

  useEffect(() => {
    const getMeData = async () => {
      const res = await meInfo!();
      if (res) setMeData(res);
      else throw new Error("Invalid call...");
    };
    getMeData();
    refetchPosts();
  }, [rerenderList]);

  if (!meData || isLoading) {
    return <Text>Loading....</Text>;
  }

  if (isError) return <Text>error while fetching data</Text>;

  return (
    <View>
      <Text style={{ margin: 50 }}>Username: {meData.name}</Text>
      <PostsList data={posts} users={users} rerenderList={rerenderList} />
      <CreatePost setRerenderList={setRerenderList} />
    </View>
  );
};
