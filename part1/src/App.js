import './App.css';
import Mensaje from './mensaje';


const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
} 

const App = () => {
  return (
    <div className="App">
        <Mensaje color ='red' message='Estamos trabajando en un curso de react'/>
        <Description />
     </div>
  );
}

export default App;
