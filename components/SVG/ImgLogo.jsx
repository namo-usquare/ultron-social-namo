import React from "react";

const ImgLogo = () => {
  return (
    <>
      <img
        alt="Channel Profile Image"
        loading="lazy"
        width={100}
        height={100}
        decoding="async"
        data-nimg={1}
        className="rounded-md object-cover"
        sizes="100px"
        src="/logo.png"
        style={{ color: "transparent" }}
      />
    </>
  );
};

export default ImgLogo;
