import React from 'react';

import PersonalData from './PersonalData';

const serverData = {
  name: "Alex Guerrero",
  phone: 684839483,
  fav: false,
  group: 'No Group'
};

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <PersonalData
          name={serverData.name}
          phone={serverData.phone}
          fav={serverData.fav}
          group={serverData.group}
        />
      </div>
    );
  }
}

export default App;
