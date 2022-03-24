import React from 'react'
import { Link } from 'react-router-dom';
import { useGetStarWarsCharacters } from '../query';

const StarWars = () => {
  const [pageNumber, setPageNumber] = React.useState(1);
  const { data: people, isLoading, isError } = useGetStarWarsCharacters(pageNumber)

  return (
    <React.Fragment>
      <Link to ="/">HOME</Link>
      {/* {isRefetching && <h4>Refreshing</h4>} */}
      <div className='row p-4'>

        {isLoading ? <h5>Loading...</h5> : isError ? <h5>Error...</h5> :
          people?.results?.map((el) => (
            <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12' key={el.name}>
              <div className='bg-light p-2 mb-4' style={{ width: '100%', }}>
                <h3>{el.name}</h3>
                <h4>{el.height}cm</h4>
                <p>{el.mass}kg</p>
                <p>{el.gender}</p>

              </div>
            </div>
          ))}

      </div>
      <div className='d-flex justify-content-start m-4' style={{ gap: '20px', position:'absolute', bottom:'40px' }}>
        <button disabled={pageNumber <= 1} onClick={() => setPageNumber((prev) => Math.max(1, prev - 1))} className='btn btn-info'>Prev Page</button>
        <button disabled={pageNumber >= 10} onClick={() => setPageNumber((prev) => Math.max(prev + 1))} className='btn btn-info'>Next Page</button>
      </div>
    </React.Fragment>
  )
}

export default StarWars;