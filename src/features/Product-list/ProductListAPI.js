// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // todo : we wil not hard code server URL here
    const response = await fetch("http://localhost:3000/products");
    const data = response.json();
    resolve({ data });
  });
}
// export function fetchproductbyfilter(filter) {
//   //filter={"category":"smartphone"}
//   //sort={_sort:"price",order="desc"}//_page=1&_limit
//   let querystring = "";

//   for (let key in filter) {
//     querystring += `${key}=${filter[key]}&`;
//     //filter[key] same as in java filter.get(key)
//     // & is used to handle more than one string
//   }
//   return new Promise(async (resolve) => {
//     // todo : we wil not hard code server URL here
//     const response = await fetch(
//       "http://localhost:3000/products" + querystring
//     );
//     const data = response.json();
//     resolve({ data });
//   });
// }
export function fetchproductbyid(id) {
  return new Promise(async (resolve) => {
    // todo : we wil not hard code server URL here
    const response = await fetch("http://localhost:3000/products/" + id);
    const data = response.json();
    resolve({ data });
  });
}
