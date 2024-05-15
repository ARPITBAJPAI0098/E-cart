export function fetchloggedinuserorder(userId) {
  return new Promise(async (resolve) => {
    // todo : we wil not hard code server URL here
    const response = await fetch(
      "http://localhost:3000/orders/?user.id=" + userId
    );
    const data = response.json();
    resolve({ data });
  });
}

