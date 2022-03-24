import React, {useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreatePost } from '../query'
import { useQueryClient} from 'react-query'
const CreatePost = () => {
  const navigate = useNavigate()
  const queryClient= useQueryClient()
  const titleRef = useRef()
  const bodyRef = useRef()
  const onSuccess = () => {
    queryClient.invalidateQueries('allposts')
    navigate('/')
  }
  const onError = () => {
    alert('error')
  }
  const {mutate,} = useCreatePost({onSuccess, onError})
  const onSubmit = (e) => {
    e.preventDefault()
    mutate({
      userId:1,
      title: titleRef.current.value,
      body:bodyRef.current.value
    })
  }
  return (
    <div className='container'>
      <form onSubmit={onSubmit} className="d-flex w-50 mx-auto flex-column">
        <input placeholder='title' ref={titleRef} className='my-3' />
        <textarea placeholder='body' ref={bodyRef} className='mb-3' >
        </textarea>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default CreatePost