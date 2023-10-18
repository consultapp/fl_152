import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { videoData } from "../../content_option";
import ReactPlayer from "react-player";

export const AboutMe = () => {
  return (
    <Container className="About-header">
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Обо мне</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row>
        <Col lg="12" className="d-flex align-items-center">
          <div className="mb-5">
            <div className="video-item">
              <ReactPlayer controls url={videoData[1].src} />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="12" className="d-flex align-items-center">
          <div>
            «Окончила факультет телевидения МГУ с золотой медалью. Работаю в
            кадре 6 лет. Большой опыт взаимодействия с политиками федерального
            уровня, в том числе в рамках работы в партийном СМИ на базе
            Государственной Думы. Регулярно прохожу релевантные интересам и
            профессии обучения. Есть экспертиза в вопросах корпоративных PR и GR
            коммуникаций. Уверенные навыки фото/видеосъемки, видеомонтажа,
            продюсирования.»
          </div>
        </Col>
      </Row>
    </Container>
  );
};
