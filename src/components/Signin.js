import "bootstrap/dist/css/bootstrap.css";
import LeftSide from "./Login/LeftSide";
import RightSide from "./Login/RightSide";
import { Col, Row } from 'react-bootstrap';
//import {Route,NavLink,HashRouter} from "react-router-dom";

function Signin() {
  return (
    <div className="App">
      
      <Row >
        <Col><LeftSide /></Col>
        <Col><RightSide /></Col>
      </Row>
    </div>
  );
}

export default Signin;
