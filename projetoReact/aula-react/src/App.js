import './App.css';
import ResultList from './components/ResultList';
import FloatingCard from './components/FloatingCard';
import ResultControls from './components/ResultControls';
 
 
function App() {
  return (
    <div>
      <div>
        pesquisa
      </div>
      <div>
        <ResultControls />
        <ResultList />
        <FloatingCard />
      </div>
    </div>
  );
}

export default App;
