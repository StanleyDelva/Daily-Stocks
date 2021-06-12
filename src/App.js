import './App.css';
import Layout from './components/Layout.js';
import Gainers from './components/Gainers/Gainers.js';
import Losers from './components/Losers/Losers.js';
import Actives from './components/Actives/Actives.js';

function App() {
  
  return (
    <Layout>
      <div className="App">
        <div className="Gainers">
              <Gainers />
            </div>
        <div className="Losers">  
          <Losers />
        </div>
        <div className="Actives">  
          <Actives />
        </div>
      </div>
    </Layout>
  );
}

export default App;
