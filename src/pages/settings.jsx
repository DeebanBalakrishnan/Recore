import React from "react";

import styled from "styled-components";
import { generateData } from "../utils";

const Styles = styled.div`

table{
    width:80%;
    border:2px solid #272525;
    border-collapse: collapse;
    margin:12px;

    th,tr,td{
        border: 2px solid #272525 ;
    }




}

`;

const Settings=()=>{
    const Data = generateData(50);
    return(
        <Styles>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>bio</th>
                    </tr>
                </thead>
                <tbody>
                    {Data.map((item,index)=>
                         (
                            <tr>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.sex ? item.sex : "-"}</td>
                            <td>age</td>
                        </tr>
                    ))}
               

                </tbody>
            </table>
        </Styles>
    )
} 

export default Settings;