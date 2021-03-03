import React, { Component } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiSend, FiHeart } from "react-icons/fi";
import { RiBookmarkLine } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import { VscSmiley } from "react-icons/vsc";
import { connect } from "react-redux";

import { Row, Col, Container, Card, Image, Form } from "react-bootstrap";
import "./feed.css";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  fetchMewithThunk: (id) =>
    dispatch(async (dispatch) => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDNmNmYzM2QwYTFmMDIxZDExNjMwYjEiLCJpYXQiOjE2MTQ3Njk5OTUsImV4cCI6MTYxNTM3NDc5NX0.tNf_qPBp5yKguRdzV4kW7b4FHSn47i_tcXV8WFidCaU";
      const url = process.env.REACT_APP_URL;
      const response = await fetch(url + "/users/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const me = await response.json();

      if (response.ok) {
        dispatch({
          type: "SET_ME",
          payload: me,
        });
      } else {
        dispatch({
          type: "SET_ERROR",
          payload: me,
        });
      }
    }),
  fetchMyFollowedOneswithThunk: (id) =>
    dispatch(async (dispatch) => {
      const url = process.env.REACT_APP_URL;
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDNmNmYzM2QwYTFmMDIxZDExNjMwYjEiLCJpYXQiOjE2MTQ3Njk5OTUsImV4cCI6MTYxNTM3NDc5NX0.tNf_qPBp5yKguRdzV4kW7b4FHSn47i_tcXV8WFidCaU";
      const response = await fetch(url + "/posts/fromFollowed", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const myFollowedOnes = await response.json();
      console.log("I foloow:",myFollowedOnes)

      if (response.ok) {
        dispatch({
          type: "SET_USERS_I_FOLLOWED",
          payload: myFollowedOnes,
        });
      } else {
        dispatch({
          type: "SET_ERROR",
          payload: myFollowedOnes,
        });
      }
    }),

  fetchUserswithThunk: (id) =>
    dispatch(async (dispatch) => {
      const url = process.env.REACT_APP_URL;
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDNmNmYzM2QwYTFmMDIxZDExNjMwYjEiLCJpYXQiOjE2MTQ3Njk5OTUsImV4cCI6MTYxNTM3NDc5NX0.tNf_qPBp5yKguRdzV4kW7b4FHSn47i_tcXV8WFidCaU";
      const response = await fetch(url + "/users", {
        headers: {
          "Authorization":"Bearer " +
          token

        },
      });

      const users= await response.json();
      console.log("users", users);

      if (response.ok) {
        dispatch({
          type: "SET_USERS",
          payload: users,

        });
      } else {
        dispatch({
          type: "SET_ERROR",
          payload: users,
        });
      }
    }),
});

class Feed extends Component {
  componentDidMount = () => {
    this.props.fetchMewithThunk();
    this.props.fetchUserswithThunk();
    this.props.fetchMyFollowedOneswithThunk();
  };

  state = {
    truncate: true,
    comments: [],
    commentModalShow: false,
  };
  render() {
    const { posts, name, surname, userName, email, follows } = this.props.me.me;
    const { myFollowedOnes} = this.props.me;
    

    return (
      <>
        <Container className="general-font">
          {/* {follows.length > 0 && follows.map((user)=> { */}
          <Row className="cols-12">
            <Col>
              <Card>
                <Card.Header
                  className="d-flex m-0"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
                    roundedCircle
                    className="profilePic mr-3"
                  />
                  <p className="p-0 mt-2 general-font font-weight-bold">
                    {" "}
                    {email}
                  </p>
                  <a className=" ml-auto a-tags ">
                    {" "}
                    <BsThreeDots />
                  </a>
                </Card.Header>
                <div className=" image">
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1562&q=80"
                    className="img img-responsive full-width"
                  />
                </div>

                <Card.Body>
                  <div className="d-flex icons ">
                    <FiHeart className="  mr-3" />
                    <FaRegComment className=" mr-3" />
                    <FiSend className=" mr-3" />
                    <RiBookmarkLine className=" ml-auto" />
                  </div>
                  <Card.Title>
                    <Image
                      src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
                      roundedCircle
                      className="profilePic-mini mr-1"
                    />
                    <p className="d-inline general-font">
                      <span>
                        <a className="a-tags font-weight-bold">somebody</a>
                      </span>{" "}
                      &{" "}
                      <span>
                        <a className="a-tags font-weight-bold">260 people</a>
                      </span>{" "}
                      liked this
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <p className="p-0 m-0  mr-2 d-inline general-font font-weight-bold a-tags">
                      {" "}
                      username
                    </p>
                    <p
                      className={
                        "m-0 p-0  " +
                        (this.state.truncate === false ? "" : "text-truncate")
                      }
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis amet et soluta quos aliquam voluptate! In minus
                      iusto animi, earum voluptatem ipsam beatae tenetur natus
                      rerum aliquam illum velit id.
                    </p>
                    {this.state.truncate === true && (
                      <span>
                        <a
                          className="a-tags text-muted"
                          onClick={() => this.setState({ truncate: false })}
                        >
                          see more
                        </a>
                      </span>
                    )}
                    {this.state.comments.length > 0 && (
                      <>
                        <span>
                          <a
                            className="a-tags text-muted"
                            onClick={() =>
                              this.setState({ commentModalShow: true })
                            }
                          >
                            see all the {} comments .
                          </a>
                        </span>
                        {this.state.comments.slice(0, 2).map((comment) => (
                          <div>
                            <p className="p-0 m-0  mr-2 d-inline general-font font-weight-bold">
                              {" "}
                              {comment.username}
                            </p>
                            <p className="m-0 p-0  ">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Blanditiis amet et soluta quos aliquam
                              voluptate! In minus iusto animi, earum voluptatem
                              ipsam beatae tenetur natus rerum aliquam illum
                              velit id.
                            </p>
                          </div>
                        ))}
                      </>
                    )}

                    <p
                      className="text-muted mt-2 mb-0"
                      style={{ fontSize: "10px" }}
                    >
                      {" "}
                      22 MINS AGO
                    </p>
                  </Card.Text>
                </Card.Body>

                <Card.Footer
                  className="d-flex m-0"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <VscSmiley className="mr-3 icons mt-2" />

                  <Form className="cursor ">
                    <Form.Control
                      type="text"
                      placeholder="Add comment..."
                      className="rq-form-element  "
                    />
                  </Form>
                  <p className="mb-1 mt-2 ml-auto">
                    <span>
                      <a
                        className="a-tags font-weight-bold "
                        style={{ color: "#0095F6" }}
                      >
                        Share{" "}
                      </a>
                    </span>{" "}
                  </p>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
          {/* })} */}
        </Container>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
