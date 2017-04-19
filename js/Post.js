import React, { Component } from 'react'

class Post extends Component {
  formatName (name) {
    return name.split('.').join(' ').replace(/[0-9]/g, '')
  }
  render () {
    const post = this.props.attributes
    return (
      <div className='container'>
        <div className='content'>
          <img alt='' className='picture-profile' src={post.pic} />
          <h3>{post.message}</h3>
        </div>
        <h3 className='name'>{this.formatName(post.username)}</h3>
        <h3 className='user-agent'>{post.useragent}</h3>
      </div>
    )
  }
}

export default Post
