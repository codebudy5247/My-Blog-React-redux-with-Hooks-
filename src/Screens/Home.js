import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Post from "../Components/Post";
import Message from "../Components/Message";
import Loader from "../Components/Utils/Loader";
import { getPosts } from "../Redux/Action/Post.action";

const Home = () => {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList);
  const { loading, error, posts } = postList;
  console.log(postList)

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <h1>Latest Posts</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Col>
            {posts && posts.map((post) => (
              <Row key={post._id} >
                <Post post={post} />
              </Row>
            ))}
          </Col>
        </>
      )}
    </>
  );
};

export default Home;
