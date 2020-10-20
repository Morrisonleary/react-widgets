// import React, { useState } from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
// import Dropdown from "./components/Dropdown";
// import Translate from './components/Translate'

// const items = [
//   {
//     title: "What is React?",
//     content: "React is a front end javascript framework"
//   },
//   {
//     title: "Why use React?",
//     content: "React is a favorite js library among engineers"
//   },
//   {
//     title: "How do you use React?",
//     content: "You use React by creating components"
//   }
// ];

// const options = [
//   {
//     label: "The color red",
//     value: "red"
//   },
//   {
//     label: "The color green",
//     value: "green"
//   },
//   {
//     label: "The color blue",
//     value: "blue"
//   }
// ];

// export default () => {
//   const [selected, setSelected] = useState(options[0]);
//   const [showDropDown, setShowDropdown] = useState(true);

//   return (
//     <div>
//     <button onClick={() => setShowDropdown(!showDropDown)}>Toggle Dropdwon</button>
//     {showDropDown ? 
//       <Dropdown
//         selected={selected}
//         onSelectedChange={setSelected}
//         options={options}
//       /> : null
//     }
//     </div>
//   );
// };
