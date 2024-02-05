import React from "react";
import Nav from "./navbar/Nav";
import Content from "./content/Content";
import SideBar from "./navbar/sidebar/SideBar";
import BottomNavigation from "./navbar/bottom_navigation/BottomNavigation";

const Main = () => {
  return (
    <>
    <div className="max-w-7xl m-auto ">

        <Nav />
    <div className="lg:grid lg:grid-cols-8 lg:grid-rows-5 lg:gap-4 lg:h-screen">
     
      <div className="col-span-2 row-span-5">
        <SideBar />
      </div>
      <div className="col-span-6 row-span-5 ">
        <Content />
      </div>
    </div>
    <BottomNavigation />
    </div>

    </>
  );
};

export default Main;
