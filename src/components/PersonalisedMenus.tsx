import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import menuImage from '../assets/personalised-menu.png';

const PersonalisedMenus = () => {
    const { t } = useTranslation();

    const menuItems = t('menus.list', { returnObjects: true }) as string[];

    return (
        <section id="menus" className="py-20 bg-teal-50/50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-4xl font-heading font-bold mb-6 text-slate-900">
                            {t('menus.title')}
                        </h2>
                        <h3 className="text-xl font-medium text-primary mb-6 italic">
                            {t('menus.subtitle')}
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            {t('menus.description')}
                        </p>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">
                                {t('menus.included')}
                            </h4>
                            <ul className="space-y-4">
                                {menuItems.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="mt-1 bg-teal-100 p-1 rounded-full mr-4 shrink-0">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 scale-105"></div>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src={menuImage}
                                    alt="Healthy meal prep flatlay"
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3"
                            >
                                <div className="bg-yellow-100 p-2 rounded-lg">
                                    <span className="text-2xl">🥗</span>
                                </div>
                                <div>
                                    <div className="font-bold text-slate-800">100% Tailored</div>
                                    <div className="text-xs text-slate-500">To your unique needs</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PersonalisedMenus;
