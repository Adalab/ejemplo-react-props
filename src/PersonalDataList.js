import React from 'react';

class PersonalDataList extends React.Component {
  render() {
    return (
      <ul className="contact-list">
        {this.props.children}
      </ul>
    );
  }
}

export default PersonalDataList;
