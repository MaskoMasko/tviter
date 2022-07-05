import { Text as RNText, TextStyle } from "react-native";
import React from "react";
import { F } from "../style/constants";

interface CTextProps {
  text: string;
  fontSize?: "fsizeS" | "fsizeM" | "fsizeL" | "fsizeXL" | "fsizeXXL";
  bold?: boolean;
  textColor?: string;
  //necu jos family
}

const Text = React.forwardRef<RNText, CTextProps>(
  ({ text, fontSize, bold, textColor }: CTextProps, ref) => {
    function resolveFontSize() {
      if (fontSize === "fsizeS") return F.fsizeS;
      if (fontSize === "fsizeM") return F.fsizeM;
      if (fontSize === "fsizeL") return F.fsizeL;
      if (fontSize === "fsizeXL") return F.fsizeXL;
      return F.fsizeXXL;
    }
    const textStyle: TextStyle = {
      fontSize: fontSize ? resolveFontSize() : F.fsizeL,
      fontWeight: bold ? "bold" : "normal",
      color: textColor ?? "black",
    };
    return (
      <RNText ref={ref} style={textStyle}>
        {text}
      </RNText>
    );
  }
);

export { Text };
