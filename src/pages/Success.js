// import { useLocation } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Button = styled.button`
    border: none;
    width: 150px;
    padding: 20px;
    background-color: teal;
    color: white;
    font-size: 18px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`
const Image = styled.img`
    width: 200px;
    height: 200px;
    /* border-radius: 50%; */
    margin-bottom: 30px;
`
const Desc = styled.div`
    width: 320px;
    font-size: 18px;
    text-align: center;
`
const URL = "https://i.ibb.co/N1pMCHS/logo.jpg";

const Success = () => {
    // const location = useLocation();
    // console.log(location);

    return (
        <Container>
            <Image src={URL}/>
            <Button>
                SUCCESSFULL
            </Button>
            <Desc>
                Your order is being prepared.Thanks for choosing NOVOZ shop.
            </Desc>
        </Container>
    )
}

export default Success