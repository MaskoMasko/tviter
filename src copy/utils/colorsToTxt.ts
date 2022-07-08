export function colorsToTxt(colors: any): string[] {
  let colorsTxt: string[] = [];
  Object.keys(colors).map((color) => colorsTxt.push("" + color));
  return colorsTxt;
}
