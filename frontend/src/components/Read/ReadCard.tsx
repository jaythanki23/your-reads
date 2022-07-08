import React from 'react';
import { bookResponse } from '../../types/dataTypes';

interface Props {
  bookRes: bookResponse
}

const ReadCard = ({ bookRes }: Props) => {
  return (
    <div>
      <div className="card border-secondary" style={{"width": "225px"}}>
        <img src={bookRes.image as string} className="card-img-top" alt="book cover" style={{"width": "225px", "height": "225px"}} />
        <div className="card-body p-2 mt-2">
          <h5 className="card-title">{bookRes.title}</h5>
          {/* <p className="card-text">{book.description}</p> */}
          {/* <p className="card-text">{book.authors}</p>
          <p className="card-text">{book.categories}</p>
          <p className="card-text">{book.publishedDate}</p>
          <p className="card-text">{book.pages}</p> */}
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </div>
  )
}

export default ReadCard