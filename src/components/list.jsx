import React from "react";
import styled from "styled-components"
import { generateData } from "../utils";

const Styles = styled.div`

.REACT{
    padding-top: 50px;
}
.REACT h1{
    margin-left: 150px;
    margin-top: 5px;
    font-size:20px;
    color:#B74F99
}
p {
    margin-top:10px;
    margin-left: 150px;
    color: #3b3b3b6d;

}
.REACT a{
    margin-left: 150px;
    margin-top:20px;



}
`;
const List =(props)=>{
    const Data = generateData(50)

    return(
        <Styles>
{
   props.data.map((item,index)=>(

        <div className="REACT">
        <a href={item.url}>{item.url}</a>  
        <h1>{item.name}</h1>
        <p>{item.description}
        </p>

    </div>
    ))
}
            
        </Styles>
    )
}

export default List;
