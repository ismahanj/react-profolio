import React, { Component } from 'react';
import Works from './components/Works';

import data from '../data.json';

class Project extends Component {
    state = {  }
    render() { 
        return (
        <div>
        <h1 className='heading'></h1>
        <div className='work-content'>
                {data.map((Works)=>(
                    <Works key={Works.id}
                             title = {works.title}
                             service = {works.des}
                             imageSrc = {works.imageSrc}
                             url={works.url}
                             gitHub={work.gitHub}
                     ></Works>
                ))}
        </div>
        </div>  );
    }
}
 
export default Project;