import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { imageData, meta, videoData } from "../../content_option";

export const Photo = () => {
  return (
    <Container>
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Фото</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <div className="po_items_ho">
        {imageData.map((data, i) => {
          return (
            <div key={i} className="po_item">
              <img src={data.src} alt="" />
            </div>
          );
        })}
      </div>
    </Container>
  );
};
