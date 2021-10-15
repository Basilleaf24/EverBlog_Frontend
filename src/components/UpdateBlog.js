import React from 'react';
import { Card, CardBody, CardTitle, Input, Container, Button } from 'reactstrap';
import axios from 'axios';
import base_url from '../service/serviceapi';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react/cjs/react.development';

const UpdateBlog = (props)=>{

    const [blog, setBlog] = useState({});
    
    //load data from server by Id
    const getBlogFromServerById=()=>{
        axios.get(`${base_url}/id/${props.location.param}`).then( //props.location.param comes from Blog.js Edit Link attribute
            (response)=>{
                setBlog(response.data);
            },(error)=>{
                toast.error("Something went wrong on server!")
            }
        )
    }

    useEffect(()=>{
        getBlogFromServerById();
    }, [])// ,[] updates data on screen without refreshing

    //posting data to server
    const handleForm = (param)=>{
        putData(blog);
        param.preventDefault();
    }

    const putData = (data)=>{
        axios.put(`${base_url}/update`, data).then(   //for post and put request, data has to be passed
            (response)=>{
                toast.info("Blog Updated Successfully!");
            }, (error)=>{
                toast.error("Something went wrong on server!");
            }
        )
    }

    return(
        <Card body inverse color="info">
            <CardBody>
                <form onSubmit={handleForm}>
                    <CardTitle className="display-2">
                        Update Blog
                    </CardTitle>
                    <Input placeholder="Enter the Blog Title here." value={blog.title} //to show current value
                    onChange={(param)=>{
                        setBlog({...blog, title:param.target.value})
                    }}/>
                    <br/>
                    <Input type="textarea" rows="10"
                    placeholder="Enter the Blog Content here." value={blog.content} //to show current value
                    onChange={(param)=>{
                        setBlog({...blog, content:param.target.value})
                    }}/>
                    <br/>
                    <Container>
                        <Button type="submit" color="success" style={{marginRight:15+"px"}}>
                            Update and Post Blog
                        </Button>
                        <Button type="reset" color="warning">
                            Clear
                        </Button>
                    </Container>
                </form>
            </CardBody>
        </Card>
    )
}
export default UpdateBlog