import React, {useEffect, useState} from 'react'
import api from './services/api'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';


//Component - functional component
//Isolated block of HTML, CSS and JS which does not affect the rest of the application

//Property
// It is a property of the component, like title.
// Information that the Parent component transfer to Child component

//State - useState
// Information that the component will manipulate
// The state will not change the value, it will create a new value from the current value




function App() {


  const [ devs, setDevs] = useState([]);




  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs()
  }, []);

  async function handleAddDev(data){

    const response = await api.post('/devs',data)



    setDevs([...devs, response.data]);
  }



  return (
    <div id="app">
      <aside>
        <strong>Sign Up</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>
          {devs.map( dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>

    </div>

    );
}

export default App;
