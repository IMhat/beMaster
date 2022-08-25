import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/detail/:id" component={Detail} />
					<Route path="/login" component={Login} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
