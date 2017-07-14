import React from 'react';

import PersonalData from './PersonalData';

const serverData = [
  {
    name: "Alex Guerrero",
    phone: 83748734,
    fav: true,
    group: 'Friends'
  },
  {
    name: "Pepe Perez",
    phone: 684835459483,
    fav: false
  },
  {
    name: "María Gómez",
    phone: 656564545,
    group: 'No Group'
  },
  {
    name: "Ana López",
    phone: 2132232323
  }
];

class App extends React.Component {

  render() {
    return (
      <div className="App">
        {serverData.map((contact, index) =>
          <PersonalData
            key={index}
            name={contact.name}
            phone={contact.phone}
            fav={contact.fav}
            group={contact.group} />
        )}
      </div>
    );
  }
}

export default App;
