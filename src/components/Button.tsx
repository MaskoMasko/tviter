import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { C, F, M, P, S } from "../style/constants";

interface CButtonProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  colorTheme: "danger" | "success";
  title?: string;
  padding?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  centerText?: boolean;
  hPadding?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  // onPressPayload?: any;
  margin?: "marS" | "marM" | "marL" | "marXL" | "marXXL";
  height?: number | string;
  width?: number | string;
}

//jos rabi handle on press funciton
const Button = React.forwardRef<TouchableOpacity, CButtonProps>(
  (
    {
      children,
      title,
      colorTheme,
      padding,
      hPadding,
      centerText,
      onPress,
      margin,
      height,
      width,
    }: // onPressPayload,
    CButtonProps,
    ref
  ) => {
    // let backgroundColor = "red";
    // if (bgcolor) backgroundColor = "blue";

    function resolvePadding() {
      if (padding === "padS") return P.padS;
      if (padding === "padM") return P.padM;
      if (padding === "padL") return P.padL;
      if (padding === "padXL") return P.padXL;
      return P.padXXL;
    }

    function resolveMargin() {
      if (margin === "marS") return M.marS;
      if (margin === "marM") return M.marM;
      if (margin === "marL") return M.marL;
      if (margin === "marXL") return M.marXL;
      return M.marXXL;
    }

    function resolveColorTheme() {
      if (colorTheme === "danger") return C.danger;
      return C.success;
    }

    const buttonPadding = padding && resolvePadding();
    const buttonMargin = margin && resolveMargin();
    const buttonColorTheme = resolveColorTheme();
    const buttonHeight =
      typeof height === "number" || typeof height === "string";
    const buttonWidth = typeof width === "number" || typeof width === "string";

    const buttonStyle: TouchableOpacityProps["style"] = {
      margin: buttonMargin,
      padding: buttonPadding,
      backgroundColor: buttonColorTheme,
      borderRadius: 10,
      paddingHorizontal: hPadding && resolvePadding(),
      ...(centerText && S.centerAll),
      height: buttonHeight ? height : undefined,
      width: buttonWidth ? width : undefined,
    };

    return (
      <TouchableOpacity
        activeOpacity={0.5}
        ref={ref}
        style={buttonStyle}
        onPress={onPress}
      >
        {typeof title === "string" ? (
          <Text style={{ fontSize: F.fsizeS, color: "white" }}>{title}</Text>
        ) : (
          <>{children}</>
        )}
      </TouchableOpacity>
    );
  }
);

export { Button };
