import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { mobile } from "../reponsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), 
                url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') 
                center;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;

    ${mobile({
    width: '75%',
})}
`
const Title = styled.h1`
    font-size: 28px;
    font-weight: 300;
`
const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 20px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    border: none;
    cursor: pointer;
    background-color: teal;
    color: white;
`

const Register = () => {
    const [userData, setUserData] = useState({
        name: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        cpassword: '',
    });

    const handelCh = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate();

    const registerUser = async (data) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', data);
            console.log(res.data);
            navigate('/login');
        } catch (err) {
            console.log(err)
        }
    }

    const handelClick = (e) => {
        e.preventDefault();
        registerUser(userData);
    }

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input name="name" type='text' placeholder="Name" onChange={handelCh} />
                    <Input name="lastname" type='text' placeholder="Last name" onChange={handelCh} />
                    <Input name="username" type='text' placeholder="username" onChange={handelCh} />
                    <Input name="email" type='text' placeholder="email" onChange={handelCh} />
                    <Input name="password" type='password' placeholder="password" onChange={handelCh} />
                    <Input name="cpassword" type='password' placeholder="confirm password" onChange={handelCh} />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button onClick={handelClick}>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register