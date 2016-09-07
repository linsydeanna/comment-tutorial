import React, { Component } from 'react';
import Comment from './Comment'
import CommentForm from './CommentForm'

class CommentBox extends Component {
  constructor() {
    super();

    this.state = {
      showComments: false,
      comments: [
        {id: 1, author: "Barney Rubble", body: "I like rocks"},
        {id: 2, author: "Fred Flintstone", body: "I love bowling on my tippy toes"}
      ]
    }
  }

  getComments() {
    return this.state.comments.map((comment) => {
      return (<Comment author={comment.author} body={comment.body} key={comment.id}/>)
    })
  }
  getCommentCount(commentCount) {
    if (commentCount === 0) {
      return "No comments yet!";
    } else if (commentCount === 1) {
      return "1 comment"
    } else {
      return `${commentCount} comments`
    }
  }

  handleClick() {
    this.setState({
      showComments: !this.state.showComments
    })
  }

  render() {
    const comments = this.getComments();
    let buttonText = "Show comments";
    if (this.state.showComments) {
      buttonText = "Hide comments"
    }
    let commentNodes
    if (this.state.showComments) {
      commentNodes = <div className="comment-list">
      {comments}
      </div>
    }
    return (
      <div>
        <CommentForm addComment={this.addComment.bind(this)}/>
        <div className="comment-box">
      <button onClick={() => this.handleClick()}>
        {buttonText}
      </button>
      <h4 className="comment-count">{this.getCommentCount(comments.length)}</h4>
      </div>
      <div>{commentNodes}</div>
      </div>
    );
  }
    addComment(author, body) {
      const comment = {
        id: this.state.comments.length + 1, author, body};
        this.setState({comments: this.state.comments.concat([comment])
        });
      }
  }

export default CommentBox
