import React from "react";
import Footer from "../../components/layouts/Footer";

import BlogBox from "./../../components/blogs/BlogBox";
import Header from "./../../components/layouts/Header";

import BlogSidebar from "./../../components/blogs/BlogSidebar";

function Blogs() {
  const BLogImage = {
    Post_1: {
      date: "11/01/2022",
      src: "https://blog.railyatri.in/wp-content/uploads/2019/05/Smart-Bus-and-Female-safety.png",
      title: "Women's Safety",
      desc: "hi",
    },
    Post_2: {
      date: "",
      src: "",
      title: "",
      desc: "",
    },
    Post_3: {
      date: "",
      src: "",
      title: "",
      desc: "",
    },
    Post_4: {
      date: "",
      src: "",
      title: "",
      desc: "",
    },
    Post_5: {
      date: "",
      src: "",
      title: "",
      desc: "",
    },
    Post_6: {
      date: "",
      src: "",
      title: "",
      desc: "",
    },
    Post_7: {
      date: "",
      src: "",
      title: "",
      desc: "",
    },
    Post_8: {
      date: "",
      src: "",
      title: "",
      desc: "",
    },
  };
  return (
    <section className="blog_page_m">
      <Header />
      <div className="blog_page">
        <div className="blog_boxes">
          <BlogBox
            Blog_image={BLogImage.Post_1.src}
            Blog_name={"Women's Safety"}
            Blog_description={"gnfgjfnbgkj sfdgkfng sdfgngl dsg dlgnb"}
            Blog_Single_link={"https://gfgngfl.com"}
          />
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
