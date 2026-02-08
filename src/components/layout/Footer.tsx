import { useTranslation } from 'react-i18next';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-slate-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-6 md:mb-0">
                        <span className="text-2xl font-heading font-bold">
                            Maya<span className="text-primary">Flynn</span>
                        </span>
                        <p className="text-slate-400 mt-2 text-sm max-w-xs">
                            {t('hero.subtitle')}
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    {t('footer.copyright')}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
