import React from "react";

import styled from "styled-components";
import { HomeOutlined, SettingOutlined, ProfileOutlined, CalendarOutlined,
     NotificationOutlined, TabletOutlined, UserOutlined , GithubOutlined} from "@ant-design/icons"

const Styles = styled.div`

width:40px;
    background-color:#8a8af8;
    min-height:100vh;
    float:left;

    .icons{
        height:20px;
        margin-top:25px;
        margin-left:10px;
    &.active{
        svg{
            fill: red;
        }
    }
    }

    
    .icons svg{
        margin-top:30px;
        position:fixed
    }
    .logo{
        width: 22px;
    height: 22px;
    background-color: #fff700;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 3px;
    }

    

   
    
    
    
    svg{
        fill:#fff


    

        
    
}

`;


const Sidebar = (props) => {
    return (
        <Styles>
            <div className="logo" />



            <div className={props.active === "home" ? "icons active" : "icons" }>
                <a href="#"  onClick={() => props.changeRoute("home")}><HomeOutlined /></a>
            </div>
            
            <div className={props.active === "users" ? "icons active" : "icons" }>
                <a href="#"  onClick={() => props.changeRoute("users")}><UserOutlined /></a>
            </div>
            
            <div className={props.active === "settings" ? "icons active" : "icons" }>
                <a href="#" onClick={() => props.changeRoute("settings")}><SettingOutlined /></a>
            </div>
            <div className={props.active === "profile" ? "icons active" : "icons" }>
                <a href="#"
                onClick={() => props.changeRoute("profile")}><ProfileOutlined /></a>
            </div>
            <div className={props.active === "list" ? "icons active" : "icons" }>
                <a href="#" onClick={() => props.changeRoute("list")}><CalendarOutlined /></a>
            </div>
            <div className={props.active === "notification" ? "icons active" : "icons" }>
                <a href="#"
                onClick={() => props.changeRoute("notification")}><NotificationOutlined /></a>
            </div>
            <div className={props.active === "tablet" ? "icons active" : "icons" }>
                <a href="#"
                onClick={() => props.changeRoute("tablet")}><TabletOutlined /></a>
            </div>
            <div className={props.active === "repo" ? "icons active" : "icons" }>
                <a href="#"
                onClick={() => props.changeRoute("repo")}><GithubOutlined /></a>
            </div>





        </Styles>
    )
}

export default Sidebar;