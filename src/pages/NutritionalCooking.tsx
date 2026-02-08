import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, Euro, Utensils, Users, ClipboardCheck } from 'lucide-react';
import cookingImage from '../assets/nutritional-cooking.png';

const NutritionalCooking = () => {
    const { t } = useTranslation();

    const audienceList = t('nutritionalCooking.audience.list', { returnObjects: true }) as string[];
    const serviceList = t('nutritionalCooking.service.list', { returnObjects: true }) as string[];

    return (
        <section className="pt-24 min-h-screen bg-slate-50">
            <div className="container mx-auto px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-slate-900">
                        {t('nutritionalCooking.title')}
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        {t('nutritionalCooking.intro')}
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-16 mb-20">
                    {/* Left Column - Content */}
                    <div className="lg:w-1/2 space-y-12">
                        {/* Main Value Prop */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                        >
                            <Utensils className="w-10 h-10 text-primary mb-4" />
                            <p className="text-slate-700 text-lg leading-relaxed italic">
                                "{t('nutritionalCooking.consultMain')}"
                            </p>
                        </motion.div>

                        {/* Audience List */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 flex items-center">
                                <Users className="w-6 h-6 mr-3 text-primary" />
                                {t('nutritionalCooking.audience.title')}
                            </h3>
                            <ul className="space-y-4">
                                {audienceList.map((item, index) => (
                                    <li key={index} className="flex items-center text-slate-700 bg-white p-4 rounded-xl shadow-sm">
                                        <div className="w-2 h-2 rounded-full bg-primary mr-4"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Service List */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 flex items-center">
                                <ClipboardCheck className="w-6 h-6 mr-3 text-primary" />
                                {t('nutritionalCooking.service.title')}
                            </h3>
                            <ul className="space-y-4">
                                {serviceList.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <Check className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" />
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Right Column - Image & Pricing */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="sticky top-32 space-y-8"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square">
                                <img
                                    src={cookingImage}
                                    alt="Nutritional cooking flatlay"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-primary/20 p-2 rounded-lg">
                                        <Euro className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Pricing</h3>
                                </div>
                                <p className="text-lg mb-4 text-slate-300">
                                    {t('nutritionalCooking.pricing.hourly')}
                                </p>
                                <p className="text-slate-400 mb-6">
                                    {t('nutritionalCooking.pricing.daily')}
                                </p>
                                <div className="border-t border-slate-800 pt-6">
                                    <p className="text-sm text-slate-500 italic">
                                        {t('nutritionalCooking.pricing.disclaimer')}
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <a href="/#contact" className="block w-full text-center bg-primary hover:bg-teal-500 text-white font-bold py-4 rounded-xl transition-colors">
                                        {t('nav.contact')}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NutritionalCooking;
