import React from 'react';
import "../../../styles/styles.scss";
import { MdPersonAddAlt1 } from 'react-icons/md';

const OrderGroupButton = (props) => {
  return (
    <view className="container-horizontal contain-whitesmoke fit-contain container-card-circle contain-center-horizontal"
      {...props}
      style={{ marginTop: '20px' }}>
      <MdPersonAddAlt1
        size={30}
        style={{ marginLeft: '10px' }} />
      <p className="bold-text-regular" style={{ marginLeft: '10px', marginRight: '10px' }}>Start Group Order</p>
    </view>
  )
}

export default OrderGroupButton