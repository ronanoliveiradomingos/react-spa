import React from "react";
import { Row, Col, CardPanel, Icon } from 'react-materialize';
import gitHub from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';
import skype from '../../images/skype.svg'
import twitter from '../../images/twitter.svg';

const Contact = () => (
  <Row>
    <Col>
      <h5>Contato</h5>
      <Row>
        <Col s={12} m={5}>
          <CardPanel className="teal lighten-4 black-text">
            <Row>
              <Col>
              <Row>
                <h5><b>Ronan Oliveira Domingos</b></h5>
                </Row>
                <Row>
                  <Icon left>email</Icon> ronan.oliveira@gmail.com
                </Row>
                <Row>
                  <Icon left>phone</Icon> +55 11 98021-9252
                </Row>
                <Row>
                  <Icon left>location_on</Icon> São Paulo - Brasil
                </Row>
              </Col>
            </Row>
            <Row>
              <Col s={3}>
                <a target='_blank' href='https://www.linkedin.com/in/ronan-oliveira-domingos/?locale=pt_BR'>
                  <img src={linkedin} className="circle responsive-img" />
                </a>
              </Col>
              <Col s={3}>
                <a target='_blank' href='https://github.com/ronanoliveiradomingos'>
                  <img src={gitHub} className="circle responsive-img" />
                </a>
              </Col>
              <Col s={3}>
                <a target='_blank' href='https://join.skype.com/invite/Ar7CyRSxgmDC'>
                  <img src={skype} className="circle responsive-img" />
                </a>
              </Col>
              <Col s={3}>
                <a target='_blank' href='https://twitter.com/ronandomingos'>
                  <img src={twitter} className="circle responsive-img" />
                </a>
              </Col>
            </Row>
          </CardPanel>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Contact;