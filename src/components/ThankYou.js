import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';


function ThankYou() {
const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            localStorage.removeItem('orderId')
            localStorage.removeItem('count')
            localStorage.removeItem('toGo')
            localStorage.removeItem('cart')
            navigate('/')
        }, 10000)
    }, [navigate])

    return (
        <Card>
                <Card>
                    <Card.Header style={{ display: 'flex', justifyContent: 'center' }}> Thank you for your order! </Card.Header>
                </Card>

        </Card>
    )
}

export default ThankYou;