import React from "react";
import styled from "styled-components";

const Container = styled('div')`
    width: 100%;
    height: 80px;
    background-color: whitesmoke;
    display: flex;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    
`
const Navbar = ()=> {
return (
  <Container>
    <h1>Что за тяги такие бархатные? фуууууууф Кефтеме</h1>
    <img
    style={{'marginRight':"20px"}}
      src="https://frankfurt.apollo.olxcdn.com/v1/files/4ehyunlrm8203-UZ/image"
      alt=""
    />
    <img style={{'marginRight':"20px"}}
      src="https://cdn.vashgorod.ru/r/1200x1000/news/e0/4b/e04ba12b1dcdf0d0a815a1a23d7456d0.jpg"
      alt=""
    />
    <img style={{'marginRight' :"20px"}}
      src="https://img5.lalafo.com/i/posters/original/0d/5e/16/6d91364916986ddeeeb3f0bc35.jpeg"
      alt=""
    />
  </Container>
);
}

export default Navbar