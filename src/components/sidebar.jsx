import React from "react";

import styled from "styled-components";
import { HomeOutlined, SettingOutlined, ProfileOutlined, CalendarOutlined,
     NotificationOutlined, TabletOutlined, UserOutlined , GithubOutlined} from "@ant-design/icons"
import {  NavLink } from "react-router-dom";

const Styles = styled.div`
position:fixed;

width:40px;
    background-color:#8a8af8;
    min-height:100vh;
    float:left;

    .icons{
        height:20px;
        margin-top:25px;
        margin-left:10px;
    .active{
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



            <div className="icons">
                                <NavLink activeClassName="active" exact  to="/"><HomeOutlined /></NavLink>
            </div>
            
            <div className="icons">
                                <NavLink activeClassName="active" exact  to="/" ><UserOutlined /></NavLink>
            </div>
            
            <div className="icons">
                                <NavLink activeClassName="active"  to="/settings" ><SettingOutlined /></NavLink>
            </div>
            <div className="icons">
                                <NavLink activeClassName="active"  to="/profile" ><ProfileOutlined /></NavLink>
            </div>
            <div className="icons">
                                <NavLink activeClassName="active"  to="/list" ><CalendarOutlined /></NavLink>
            </div>
            <div className="icons">
                                <NavLink activeClassName="active"  to="/notification" ><NotificationOutlined /></NavLink>
            </div>
            <div className="icons">
                                <NavLink activeClassName="active"  to="/tablet" ><TabletOutlined /></NavLink>
            </div>
            <div className="icons">
                                <NavLink activeClassName="active"  to="/repo" ><GithubOutlined /></NavLink>
            </div>
        </Styles>
    )
}

export default Sidebar;