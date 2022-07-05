import React from "react";
import { ScrollView as RNScrollView, ScrollViewProps } from "react-native";

interface CScrollViewProps extends ScrollViewProps {
  children: React.ReactNode;
  width: number | string;
  height: number | string;
}

const ScrollView = React.forwardRef<RNScrollView, CScrollViewProps>(
  ({ children, height, width, style, ...props }, ref) => {
    const scrollViewStyle: ScrollViewProps["style"] = {
      maxHeight: height,
      width,
    };
    return (
      <RNScrollView
        ref={ref}
        style={[scrollViewStyle, style]}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </RNScrollView>
    );
  }
);

export { ScrollView };
