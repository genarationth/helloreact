
import React,{useState} from "react";
import './App.css';


//Import Navbar Component
import Navbar from "./Navbar";
//import Input from "./Input";

//let id = 1;



function App(){
  // const [posts, setPosts] = useState([]);

  // function addPost(title){
  //   const newPost = {id, title};
  //   setPosts([newPost, ...posts])
  //   id += 1;
  // }

  return (
      
      <>
        {/* User Component Navbar */}
        <Navbar />
        {/* <Input addPost = {addPost} />  */}

        {/* Example Basic JSX syntax */}
        {/* <div>{number%2 === 0 ? "even" : "odd"}</div>
        <div className="greeting">{greeting}</div>
        <input type="text" autoFocus={true}></input> */}
      </>
  );

}

export default App;
//End_Code















//Backup Code
//Hello World React

// import React from "react";

// const greeting = "Hello World";
// const number = 20

// //number%2 ==0 ? "even" : "odd"

// function App(){
//   return (
//     <>
//       <div>{number%2 ===0 ? "even" : "odd"}</div>
//       <div className="greeting">{greeting}</div>

//       <input type="text" autoFocus ={true} />
//     </>
//   );

// }

// export default App;










// import logo from './logo.svg';
// import './App.css';

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

// export default App;
