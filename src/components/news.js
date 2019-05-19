import React from 'react';

export const News = (props)=>{
  return(<div>
   {props.data.map((eachData)=> 
    <ul key={eachData.id}>
     <li>{eachData.sectionId}</li>
    </ul>
   )}
  </div>);
}