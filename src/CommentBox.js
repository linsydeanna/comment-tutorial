import React, { Component } from 'react';
import Comment from './Comment'

class CommentBox extends Component {
  constructor() {
    super();

    this.state = {
      showComments: false
    }
  }

  getComments() {
    const commentList = [
      {id: 1, author: "Barney Rubble", body: "I like rocks"},
      {id: 2, author: "Fred Flintstone", body: "I love bowling on my tippy toes"}
    ]
    return commentList.map((comment) => {
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
      <div className="comment-box">
      <button onClick={this.handleClick.bind(this)}>
        {buttonText}
      </button>
      <h4 className="comment-count">{this.getCommentCount(comments.length)}</h4>
      {commentNodes}
      </div>
    )
  }
}

export default CommentBox
