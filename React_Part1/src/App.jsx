import './App.css'
// import Titleee from './Title.jsx';
import Title  from './Title.jsx';


function Description() {
  return <h3>I am the description!</h3>;
}

function App() {
  return (
    <div>
     <Title/>
     <Description/>
     <Title/>
     <Description/>
     <h1>2*5 = {2*5}</h1> {/* JSX with Curly Braces */}
    </div>
  ) 
}

export default App
