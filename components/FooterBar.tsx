import React from "react";
import Image from "next/image";

export const FootBar = () => {
  return (
    <div className="text-center justify-content-center align-items-center bg-dark">
      <Image src="/logo.png" width={250} height={50} alt="Logo" />
      <br />
      <span> &#169; Cimone Palace 2026. All Rights Reserved </span>
    </div>
  );
}