import request from "./request";

export function getCommunity() {
  return request({
    url: "/community",
    method: "get",
  });
}
