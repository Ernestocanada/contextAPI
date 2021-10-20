import React from "react";
import { UserCounter } from "../contextAPI/Context";

function Componentb() {
  const { conter } = UserCounter();
  return (
    <div>
      <h1 style={{ background: "black", color: "white", marginTop: "15px" }}>
        Counter B: {conter}
      </h1>
    </div>
  );
}

export default Componentb;
