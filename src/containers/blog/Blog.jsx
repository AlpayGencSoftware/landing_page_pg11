import React from 'react';
import './blog.css';
import {Article} from '../../components';
import {blog01, blog02, blog03, blog04, blog05}  from './imports';

const Blog = () => {
  return (
    <div className='pg11__blog section__padding' id="blog">
        <div className='pg11__blog-heading'>
          <h1 className='gradient__text'>
             Where does it come from?
          </h1>
        </div>
        <div className='pg11__blog-container'>
            <div className='pg11__blog-container-groupA'>
               <Article imgUrl={blog01} date="06-03-2022" title="Lorem ipsum dolor sit amet..."/>
            </div> 
            <div className='pg11__blog-container-groupB'>
              <Article imgUrl={blog02} date="06-03-2022" title="Lorem ipsum dolor sit amet..."/>
              <Article imgUrl={blog03} date="06-03-2022" title="Lorem ipsum dolor sit amet..."/>
              <Article imgUrl={blog04} date="06-03-2022" title="Lorem ipsum dolor sit amet..."/>
              <Article imgUrl={blog05} date="06-03-2022" title="Lorem ipsum dolor sit amet..."/>
            </div> 
        </div>
     </div>
  )
}  

export default Blog