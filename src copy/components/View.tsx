import { View as RNView, ViewProps } from "react-native";
import { layoutProps } from "../utils/layoutProps";

const View = layoutProps<ViewProps, RNView>(RNView);
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
