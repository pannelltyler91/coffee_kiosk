import '../App.css'
import Navbar1 from './HomeNavbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';



function Home() {

    return (
        <div className="App">
            <Navbar1 />
            <header className="App-header">
                <Container>
                    <h1>Coffeee</h1>
                    <div>
                        <Button href='/menu'onClick={localStorage.setItem('toGo', false)}>Dine In</Button>
                        <Button href='/menu'onClick={localStorage.setItem('toGo', true)}>To Go</Button>
                    </div>
                </Container>
            </header>
        </div>
    )
}

export default Home;