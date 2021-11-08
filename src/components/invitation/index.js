import "./index.scss";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const Invitation = () => {
  return (
    <div>
      <div className="invitation">
      <StaticImage
          alt=""
          src="../../images/invitation/sakura-right.webp"
          className="top-right-decoration animate__animated animate__fadeInDown"
        />
        <StaticImage
          alt=""
          src="../../images/invitation/sakura-left.webp"
          className="bottom-left-decoration animate__animatyaed animate__fadeInUp"
        />
        <div className="heading">Thiệp mời </div>
        <div className="send-to">Kính mời<br/>........................</div>
      </div>
    </div>
  );
};
export default React.memo(Invitation);
