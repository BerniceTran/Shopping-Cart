import './App.css';
import Title from './Title';
import ItemList from './ItemList';
import TotalPrice from './Total_price';
//import Payment from './Payment';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Title title="Amazon 2.0" subHeading="An Amazon Shopping Cart Copy...ish" />
      </header>
      <div class="shopping-cart">
        <ItemList itemsData={props.itemsData}/>
        <TotalPrice itemsData={props.itemsData}/>
        {/* <Payment />      */}
      </div>
    </div>
  );
}







// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
