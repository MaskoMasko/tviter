import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { useQuery } from "react-query";
import { PostsList } from "../coponents/PostsList";
import useAuth, { fetchAllPosts } from "../hooks/useAuth";

export const PostsScreen = () => {
  const { meInfo, userToken } = useAuth();
  const [meData, setMeData] = useState<any>(undefined);
  const navigation = useNavigation() as any;

  const { isLoading, isError, data } = useQuery(["posts"], () =>
    fetchAllPosts(userToken!)
  );

  //post izgled
  // "body": "Blanditiis assumenda sequi nemo recusandae. Vel totam dolore maiores mollitia velit. In maiores et id et enim similique. Assumenda quae at sequi corporis mollitia et.",
  // "comments": Array [],
  // "created_at": "2022-07-11T07:51:43.000000Z",
  // "id": 13,
  // "likes": Array [],
  // "title": "Et adipisci quaerat natus architecto saepe dolor ducimus.",
  // "updated_at": "2022-07-11T07:51:43.000000Z",
  // "user_id": 3,

  useEffect(() => {
    const getMeData = async () => {
      const res = await meInfo!();
      if (res) setMeData(res);
      else throw new Error("Invalid call...");
    };
    getMeData();
  }, []);
  if (!meData || isLoading) {
    return <Text>Loading....</Text>;
  }
  if (isError) return <Text>error while fetching data</Text>;
  console.log(data);
  return (
    <View>
      <Text style={{ margin: 50 }}>Username: {meData.name}</Text>
      <Button
        title="go to profgiekl"
        onPress={() => navigation.navigate("Profile")}
      />
      <PostsList data={data} />
    </View>
  );
};
