import axios from "axios";
import { BASE_URL } from "../../constants";
import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  Modal,
  View,
  TextInput,
  Button,
} from "react-native";
import useAuth from "../hooks/useAuth";

export const CreatePost = ({ setRerenderList }: any) => {
  const [showModal, setShowModal] = useState(false);
  const { userToken } = useAuth();

  const addPost = async () => {
    try {
      const res = await axios({
        method: "post",
        url: BASE_URL + "/posts",
        data: {
          title: "something" + new Date(),
          body: "something else",
        },
        headers: { Authorization: `Bearer ${userToken}` },
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TouchableOpacity
        style={{ backgroundColor: "lightblue", width: "80%", height: 50 }}
        activeOpacity={0.5}
        onPress={() => setShowModal(true)}
      >
        <Text>Add post</Text>
      </TouchableOpacity>
      <Modal animationType="slide" visible={showModal}>
        <View style={{ flexDirection: "row" }}>
          <Text>Title: </Text>
          <TextInput placeholder="Enter Title" />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text>Description: </Text>
          <TextInput placeholder="Enter Description" />
        </View>
        <Button
          title="Create Post"
          onPress={() => {
            setShowModal(false);
            setRerenderList((prevVal: any) => !prevVal);
            addPost();
          }}
        />
      </Modal>
    </>
  );
};
