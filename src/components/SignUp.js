import { Form, Button } from 'react-bootstrap';
import {auth} from './config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';



function SignUp(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate()
    
    const sU = async (e) =>{ 
        e.preventDefault();
        try{
        await createUserWithEmailAndPassword(auth,email,password)
        }
        catch (err){
            console.log(err)
        }
        navigate('/')

    }
        
    return (
        <Form onSubmit={sU}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
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