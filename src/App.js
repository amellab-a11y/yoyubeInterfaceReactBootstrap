import logo from './logo.svg';
import './App.css';
import MyHeader from './Components/head.js';
import MyBody from './Components/body.js';
import LeftPart from './Components/leftPart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';

function App() {
  return (
    
        <Container fluid>
          <MyHeader/>
            <Row>
           <Col lg={2}>
              <LeftPart/>
              </Col>
              <Col lg={10}> <MyBody/></Col>
          </Row>
          </Container>

  );
}

export default App;
