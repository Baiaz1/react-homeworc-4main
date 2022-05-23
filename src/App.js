
import './App.css';
import User from "./user/User";

function App() {
  const usersMass = [
      {name:'Baiaz',
        age: 17,
        position:'student'
      },
    {name:'Marsel',
      age: 18,
      position:'student'
    },
    {name:'Aidar',
      age: 27,
      position:'teacher'
    },
    {name:'Jhon',
      age: 34,
      position:'driver'
    },
    {name:'Alex',
      age: 29,
      position:'pilot'
    },
    {name:'Asel',
      age: 40,
      position:'chef'
    }
      ]

  return (
  <User usersMass = {usersMass}/>
  );
}

export default App;
