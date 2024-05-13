import React from "react";

export default function Gradient() {
  return (
    <div>
      <div className="border border-black w-[36rem] h-0">
        <div className="gradient-container -mt-48">
          <div className="gradient-top"></div>
          <div className="gradient-ellipse"></div>
          <div className="gradient-big-box"></div>
          <div className="gradient-left gradient-side"></div>
          <div className="gradient-right gradient-side"></div>
        </div>
      </div>
    </div>
  );
}