import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, Star } from 'lucide-react';
import heroImage from '../assets/course-hero.png';
import abstractBg from '../assets/course-abstract.png';
import module01Img from '../assets/module-01-food-confidence.png';
import module02Img from '../assets/module-02-blood-decode.png';
import module03Img from '../assets/module-03-wellness-stress.png';
import module04Img from '../assets/module-04-metabolic-repair.png';
import module05Img from '../assets/module-05-gut-reset.png';
import module06Img from '../assets/module-06-immune-resilience.png';
import module07Img from '../assets/module-07-healthy-mind.png';
import module08Img from '../assets/module-08-hormone-sync.png';
import module09Img from '../assets/module-09-fitness-fueling.png';

// Module background images (index 0-8)
const moduleImages: string[] = [
    module01Img,
    module02Img,
    module03Img,
    module04Img,
    module05Img,
    module06Img,
    module07Img,
    module08Img,
    module09Img,
];

const FoodAsMedicine = () => {
    const { t } = useTranslation();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const benefitsData = t('foodAsMedicine.benefits.items', { returnObjects: true });
    const benefits = Array.isArray(benefitsData) ? benefitsData : [];

    const modulesData = t('foodAsMedicine.modules.list', { returnObjects: true });
    const modules = Array.isArray(modulesData) ? modulesData : [];

    return (
        <div ref={containerRef} className="bg-stone-50 min-h-screen font-sans selection:bg-stone-200">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y, opacity }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={heroImage}
                        alt="Pomegranate macro"
                        className="w-full h-full object-cover brightness-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-stone-50"></div>
                </motion.div>

                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block py-1 px-3 border border-amber-200/50 rounded-full text-xs tracking-widest uppercase mb-6 backdrop-blur-sm text-amber-200">
                            {t('foodAsMedicine.hero.highlight')}
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-light mb-8 leading-tight text-amber-300 drop-shadow-lg">
                            {t('foodAsMedicine.title')}
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-stone-200 max-w-2xl mx-auto leading-relaxed">
                            {t('foodAsMedicine.hero.desc')}
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
                >
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                </motion.div>
            </section>

            {/* Introduction / Philosophy */}
            <section className="py-24 md:py-32 bg-stone-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                    <img src={abstractBg} alt="" className="w-full h-full object-cover mix-blend-multiply" />
                </div>

                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-3xl md:text-5xl font-heading font-light text-stone-900 mb-8">
                            {t('foodAsMedicine.subtitle')}
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="text-center group"
                            >
                                <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Star className="w-6 h-6 text-primary" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-stone-800 mb-4">{benefit.title}</h3>
                                <p className="text-stone-600 leading-relaxed font-light">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum Timeline */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-20">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Syllabus</span>
                        <h2 className="text-4xl md:text-6xl font-heading text-slate-900">{t('foodAsMedicine.modules.title')}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {modules.map((module, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.05 }}
                                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[4/3]"
                            >
                                {/* Background Image */}
                                <img
                                    src={moduleImages[index]}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/70 group-hover:via-black/30 transition-all duration-500"></div>

                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <div className="text-5xl font-heading text-white/30 mb-2 group-hover:text-primary/50 transition-colors">
                                        {module.number}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        {module.title}
                                    </h3>
                                    <p className="text-white/80 text-sm leading-relaxed">
                                        {module.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing / CTA */}
            <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src={heroImage} alt="" className="w-full h-full object-cover grayscale" />
                </div>

                <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
                    <div className="bg-stone-800/80 backdrop-blur-xl p-12 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl">
                        <h2 className="text-3xl md:text-4xl font-heading mb-8">{t('foodAsMedicine.pricing.title')}</h2>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-12">
                            <div className="text-center">
                                <p className="text-stone-400 text-sm uppercase tracking-wider mb-2">{t('foodAsMedicine.pricing.free')}</p>
                                <div className="text-5xl font-heading font-bold text-white">€0</div>
                            </div>
                            <div className="h-12 w-[1px] bg-white/20 hidden md:block"></div>
                            <div className="text-center">
                                <p className="text-stone-400 text-sm uppercase tracking-wider mb-2">{t('foodAsMedicine.pricing.session')}</p>
                                <div className="text-5xl font-heading font-bold text-primary">{t('foodAsMedicine.pricing.price')}</div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 justify-center text-sm text-stone-300 mb-10">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-primary" />
                                <span>10:00 AM - 12:00 PM</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>Santina Studio, Santa Catalina</span>
                            </div>
                        </div>

                        <Link
                            to="/#contact"
                            className="inline-flex items-center gap-3 bg-primary hover:bg-white hover:text-stone-900 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-xl"
                        >
                            {t('foodAsMedicine.pricing.cta')}
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FoodAsMedicine;
