import React from "react";
import styled from "styled-components";

const Styles = styled.div`

`;

const Table = (props) => {

    return (

        <Styles>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>url</th>
                        <th>description</th>
                        <th>language</th>
                        <th>stars</th>
                        <td>last_updated</td>
                        <td>created_at</td>
                        <td>is_fork</td>
                        <td>username</td>
                        <td>user_photo</td>
                        <th>user_url</th>
                        <th>license</th>
                        <th>open_issue</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item, index) => (
                        <tr>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.url}</td>
                            <td>{item.description}</td>
                            <td>{item.language}</td>
                            <td>{item.stargazer_count}</td>
                            <td>{item.updated_at}</td>
                            <td>{item.created_at}</td>
                            <td>{item.fork}</td>
                            <td>{item.owner.login}</td>
                            <td>{item.owner.avatar_url}</td>
                            <td>{item.owner.html_url}</td>
                            <td>{item.license ? item.license.name : "-"}</td>
                            <td>{item.open_issues}</td>

                        </tr>
                    ))}

                </tbody>
            </table>
        </Styles>
    )
}


export default Table;