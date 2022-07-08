import { colorsTxtTypes } from "../style/constants";
import { colorsToTxt } from "./colorsToTxt";
import { LayoutProps } from "./layoutProps";
import { Text as RNText, TextProps, TextStyle } from "react-native";
import React from "react";

export interface TextLayoutProps {
  textExtraSmall?: boolean;
  textSmall?: boolean;
  textMedium?: boolean;
  textLarge?: boolean;
  textExtraLarge?: boolean;

  bold?: boolean;

  color?: typeof colorsTxtTypes[number];
}

 yyTextLayoutProps & TextProps {}

export const layoutTextProps = React.forwardRef<RNText, NewTextProps>(
  ({ style: passThroughStyle, ...props }, ref) => {
    const style: TextStyle = {};
    return (
      <RNText
        ref={ref}
        
        style={[style, passThroughStyle]}
        {...(props as TextProps)}
      />
    );
  }
);
