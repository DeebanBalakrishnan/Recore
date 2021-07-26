import {getUser} from "../utils";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Table from "../components/table";
import Card from "../components/card";


const Styles = styled.div`


 .container{
    width:100%;
    height:40px;
    background-color: aqua;
}
.main{
    width:50%;
    background-color: blue;
    height: 40px;
    margin-top: 20px;
    margin-left:25%;
}
.main button{
    margin-left:370px;
    padding:5px 12px;
    border-radius:0;
    border:none;
    border-right:1px solid #d3d3d3;
    margin-top:5px;
}
input{
    height:25px;
    padding:2px 12px;
    border-radius:0;
    border:none;
    margin-left:10px;
    line-height:40px;
}
.left{
    width:30%;
    background-color: #d4d409;
    height:40px;
    float:left;

}
.right{
    width:70%;
    height:40px;
background-color:red;
float:left;
line-height:40px;
text-align:right;
padding-right:40px;

button{
    padding:5px 12px;
    border-radius:0;
    border:none;
    border-right:1px solid #d3d3d3;
    
    &:last-child{
        border-right: none;
        border-top-right-radius:3px;
        border-bottom-right-radius:3px;
    }
    &:first-child{
        border-top-left-radius:3px;
    border-bottom-left-radius:3px;
    }
&.active{
    color: red;
}

}

}
`;

const Repo =(props)=>{
    const [active,setActive] = useState("list")
    const [Data,setData] = useState([])
    useEffect(()=>{
        getUser("naveenda").then((res=>{
            setData(res)
        }))
    },[])
   
    return(
        <Styles>
            <div>
                <div className="container">
                    <div className="left">Repos-{active}</div>
                    <div className="right">
                        <button className={active === "table" ?"active" :null} onClick={()=>setActive("table")}>Table</button>
                        <button className={active === "list" ?"active" :null} onClick={()=>setActive("list")}>List</button>
                        <button  className={active === "card" ?"active" :null}onClick={()=>setActive("card")}>Card</button>
                    </div>
                </div>
            </div>
            <div className="main">
                <input placeholder= "Enter the User Name" />
                <button type="button">Search</button>
            </div>
{active === "table" ?<Table data={Data} /> : null}
{active === "card" ?<Card data={Data} /> : null}



        </Styles>
    )
}

export default Repo;