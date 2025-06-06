import logo from './logo.svg';
import './App.css';
import Example1 from './component/Example1';
import Example2 from './component/Example2';
import User from './component/Example3/User';
import Product from './component/Example4.js/Product';

function App() {
  return (
    <div className="App">
      {/* <Example1/> */}
      {/* <Example2/>*/}
      {/* <User/> */}
      <Product/>
    </div>
  );
}

export default App;
