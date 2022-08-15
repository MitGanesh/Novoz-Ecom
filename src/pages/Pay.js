import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Button = styled.button`
    border: 1px solid black;
    width: 120px;
    padding: 20px;
    background-color: black;
    color: white;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
`

const KEY = 'pk_test_51LWMTHSFIxOEzLJnwc8iymRjfQwkbMaQMTPIr6uhjedegqjXxs18eAZoGlyGMedLu70QSmZU9i97pAZ1YVcuUfHm008L34ZJuQ';

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);
    const history = useNavigate()

    const onToken = async (token) => {
        setStripeToken(token);
    }

    useEffect(() => {
        const makeReq = async () => {
            try {
                const res = await axios.post('http://localhost:5000/api/checkout/payment', {
                    tokenId: stripeToken.id,
                    amount: 5500,
                })

                console.log(res.data);
                history('/success');
            } catch (err) {
                console.log(err);
            }
        };

        stripeToken && makeReq();
    }, [stripeToken,history])


    return (
        <Container>
            {stripeToken ? (<span>Processing please wait...</span>) : (

                <StripeCheckout
                    name="NOVOZ E-COM Co."
                    image="https://i.ibb.co/N1pMCHS/logo.jpg"
                    billingAddress
                    shippingAddress
                    description='Total payable is $55'
                    amount={5500}
                    token={onToken}
                    stripeKey={KEY}
                >
                    <Button>PAY NOW</Button>
                </StripeCheckout>
            )}
        </Container>
    )
}

export default Pay