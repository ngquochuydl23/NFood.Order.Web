import React from 'react';
import Button from '@mui/material/Button';

class FindLocation extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="background-home">
          <div className="locaton-home-wrap">
            <div className="location">
              <h2>Your favourite restaurants and takeaways, delivered to your door</h2>
              <input className="input-location" />
              <Button variant="contained" size="medium">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FindLocation