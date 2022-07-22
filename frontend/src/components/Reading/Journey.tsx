import React from 'react';
import { journeyResponse } from '../../types/dataTypes';

interface Props {
  journey: journeyResponse
}

const Journey = ({ journey }: Props) => {
  return (
    <div className="card" style={{"width": "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{journey.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Date: {journey.date}, Pages: {journey.from} to {journey.to}</h6>
        <p className="card-text">{journey.note}</p>
      </div>
    </div>
  
  )
}

export default Journey;