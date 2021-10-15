import React, { useState } from 'react';
import { Card, CardTitle } from 'reactstrap';
import Blog from './Blog';

const AllBlogs = ()=>{

    const [blogs, setBlogs] = useState([
        {blogId:"12345", title:"Test5", content:"Test content5"},
        {blogId:"12346", title:"Test6", content:"Test content6"},
        {blogId:"12347", title:"Test7", content:"Test content7"},
        {blogId:"12348", title:"Test8", content:"Test content8"},
        {blogId:"12349", title:"Test9", content:"Test content9"}
    ]);

    return(
        <Card body inverse color="info">
            <CardTitle className="display-2">
                Blogs to read....
            </CardTitle>     
            {
                blogs.length>0?
                blogs.map((blog)=>(
                    <Blog key={blog.blogId} blog={blog}/>
                ))
                :
                "No blogs available to display"
            }       
        </Card>
    )
}

export default AllBlogs;