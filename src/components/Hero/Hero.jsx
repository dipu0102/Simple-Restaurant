import React from "react";
import HeroImg from "../../assets/hero.png";
import HeroBg from "../../assets/heroBg.png";
import PrimaryButton from "../shared/PrimaryButton";

const BgStyle = {
  backgroundImage: `url(${HeroBg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
};

const Hero = () => {
  return (
    <div className="relative z[-1]" style={BgStyle}>
      <div className="container p-16 sm:p-0">
        <div
          className="grid grid-cols-1
        sm:grid-cols-2 gap-4 place-items-center
        min-h-[600px]"
        >
          {/* text contents */}
          <div className=" space-y-7 text-dark order-2 sm:order-1">
            <h1 className="text-5xl">
              Fresh & Healthy Meal Plan{" "}
              <span className="text-secondary font-cursive text-7xl">
                Delivery
              </span>{" "}
              in Miami
            </h1>
            <p className="lg:pr-64">
              Delicious Meals Delivered to Your Door From $132.95 per week
            </p>
            {/* button section  */}
            <div>
              <PrimaryButton />
            </div>
          </div>

          {/* image sections */}
          <div className="order-1 sm:order-2">
            <img
              src={HeroImg}
              className="w-full sm:scale-125 sm:translate-y-16
              "
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
