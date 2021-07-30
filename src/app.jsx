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
import List from "./components/list";
import { UserOutlined } from "@ant-design/icons";
import {BrowserRouter, Switch, Route} from "react-router-dom";





const Styles = styled.div`
`;

const App = () => {
    const [active, setactive] = useState("bugs");
    const changeRoute = (name) => {
        setactive(name);
    }

    return (
        <BrowserRouter>
        <Styles>
            <Sidebar active={active} changeRoute={changeRoute} />
            <Main>
                <Switch>
                    <Route path="/settings" component={Settings} />
                    <Route path="/notification" component={Notification} />
                    <Route path="/bugs" component={Bugs} />
                    <Route path="/users" component={Users} />
                    <Route path="/repo" component={Repo} />
                    <Route path="/tablet" component={Tablet} />
                    <Route path="/" component={Home} />
                </Switch>
            </Main>
        </Styles>
        </BrowserRouter>
    )
}

export default App;