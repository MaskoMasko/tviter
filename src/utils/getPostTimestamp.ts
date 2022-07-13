import { getDateFormat } from "./getDateFormat";

export function getPostTimestamp(postCreateAtDate: string) {
  const currentDate = new Date().getDate();
  const minutes = new Date().getMinutes();
  const currentYear = new Date().getFullYear();
  const [postDate, postMinutes, postYear] = getDateFormat(postCreateAtDate);

  const dateDiff = currentDate - postDate;
  const yearDiff = currentYear - postYear;
  const timeDiff = minutes - postMinutes;

  if (yearDiff > 1) return `${dateDiff} years ago...`;
  if (dateDiff > 1) {
    if (dateDiff >= 30) {
      return `${Math.floor(dateDiff / 30)} months ago...`;
    }
    return `${dateDiff} days ago...`;
  }
  if (timeDiff < 5 && timeDiff > 0) return "Moments ago...";
  return "Under 24 hours ago...";
}
