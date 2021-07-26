import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import styled from "styled-components";
import "./app.css";
import Home from "./pages/home";
import Settings from "./pages/settings";
import Notification from "./pages/notification";
import Bugs from "./pages/bugs";
import Users from "./pages/users";
import Tablet from "./pages/tablet";
import Repo from "./pages/repo";
import Card from "./components/card";
import { UserOutlined } from "@ant-design/icons";



const Styles = styled.div`
`;

const App = () => {
    const [active, setactive] = useState("bugs");
    const changeRoute = (name) => {
        setactive(name);
    }

    return (
        <Styles>
            <Sidebar active={active} changeRoute={changeRoute} />
            <Main changeRoute={changeRoute} >

                {active === "home" ? <Home /> : ""}
                {active === "settings" ? <Settings /> : ""}
                {active === "notification" ? <Notification /> :""}
                {active === "bugs" ? <Bugs/> :""}
              {active === "users" ? <Users /> :""}
              {active === "tablet" ? <Tablet /> :""}
              {active === "repo" ? <Repo /> :""}
              {active === "card" ? <Card /> :""}
            </Main>
        </Styles>
    )
}

export default App;