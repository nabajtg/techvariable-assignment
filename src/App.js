import './App.css';
import Filters from './components/Filters';
import FrequentlyOrdered from './components/FrequentlyOrdered';
import FilterAndItems from './components/FilterAndItems'

function App() {
	return (
		<div className="App">
			<FrequentlyOrdered/>
			<FilterAndItems/>
		
		</div>
	);
}

export default App;
