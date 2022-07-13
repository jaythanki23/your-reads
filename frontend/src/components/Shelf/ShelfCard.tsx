import React, { useContext } from 'react';
import { bookContext } from '../../context/book/bookContext';
import { bookResponse } from '../../types/dataTypes';

interface Props {
  bookRes: bookResponse
}

const ShelfCard = ({ bookRes }: Props) => {
  const { message, remove } = useContext(bookContext);


  const deleteBook = () => {
    remove?.(bookRes._id, bookRes.status);
  }

  return (
    <div>
      <button type="button" data-bs-toggle="modal" data-bs-target={`#b${bookRes.id as string}`} id={`#b${bookRes.id as string}`}>
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
      </button>
      
      <div className="modal" id={`b${bookRes.id as string}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">{bookRes.title}</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-md-4'>
                    <img src={bookRes.image as string} className="card-img-top" alt="book cover" style={{"width": "200px", "height": "200px"}} />
                  </div>
                  <div className='col-md-7 ms-auto text-start'>
                    <p><span className='fw-bold'>Author(s):</span> {bookRes.authors}</p>
                    <p><span className='fw-bold'>Published Date:</span> {bookRes.publishedDate}</p>
                    <p><span className='fw-bold'>Category:</span> {bookRes.categories}</p>
                    <p><span className='fw-bold'>Page Count:</span> {bookRes.pages}</p>
                  </div>
                </div>
                {/* {message && <div className="alert alert-success m-2 p-2" role="alert">
                              {message}
                            </div>
                } */}
                <div className='row'>
                  <p className='fw-bold text-start mt-4'>Description:</p>
                  <p className='mt-1' style={{"textAlign": "justify", "textJustify": "inter-word"}}>
                    {bookRes.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Add to Reading</button>
              <button type="button" className="btn btn-primary">Add to Read</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={deleteBook}>Remove from Shelf</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShelfCard