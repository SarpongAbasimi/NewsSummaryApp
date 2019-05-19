import React from 'react';
import '../styles/news.css';

export const News = (props)=>{
  return(<div>
   {props.data.map((eachData)=> 
   <div key={eachData.id} id='main-news-container'>
     <div className='container' id='news-feed-info'>
      <ul>
         <li>{eachData.webTitle}.</li>
      </ul>
      <div className='img-text-container'>
        <div id='imgdivContainer'>
          <span className='badge badge-danger mb-1'>{eachData.fields.headline}</span>
          <img src={eachData.fields.thumbnail} alt='thumbnail'/>
        </div>
        <div className='trailText'>
        <span>{eachData.fields.trailText}</span>
        </div>
      </div>
      <span id='sec-name'>{eachData.sectionName}</span>
      <a className='findMore' href={eachData.webUrl}>Find out more</a>
     </div>
   </div>
   )}
  </div>);
}