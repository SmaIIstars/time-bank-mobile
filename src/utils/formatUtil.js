import moment from "moment";

export function dateFormat(date, formatString) {
  return moment(date).format(formatString);
}

export function dateFromNowFormat(date, formatString) {
  return moment(date)
    .startOf(formatString)
    .fromNow();
}
