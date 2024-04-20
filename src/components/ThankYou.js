import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

function ThankYou() {
    const [sessionEnd, setSessionEnd] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            localStorage.removeItem('orderId')
            localStorage.removeItem('count')
            localStorage.removeItem('toGo')
            setSessionEnd(true)
        }, 10000)
    }, [navigate])

    return (
        <Card>
            {sessionEnd ? navigate('/') : <Row style={{ margin: '100px' }}>
                <Card>
                    <Card.Header style={{ display: 'flex', justifyContent: 'center' }}> Thank you for your order! </Card.Header>
                </Card>
            </Row>}
        </Card>
    )
}

export default ThankYou;