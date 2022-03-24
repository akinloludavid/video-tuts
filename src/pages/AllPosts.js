import React from 'react'
import { useGetAllPosts } from '../query'
import { useNavigate, Link } from 'react-router-dom'
const AllPosts = () => {
  const navigate = useNavigate()
  const { data: allPosts, isLoading, isError, isRefetching, } = useGetAllPosts()
  return (
    <>
    <div>
    <div className='d-flex px-5 justify-content-between align-items-center'>
      <h2 className='text-center my-4'>All Posts</h2>
      <Link to={'/starwars'}>Go to starwars page</Link>
        <button style={{height:'40px'}} onClick={()=>navigate('/create')} type="button" className="btn btn-primary">
          Create Post
        </button>
    </div>
      {isLoading || isRefetching ? (
        <h4>Loading...</h4>
      ) : isError ? (
        <h4>Kindly retry, something went wrong</h4>
      ) : 
      <div className='row d-flex p-4' >
        {allPosts?.map((el)=> (
            <div  className='col-xs-12 col-sm-6 col-md-4 col-lg-3' key={el.id}>
            <div onClick={() => navigate(`/post/${el.id}`)} style={{ width: '98%', marginBottom:'10%', cursor:'pointer' }} className=" bg-light p-2">
              <h3 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{el.title}</h3>
              <p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{el.body}</p>
              </div>
            </div>
        ))}
      </div>
      }

    
    </div>
    </>
  )
}

export default AllPosts
