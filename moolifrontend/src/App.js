import './App.css';
import Row from "./components/row/index";
import SearchInput from './components/search'

import {useState} from 'react'

function App() {

  const [keyword, setKeyword] = useState("")


  function searchInput( phrase ){
    console.log( `Inside App.js ${phrase}`)
    setKeyword( phrase )
  }

  return (
    <div>
      <h1>Mooli <span>&#9978;</span></h1>
      <h2> Implementing Search Feature</h2>
      <SearchInput collectdata={searchInput}/>
      <Row title={keyword}/>

      {/* <Kason gender="male" complexion="black" height="tall" weight="slim" /> */}
      {/* <Kason gender="female" complexion="white" height="short"/> */}
      {/* <Kason height="average" weight="fat"/> */}
      {/* <Kason complexion="albino"/> */}
      
      {/* <a href="https://Google.com" alt="gogle">google</a> */}
      {/* <a href="https://microsoft.com">microsoft </a> */}
      {/* <a href="https://apple.com">apple </a> */}

      {/* <Counter start={6}/>     */}
      {/* <Counter start={11}/>     */}
      {/* <Link label="Jim Kason" bg="red" /> */}
      {/* <Link label="DivineFavour" bg="blue"/> */}
      {/* <Link label="Ikenna Wilson" bg="pink" /> */}
      
      {/* <a href="https://google.com" id="google_url" className="google" /> */}
      {/* <a href="https://microsoft.com" id="microsoft_url" className="google" /> */}
      {/* <Card /> */}
      
     
    </div>
  );
}

export default App;
