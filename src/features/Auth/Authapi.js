import userEvent from "@testing-library/user-event";

export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST", // adding something
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}
export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email;
    const password = loginInfo.password;
    const response = await fetch(
      "http://localhost:3000/users?email=" + encodeURIComponent(email)
    );
    const data = await response.json();
    if (data.length) {
      //data leke a rhe hai
      if (password === data[0].password) {
        resolve({ data: data[0] });
      } else {
        reject({ message: "wrong credential" }); // same naam se 1 sebhi jada user ho sakte hai
      }
    } else {
      reject({ message: "user not found" });
      console.log(reject);
    }
  });
}
// for update patch
//for insertion post

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/users/" + update.id, {
      method: "PATCH", // adding something
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}
