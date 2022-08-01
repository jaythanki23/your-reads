import React, { useContext } from 'react';
import { bookContext } from '../../context/book/bookContext';
import { bookInfo } from '../../types/dataTypes';

interface Props {
  book: bookInfo, 
}



const Card = ({ book }: Props) => {
  const { insertRead, message } = useContext(bookContext);

  const onClickRead = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  
    insertRead?.({
      id: book.id,
      title: book.title,
      authors: book.authors,
      categories: book.categories,
      image: book.image,
      description: book.description,
      pages: book.pages,
      publishedDate: book.publishedDate,
      status: e.currentTarget.name
    });
  }
  
  return (
    <div>
      <button type="button" data-bs-toggle="modal" data-bs-target={`#b${book.id as string}`} id={`#b${book.id as string}`} className='btn'>
        <div className="card border-secondary" style={{"width": "225px"}}>
          <img src={book.image as string} className="card-img-top" alt="book cover" style={{"width": "225px", "height": "225px"}} />
          <div className="card-body p-2 mt-2">
            <h5 className="card-title">{book.title}</h5>
          </div>
        </div>
      </button>
      
      <div className="modal" id={`b${book.id as string}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100" id="exampleModalLongTitle">{book.title}</h4>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-md-4'>
                    <img src={book.image as string} className="card-img-top" alt="book cover" style={{"width": "200px", "height": "200px"}} />
                  </div>
                  <div className='col-md-7 ms-auto text-start'>
                    <div className='row'>
                      <div className='col-md-5'>
                        <p className='fw-bold text-start'>Author(s):</p>
                      </div>
                      <div className='col-md'>
                        <p className='text-start'>{book.authors}</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-5'>
                        <p className='fw-bold text-start'>Published Date:</p>
                      </div>
                      <div className='col-md'>
                        <p className='text-start'>{book.publishedDate}</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-5'>
                      <p className='fw-bold text-start'>Category:</p>
                      </div>
                      <div className='col-md'>
                        <p className='text-start'>{book.categories}</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-5'>
                        <p className='fw-bold text-start'>Page Count:</p>
                      </div>
                      <div className='col-md'>
                        <p className='text-start'>{book.pages}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {message && <div className="alert alert-success m-2 p-2" role="alert">
                  {message}
                </div>
              }
                <div className='row'>
                  <p className='fw-bold text-start mt-4'>Description:</p>
                  <p className='mt-1' style={{"textAlign": "justify", "textJustify": "inter-word"}}>
                    {book.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal" name="reading" onClick={onClickRead}>Start Reading</button>
              <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal" name="shelf" onClick={onClickRead}>Want to Read</button>
              <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal"  name="read" onClick={onClickRead}>Read</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card