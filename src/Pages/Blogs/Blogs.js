import React from "react";
import Footer from "../../components/layouts/Footer";

import BlogBox from "./../../components/blogs/BlogBox";
import Header from "./../../components/layouts/Header";

import BlogSidebar from "./../../components/blogs/BlogSidebar";

function Blogs() {
  return (
    <section className="blog_page_m">
      <Header />
      <div className="blog_page">
        <div className="blog_boxes">
          <BlogBox />
          <BlogBox />
          <BlogBox />
          <BlogBox />
          <BlogBox />
          <BlogBox />
        </div>
        <div>
          <BlogSidebar />
        </div>
      </div>
      <div>
        <div className="blog_navigation">
            <button>Previous</button>
            <button>0</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>Next</button>
        </div>

      </div>
      <Footer />
    </section>
  );
}

export default Blogs;
