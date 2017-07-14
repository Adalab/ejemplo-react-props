import React from 'react';

import PersonalData from './PersonalData';

const serverData = {
  name: "Alex Guerrero",
  phone: 684839483,
  fav: false,
  group: 'No Group',
  height: 1.88 // Esta propiedad se ignora porque PersonalData.js no utiliza this.props.height
};

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <PersonalData {...serverData} />
      </div>
    );
  }
}

export default App;
