import { Form, Button } from 'react-bootstrap';
import {auth} from './config/firebase';
import { signInWithPhoneNumber } from 'firebase/auth';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';



function SignUp(){
    const [phone,setPhone] = useState('');
    const [name,setName] = useState('');
    const navigate = useNavigate()
    
    const sU = async (e) =>{ 
        e.preventDefault();
        try{
        await signInWithPhoneNumber(auth,phone,name)
        }
        catch (err){
            console.log(err)
        }
        navigate('/')

    }
        
    return (
        <Form onSubmit={sU}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control onChange={(e) => setPhone(e.target.value)} type="phone" placeholder="Enter phone number" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}



export default SignUp;