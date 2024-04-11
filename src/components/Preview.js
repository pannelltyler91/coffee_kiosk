import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import { useSelector } from 'react-redux';
import {db} from './config/firebase';
import {addDoc,collection} from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import { Timestamp } from "@firebase/firestore";


function Preview(){
    
const cart = useSelector((state) => state.cart.value)
    
    return(
        <Container className="mt-2" fluid>
          <h1>Preview</h1>
          {cart}
        </Container>
    )
}

export default Preview;
