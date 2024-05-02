import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';


function KoreanThankYou() {
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
                    <Card.Header style={{ display: 'flex', justifyContent: 'center' }}> 주문하셔서 감사합니다! </Card.Header>
                </Card>

        </Card>
    )
}

export default KoreanThankYou;