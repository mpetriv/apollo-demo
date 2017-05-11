import React, { Component, PropTypes } from 'react';

export default class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="row">
            <div className="col s12">
              <div className="card-panel">
                <span className="blue-text text-darken-2">{this.props.post.content}</span>
              </div>
            </div>

          </div>

        )
    }
}

// Post requires props with a post attribute with a content attribute of type string
Post.propTypes = {
    post: PropTypes.shape({
        content: PropTypes.string
    }).isRequired
};
