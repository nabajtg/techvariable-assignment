import './App.css';
import Filters from './components/Filters';
import FrequentlyOrdered from './components/FrequentlyOrdered';

function App() {
	return (
		<div className="App">
			<FrequentlyOrdered/>
			<Filters/>
		</div>
	);
}

export default App;
