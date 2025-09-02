// import React from 'react'
import { blogData } from "../../blogData";
import BlogCard from "../components/blogCard";
const Blog = () => {
  return (
    <>
      <section className="mt-28" >
        <p className="text-center text-3xl mt-10 md:text-7xl mx-10 md:mx-20 font-semibold z-10 " >
          Our latest blog
        </p>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 mx-2 lg:mx-20 " >
          {blogData.map((data, idx) => (
            <BlogCard key={idx} image={data.image} title={data.title} desc={data.desc} />
          ))}        
        </div>

        
      </section>
    
    
    
    </>
  )
}

export default Blog