import "./index.scss";
import React from "react";
const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="figure">
          <span>Chú rể</span>
          <img
            alt="chú rể"
            src="https://lh3.googleusercontent.com/tNwp2zEtLKyJLlqjjnFIF-uZHJidR9Ne43goZssRpNu9WBTc3fAUU8iTL_CRaSeQcqd9wYMDvwZS47z2NAZs_b8QUOHj6h5sd6VX-H74k5lD7gp_nRZaYeisLJDwLAjRQSj0pbHAfQ=w2400"
          />
          <div className="btn-link">
            <a href="https://www.facebook.com/nguyen.hero" target="_blank"  rel="noreferrer" >
              <img
                alt="socical"
                src="https://img.icons8.com/color/48/ffffff/facebook.png"
              />
            </a>
            <a href="tel:0967267469" target="_blank"  rel="noreferrer" >
              <img
                alt="socical"
                src="https://img.icons8.com/color/48/ffffff/apple-phone.png"
              />
            </a>
          </div>
        </div>
        <img
          alt="loved"
          src="https://img.icons8.com/color/48/000000/filled-like.png"
        />
        <div className="figure">
          <span>Cô dâu</span>
          <img
            src="https://lh3.googleusercontent.com/PS2Kx9hWsKU2W_XxEAs0qyF7cUj3e8q9_gNav8b-qVq4bhAoiDOeXFbPhshr3kgutux48gVq88_pftrEQFDYpKdzdYCqHdTGwpNoPp4NQB7K36-wv6fxGqd8q-7FF-PpJ3HKWCC9nw=w2400"
            alt="cô dâu"
          />
          <div className="btn-link">
            <a href="https://www.facebook.com/huonglt.hus7694" target="_blank"  rel="noreferrer" >
              <img
                alt="socical"
                src="https://img.icons8.com/color/48/ffffff/facebook.png"
              />
            </a>{" "}
            <a href="tel:0987442906" target="_blank"  rel="noreferrer" >
              <img
                alt="socical"
                src="https://img.icons8.com/color/48/ffffff/apple-phone.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Contact);
