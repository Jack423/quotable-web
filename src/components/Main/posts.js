import React from 'react'
import Post from '../Post/Post'

const Posts = (props) => {
    // Creates post elements from the data passed
    const postList = props.data.map((obj, index) => {
        return (<Post key={index} postId={obj} />)
    })

    return (
        <div className="posts">
            {props.data === 0 && <p>There are no posts</p>}
            {postList}
        </div>
    )
}

export default Posts