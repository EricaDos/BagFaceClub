
import './App.css';
import CollectionCard from './components/collectionCard';
import Header from './components/Header'
<link rel="stylesheet" href="https://use.typekit.net/okt8cgh.css"></link>

function App() {
  return (
  
  <div className="app">

  <Header />
  <CollectionCard 
        id={0} 
        bagName={'Taxman BagFace'} 
        traits={[{'value': 7}]} 
        image=''
        />
  </div>
  )

}
export default App




















//   return ( 
//   <><Header />
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} />
//         <img src={bagface} />
        

//         <p>We're still hiding in the metaverse.
//           </p>
//           <p>
// Dropping 2022.</p>
// <p>
// Until then, join us on…</p>
// <img src={discord} Discord/>
// <img src={twitter} />  
//       </header>
//     </div>
//   );
// }
// </>

// export default App;
