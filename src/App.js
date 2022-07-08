import Router from './Router/Router';
import {Provider} from './Context'

function App() {
  return (
    <div className='app'>
      <Provider>
         <Router />
      </Provider>
    </div>
  );
}

export default App;
