import "./index.scss";
import "lightgallery/scss/lightgallery-bundle.scss";
import "lightgallery/scss/lg-transitions.scss";

import React from "react";
import LightGallery from "lightgallery/react";
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgShare from "lightgallery/plugins/share";
// import lgRoute from 'lightgallery/plugins/rotate';
// import lgRelativeCaption from 'lightgallery/plugins/relativeCaption';
// import lgPager from 'lightgallery/plugins/pager';
// import lgMediumZoom from 'lightgallery/plugins/mediumZoom';
// import lgHash from 'lightgallery/plugins/hash';
// import lgFullscreen from 'lightgallery/plugins/fullscreen';
// import lgComment from 'lightgallery/plugins/comment';
import lgAutoplay from "lightgallery/plugins/autoplay";
import { useStaticQuery, graphql } from "gatsby"


const Album = () => {
  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        wedding {
          album {
            src
          }
        }
      }
    }
  }
`)
const IMAGES = data?.site?.siteMetadata?.wedding?.album;
  return (
    <div>
      <div className="album">
        <LightGallery
          speed={500}
          actualSize={true}
          mode={"lg-zoom-in-out"}
          plugins={[
            lgThumbnail,
            lgZoom,
            lgShare,
            // lgRoute,
            // lgRelativeCaption,
            // lgPager,
            // lgMediumZoom,
            // lgHash,
            // lgFullscreen,
            // lgComment,
            lgAutoplay
          ]}
        >
          {IMAGES.slice(0, 1000).map((x, index) => (
            <a referrerPolicy="no-referrer" href={x.src} key={index}>
              <img
                className="album-thumb"
                referrerPolicy="no-referrer"
                alt={`Ảnh cưới Nguyễn & Hường ${index + 1}`}
                src={x.src.replace("=w1920-h1080", "=w300-h4000")}
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
  );
};
export default React.memo(Album);
