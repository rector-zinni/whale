import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import Main from './views/main';
// const checkPermission=()=>{
//   if(!('serviceWorker' in navigator)){
//     throw new Error('no support for service worker');
//   }
// }
// const registerSW=async ()=>{
//   const registration= await navigator.serviceWorker.register('service-worker.js')
//   return registration;
// }
// checkPermission();
// registerSW().then((e)=>[
//   console.log(' sw created')
// ]).catch((e)=>{
//   console.log(e)
// })
function App() {
  return (
    <div className="App">
      
<Nav/>
<Main/>
        </div>
  );
}

export default App;
