import React, { useRef } from "react";
import {
  View as RNView,
  TouchableOpacity as RNTouchableOpacity,
  TextInput,
} from "react-native";
import { M, P, S } from "../style/constants";
import { layoutProps } from "../utils/layoutProps";

const View = layoutProps(RNView);
// const TouchableOpacity = layoutProps(RNTouchableOpacity);

// const MyTextInput = layoutProps(TextInput);

// type MyTextInput = TextInput;

// function MyComp() {
//   const ref = useRef<MyTextInput | null>(null);

//   if (ref.current) {

//     ref.current.focus()
//   }

//   return (
//     <View style={{}}>
//       <MyTextInput ref={ref as any} style={{}}></MyTextInput>
//     </View>
//   );
// }

export { View };
