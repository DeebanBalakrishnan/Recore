import React from "react";
import styled from "styled-components";
import {ForkOutlined,StarOutlined} from "@ant-design/icons";
const Styles = styled.div`

.job{
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

}



`;

const List =()=>{
    return(
        <Styles>
            <div className="job">
                <div className="profile">
                    <img src="https://avatars.githubusercontent.com/u/20555082?v=4" />
                </div>
                <div className="username">
                    <p>NaveenDA</p>
                </div>
                <div className="reponame">
                    <h1>Reponame</h1>
                </div>
                <div className="description">
                    <p>🌈 A UI Design Language</p>
                </div>
                <div className="icons">
                    <a href="https://api.github.com/repos/NaveenDA/ant-design-landing/forks"><ForkOutlined /></a>
                </div>
            </div>
        </Styles>
    )
}


export default List;