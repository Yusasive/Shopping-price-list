import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style.css';

function Item(props) {
  return <div className="item">
  <b>Name:</b> {props.name} <br />
  <b>Price:</b> ${props.price}
  </div>;
}

function App() {
  return <div>
    <Item name="Coconut Bread" price="4.99" />
    <Item name="Chocolate Bread" price="1.5" />
    <Item name="Butter Bread" price="24" />
  </div>;
}

const el = <App />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);
export default App;
