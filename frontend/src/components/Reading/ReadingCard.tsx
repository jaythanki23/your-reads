import React, { useContext } from 'react';
import { bookContext } from '../../context/book/bookContext';
import { bookResponse } from '../../types/dataTypes';

interface Props {
  bookRes: bookResponse
}

const ReadingCard = ({ bookRes }: Props) => {
  const { message, remove, update } = useContext(bookContext);


  const deleteBook = () => {
    remove?.(bookRes._id, bookRes.status);
  }

  const updateBook = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    update?.(bookRes._id, bookRes.status as string, e.currentTarget.name)
  }

  return (
    <div>
      {/* <button type="button" data-bs-toggle="modal" data-bs-target={`#b${bookRes.id as string}`} id={`#b${bookRes.id as string}`}>
        <div className="card border-secondary" style={{"width": "225px"}}>
          <img src={bookRes.image as string} className="card-img-top" alt="book cover" style={{"width": "225px", "height": "225px"}} />
          <div className="card-body p-2 mt-2">
            <h5 className="card-title">{bookRes.title}</h5>
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
                  <div className='col-md'>
                    <img src={bookRes.image as string} className="card-img-top" alt="book cover" style={{"width": "200px", "height": "200px"}} />
                  </div>
                </div>
                <div className='row'>
                <a data-bs-toggle="modal" href="#myModal2" className="btn btn-primary">Launch modal</a>
                <div className="modal" id="myModal2" data-bs-backdrop="static">
                  <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">2nd Modal title</h4>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
                    </div><div className="container"></div>
                    <div className="modal-body">
                      Content for the dialog / modal goes here.
                    </div>
                    <div className="modal-footer">
                      <a href="#" data-bs-dismiss="modal" className="btn btn-outline-dark">Close</a>
                      <a href="#" className="btn btn-primary">Save changes</a>
                    </div>
                  </div>
                </div>
              </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" name='read' data-bs-dismiss="modal" onClick={updateBook}>Add to Read</button>
              <button type="button" className="btn btn-primary" name='shelf' data-bs-dismiss="modal" onClick={updateBook}>Add to Shelf</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={deleteBook}>Remove from Reading</button>
            </div>
          </div>
        </div>
      </div> */}
      <a data-bs-toggle="modal" href="#myModal">
          <div className="card border-secondary" style={{"width": "225px"}}>
            <img src={bookRes.image as string} className="card-img-top" alt="book cover" style={{"width": "225px", "height": "225px"}} />
            <div className="card-body p-2 mt-2">
              <h5 className="card-title">{bookRes.title}</h5>
            </div>
          </div>
      </a>

      <div className="modal" id="myModal">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">{bookRes.title}</h5>    
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
              </div><div className="container"></div>
              <div className="modal-body">
                <div className='container-fluid'>
                  <div className='row'>
                      <div className='col-md'>
                        <img src={bookRes.image as string} className="card-img-top" alt="book cover" style={{"width": "200px", "height": "200px"}} />
                      </div>
                  </div>
                  <a data-bs-toggle="modal" href="#myModal2" className="btn btn-primary">Launch modal</a>
                </div>
              </div>
              <div className="modal-footer">
                <a href="#" data-bs-dismiss="modal" className="btn btn-outline-dark">Close</a>
              </div>
            </div>
          </div>
      </div>
      <div className="modal" id="myModal2" data-bs-backdrop="static">
        <div className="modal-dialog">
            <div className="modal-content bg-primary">
              <div className="modal-header">
                <h4 className="modal-title">2nd Modal title</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
              </div><div className="container"></div>
              <div className="modal-body">
                Content for the dialog / modal goes here.
                Content for the dialog / modal goes here.
                Content for the dialog / modal goes here.
                Content for the dialog / modal goes here.
                Content for the dialog / modal goes here.
              </div>
              <div className="modal-footer">
                <a href="#" data-bs-dismiss="modal" className="btn btn-outline-dark">Close</a>
                <a href="#" className="btn btn-primary">Save changes</a>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ReadingCard;