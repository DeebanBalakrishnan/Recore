import React from "react";
import styled from "styled-components";
import { generateData } from "../utils";


const Styles = styled.div`

table{
    width:98%;
    border:2px solid #312e2e;
    margin:12px;
    border-collapse: collapse;

}
th,tr,td{
        border: 2px solid #272525 ;
    }


`;

const Tablet =()=>{
    const Data = generateData(70);
    return(
<Styles>
    <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>age</th>
            <th>caste</th>
            <th>religion</th>
            <th>sex</th>
            <th>degree</th>
        </tr>
        </thead>
        <tbody>
            {Data.map((item,index)=>
(
<tr>
    <td>{item.name}</td>
    <td>{item.age}</td>
    <td>{item.caste ? item.caste : "777"}</td>
    <td>{item.religion}</td>
    <td>{item.sex ? item.sex : "-"}</td>
    <td>{item.degree}</td>
</tr>
 )) }

        </tbody>
    
    </table>
        
    
</Styles>
    )
}


export default Tablet;