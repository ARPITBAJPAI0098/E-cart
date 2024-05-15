// A mock function to mimic making an async request for data
export function addtocart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/cart", {
      method: "POST", // adding something
      body: JSON.stringify(item),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchitembyuser(userid) {
  return new Promise(async (resolve) => {
    // todo : we wil not hard code server URL here
    const response = await fetch("http://localhost:3000/cart?user=" + userid);
    const data = response.json();
    resolve({ data });
  });
}
export function updatecart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/cart/" + update.id, {
      method: "PATCH", // adding something
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}
export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3000/cart/" + itemId, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data: { id: itemId } });
  });
}
export async function resetCart(userId) {
  //get all items -and then
  return new Promise(async (resolve) => {
    const response = await fetchitembyuser(userId);
    const items = response.data;
    for (let item of items) {
      await deleteItemFromCart(item.id);
    }
    resolve({ status: "success" });
  });
}
