import './App.scss';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
	return (
		<>
			<Header isSticky={false} />
			<Header isSticky={true} />
			<Hero />
			<Skills />
			<Portfolio />
			<Testimonials />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
