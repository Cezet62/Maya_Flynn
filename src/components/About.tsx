import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import mayaPortrait from '../assets/maya-portrait.png';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-20 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square max-w-md mx-auto">
                            {/* Using another placeholder */}
                            <div
                                className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
                                style={{ backgroundImage: `url(${mayaPortrait})` }}
                            ></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-4xl font-heading font-bold mb-6 text-slate-900">{t('nav.about')}</h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            Hi, I'm <span className="font-bold text-primary">Maya</span>. My passion is helping people like you reclaim their energy and health through the power of food.
                        </p>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            With over 10 years of clinical experience, I believe in a holistic approach that considers not just what you eat, but how you live, think, and feel.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Certified Nutritional Therapist",
                                "Specialist in Gut Health",
                                "Holistic Lifestyle Coach"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                    <span className="text-slate-800 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
