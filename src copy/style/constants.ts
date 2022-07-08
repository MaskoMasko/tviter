import { ViewStyle, StyleSheet, Dimensions } from "react-native";
import { colorsToTxt } from "../utils/colorsToTxt";
//rand generirana paleta boja s https://coolors.co/

//object names da ne bude previse importi
//S - Style
//P - Padding
//M - Margin
//A - Alignment
//F - Font Size
//AP - Abosolute Pos
//C - colors
//D - dimensions

export const C = {
  //font
  fontColorLight: "#fffaff",
  fontColorDark: "#1E1B18",

  //background
  backgroundColorDark: "#0A2463",
  backgroundColorLight: "#5DA2D4",

  //button
  success: "#31b55d",
  danger: "#D8315B",
  default: "#3E92CC",

  //transparent
  transparent: "rgba(255,255,255,0)",
};

const colorsTxt = colorsToTxt(C);
export const colorsTxtTypes = [...colorsTxt] as const;

//padding
export const P = {
  padS: 4,
  padM: 8,
  padL: 12,
  padXL: 15,
  padXXL: 20,
};

//margin
export const M = {
  marS: 4,
  marM: 8,
  marL: 12,
  marXL: 15,
  marXXL: 20,
};

//fontSize
export const F = {
  fsizeS: 12,
  fsizeM: 15,
  fsizeL: 20,
  fsizeXL: 24,
  fsizeXXL: 30,
};

//dimensions
export const D = {
  screenWidth: Dimensions.get("screen").width,
  screenHeight: Dimensions.get("screen").height,
};

//style
interface SInterface {
  centerAll: ViewStyle;
  fDir: ViewStyle;
  absCenterAll: ViewStyle;
}
export const S: SInterface = {
  centerAll: {
    justifyContent: "center",
    alignItems: "center",
  },
  fDir: {
    flexDirection: "column",
  },
  absCenterAll: {
    //ovo se more zamjeniti z ovin..
    // position:"absolute",
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
};
