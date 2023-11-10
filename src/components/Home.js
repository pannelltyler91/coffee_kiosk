import '../App.css'
import Navbar1 from './HomeNavbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {useDispatch,} from 'react-redux'
import { hereToGo } from '../features/cart';




function Home() {
    const dispatch = useDispatch();
    return (
        <div className="App">
            <Navbar1 />
            <header className="App-header">
                <Container>
                    <h1>Coffee</h1>
                    <div>
                        <Button onClick={() => {
                            dispatch(hereToGo({toGo:false}))}} href='/menu' >Dine In</Button>
                        <Button onClick={() => {dispatch(hereToGo({toGo:true}))}} href='/menu'>To Go</Button>
                    </div>
                </Container>
            </header>
        </div>
    )
}

export default Home;