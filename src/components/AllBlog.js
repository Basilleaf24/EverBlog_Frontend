import { React, useState } from 'react';
import { Card, CardTitle } from 'reactstrap';
import Blog from './Blog';

const AllBlogs = ()=>{

    const [blogs, setBlogs] = useState([
        {blogId:"12345", title:"Test", content:"Test content"}
    ]);

    return(
        <Card body inverse color="info">
            <CardTitle className="display-2">
                All Blogs
            </CardTitle>     
            {
                blogs.length>0?
                blogs.map((blog)=>{
                    <Blog key={blog.blogId} blog={blog}/>
                })
                :
                "No blogs available to display"
            }       
        </Card>
    )
}

export default AllBlogs;