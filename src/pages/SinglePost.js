import React from 'react'
import { useGetSinglePost } from '../query'
import { useParams } from 'react-router-dom'
const SinglePost = () => {
  const { id } = useParams()
  const { data: post, isLoading, isError, isRefetching } = useGetSinglePost(id)
  return (
    <div className='container '>
      {isLoading || isRefetching ? <h4>Loading</h4> : isError ? <h4>Sorry, can get the post details now. Try again</h4> :
        <div>
          <h3>{post?.title}</h3>
          <p>{post?.body}</p>
        </div>
      }
    </div>
  )
}

export default SinglePost