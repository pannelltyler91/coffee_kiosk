import '../../App.css'
import Navbar1 from '../HomeNavbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {useDispatch,} from 'react-redux'
import { hereToGo } from '../../features/cart';




function Home() {
    const dispatch = useDispatch();
    return (
        <div className="App">
            <Navbar1 />
            
            <header className="App-header">
            <h1>커피</h1>
                <Container>
                    <div>
                        <Button style={{margin:'15px'}} onClick={() => {
                            dispatch(hereToGo({toGo:false}))}} href='/kmenu' >매장</Button>
                        <Button onClick={() => {dispatch(hereToGo({toGo:true}))}} href='/kmenu'>포장</Button>
                    </div>
                </Container>
            </header>
        </div>
    )
}

export default Home;