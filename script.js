import http from "k6/http";
import { check } from "k6";

const id = Math.floor(Math.random() * 10000000);

export let options = {
  stages: [
    {duration: "15s", target: 10, rps: 1},
    {duration: "15s", target: 10, rps: 10},
    {duration: "15s", target: 10, rps: 100},
    {duration: "15s", target: 10, rps: 1000},
    {duration: "15s", target: 10, rps: 100000},
    {duration: "15s", target: 10, rps: 10000000},
  ]
};

export default function() {
  let res = http.get(`http://localhost:3020/songs/${id}`);
  check(res, {
    "status was 200": (r) => r.status === 200,
    "transaction time OK": (r) => r.timings.duration < 200
  });
};