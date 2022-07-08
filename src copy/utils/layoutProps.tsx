import React, { forwardRef } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface LayoutProps {
  //basics
  width?: number;
  height?: number;
  backgroundColor?: string;

  //padding
  padExtraSmall?: boolean;
  padSmall?: boolean;
  padMedium?: boolean;
  padLarge?: boolean;
  padExtraLarge?: boolean;

  verticalPadExtraSmall?: boolean;
  verticalPadSmall?: boolean;
  verticalPadMedium?: boolean;
  verticalPadLarge?: boolean;
  verticalPadExtraLarge?: boolean;

  horizontalPadExtraSmall?: boolean;
  horizontalPadSmall?: boolean;
  horizontalPadMedium?: boolean;
  horizontalPadLarge?: boolean;
  horizontalPadExtraLarge?: boolean;

  //content alignment
  centerAll?: boolean;
  horizontalCenterRight?: boolean;
  horitzontalCenterLeft?: boolean;
  verticalCenterRight?: boolean;
  verticalCenterLeft?: boolean;
  verticalCenterSpaceBetween?: boolean;
  hotizontalCenterSpaceBetween?: boolean;
  verticalCenterSpaceAround?: boolean;
  horizontalCenterSpaceAround?: boolean;
  verticalCenterSpaceEvenly?: boolean;
  horizontalCenterSpaceEvenly?: boolean;

  //list content
  listRow?: boolean;
  listCol?: boolean;
  listReverseRow?: boolean;
  listReverseCol?: boolean;

  //absolute pos
  absTopLeft?: boolean;
  absTopRight?: boolean;
  absBottomLeft?: boolean;
  absBottomRight?: boolean;

  customAbs?: boolean;

  zIndex?: number;
  aspectRatio?: boolean;
}

// interface LayoutStyle {
// }

export function layoutProps<
  //ovo salje da ima componeneta style prop ca je krivo
  Props extends React.PropsWithRef<{
    style?: StyleProp<any>;
  }>,
  RNComponent
>(Component: React.ComponentType<Props>) {
  return forwardRef<RNComponent, Props & LayoutProps>(
    ({ style, ...props }, ref) => {
      const componentStyle: ViewStyle = {
        width: 100,
        height: 100,
        backgroundColor: "red",
      };
      return (
        <Component
          ref={ref}
          {...(props as Props)}
          style={[componentStyle, style]}
        />
      );
    }
  );
}

// ...StyleSheet.absoluteFillObject,
