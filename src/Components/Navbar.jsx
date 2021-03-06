import { useEffect } from "react";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeftFill } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, userProfile } from ".";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../Context/ContextProvider";

const Navbutton = (title, customFunc, icon, color, dotcolor) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotcolor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      ></span>
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <Navbutton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
      ></Navbutton>
      <div></div>
    </div>
  );
};

export default Navbar;
