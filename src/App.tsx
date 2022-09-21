import * as React from 'react';
import {TeamPageComponent} from 'pages/TeamsPage';
import {TeamDetailsPageComponent} from 'pages/TeamsDetailsPage';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<TeamPageComponent />}/>
				<Route path='teams/:id' element={<TeamDetailsPageComponent />}/>
			</Routes>
		</BrowserRouter>
			
	);
}

export default App;
