import React from 'react';
import { Card, CardBody, CardTitle, Input, Container, Button } from 'reactstrap';

const AddBlog = ()=>{
    return(
        <Card body inverse color="info">
            <CardBody>
                <form onSubmit="#">
                    <CardTitle className="display-2">
                        New Blog
                    </CardTitle>
                    <Input placeholder="Enter the Blog Title here."
                    onChange="#"/>
                    <br/>
                    <Input type="textarea" rows="10"
                    placeholder="Enter the Blog Content here."
                    onChange="#"/>
                    <br/>
                    <Container>
                        <Button type="submit" color="success" style={{marginRight:15+"px"}}>
                            Post Blog
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
export default AddBlog