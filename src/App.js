import React from 'react';

import PersonalData from './PersonalData';

const contacts = [
  {
    name: 'Alejandro',
    phone: 8938948934,
    fav: true,
    group: 'Family'
  },
  {
    name: 'Isra',
    phone: 234234342,
    group: 'Family'
  },
  {
    name: 'Rose',
    phone: 8484884
  },
  {
    name: 'Ine',
    phone: 9999999999,
    fav: true,
    group: 'Friends'
  },
  {
    name: 'Luci',
    phone: 777743,
    group: 'Friends'
  }
];

class App extends React.Component {

  render() {
    return (
      <div className="App">
        {contacts.map(contact =>
          <PersonalData
            {
              ...contact
            }
            key = {contact.name}
          />
        )}
      </div>
    );
  }
}

export default App;
