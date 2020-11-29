import request from "./request";

export function getCommentInfo() {
  return request({
    url: "/comment",
    method: "get",
  });
}
