import React from 'react';
import "../../../styles/styles.scss";
import { GrFormSchedule } from 'react-icons/gr';

const ScheduleOrderButton = (props) => {
  return (
    <div className="container-horizontal contain-whitesmoke fit-contain container-card-circle contain-center-horizontal"
      style={{ marginTop : '20px', marginLeft : '10px'}}>
      <GrFormSchedule
        size={30} 
        style={{ marginLeft:'10px' }}/>
      <p className="bold-text-regular" style={{ marginLeft:'10px', marginRight : '10px'}}>Schedule</p>
    </div>
  )
}

export default ScheduleOrderButton