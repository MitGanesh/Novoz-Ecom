import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../reponsive'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../App.css';
import { logout } from '../redux/apiCalls'


const Container = styled.div`
    height: 60px;

    ${mobile({
    height: '50px',
})}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mobile({
    padding: '10px 0px',
})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;

    ${mobile({
    marginLeft: '10px',
})}
`
const Input = styled.input`
    border: none;

    ${mobile({
    width: '50px',
})}
`
const Logo = styled.h1`
    font-weight: bold;
    display: flex;
    justify-content: center;
    cursor: pointer;
    color: black;
    text-decoration: none;

    ${mobile({
    fontSize: '24px',
})}
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;

    ${mobile({
    display: 'none',
})}
`
const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ${mobile({
    justifyContent: 'center',
    flex: 2,
})}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;


    ${mobile({
    fontSize: '12px',
    marginLeft: '10px',
})}
`


const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    const user = useSelector(state => state.user.currUser);
    const dispatch = useDispatch();

    // console.log(quantity);
    const handleLogout = () => {
        if (user) {
            // console.log("User Loged IN");
            logout(dispatch);
        } else {
            // console.log("Log out User");
        }
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <Search style={{ color: 'grey', fontSize: 18 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        <Link to='/' className='normal'>
                            NOVOZ.
                        </Link>
                    </Logo>
                </Center>
                <Right>
                    {!user && <Link to='/register' className='normal'>
                        <MenuItem>REGISTER</MenuItem>
                    </Link>}
                    <Link to='/login' className='normal'>
                        <MenuItem onClick={handleLogout}>{user ? "LOGOUT" : "LOGIN"}</MenuItem>
                    </Link>
                    <Link to='/cart'>
                        <MenuItem>
                            <Badge color="success" badgeContent={quantity}>
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar