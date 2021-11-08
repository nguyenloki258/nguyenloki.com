import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const ContactPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>Liên hệ — {site.siteMetadata.title}</title>
        <meta
          name="description"
          content={"Contact page of " + site.siteMetadata.description}
        />
      </Helmet>
      <div className="two-grids -contact">
        <div
          className="post-thumbnail"
          style={{
            backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`,
            marginBottom: 0
          }}
        >
          <h1 className="post-title">Liên hệ với tôi</h1>
          <p>Cùng chia sẻ kiến thức hữu hiệu&rarr;</p>
        </div>
        <div>
          <form
            className="form-container"
            action="https://sendmail.w3layouts.com/SubmitContactForm"
            method="post"
          >
            <div>
              <label htmlFor="w3lName">Tên</label>
              <input type="text" name="w3lName" id="w3lName" />
            </div>
            <div>
              <label htmlFor="w3lSender">Địa chỉ email</label>
              <input type="email" name="w3lSender" id="w3lSender" />
            </div>
            <div>
              <label htmlFor="w3lSubject">Chủ đề</label>
              <input type="text" name="w3lSubject" id="w3lSubject" />
            </div>
            <div>
              <label htmlFor="w3lMessage">Nội dung</label>
              <textarea name="w3lMessage" id="w3lMessage"></textarea>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <input
                type="submit"
                className="button -primary"
                style={{ marginRight: 0 }}
                value="Gửi ngay"
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;
export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
