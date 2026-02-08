import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Heart, Activity, Coffee, Brain } from 'lucide-react';

const Services = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: <Heart className="w-8 h-8 text-primary" />,
            title: "Nutritional Therapy",
            description: "Personalized nutrition plans to address your unique health concerns."
        },
        {
            icon: <Brain className="w-8 h-8 text-primary" />,
            title: "Mindset Coaching",
            description: "Overcome mental blocks and build a healthy relationship with food."
        },
        {
            icon: <Activity className="w-8 h-8 text-primary" />,
            title: "Functional Testing",
            description: "Comprehensive lab testing to uncover root causes."
        },
        {
            icon: <Coffee className="w-8 h-8 text-primary" />,
            title: "Meal Planning",
            description: "Delicious, easy-to-follow meal plans tailored to your needs."
        }
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-heading font-bold mb-4 text-slate-900"
                    >
                        {t('nav.services')}
                    </motion.h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-slate-100 hover:border-primary/20 group"
                        >
                            <div className="mb-6 p-4 bg-teal-50 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
