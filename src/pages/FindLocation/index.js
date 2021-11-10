import React from 'react';
import { createTokenLocation } from "../../utils/createTokenLocation";

class FindLocation extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  getLocation = () => {
    var location = {
      hasLocation: true,
      location: {
        address: '59 Xô Viết Nghệ Tĩnh, Phường 7, Đà Lạt',
        latitude: '11.9600238',
        longitude: '108.4394743,',
      }
    }
    return createTokenLocation(location)
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default FindLocation