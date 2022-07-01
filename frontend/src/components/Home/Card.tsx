import React from 'react';
import { bookInfo } from '../../types/dataTypes';

interface Props {
  book: bookInfo
}

const Card = ({ book }: Props) => {
  return (
    <div className="card border-secondary hoverable" style={{"width": "225px"}}>
      <img src={book.image as string} className="card-img-top hoverable" alt="book cover" style={{"width": "225px", "height": "225px"}} />
      <div className="card-body p-2 mt-2">
        <h5 className="card-title">{book.title}</h5>
        {/* <p className="card-text">{book.description}</p> */}
        {/* <p className="card-text">{book.authors}</p>
        <p className="card-text">{book.categories}</p>
        <p className="card-text">{book.publishedDate}</p>
        <p className="card-text">{book.pages}</p> */}
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  )
}

export default Card