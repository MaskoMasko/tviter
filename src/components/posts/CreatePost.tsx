import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { store } from "~/store/RootStore";
import { C } from "../../constants";

export const CreatePost = ({ setRerenderList }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    <View style={{ flex: 1, backgroundColor: C.lightGreen }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", margin: 50 }}>
        Loading...
      </Text>
    </View>;
  }

  return (
    <View style={styles.centerAll}>
      <TouchableOpacity
        style={styles.showModalBtn}
        activeOpacity={0.5}
        onPress={() => setShowModal(true)}
      >
        <Text style={styles.showModalBtnText}>Add post</Text>
      </TouchableOpacity>
      <Modal
        isVisible={showModal}
        animationIn={"slideInUp"}
        animationInTiming={750}
        animationOutTiming={750}
        style={styles.centerAll}
      >
        <View style={styles.createPostContainer}>
          <View style={styles.createPostForm}>
            <Text style={styles.createPostText}>Title: </Text>
            <TextInput
              style={styles.createPostTextInput}
              placeholder="Enter Title"
            />
          </View>
          <Text style={styles.createPostText}>Description: </Text>
          <TextInput
            style={[
              { minWidth: "100%", marginVertical: 10 },
              styles.createPostTextInput,
            ]}
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
              style={styles.createPostSuccessBtn}
              onPress={async () => {
                setShowModal(false);
                setIsLoading(true);
                await store.postsStore.createPost();
                setRerenderList((prevVal: boolean) => !prevVal);
                setIsLoading(false);
              }}
              activeOpacity={0.5}
            >
              <Text style={styles.btnText}>Create Post</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => setShowModal(false)}
              style={styles.createPostCancelBtn}
            >
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  showModalBtn: {
    backgroundColor: C.darkGreen,
    width: "80%",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    marginVertical: 10,
  },
  showModalBtnText: {
    color: "whitesmoke",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  centerAll: {
    justifyContent: "center",
    alignItems: "center",
  },
  createPostContainer: {
    width: "80%",
    backgroundColor: C.moreYellowThanGreen,
    borderRadius: 15,
    padding: 20,
  },
  createPostForm: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  createPostTextInput: {
    backgroundColor: "whitesmoke",
    paddingLeft: 10,
    padding: 5,
    borderRadius: 5,
    width: "70%",
  },
  createPostText: { fontSize: 20, fontWeight: "bold" },
  createPostSuccessBtn: {
    backgroundColor: C.darkGreen,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
  },
  createPostCancelBtn: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
  },
  btnText: { color: "white", fontWeight: "bold" },
});
