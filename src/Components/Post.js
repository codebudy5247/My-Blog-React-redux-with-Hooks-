import React from "react";
import { Card ,Accordion,Button} from "react-bootstrap";
import moment from "moment";
import { Avatar } from "@material-ui/core";
import "./Post.css"



const Post = ({ post }) => {
  
  return (
      <>
      {/*<Card>
      <Card.Header as="h5">
        {" "}
        <strong>{post.name}</strong>
        {"  "}
        {moment(post.createdAt).fromNow()}
      </Card.Header>
      <Card.Img src={post.selectedFile} variant="top" />

      <Card.Body>
        <Card.Title as="div">
          <strong>{post.title}</strong>
        </Card.Title>
        <Card.Title as="div">
          <strong>{post.tags.map((tag) => `#${tag} `)}</strong>
        </Card.Title>
      </Card.Body>
      </Card>*/}
      
      <Accordion>
    <Card className="container">
      <Card.Header as="h5">
      <Avatar
     
      alt={post.name}
      
    >
      {post.name.charAt(0)}
    </Avatar>
        {" "}
        <strong>{post.name}</strong>
        {"  "}
        {moment(post.createdAt).fromNow()}
      </Card.Header>
      <Card.Img src={post.selectedFile} variant="top" className="img"/>
        
      <Card.Body>
        <Card.Title>
          <strong>{post.title}</strong>
        </Card.Title>
        <Card.Title>
          <strong>{post.tags.map((tag) => `#${tag} `)}</strong>
        </Card.Title>
      </Card.Body>
      <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      <Button variant="primary">Read More</Button>{' '}
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
    <h5><Card.Body>{post.message}</Card.Body></h5>
  </Accordion.Collapse>
      </Card>
     
      </Accordion>
      
        

         
        
     
</>
    
  )
}

export default Post;
