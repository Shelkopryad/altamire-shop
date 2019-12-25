import React, { Component } from 'react';

class Contacts extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-fb"><i className="fab fa-facebook-f pr-1"></i> Facebook</button>

        <button type="button" className="btn btn-tw"><i className="fab fa-twitter pr-1"></i> Twitter</button>

        <button type="button" className="btn btn-gplus"><i className="fab fa-google-plus-g pr-1"></i> Google +</button>

        <button type="button" className="btn btn-li"><i className="fab fa-linkedin-in pr-1"></i> Linkedin</button>
      </div>
    )
  }
}

export default Contacts;
