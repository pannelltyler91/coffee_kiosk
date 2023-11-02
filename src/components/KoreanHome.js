import '../App.css'
import Navbar1 from './HomeNavbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function KoreanHome(){
    return(
        <div className="App">
            <Navbar1 />
            <header className="App-header">
                <Container>
                    <h1>커피</h1>
                    <div>
                        <Button>매장</Button>
                        <Button>포장</Button>
                    </div>
                </Container>
            </header>
        </div>
    )
}

export default KoreanHome;