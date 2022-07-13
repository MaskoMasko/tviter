export function getDateFormat(date: any) {
  const formattedDate = date.toString().split("T")[0].split("-")[2];
  const formattedMinutes = date
    .toString()
    .split(".")[0]
    .split("T")[1]
    .split(":")[1];
  const formattedYear = date.toString().split("T")[0].split("-")[0];

  return [formattedDate, formattedMinutes, formattedYear];
}
