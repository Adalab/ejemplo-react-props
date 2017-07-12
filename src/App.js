import React from 'react';

import PersonalData from './PersonalData';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <PersonalData
          name="Alex Guerrero"
          phone={684839483}
          fav={false}
          group={'No Group'}
        />
      </div>
    );
  }
}

export default App;
