import React from "react";
import { View as RNView, ViewStyle } from "react-native";
import { M, P, S } from "../style/constants";

export interface CViewProps {
  width: number;
  height: number;
  backgroundColor: string;

  //by default diaply flex
  //uglavnom more tu jos space around, itd.
  centerAll?: boolean;
  hCenterRight?: boolean;
  hCenterLeft?: boolean;
  vCenterRight?: boolean;
  vCenterLeft?: boolean;
  spaceBetween?: boolean;

  //dir more biti row, col, row-rev, col-rev
  fDir?: boolean;

  //padding/margin
  padding?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  hPadding?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  vPadding?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  bPadding?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  lPadding?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  rPadding?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  tPadding?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  margin?: "marS" | "marM" | "marL" | "marXL" | "marXXL";
  hMargin?: "marS" | "marM" | "marL" | "marXL" | "marXXL";
  vMargin?: "marS" | "marM" | "marL" | "marXL" | "marXXL";
  bMargin?: "marS" | "marM" | "marL" | "marXL" | "marXXL";
  lMargin?: "marS" | "marM" | "marL" | "marXL" | "marXXL";
  rMargin?: "marS" | "marM" | "marL" | "marXL" | "marXXL";
  tMargin?: "marS" | "marM" | "marL" | "marXL" | "marXXL";

  //absolute pos
  //center
  absCenterAll?: boolean;
  absCenterTop?: boolean;
  absCenterBottom?: boolean;
  absCenterLeft?: boolean;
  absCenterRight?: boolean;

  //corners
  absTopLeft?: boolean;
  absTopRight?: boolean;
  absBottomLeft?: boolean;
  absBottomRight?: boolean;

  //i jos custom styles
  customStyle?: ViewStyle;
  children?: React.ReactNode;
}

const View = React.forwardRef<RNView, CViewProps>(
  (
    {
      children,
      centerAll,
      fDir,
      padding,
      margin,
      absCenterAll,
      customStyle,
      height,
      backgroundColor,
      width,
      spaceBetween,
    },
    ref
  ) => {
    //samo ovi props zbog jednostavnosti
    function resolveAlignment() {
      if (centerAll) return S.centerAll;
    }
    //padding
    function resolvePadding() {
      if (padding === "padS") return P.padS;
      if (padding === "padM") return P.padM;
      if (padding === "padL") return P.padL;
      if (padding === "padXL") return P.padXL;
      return P.padXXL;
    }
    //margin
    function resolveMargin() {
      if (margin === "marS") return M.marS;
      if (margin === "marM") return M.marM;
      if (margin === "marL") return M.marL;
      if (margin === "marXL") return M.marXL;
      return M.marXXL;
    }
    function resolveAbsPos() {
      if (absCenterAll) return S.absCenterAll;
    }

    const viewPadding = padding && resolvePadding();
    const viewMargin = margin && resolveMargin();
    const viewAlignment = centerAll && resolveAlignment();
    const viewIsAbs = absCenterAll && resolveAbsPos();

    const viewStyle: ViewStyle = {
      height,
      width,
      backgroundColor,
      // ...(centerAll && resolveAlignment()),
      ...viewAlignment,
      padding: viewPadding,
      margin: viewMargin,
      flexDirection: fDir ? "column" : "row",
      ...viewIsAbs,
      borderRadius: 10,
      justifyContent: spaceBetween ? "space-between" : "center",
    };
    return (
      <RNView style={[viewStyle, customStyle]} ref={ref}>
        {children}
      </RNView>
    );
  }
);

export { View };
