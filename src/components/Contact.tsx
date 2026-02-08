import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle the API call
        // For now, we'll just simulate success
        setTimeout(() => setSubmitted(true), 1000);
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
                >
                    {/* Left Side: Decor & Info */}
                    <div className="md:w-5/12 p-10 md:p-12 relative bg-slate-900 flex flex-col justify-center">
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6 text-white">
                                {t('contactForm.title')}
                            </h2>
                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                {t('contactForm.subtitle')}
                            </p>
                            <div className="space-y-4 text-slate-400">
                                <p>Maya Flynn</p>
                                <p>contact@mayaflynn.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="md:w-7/12 bg-white p-10 md:p-12">
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center py-12"
                            >
                                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                                <p className="text-slate-600">{t('contactForm.success')}</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        {t('contactForm.name')}
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        {t('contactForm.email')}
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="jane@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        {t('contactForm.service')}
                                    </label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                                        <option value="general">{t('contactForm.options.general')}</option>
                                        <option value="menus">{t('contactForm.options.menus')}</option>
                                        <option value="cooking">{t('contactForm.options.cooking')}</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        {t('contactForm.message')}
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group"
                                >
                                    {t('contactForm.submit')}
                                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
