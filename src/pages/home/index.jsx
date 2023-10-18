import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { AboutMe } from "../../components/AboutMe";
import { RabotaVKadre } from "../../components/RabotaVKadre/RabotaVKadre";
import { Photo } from "../../components/Photo/Photo";
import { Contacts } from "../../components/Contacts/Contacts";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_src_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [introdata.animated.first],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 100000000,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutMe />
      <RabotaVKadre />
      <Photo />
      <Contacts />
    </HelmetProvider>
  );
};
