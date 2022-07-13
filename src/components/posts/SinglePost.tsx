import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Instance } from "mobx-state-tree";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
import { C } from "~/constants";
import { Post } from "~/store/models/post/Post";
import { capitalizeString } from "~/utils/capitalizeString";
import { getPostTimestamp } from "~/utils/getPostTimestamp";

export const SinglePost = ({
  data,
}: {
  data: {
    post: Instance<typeof Post>;
    user: string | undefined;
  };
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { post, user } = data;
  // safe area za diff mobiltele (bot i top)
  //  const insets = useSafeAreaInsets();

  const [isWholePostBody, setIsWholePostBody] = useState(false);

  //visible num of letters (i think)
  const visibleSubstring = 100;

  return (
    <View style={styles.postContainer}>
      {user && (
        <Text
          onPress={() => navigation.navigate("Profile", { id: post.user_id })}
          style={styles.userName}
        >
          {`@${user}`}
        </Text>
      )}
      <Text style={styles.postTitle}>{capitalizeString(post.title)}</Text>
      {post.body.length <= visibleSubstring || isWholePostBody ? (
        <Text style={styles.postBody}>{post.body}</Text>
      ) : (
        <Text style={styles.postBody}>
          {post.body.substring(0, visibleSubstring)} ...{" "}
          <Text style={styles.link} onPress={() => setIsWholePostBody(true)}>
            read more
          </Text>
        </Text>
      )}
      <Text style={styles.timestamp}>{getPostTimestamp(post.created_at)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    minWidth: "90%",
    width: "90%",
    marginVertical: 10,
    backgroundColor: C.lightGreen,
    borderRadius: 15,
    alignSelf: "center",
    padding: 15,
  },
  userName: { fontStyle: "italic", color: "gray" },
  postTitle: { fontSize: 22, fontWeight: "bold", color: C.fontColorDark },
  postBody: { fontSize: 18, color: C.fontColorDark },
  link: {
    textDecorationLine: "underline",
    fontSize: 14,
    color: "#007936",
  },
  timestamp: { fontStyle: "italic", color: C.fontColorDark },
});
