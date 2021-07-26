import React from "react";
import styled from "styled-components";
import {ForkOutlined,StarOutlined} from "@ant-design/icons";
import { generateData } from "../utils";
const Styles = styled.div`

margin-top: 50px;

/* .job{
    width:30%;
    border:1px solid black;
    margin-left:450px;
    margin-top:20px;
}
.profile img{
    position :absolute;
    width:50px;
    border-radius:100px;
    margin-left:10px;
    margin-top:10px;
}
.username p{
    margin-top:75px;
}
.description p{
text-align:center;
background-color:red
}
.reponame h1{
background-color:blueviolet;
width:40%;
align-items:center;
margin-left:30%;
margin-top:-85px;
overflow: hidden;

} */


.job{
    width:32.33%;
    background-color: aqua;
    border:1px solid black;
    position:relative;
    margin-top:10px;
    border-radius:10px;
    float:left;
    margin:5px;
    h1{
    width: 80%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
}
.profile img{
    width:70px;
    border-radius:50%;
    position:absolute;
    margin-left:160px;
    top:-25px;

}
.details{
    text-align:center;
    margin-top: 50px;
}
.name{
    
    background-color:red;
    display:inline-block;
    margin:3px;
    margin-left:155px;
    border-radius:5px;
    padding:5px 7px;
}
.icons{
    background-color:blueviolet;
    border-top: 1px solid #000;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    text-align:center;
}
.icons:hover {
   background-color:white;
}
.icons a:hover {
    color:red;
}
.name:hover{
    background-color:blue;
    font-weight:50px;
}






`;

const Card =()=>{
    const Data = generateData(15)
    return(
        <>
        {
          Data.map((item,index)=>(
        
           <Styles>
            <div className="job">
                <div className="profile">
                    <img src={item.profile_img}/> 
                </div>
                <div className="details">
                    <p>NaveenDA</p>
                <h1 title={item.title}>{item.title}</h1>
                    <a>🌈 A UI Design Language</a>
                </div>
                <div className="name" >Language</div>
                <div className="icons">
                    <a href="https://api.github.com/repos/NaveenDA/ant-design-landing/forks"><ForkOutlined /></a>
                </div>
            </div>
             </Styles>
          ))
         }
         </>
    )
}

    

    


export default Card;