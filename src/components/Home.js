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
            <h1>Coffee</h1>
            <div style={{marginBottom:'200px'}}>
                        <Button style={{margin:'15px'}} href='/signup' >Sign Up</Button>
                        <Button  href='/'>Login</Button>
                    </div>
                <Container>
                    <div>
                        <Button style={{margin:'15px'}} onClick={() => {
                            dispatch(hereToGo({toGo:false}))}} href='/menu' >Dine In</Button>
                        <Button onClick={() => {dispatch(hereToGo({toGo:true}))}} href='/menu'>To Go</Button>
                    </div>
                </Container>
            </header>
        </div>
    )
}

export default Home;