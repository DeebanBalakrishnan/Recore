import React, { useState } from "react";
import styled from "styled-components";

const Styles = styled.div`


.container{
    width:100%;
    height:40px;
    background-color: aqua;
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

const Users =(props)=>{
    const [active,setActive] = useState("table")
    return(
        <Styles>
            <div>
                <div className="container">
                    <div className="left">users-{active}</div>
                    <div className="right">
                        <button className="active" onClick={()=>setActive("table")}>Table</button>
                        <button onClick={()=>setActive("list")}>List</button>
                        <button onClick={()=>setActive("card")}>Card</button>
                    </div>
                </div>
            </div>
        </Styles>

    )
}

export default Users;