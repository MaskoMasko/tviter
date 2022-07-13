import axios from "axios";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { BASE_URL, C } from "../../constants";
import useAuth from "../../hooks/useAuth";

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
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        style={{
          backgroundColor: C.darkGreen,
          width: "80%",
          height: 50,
          borderRadius: 5,
          justifyContent: "center",
          marginVertical: 10,
        }}
        activeOpacity={0.5}
        onPress={() => setShowModal(true)}
      >
        <Text
          style={{
            color: "whitesmoke",
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Add post
        </Text>
      </TouchableOpacity>
      <Modal
        isVisible={showModal}
        animationIn={"slideInUp"}
        animationInTiming={750}
        animationOutTiming={750}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <View
          style={{
            width: "80%",
            backgroundColor: C.moreYellowThanGreen,
            borderRadius: 15,
            padding: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Title: </Text>
            <TextInput
              style={{
                backgroundColor: "whitesmoke",
                paddingLeft: 10,
                padding: 5,
                borderRadius: 5,
                width: "70%",
              }}
              placeholder="Enter Title"
            />
          </View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Description:{" "}
          </Text>
          <TextInput
            style={{
              backgroundColor: "whitesmoke",
              paddingLeft: 10,
              padding: 5,
              borderRadius: 5,
              marginVertical: 15,
            }}
            placeholder="Enter Description"
          />
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: C.darkGreen,
                borderRadius: 5,
                padding: 10,
                marginHorizontal: 10,
              }}
              onPress={() => {
                setShowModal(false);
                setRerenderList((prevVal: boolean) => !prevVal);
                addPost();
              }}
              activeOpacity={0.5}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Create Post
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => setShowModal(false)}
              style={{
                backgroundColor: "red",
                borderRadius: 5,
                padding: 10,
                marginHorizontal: 10,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
