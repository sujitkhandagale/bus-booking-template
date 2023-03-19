import React,{useState} from "react";
import Footer from "../../components/layouts/Footer";

import BlogBox from "./../../components/blogs/BlogBox";
import Header from "./../../components/layouts/Header";

import BlogSidebar from "./../../components/blogs/BlogSidebar";

function Blogs() {
  const [blogDetails] = useState([
    {
      date: "11/01/2022",
      src: "https://blog.railyatri.in/wp-content/uploads/2019/05/Smart-Bus-and-Female-safety.png",
      title: "Women's Safety",
      desc: "hi",
    },
    {
      date: "11/01/2022",
      src: "https://blog.railyatri.in/wp-content/uploads/2019/05/Smart-Bus-and-Female-safety.png",
      title: "Women's Safety",
      desc: "hi",
    },
  ]);



  return (
    <section className="blog_page_m">
      <Header />
      <div className="blog_page">
        <div className="blog_boxes">
          {
            blogDetails.map((blogDetails) => (
              <BlogBox
              Blog_image={blogDetails.src}
              Blog_name={"Women's Safety"}

            />
            ))
          }
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
