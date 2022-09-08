import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { login } from "../redux/apiCalls"
import { mobile } from "../reponsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), 
                url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') 
                center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    width: 30%;
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
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    border: none;
    cursor: pointer;
    background-color: teal;
    color: white;
    margin-bottom: 10px;

    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`
const Clink = styled.a`
    color: black;
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`
const Error = styled.span`
    font-size: 16px;
    color: red;
`

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector(state => state.user);

    const handleLogin = (e) => {
        e.preventDefault();
        // console.log(username)
        // console.log(password)
        login(dispatch, { username, password });
    }

    return (
        <Container>
            <Wrapper>
                <Title>LOG IN</Title>
                <Form>
                    <Input type='text' placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                    <Input type='password' placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={handleLogin} disabled={isFetching} >LOGIN</Button>
                    {error && <Error>Something went wrong...</Error>}
                    <Clink>FORGOT PASSWORD?</Clink>
                    <Link to='/register' style={{
                        color: 'black',
                        margin: '5px 0px',
                        fontSize: '12px',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                    }}>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login