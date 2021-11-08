import "./index.scss";
import React from "react";
const Schedule = () => {
  return (
    <div>
      <div className="timeline">
        <div className="container right">
          <div className="content">
            <h2 className="dark:text-black">12/12/2019</h2>
            <p className="dark:text-black">Ngày đầu gặp mặt</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2 className="dark:text-black">17/07/2021</h2>
            <p className="dark:text-black">Đăng ký kết hôn</p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2 className="dark:text-black">15/12/2021</h2>
            <p className="dark:text-black">Tổ chức ăn hỏi</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2 className="dark:text-black">18/12/2021</h2>
            <p className="dark:text-black">Tổ chức đám cưới</p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2 className="dark:text-black">19/12/2021</h2>
            <p className="dark:text-black">Đón dâu</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Schedule);
