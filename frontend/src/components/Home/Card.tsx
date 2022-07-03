import React, { useRef } from 'react';
import { bookContext } from '../../context/book/bookContext';
import { bookInfo } from '../../types/dataTypes';
import Modal from './Modal'; 

interface Props {
  book: bookInfo
}



const Card = ({ book }: Props) => {
  
  return (
    <div>
      <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
        <div className="card border-secondary" style={{"width": "225px"}}>
          <img src={book.image as string} className="card-img-top" alt="book cover" style={{"width": "225px", "height": "225px"}} />
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
      </button>
      
      <div className="modal" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">{book.title}</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    

      {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add Employee</button>
        <div className="modal" id="staticBackdrop" 
         data-bs-backdrop="static" 
         data-bs-keyboard="false" 
         tabIndex={-1} 
         aria-labelledby="staticBackdropLabel"
         aria-hidden="true">
         <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">{book.title}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Understood</button>
              </div>
            </div>
          </div>
        </div> */}


    </div>
  )
}

export default Card