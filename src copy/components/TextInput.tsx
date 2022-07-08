import React from "react";
import { TextInput as RNTextInput, TextInputProps } from "react-native";

interface CTextInputProps extends TextInputProps {}

const TextInput = React.forwardRef<RNTextInput, CTextInputProps>(
  ({ style, ...defProps }, ref) => {
    //style samo za tekst kako se upise
    return (
      <RNTextInput
        ref={ref}
        style={[{ paddingLeft: 10 }, style]}
        {...defProps}
      />
    );
  }
);
export { TextInput };
