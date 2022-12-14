import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { useState } from "react";
import { sliderItems } from "../data";
import { mobile } from '../reponsive'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;

    ${mobile({
        display :'none',
    })}
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    cursor: pointer;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slide * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`

const Image = styled.img`
    height: 100%;
    border-radius: 0% 50% 50% 0%;
    /* background-size: cover; */
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    border: 1px solid black;
    cursor: pointer;
`

const Slider = () => {

    const [slide, setslide] = useState(0)

    const handleClick = (direction) => {
        if (direction === 'left') {
            setslide(slide > 0 ? slide - 1 : 2)
        } else {
            setslide(slide < 2 ? slide + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => { handleClick('left') }}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slide={slide}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => { handleClick('right') }}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider;