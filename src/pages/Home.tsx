import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import PersonalisedMenus from '../components/PersonalisedMenus';
import Testimonials from '../components/Testimonials';
import ChatBot from '../components/ChatBot';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <PersonalisedMenus />
            <Testimonials />
            <ChatBot />
            <Contact />
        </>
    );
};

export default Home;
