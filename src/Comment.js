import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <h1>Comment</h1>
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">{this.props.body}</p>
        <div className="comment-footer">
          <a href="#" className="comment-footer-delete">Delete Comment</a>
        </div>
      </div>
    )
  }
}

export default Comment
