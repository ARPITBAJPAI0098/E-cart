import React from "react";
import Navbar from "../features/Navbar/Navbar";
import Productlist from "../features/Product-list/Components/Productlist";

export default function Home() {
  //const backgroundImageUrl =
  //"https://images.pexels.com/photos/2834805/pexels-photo-2834805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div>
      <div className="bg-white" style={{}}>
        <Navbar>
          <Productlist />
        </Navbar>
      </div>
    </div>
  );
}
