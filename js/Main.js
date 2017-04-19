import React from 'react'
import { render } from 'react-dom'
import Title from './Title'
import Post from './Post'
import '../public/normalize.css'
import '../public/style.css'

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {posts: []}
  }

  componentDidMount () {
    this.apiCall()
  }

  apiCall () {
    return axios.get('http://private-227b9-jsonapifizzbuzz.apiary-mock.com/messages')
      .then((response) => {
        this.setState({ posts: response.data.data })
      })
  }

  render () {
    const posts = this.state.posts.map(function (post, index) {
      return (
      <div key={index}>
        <Post attributes={post.attributes} />
      </div>
        )
    }
    )
    return (
      <div>
        <Title />
        {posts}
      </div>
    )
  }
}

export default Main
