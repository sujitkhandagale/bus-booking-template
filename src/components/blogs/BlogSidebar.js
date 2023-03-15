import React from 'react'
import './blog.scss'
import Blog from "../../assets/blogs/2433830.jpg"

function BlogSidebar() {
  return (
    <div className='blog_sidebar'>
        <div className="blog_header">
            <h3>Blog Treading</h3>
        </div>
        <div className="blog_sidebar_news_list">
            <div className="blog_sidebar_news_items">
                <div>
<img src={Blog} alt="" />
                </div>
                <div>
                   <h4> Safery Guide Safery Guide</h4>
                   <p>fkgmdfklgnflgknfkl</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogSidebar;