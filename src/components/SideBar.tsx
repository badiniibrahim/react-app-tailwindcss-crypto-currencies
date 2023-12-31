import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Icon from "./CustomIcon";
import { icon } from "../assets";
import { navLinks } from "../constants";

const SideBar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link to={"/"}>
        <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={icon} />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
          <div className="flex flex-col justify-center items-center gap-3">
            {navLinks.map((link) => {
              return (
                <Icon
                  key={link.name}
                  {...link}
                  isActive={isActive}
                  handleClick={() => {
                    setIsActive(link.name);
                    navigate(link.link);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
