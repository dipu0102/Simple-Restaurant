import React from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";

const NavLink = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "About",
    link: "#",
  },
  {
    id: 3,
    name: "Contact",
    link: "#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Vegitables",
    link: "/#",
  },
  {
    id: 2,
    name: "Fruits",
    link: "/#",
  },
  {
    id: 3,
    name: "Grains",
    link: "/#",
  },
];
const Navbar = () => {
  return (
    <div className="bg-white shadow-md ">
      <div className="container flex justify-between items-center py-4 sm:py-3">
        {/* logo section */}
        <div className="font-bold text-3xl">Logo</div>
        {/* nav link section */}
        <div>
          <ul className="flex items-center gap-10 ">
            {NavLink.map(({ id, link, name }) => {
              return (
                <li key={id}>
                  <a
                    href={link}
                    className="hover:text-primary text-xl inline-block font-semibold"
                  >
                    {name}
                  </a>
                </li>
              );
            })}
            {/* simple drop down */}
            <li className=" cursor-pointer group ">
              <a
                href="/#"
                className="inline-block hover:text-primary text-xl font-semibold"
              >
                <div
                  className="flex items-center gap-[2px]
                py-2"
                >
                  DropDown
                  <span>
                    <FaCaretDown className="group-hover:rotate-180 duration-300" />
                  </span>
                </div>
              </a>
              {/* dropdown section */}
              <div className="absolute z-[999] hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href="/#"
                        className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {/* login button */}
            <li>
              <button
                className="flex justify-center items-center gap-2 bg-secondary text-xl text-white px-5 py-2 hover:scale-105
              duration-300"
              >
                <FaUser />
                My Account
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
