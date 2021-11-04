import React, { useRef, useState } from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import HeroHeader from "../components/heroHeader";

import Album from "../components/album";
import Map from "../components/map";
import Info from "../components/info";
import Schedule from "../components/schedule";
import Contact from "../components/contact";
import Invitation from "../components/invitation";

import "../styles/wedding.scss";

const WeddingPage = ({ data: {} }) => {
  const fullPage = useRef();
  const homeRef = useRef();
  const mapRef = useRef();
  const scheduleRef = useRef();
  const contactRef = useRef();
  const albumRef = useRef();

  const [page, setPage] = useState(0);
  const onScroll = e => {
    const scrollTop = fullPage.current.scrollTop;
    const height = 500;
    const newPage = Math.floor(scrollTop / height);
    if (newPage !== page) {
      setPage(newPage);
    }
  };

  const goto = type => {
    switch (type) {
      case "album":
        albumRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "schedule":
        scheduleRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "map":
        mapRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      default:
        break;
    }
  };
  const soundCloudEmbed = `
  <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1340299825&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/nguyenhero" title="Nguyễn Loki" target="_blank" style="color: #cccccc; text-decoration: none;">Nguyễn Loki</a> · <a href="https://soundcloud.com/nguyenhero/sets/wedding" title="Wedding" target="_blank" style="color: #cccccc; text-decoration: none;">Wedding</a></div>
  `;

  return (
    <Layout>
      <Helmet>
        <title>Lễ vu quy | 12/12/2021 Nguyễn ❤️ Hường</title>
        <meta
          name="description"
          content="Mời bạn tới tham dự tiệc cưới của chúng tôi"
        />
      </Helmet>
      <HeroHeader />
      <div className="wedding-page" ref={fullPage} onScroll={onScroll}>
        <div className="left-panel">
          <Info page={page} />
        </div>
        <div className={`right-panel`}>
          <div className="menu">
            <div className="menu-btn">
              <img
                alt="menu"
                src="https://img.icons8.com/color/48/ffffff/circled-menu.png"
              />
            </div>
            <div className="menu-panel">
              <div className="item" onClick={() => goto("album")}>
                <img
                  alt="album"
                  src="https://img.icons8.com/color/48/ffffff/google-photos-new.png"
                />
                <span>Album ảnh</span>
              </div>
              <div className="item" onClick={() => goto("schedule")}>
                <img
                  alt="calendar"
                  src="https://img.icons8.com/color/48/ffffff/google-calendar--v1.png"
                />
                <span>Lịch trình</span>
              </div>
              <div className="item" onClick={() => goto("map")}>
                <img
                  alt="map"
                  src="https://img.icons8.com/color/48/ffffff/google-maps.png"
                />
                <span>Địa chỉ</span>
              </div>
              <div className="item" onClick={() => goto("contact")}>
                <img
                  alt="contact"
                  src="https://img.icons8.com/color/48/ffffff/apple-phone.png"
                />
                <span>Liên hệ</span>
              </div>
            </div>
          </div>
          <div className="music">
            <div className="music-btn">
              <img
                alt=""
                src="https://img.icons8.com/ultraviolet/40/000000/musical-notes.png"
              />
            </div>
            <div className="music-panel">
              <div dangerouslySetInnerHTML={{ __html: soundCloudEmbed }}></div>
            </div>
          </div>
          <div className="element page1" ref={homeRef}>
            <Invitation />
          </div>
          <div className="element">
            <div className="block-tile" ref={scheduleRef}>
              Lịch trình
            </div>
            <Schedule />
          </div>
          <div className="element " ref={contactRef}>
            <div className="block-tile"> Liên hệ</div>
            <Contact />
          </div>
          <div className="element ">
            <div className="block-tile " ref={mapRef}>
              Địa chỉ{" "}
            </div>
            <Map />
          </div>
          <div className="element" ref={albumRef}>
            <div className="block-tile">Album ảnh</div>
            <Album />
          </div>
          <div className="element"></div>
        </div>
      </div>
    </Layout>
  );
};

export default WeddingPage;
