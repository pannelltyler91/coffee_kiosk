import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import {db} from '../config/firebase';
import {getDocs,collection} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import HotOptions from './KoreanHotOptionsOffCanvas';

function KoreanHotCoffee(){
    const [menu,setMenu] = useState([]);

    useEffect(() =>{
        const getMenu = async () =>{
            try{
                const menuCollectionRef = collection(db,"menu")
                const menuData = await getDocs(menuCollectionRef);
                const filteredMenuData = menuData.docs.map((doc) => ({...doc.data(),id:doc.id,}));
                const icedFilteredMenuData = filteredMenuData.filter((coffee) => coffee.type === 'hot')
                setMenu(icedFilteredMenuData)
                
                
            }catch(err) {
                console.log(err);
            }
        }
        getMenu();
    }, []);

    return(
        <Container>
            <Row>
                {menu.map((coffee) => {
                    return(
                        <Col md={6} key={coffee.id}>
                            <Card>
                            <Card.Title>{coffee.item}</Card.Title>
                            <Card.Body>
                                <Card.Text>Price:${coffee.price}</Card.Text>
                                <HotOptions coffeeName={coffee.item}  coffeeId={coffee.id} coffeePrice={coffee.price} />
                            </Card.Body>
                        </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default KoreanHotCoffee;