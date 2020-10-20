import request from "./request";

export function getUserInfo() {
  return request({
    url: "/user",
    method: "post",
  });
}

export class UserInfo {
  constructor(payload) {
    this.username = payload.username;
    this.email = payload.email;
    this.phone = payload.phone;
    this.birthday = payload.birthday;
    this.city = payload.city;
    this.avatar = payload.avatar;
    this.duration = payload.duration;
    this.isLogined = payload.isLogined;
    this.authority = payload.authority;
  }
}
