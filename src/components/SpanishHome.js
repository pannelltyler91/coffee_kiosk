import '../App.css'
import Navbar1 from './HomeNavbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function SpanishHome(){
    return(
        <div className="App">
            <Navbar1 />
            <header className="App-header">
                <Container>
                    <h1>Café</h1>
                    <div>
                        <Button>Comer Aqui</Button>
                        <Button>Para Llevar</Button>
                    </div>
                </Container>
            </header>
        </div>
    )
}

export default SpanishHome;