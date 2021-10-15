import React from 'react';
import { Card, CardBody, CardText, CardTitle, Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import base_url from '../service/serviceapi';
import { toast } from 'react-toastify';

const Blog =({blog, update})=>{//blog and update property is got from AllBlog.js
    
    const deleteBlog =(blogId)=>{
        axios.delete(`${base_url}/delete/${blogId}`).then(
            (response)=>{
                toast.info("Blog"+blogId+"deleted successfully!");
                update(blogId);
            },
            (error)=>{
                toast.error("Something went wrong on server!");
            }
        
        )
    }

    return(
        <Card body inverse color="info">
            <CardBody>
                <CardTitle className="font-weight-bold" style={{fontWeight:"bold"}}>
                    {blog.title}
                </CardTitle>

                <CardText>{blog.content}</CardText>
                
                <Container>
                    <Link className="btn btn-primary" to="/update" style={{marginRight:15+"px"}}>
                        Edit
                    </Link>
                    <Button className="btn btn-danger"
                    onclick={()=>{
                        deleteBlog(blog.blogId)
                    }}>
                        Delete
                    </Button>
                </Container>
            </CardBody>
        </Card>
    )
}
export default Blog;