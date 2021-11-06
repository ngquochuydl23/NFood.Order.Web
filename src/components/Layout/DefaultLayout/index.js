import React from 'react';
import DefaultHeader from "../../Header/DefaultHeader";

const DefaultLayout = (props) => {
  return (
    <div>
      <DefaultHeader />
      {props.children}
    </div>
  )
}

export default DefaultLayout