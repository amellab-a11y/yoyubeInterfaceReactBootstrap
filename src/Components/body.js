import React from 'react';
import iconeHome from '../img/icon-home.png';
import iconeExpl from '../img/icon-explorer.jpg';
import iconeAbonn from '../img/icon-abonnement.jpg';
import iconeBiblio from '../img/icon-bibliotheque.jpg';
import iconeHistorique from '../img/icon-historique.jpg';
import iconeVideo from '../img/icon-video.jpg';
import iconeAregarder from '../img/icon-aregarder.jpg';
import iconeJaime from '../img/icon-jaime.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Container} from 'react-bootstrap';
const MyBody = () => {

const urlList = [
    {
      src: `https://www.youtube.com/embed/ufPCITfUQnQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `CSS-in-JS — Max Stoiber`,
    },
    {
      src: `https://www.youtube.com/embed/v1JAUiqskiw?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Modern Forms in React — Erik Rasmussen`,
    },
    {
      src: `https://www.youtube.com/embed/N0wHweOu-LQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Engineering led design — Lauren Argenta`,
    },
    {
      src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Rethinking Design Practices — Mark Dalgleish`,
    },
    {
      src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Rethinking Design Practices — Mark Dalgleish`,
    },
    {
      src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Rethinking Design Practices — Mark Dalgleish`,
    },
    {
      src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Rethinking Design Practices — Mark Dalgleish`,
    },
    {
      src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Rethinking Design Practices — Mark Dalgleish`,
    },
    {
      src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Rethinking Design Practices — Mark Dalgleish`,
    },
    {
      src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Rethinking Design Practices — Mark Dalgleish`,
    },
    {
      src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Rethinking Design Practices — Mark Dalgleish`,
    },
    {
      src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Rethinking Design Practices — Mark Dalgleish`,
    },
  ];
  return (
    <Container fluid>
      <Row >
      {urlList.map((el, key) => (
         
          <Col>
            <iframe
              title='react-summet'
              src={el.src}
              style={{width:350, height:250,marginTop:100}}
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            ></iframe>
            <h6>{el.title}</h6>
            </Col>
          
      ))}
      </Row>
         </Container>
 
);

};
export default MyBody;