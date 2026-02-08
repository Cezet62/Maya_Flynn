import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const { t } = useTranslation();
    const testimonials = t('testimonials.list', { returnObjects: true }) as Array<{ name: string; role: string; quote: string }>;

    return (
        <section id="testimonials" className="py-24 bg-stone-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 font-light">
                        {t('testimonials.title')}
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                        {t('testimonials.subtitle')}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 relative group"
                        >
                            <Quote className="w-10 h-10 text-primary/20 mb-6 group-hover:text-primary/40 transition-colors" />

                            <p className="text-slate-700 italic mb-8 leading-relaxed text-lg">
                                "{item.quote}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-xl font-heading font-bold text-slate-500">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                                    <p className="text-sm text-primary uppercase tracking-wider text-xs font-bold">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
