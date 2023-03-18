import React from 'react'
import Header from './../../components/layouts/Header';
import Footer from './../../components/layouts/Footer';
import BlogSidebar from '../../components/blogs/BlogSidebar';
import SinlgeBlogDetails from '../../components/blogs/SinlgeBlogDetails';

function SinglePage() {
  return (
    <div>
        <Header/>
<SinlgeBlogDetails/>
        <Footer/>
    </div>
  )
}

export default SinglePage