import request from "./request";

export function getTaskInfo() {
  return request({
    url: "/task",
    method: "get",
  });
}
