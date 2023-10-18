import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { videoData } from "../../content_option";
import ReactPlayer from "react-player";

export const RabotaVKadre = () => {
  return (
    <Container className="">
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Работа в кадре</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row>
        <Col lg="12" className="d-flex align-items-center">
          <div className="mb-5">
            <div className="video-item">
              <ReactPlayer controls url={videoData["0"].src} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
