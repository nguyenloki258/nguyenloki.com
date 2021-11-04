import "./index.scss";
import React from "react";
const Invitation = () => {
  return (
    <div>
      <div className="invitation">
        <img
          alt=""
          src="images/invitation/sakura-right.webp"
          class="top-right-decoration animate__animated animate__fadeInDown"
        />
        <img
          alt=""
          src="images/invitation/sakura-left.webp"
          class="bottom-left-decoration animate__animated animate__fadeInUp"
        />
      </div>
    </div>
  );
};
export default React.memo(Invitation);
