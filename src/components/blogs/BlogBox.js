import React from "react";
import "./blog.scss";
import BLog from "../../assets/blogs/2433830.jpg";
import { Link } from 'react-router-dom';

function BlogBox({Blog_image, Blog_name, Blog_description, Blog_Single_link}) {
  return (
    <div>
      <div className="blogs_box">
        <div className="blog_image">
         <Link to={Blog_Single_link}>
         <img src={BLog} alt="" /></Link>
        </div>

        <div className="blog_description">
          <h2>Travel Safety</h2>
          <p>jgjdfnlkj dfggnl bfgl rglfbgl fg flbnflgb fgfbg lf flgbflggbf</p>
        <Link to={Blog_Single_link} >Read More...</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogBox;
