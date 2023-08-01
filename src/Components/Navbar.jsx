import { Badge } from '@material-ui/core';
// import LogoutIcon from '@mui/icons-material/Logout';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';  

const  Container = styled.div`
height: 60px;
${mobile({backgroundColor: "red" })};
`
const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
align-items: center;
justify-content:space-between;
${mobile({padding: "10px 0px" })};

`
const Left = styled.div`
flex: 1;
display:flex;
align-items:center` 

const Language =styled.div`
font-size: 14px;
cursor:pointer;
${mobile({display: "none"})};
`;
const SearchContainer=styled.div`border: 1px solid lightgray;
display: flex;  align-items:center; margin-left:25px; padding: 5px  `

const Input=styled.input`
    border: none;
    outline:none;
${mobile({width: "50px"})};
`;

const Center = styled.div`flex: 1 ;text-align: center;`
const Logo = styled.h1`
font-weight: bold;
${mobile({fontSize: "20px"})};

`
const Right = styled.div`flex: 1; display:flex; justify-content: flex-end;
${mobile({flex:2,justifyContent: "center"})};
`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 30px;
text-decoration: none;
${mobile({fontSize: "12px",marginLeft: "10px"})};

`
const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  // console.log(quantity);
  return (
    <Container>
    <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input placeholder='Search'/> 
                <Search style={{color: "grey",fontSize:20}}/>
            </SearchContainer>
            </Left>
        <Center><Logo>E-STORE</Logo></Center>
        <Right>
          <Link style={{textDecoration: 'none'}} to={"/register"}>
        <MenuItem>Register</MenuItem>
        </Link>
        <Link style={{textDecoration: 'none'}} to={"/login"}>
        <MenuItem>Sign In</MenuItem>
        </Link>
        <Link to={"/"}>
        {/* <MenuItem>
        <LogoutIcon/>
        </MenuItem> */}
        </Link>
        <Link to={"/cart"}>
        <MenuItem>
        <Badge badgeContent={quantity} color="primary">
        < ShoppingCartOutlined />
        </Badge>
        </MenuItem>
        </Link>
        </Right>
    </Wrapper>
    </Container>
  )
}

export default Navbar 
