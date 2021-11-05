import "./index.scss";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="figure">
          <span>Chú rể</span>
          <StaticImage
            src="https://lh3.googleusercontent.com/tNwp2zEtLKyJLlqjjnFIF-uZHJidR9Ne43goZssRpNu9WBTc3fAUU8iTL_CRaSeQcqd9wYMDvwZS47z2NAZs_b8QUOHj6h5sd6VX-H74k5lD7gp_nRZaYeisLJDwLAjRQSj0pbHAfQ=w2400"
            alt="chú rể"
          />
          <div className="btn-link">
            <StaticImage
              alt=""
              src="https://img.icons8.com/color/48/ffffff/facebook.png"
            />
            <StaticImage
              alt=""
              src="https://img.icons8.com/color/48/ffffff/apple-phone.png"
            />
          </div>
        </div>
        <img src="https://img.icons8.com/color/48/000000/filled-like.png" />
        <div className="figure">
          <span>Cô dâu</span>
          <StaticImage
            src="https://lh3.googleusercontent.com/PS2Kx9hWsKU2W_XxEAs0qyF7cUj3e8q9_gNav8b-qVq4bhAoiDOeXFbPhshr3kgutux48gVq88_pftrEQFDYpKdzdYCqHdTGwpNoPp4NQB7K36-wv6fxGqd8q-7FF-PpJ3HKWCC9nw=w2400"
            alt="cô dâu"
          />
          <div className="btn-link">
            <StaticImage
              alt=""
              src="https://img.icons8.com/color/48/ffffff/facebook.png"
            />

            <StaticImage
              alt=""
              src="https://img.icons8.com/color/48/ffffff/apple-phone.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Contact);
