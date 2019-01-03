import React from "react";
import { Row, Col, Card } from 'react-materialize';
import avatar from '../../images/avatar.png';
//const avatar_url = 'https://avatars1.githubusercontent.com/u/18179804?v=4';

const Profile = () => (
  <Card>
      <Row>
        <Col s={8} m={8} offset="s2 m2">
          <img src={avatar} className="circle responsive-img" />
        </Col>
      </Row>
      <Row className="center-align">
        <h5 >Lorem Ipsum</h5>
        <p className="grey darken-2 white-text">Ruby Developer</p>
      </Row>
  </Card>
);

export default Profile;