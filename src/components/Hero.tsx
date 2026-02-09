import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero-latest.jpg';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-teal-50 to-transparent opacity-60" />
            <div className="absolute top-20 right-20 -z-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center h-full">
                    <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl lg:text-5xl font-heading font-bold leading-tight mb-4 text-slate-900"
                        >
                            {t('hero.title').split(' ').map((word, i) => (
                                <span key={i} className="block">{word}</span>
                            ))}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-slate-600 mb-6 max-w-lg"
                        >
                            {t('hero.subtitle')}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a href="#contact" className="bg-primary hover:bg-teal-500 text-white px-8 py-3 rounded-full font-bold text-base transition-all shadow-lg hover:shadow-primary/40 flex items-center justify-center group">
                                {t('hero.cta')}
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#about" className="px-8 py-3 rounded-full font-bold text-base text-slate-600 border border-slate-200 hover:border-primary hover:text-primary transition-all flex items-center justify-center">
                                {t('nav.about')}
                            </a>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                {/* Placeholder for Hero Image - using a gradient div if image not available, but user wants design. 
                     I'll use a placeholder from unsplash or just a styled div for now, 
                     but since I can't fetch external, I'll make a nice CSS composition 
                 */}
                                <div className="relative aspect-[3/2]">
                                    <img
                                        src={heroBg}
                                        alt="Healthy food"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                                </div>
                            </div>

                            {/* Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20, x: -20 }}
                                animate={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block"
                            >
                                <div className="flex items-center space-x-4 mb-2">
                                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-primary font-bold">
                                        10+
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">Years Experience</div>
                                        <div className="text-xs text-slate-500">Certified Nutritionist</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
