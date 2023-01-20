import { useState } from 'react';
import { paoslide1, paoslide2, paoslide3, wheat } from './assets';
import About from './components/About';
import Clients from './components/Clients';
import CompanyInfo from './components/CompanyInfo';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
	return (
		<div className="bg-primary w-full overflow-hidden font-novecento ">
			<div className="flex relative justify-center items-center">
				<div className="relative w-full">
					<Navbar />
					<Home />
					<Products />
					<About />
					<Clients />
					<CompanyInfo />
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default App;
