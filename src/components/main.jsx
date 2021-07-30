import React from "react";
import styled from "styled-components";



const Styles =styled.div`
    width:CALC(100% - 40px);
    background-color:white;
    height:100vh;
    float:left;
    margin-left: 40px;

`;


const Main=(props)=>{
    return(
        <Styles>
        {props.children}
        </Styles>
    )
}

export default Main;