import request from "./request";

export function getTaskInfo() {
  return request({
    url: "/task",
    method: "get",
  });
}

export function getMyTaskList() {
  return request({
    url: "/mytask",
    method: "get",
  });
}
