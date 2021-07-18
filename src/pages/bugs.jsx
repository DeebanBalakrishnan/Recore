import React from "react";

import styled from "styled-components";
import { generateData } from "../utils";


const Styles = styled.div`

border: 1px solid black;
width: 30%;
border-radius:30px;
overflow: hidden;
margin:12px;
padding-bottom:12px;
float: left; 
height:300px;

.container{
   padding: 12px;
}
.image img{
   width: 100%;
}
.Details p,h1{
    margin-left: 20px;
    margin-top:10px;
}
.profile img{
    width:50px;
    border-radius: 50px;
    margin-top: 30px;
    float: left;
}
.profile h1{
    font-size: 20px;
    float: left;
    margin-top: 50px;
}
.profile p{
     float: left;
    margin-top: 55px;    
    margin-top: 53px;
    margin-left: 5px

}


`;

const Bugs = () => {
    const Data = generateData(5)
    return (
        <>
         {
                Data.map((item,index)=>(
        <Styles>
          
              <div className="image">
                <img src=
                    {item.cover_img} />
            </div>
            <div className="container">
          
            <div className="Details">
                <p>{item.tag}</p>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
            </div>
            <div className="profile">
                <img src={item.profile_img}/>
                <h1>{item.title}</h1>
                <p></p>
            </div>
            </div>

        </Styles>
         ))
        }
        </>
    )
}

export default Bugs;