import React from 'react';
import './style.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import { imageData, meta, videoData } from '../../content_option';
import ReactPlayer from 'react-player';

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className='About-header'>
        <Helmet>
          <meta charSet='utf-8' />
          <title> Медиа | {meta.title} </title>{' '}
          <meta name='description' content={meta.description} />
        </Helmet>
        <Row className='mb-5 mt-3 pt-md-3'>
          <Col lg='8'>
            <h1 className='display-4 mb-4'> Медиа </h1>{' '}
            <hr className='t_border my-4 ml-0 text-left' />
          </Col>
        </Row>
        <div className='po_items_ho'>
          {imageData.map((data, i) => {
              return (
                <div key={i} className='po_item'>
                  <img src={data.src} alt='' />
                </div>
              );
          })}
        </div>
        <div className='videos-wrap mb-5'>
          {videoData.map((data, idx) => {
              return (
                <div key={idx} className='video-item'>
                  <ReactPlayer controls url={data.src} />
                </div>
              );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
