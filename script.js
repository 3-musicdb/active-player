import { check } from "k6";
import http from "k6/http";

// export default function() {
//   let res = http.get("https://test.loadimpact.com/");
//   check(res, {
//     "is status 200": (r) => r.status === 200
//   });
// };

export default function() {
  let res = http.get("http://localhost:3020");
  check(res, {
    "is status 200": (r) => r.status === 200 
  });
}