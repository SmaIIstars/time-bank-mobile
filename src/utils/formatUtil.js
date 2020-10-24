import moment from "moment";

export function dateFormat(date, formatString) {
  return moment(date).format(formatString);
}
