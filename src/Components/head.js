import React from 'react';
import myLogo from '../img/logo.jpg';
import myMenu from '../img/icon-menu.jpg';
import myVideo from '../img/icon-live.jpg';
import myCarraux from '../img/icon-appli.jpg';
import myNotif from '../img/icon-notif.jpg';
import cercleProfil from '../img/cercle_profil.png';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaFlickr,FaAlignJustify,FaSearch,FaVideo,FaGripHorizontal,FaRegBell} from "react-icons/fa";

import { Card, Row, Col, Search, Button, Container, FormLabel} from 'react-bootstrap';


const MyHeader = () => {
    return (
        <>
            <Container fluid>
                <Row >
                    
                        <Col lg={5}>
                            <FaAlignJustify/>                                      
                            <img src={myLogo} alt='youtube' className='navbar-brand' />
                        </Col>

                        <Col lg={3}>
                            <div className="header__search">
                                <form action="">
                                    <input type="text" placeholder="Search"/>
                                    <Button style={{width:50}}><FaSearch>search</FaSearch></Button>
                                </form>
                            </div>
                        </Col >

                        <Col lg={4} style={{textAlign:'right'}}>
                            <div>
                                <FaVideo className="icones"/>
                                <FaGripHorizontal className="icones"/>
                                <FaRegBell className="icones"/>
                                <img src={cercleProfil} alt='menu' className='navbar-brand' />
                            </div>
                        </Col>
                 </Row>
            </Container>




        </>

    );

};
export default MyHeader;