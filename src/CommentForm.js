import React, {Component} from 'react'

class CommentForm extends Component {
  render () {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
        <label>Join the discussion</label>
        <div className="comment-form-fields">
          <input placeholder="Name:" ref={(input) => this.author = input}/>
          <textarea placeholder="Comment:" ref={(textarea) => this.body = textarea}></textarea>
        </div>
        <div className="comment-form-actions">
          <button type="submit">
          Post comment
          </button>
        </div>
      </form>
    )
  }
  handleSubmit(event){
    event.preventDefault();

    let author = this.author;
    let body = this.body;

    this.props.addComment(author.value, body.value);
  }
}

export default CommentForm
