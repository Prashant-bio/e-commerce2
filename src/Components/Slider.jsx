import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../Data';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';


const Container = styled.div`
width:100vw;
height: 100vh;
display: flex;
// background-color:green;
position:relative;
${mobile({display: "none"})};

`;
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: white;
border-radius: 50%;
display: flex;
justify-content:center;
align-items:center;
position: absolute;
top: 0;
bottom:0;
left:${props=> props.direction ==="left" && "10px"};
right:${props=> props.direction ==="right" && "10px"};  
margin:auto;
cursor:pointer;
opacity:0.6;
z-index: 2;
`;
const Wrapper = styled.div`
height: 100%;
// width:100%;
display:flex;
transition: all 1s ease;
transform: translateX(${props=>props.slideIndex * -100}vw);
`;
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props=> props.bg}; 
`;
const ImgContainer = styled.div`
height:100%; 
flex:1; 
`;
const Image = styled.img`
height: 80%;
`;
const InfoContainer = styled.div`
width:100vw;
flex: 1;
padding: 50px;
`;
 const Title= styled.h1`
 font-size: 70px;
 `;
 const Desc= styled.p`
 margin: 50px 0px;
 font-size: 20px;
 font-weight: 500;
 letter-spacing: 3px;
 `;
 const Button= styled.button`
 padding: 10px;
 font-size: 20px;
 background-color: transparent;
 cursor:pointer;
 `;
 
const Slider = () => {
    const [slideIndex,setSlideIndex]=useState(0);
    const handleClick =(direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex>0 ? slideIndex-1 : 2)
        }
        else{
             setSlideIndex(slideIndex<2 ? slideIndex+1 : 0)
        }
    };
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex} >
            {sliderItems.map(item=>(
                <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Link to="/cart"><Button>SHOP NOW</Button></Link>
                </InfoContainer>
                </Slide>
            ))}
        
        {/* <Slide bg='fcfled'>
        <ImgContainer>
        <Image src='https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man_158538-5015.jpg?w=2000'/>
        </ImgContainer>
        <InfoContainer>
            <Title>Winter Sale</Title>
            <Desc>Don't Compromise on style! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
            <Button>SHOP NOW</Button>
        </InfoContainer>
        </Slide>
        <Slide bg='fbf0f4'>
        <ImgContainer>
        <Image src='https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man_158538-5015.jpg?w=2000'/>
        </ImgContainer>
        <InfoContainer>
            <Title>Popular Sale</Title>
            <Desc>Don't Compromise on style! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
            <Button>SHOP NOW</Button>
        </InfoContainer>
        </Slide> */}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
    )
}

export default Slider