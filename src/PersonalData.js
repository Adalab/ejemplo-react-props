import React from 'react';
import PropTypes from 'prop-types';

class PersonalData extends React.Component {
  printFav() {
    if (this.props.fav) {
      return 'No es favorito'
    } else {
      return 'Contacto favorito'
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <ul>
          <li>{this.props.phone}</li>
          <li>{this.printFav()}</li>
          <li>{this.props.group}</li>
        </ul>
      </div>
    );
  }
}

PersonalData.propTypes = {
  name: PropTypes.string.isRequired, // es requerido
  phone: PropTypes.number, // Número opcional
  fav: PropTypes.bool, // Booleano opcional (true o false)
  group: PropTypes.oneOf(['Family', 'Friends', 'No Group']) // Opacional, o familia o friends
};

PersonalData.defaultProps = {
  fav: false, // Booleano opcional (true o false)
  group: 'No Group' // Opacional, o familia o friends
};

export default PersonalData;
