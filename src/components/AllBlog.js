import React, { useState, useEffect } from 'react';
import { Card, CardTitle } from 'reactstrap';
import axios from 'axios';
import Blog from './Blog';
import base_url from './../service/serviceapi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllBlogs = ()=>{

    const [blogs, setBlogs] = useState([]);

    //useEffect should call load from db method
    useEffect(()=>{
        getAllBlogsFromServer()
    }, [])

    const getAllBlogsFromServer = ()=>{
        axios.get(`${base_url}/all`).then(
            (response)=>{
                console.log(response);
                setBlogs(response.data);//if response is present, setBlogs adds the response into blogs array
                toast.success("All blogs successfully loaded from server!")
            },
            (error)=>{
                toast.error("Something went wrong on server!")
            }
        )
    }

    return(
        <Card body inverse color="info">
            <CardTitle className="display-3">
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