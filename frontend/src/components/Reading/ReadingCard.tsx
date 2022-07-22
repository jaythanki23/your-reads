import React, { useContext, useEffect, useState } from 'react';
import { bookContext } from '../../context/book/bookContext';
import { journeyContext } from '../../context/journey/journeyContext';
import { bookResponse, journeyInfo } from '../../types/dataTypes';
import Journey from './Journey';

interface Props {
  bookRes: bookResponse
}

const ReadingCard = ({ bookRes }: Props) => {
  const { message, remove, update } = useContext(bookContext);
  const  { getJourney, createJourney, journeys } = useContext(journeyContext);

  const [data, setData] = useState<journeyInfo>({
    book: bookRes._id,
    title: '',
    date: '',
    from: 0,
    to: 0,
    note: ''
  });

  const onDataChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setData({...data, [e.target.name]: e.target.value });
  }


  const deleteBook = () => {
    remove?.(bookRes._id, bookRes.status);
  }

  const updateBook = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    update?.(bookRes._id, bookRes.status as string, e.currentTarget.name)
  }

  const getNotes = () => {
    getJourney?.(bookRes._id as string);
  }

  const createNotes = () => {
    createJourney?.(data);
  }

  return (
    <div>
      <button data-bs-toggle="modal" data-bs-target={`#b${bookRes.id as string}`} id={`#b${bookRes.id as string}`}>
          <div className="card border-secondary" style={{"width": "225px"}}>
            <img src={bookRes.image as string} className="card-img-top" alt="book cover" style={{"width": "225px", "height": "225px"}} />
            <div className="card-body p-2 mt-2">
              <h5 className="card-title">{bookRes.title}</h5>
            </div>
          </div>
      </button>

      <div className="modal" id={`b${bookRes.id as string}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
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
                  <div className='row justify-content-md-center mt-5'>
                    <div className='col col-md-auto'>
                      <button data-bs-toggle="modal" data-bs-target={`#b2${bookRes.id as string}`} id={`#b2${bookRes.id as string}`}  className="btn btn-outline-primary">Add a note</button>
                    </div>
                    <div className='col-md-auto'>
                      <button className='btn btn-outline-primary' onClick={getNotes}>Show notes</button>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md'>
                      <div className='d-flex flex-row justify-content-center align-items-center flex-wrap gap-4 p-2 m-2'>
                        {journeys?.filter((obj) => obj.book === bookRes._id).map((obj) => <Journey key={obj._id} journey={obj} /> )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <a href="#" data-bs-dismiss="modal" className="btn btn-outline-dark">Close</a>
              </div>
            </div>
          </div>
      </div>
      <div className="modal" id={`b2${bookRes.id as string}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <div className='row'>
                  <div className='col-md-2 mt-1'>
                    <p className='fw-bold'>Title:</p>
                  </div>
                  <div className='col-md-8'>
                    <input type="text" id="title" className='form-control' name='title' onChange={onDataChange} />
                  </div>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
              </div>
                <div className="modal-body">
                  <div className='row form-group'>
                    <div className='col-md-4'>
                      <p className='fw-bold'>Date</p>
                      <input type="date" className="form-control" id="date" name='date' onChange={onDataChange} />
                    </div>
                    <div className='col-md-4'>
                      <p className='fw-bold'>From Page No.</p>
                      <input type="number" className="form-control" id="from" name='from' onChange={onDataChange} />
                    </div>
                    <div className='col-md-4'>
                      <p className='fw-bold'>To Page No.</p>
                      <input type="number" className="form-control" id="to" name='to' onChange={onDataChange} />
                    </div>
                  </div>
                  <div className='row form-group mt-4'>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} cols={3} name='note' onChange={onDataChange}></textarea>
                  </div>
                </div>
              <div className="modal-footer">
                <button data-bs-dismiss="modal" className="btn btn-outline-dark">Close</button>
                <button data-bs-dismiss="modal" className="btn btn-primary" onClick={createNotes} >Save changes</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ReadingCard;