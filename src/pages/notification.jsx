import React from "react";
import styled from "styled-components";
import { generateData } from "../utils";



const Styles = styled.div`

table{
    width: 100%;
    border-collapse: collapse; 
    border:2px solid #8a8585;
    margin: 12px;


    td,tr,th{
        border:1px solid #e70606;
    }
}
`;

const server_data = generateData(30);

const Notification = () => {
    return (
        <Styles>
            <div className="google">

            </div>
            { <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>URL</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    {server_data.map((item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.url}</td>
                            <td>{item.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>}
        </Styles>
    )
}

export default Notification;