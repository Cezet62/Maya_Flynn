import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Check if current page has a dark hero section
    const isDarkHero = location.pathname === '/food-as-medicine';

    // Determine text colors based on scroll state and page
    const textColor = scrolled ? 'text-slate-600' : (isDarkHero ? 'text-white/90' : 'text-slate-600');
    const logoColor = scrolled ? 'text-slate-900' : (isDarkHero ? 'text-white' : 'text-slate-900');
    const hoverColor = scrolled ? 'hover:text-primary' : (isDarkHero ? 'hover:text-white' : 'hover:text-primary');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
    };

    const navLinks = [
        { name: t('nav.about'), href: '/#about' },
        { name: t('nav.services'), href: '/#services' },
        { name: t('nav.menus'), href: '/#menus' },
        { name: t('nav.consulting'), href: '/nutritional-cooking' },
        { name: t('nav.course'), href: '/food-as-medicine' },
        { name: t('nav.testimonials'), href: '/#testimonials' },
        { name: t('nav.contact'), href: '/#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className={`text-2xl font-heading font-bold tracking-tight transition-colors ${logoColor}`}>
                    Maya<span className={scrolled || !isDarkHero ? "text-primary" : "text-white"}>Flynn</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.href} className={`${textColor} ${hoverColor} transition-colors font-medium`}>
                            {link.name}
                        </Link>
                    ))}
                    <button onClick={toggleLanguage} className={`flex items-center ${textColor} ${hoverColor} transition-colors`}>
                        <Globe className="w-5 h-5 mr-1" />
                        <span className="uppercase text-sm font-bold">{i18n.language}</span>
                    </button>
                    <a href="#contact" className="bg-primary hover:bg-teal-500 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-primary/30">
                        {t('nav.book')}
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden ${logoColor}`}>
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-lg font-medium text-slate-800"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                <button onClick={toggleLanguage} className="flex items-center text-slate-600">
                                    <Globe className="w-5 h-5 mr-2" />
                                    <span className="uppercase font-bold">{i18n.language === 'en' ? 'English' : 'Español'}</span>
                                </button>
                                <a href="#contact" className="text-primary font-bold">
                                    {t('nav.book')}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
