import request from "./request";

export function getRankingInfo() {
  return request({
    url: "/ranking",
    method: "get",
  });
}
