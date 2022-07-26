import React, { useContext, useState } from 'react';
import { journeyContext } from '../../context/journey/journeyContext';
import { journeyResponse, journeyInfo } from '../../types/dataTypes';


interface Props {
  journey: journeyResponse
}

const Journey = ({ journey }: Props) => {
  const { deleteJourney, updateJourney } = useContext(journeyContext);

  const [data, setData] = useState<journeyInfo>({
    book: journey.book,
    title: journey.title,
    date: journey.date,
    from: journey.from,
    to: journey.to,
    note: journey.note
  });

  const onDataChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setData({...data, [e.target.name]: e.target.value });
  }

  const onUpdate = () => {
    updateJourney?.(data, journey._id as string);
  }

  const onDelete = () => {
    deleteJourney?.(journey._id as string, journey.book);
    // getJourney?.(journey.book);
  }

  return (
    <div>
      <button data-bs-toggle="modal" data-bs-target={`#j1${journey._id}`} id={`#j1${journey._id}`} className='btn'>
        <div className="card" style={{"width": "18rem"}}>
          <div className="card-body">
            <h5 className="card-title">{journey.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Date: {journey.date}, Pages: {journey.from} to {journey.to}</h6>
            {/* <p className="card-text">{journey.note}</p> */}
          </div>
        </div>
      </button>

      <div className="modal" id={`j1${journey._id}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <div className='row'>
                <div className='col mt-1'>
                  {/* <p className='fw-bold'>{journey.title}</p> */}
                  <h5 className="card-title text-sm-start">{journey.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Date: {journey.date}, Pages: {journey.from} to {journey.to}</h6>
                </div>
              </div>
              <button type="button" className="btn-close" data-bs-toggle="modal" data-bs-target={`#j1${journey._id}`} aria-hidden="true"></button>
            </div>
              <div className="modal-body">
                  <p className="card-text">{journey.note}</p>
              </div>  
            <div className="modal-footer">
              <button data-bs-toggle="modal" data-bs-target={`#j1${journey._id}`} className="btn btn-outline-dark">Close</button>
              <button type="button" className="btn btn-outline-danger" name='delete' data-bs-toggle="modal" data-bs-target={`#j1${journey._id}`} onClick={onDelete}>Delete</button>
              <button data-bs-toggle="modal" data-bs-target={`#j2${journey._id}`} id={`#j2${journey._id}`} className='btn btn-outline-primary'>Update</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id={`j2${journey._id}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <div className='row'>
                <div className='col-md-2 mt-1'>
                  <p className='fw-bold'>Title:</p>
                </div>
                <div className='col-md-8'>
                  <input type="text" id="title" className='form-control' name='title' value={data.title} onChange={onDataChange} />
                </div>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
            </div>
              <div className="modal-body">
                <div className='row form-group'>
                  <div className='col-md-4'>
                    <p className='fw-bold'>Date</p>
                    <input type="date" className="form-control" id="date" name='date' value={data.date} onChange={onDataChange} />
                  </div>
                  <div className='col-md-4'>
                    <p className='fw-bold'>From Page No.</p>
                    <input type="number" className="form-control" id="from" name='from' value={data.from} onChange={onDataChange} />
                  </div>
                  <div className='col-md-4'>
                    <p className='fw-bold'>To Page No.</p>
                    <input type="number" className="form-control" id="to" name='to' value={data.to} onChange={onDataChange} />
                  </div>
                </div>
                <div className='row form-group mt-4'>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} cols={3} name='note' value={data.note} onChange={onDataChange}></textarea>
                </div>
              </div>
            <div className="modal-footer">
              <button data-bs-toggle="modal" data-bs-target={`#j2${journey._id}`} className="btn btn-outline-dark">Close</button>
              <button data-bs-toggle="modal" data-bs-target={`#j2${journey._id}`} className="btn btn-primary" onClick={onUpdate} >Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Journey;