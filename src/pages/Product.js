import { Add, Remove } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import { addProduct } from "../redux/CartRedux"
import { mobile } from "../reponsive"
import { publicReq } from "../reqMethods"
import { useDispatch } from 'react-redux';

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;

    ${mobile({
    padding: '10px',
    flexDirection: 'column',
})}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;

    ${mobile({
    height: '50vh',
})}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;

    ${mobile({
    padding: '10px',
})}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-size: 40px;
    font-weight: 100;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;

    ${mobile({
    width: '100%',
})}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 22px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: ${props => props.color === 'white' ? '1px solid grey' : 'none'};
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mobile({
    width: '100%',
})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 600;

    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
    const location = useLocation();
    const productId = location.pathname.split('/')[2];

    const [product, setProduct] = useState({});
    const [qty, setQty] = useState(1)
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const dispatch = useDispatch();

    const handleQTy = (action) => {
        if (action === 'dec') {
            if (qty > 1) {
                setQty(prev => prev - 1);
            }
        } else {
            setQty(prev => prev + 1);
        }
    }

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicReq.get(`/products/find/${productId}`);
                // console.log(res.data);
                setProduct(res.data);
            } catch { }
        }

        getProduct();
    }, [productId])

    const handleClick = () => {
        // Update our cart in db
        // console.log(color, size);
        dispatch(addProduct({ ...product, qty, color, size }));

    }


    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>${product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color?.map(c => (
                                <FilterColor key={c} color={c} onClick={() => setColor(c)} />
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                                {product.size?.map(s => (
                                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQTy('dec')} />
                            <Amount>{qty}</Amount>
                            <Add onClick={() => handleQTy('inc')} />
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default Product