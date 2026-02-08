import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import PersonalisedMenus from '../components/PersonalisedMenus';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <PersonalisedMenus />
            <Testimonials />
            <Contact />
        </>
    );
};

export default Home;
