import React from 'react';

import PropTypes from 'prop-types';

class Button extends React.Component {
  // Se suele utilizar handle + tipo de evento por convencion
  handleClick() {
    console.log('Has pulsado');
  }

  // Le pasamos this.handleClick porque es un método
  // Pasamos la función como valor igual que hariamos en el addEventListener
  // Lista de eventos que podemos utilizar: https://facebook.github.io/react/docs/events.html
  render() {
    return (
      <button onClick={this.handleClick} type="button" name="button">
        {this.props.label}
      </button>
    );
  }
}

Button.defaultProps = {
  label: 'Púlsame'
};

Button.propTypes = {
  label: PropTypes.string
};

export default Button;
