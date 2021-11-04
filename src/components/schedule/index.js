import "./index.scss";
import React from "react";
const Schedule = () => {
  return (
    <div>
      <div className="timeline">
        <div className="container right">
          <div className="content">
            <h2>15/12/2021</h2>
            <p>Tổ chức ăn hỏi</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>18/12/2021</h2>
            <p>Tổ chức đám cưới</p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>19/12/2021</h2>
            <p>Đón dâu</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Schedule);
