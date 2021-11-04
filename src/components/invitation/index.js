import "./index.scss";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const Invitation = () => {
  return (
    <div>
      <div className="invitation">
        <StaticImage
          alt=""
          src="images/invitation/sakura-right.webp"
          class="top-right-decoration animate__animated animate__fadeInDown"
        />
        <StaticImage
          alt=""
          src="images/invitation/sakura-left.webp"
          class="bottom-left-decoration animate__animated animate__fadeInUp"
        />
      </div>
    </div>
  );
};
export default React.memo(Invitation);
