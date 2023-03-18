import React from "react";
import "./blog.scss";
import { Link } from 'react-router-dom';

function BlogBox({Blog_image, Blog_name, Blog_description, Blog_Single_link}) {
  return (
    <div>
      <div className="blogs_box">
        <div className="blog_image">
         <Link to={Blog_Single_link}>
         <img src={Blog_image} alt="" /></Link>
        </div>

        <div className="blog_description">
          <Link to={Blog_Single_link}> <h2>{Blog_name}</h2></Link>

          <p>{Blog_description}</p>
        <Link to={Blog_Single_link} >Read More...</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogBox;
