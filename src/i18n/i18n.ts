import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
    en: {
        translation: {
            nav: {
                about: "About",
                services: "Services",
                menus: "Menus",
                consulting: "Consulting",
                course: "Course",
                testimonials: "Testimonials",
                contact: "Contact",
                book: "Book Consultation"
            },
            testimonials: {
                title: "Client Stories",
                subtitle: "Real results from real people.",
                list: [
                    {
                        name: "Sarah Jenkins",
                        role: "Yoga Instructor",
                        quote: "Maya's approach completely transformed my relationship with food. I have more energy than I've had in 10 years!"
                    },
                    {
                        name: "Michael Chen",
                        role: "Software Engineer",
                        quote: "The personalized menu made it so easy to eat healthy despite my busy schedule. Highly recommended."
                    },
                    {
                        name: "Elena Rodriguez",
                        role: "Artist",
                        quote: "Finally, someone who understands that health is about more than just calories. The holistic coaching was life-changing."
                    }
                ]
            },
            hero: {
                title: "Transform Your Health",
                subtitle: "Holistic nutrition and wellness coaching for a vibrant life.",
                cta: "Start Your Journey"
            },
            menus: {
                title: "Personalised Menus",
                subtitle: "Nutrition feels easier when you don't have to think about it.",
                description: "Get clarity, structure, and confidence in your daily eating with a menu tailored to your goals, symptoms, and lifestyle.",
                included: "What’s included:",
                list: [
                    "A fully personalised 7-day menu",
                    "Breakfast, lunch, dinner, snack options, and hydration",
                    "Clear portions, measurements, and targets",
                    "Easy, accessible meals based on your preferences"
                ]
            },
            nutritionalCooking: {
                title: "Nutritional Cooking & Menu Consulting",
                intro: "Do you cook for individuals with special dietary requirements or those who are health conscious and seek professional guidance?",
                consultMain: "Avail of ideas on how to create an attractive menu on a restricted diet, increase nutrient density or substitute for healthier alternatives.",
                audience: {
                    title: "Suitable for:",
                    list: [
                        "Chefs cooking at villas, yachts and family homes",
                        "Work canteens and restaurants",
                        "Hotels and nursing homes",
                        "Crèches, schools and retreat facilities"
                    ]
                },
                service: {
                    title: "The basic service includes:",
                    list: [
                        "Site visit / meeting - in person or online",
                        "Review of resources and existing menus",
                        "My recommendations: supplies, dishes, cooking techniques, ratio of ingredients, etc."
                    ]
                },
                pricing: {
                    hourly: "My hourly consulting rate is €100.",
                    daily: "Daily rates and longer contracts vary, based on requirements. Contact me for a quotation.",
                    disclaimer: "I also provide nutritional cooking services for those with specific nutritional requirements."
                }
            },
            contactForm: {
                title: "Ready to Start Your Journey?",
                subtitle: "Book your free 15-minute discovery call today.",
                name: "Name",
                email: "Email",
                service: "Service of Interest",
                message: "Message",
                submit: "Send Message",
                success: "Thank you! I'll be in touch shortly.",
                options: {
                    general: "General Inquiry",
                    menus: "Personalised Menus",
                    cooking: "Nutritional Cooking"
                }
            },
            options: {
                general: "General Inquiry",
                menus: "Personalised Menus",
                cooking: "Nutritional Cooking"
            },
            foodAsMedicine: {
                title: "Food as Medicine",
                subtitle: "Become your own nutritionist and health detective.",
                hero: {
                    highlight: "Series",
                    desc: "A transformative journey bridging ancient wisdom and clinical science."
                },
                benefits: {
                    title: "Why this course?",
                    items: [
                        { title: "Clarity", desc: "Understand the deep connection between food, hormones, and vitality." },
                        { title: "Ability", desc: "Learn to read your body's signals and respond with intelligence." },
                        { title: "Confidence", desc: "Make informed decisions free from confusion and fear." }
                    ]
                },
                modules: {
                    title: "The Curriculum",
                    list: [
                        { number: "01", title: "Food Confidence", desc: "Smart shopping, label reading, and stress-free planning." },
                        { number: "02", title: "Decode Your Blood", desc: "Understanding bio-markers and signs of silent imbalances." },
                        { number: "03", title: "Wellness Under Stress", desc: "Optimizing energy, balance, and sleep architecture." },
                        { number: "04", title: "Metabolic Repair", desc: "Fixing the system beyond just counting calories." },
                        { number: "05", title: "Gut Reset", desc: "Digestive support as the foundation of total body health." },
                        { number: "06", title: "Immune Resilience", desc: "Shifting from defense modulation to balanced protection." },
                        { number: "07", title: "The Healthy Mind", desc: "Enhancing mood, focus, and brain energy." },
                        { number: "08", title: "Hormone Sync", desc: "Navigating cycles, perimenopause, and menopause with grace." },
                        { number: "09", title: "Fitness Fueling", desc: "Supporting movement, recovery, and physical results." }
                    ]
                },
                pricing: {
                    title: "Investment",
                    session: "Per Session",
                    price: "€35",
                    free: "First Session Free",
                    cta: "Enroll Now"
                }
            },
            footer: {
                copyright: "© 2026 Maya Flynn. All rights reserved."
            }
        }
    },
    es: {
        translation: {
            nav: {
                about: "Sobre Mí",
                services: "Servicios",
                menus: "Menús",
                consulting: "Consultoría",
                course: "Curso",
                testimonials: "Testimonios",
                contact: "Contacto",
                book: "Reserva Consulta"
            },
            testimonials: {
                title: "Historias de Clientes",
                subtitle: "Resultados reales de personas reales.",
                list: [
                    {
                        name: "Sarah Jenkins",
                        role: "Instructora de Yoga",
                        quote: "El enfoque de Maya transformó completamente mi relación con la comida. ¡Tengo más energía que en los últimos 10 años!"
                    },
                    {
                        name: "Michael Chen",
                        role: "Ingeniero de Software",
                        quote: "El menú personalizado hizo que comer sano fuera muy fácil a pesar de mi agenda ocupada. Muy recomendable."
                    },
                    {
                        name: "Elena Rodriguez",
                        role: "Artista",
                        quote: "Por fin alguien que entiende que la salud es más que calorías. El coaching holístico me cambió la vida."
                    }
                ]
            },
            hero: {
                title: "Transforma Tu Salud",
                subtitle: "Nutrición holística y coaching de bienestar para una vida vibrante.",
                cta: "Comienza Tu Viaje"
            },
            menus: {
                title: "Menús Personalizados",
                subtitle: "La nutrición es más fácil cuando no tienes que pensarla.",
                description: "Obtén claridad, estructura y confianza en tu alimentación diaria con un menú adaptado a tus objetivos y estilo de vida.",
                included: "Qué incluye:",
                list: [
                    "Menú de 7 días totalmente personalizado",
                    "Opciones de desayuno, almuerzo, cena y snacks",
                    "Porciones y medidas claras",
                    "Comidas fáciles y accesibles basadas en tus gustos"
                ]
            },
            nutritionalCooking: {
                title: "Cocina Nutricional y Consultoría de Menús",
                intro: "¿Cocinas para personas con necesidades dietéticas especiales o para quienes son conscientes de su salud y buscan orientación profesional?",
                consultMain: "Aprovecha ideas sobre cómo crear un menú atractivo en una dieta restringida, aumentar la densidad de nutrientes o sustituir por alternativas más saludables.",
                audience: {
                    title: "A quién va dirigido:",
                    list: [
                        "Chefs en villas, yates y hogares familiares",
                        "Comedores de trabajo y restaurantes",
                        "Hoteles y residencias de ancianos",
                        "Guarderías, escuelas y centros de retiro"
                    ]
                },
                service: {
                    title: "El servicio básico incluye:",
                    list: [
                        "Visita al sitio / reunión (presencial u online)",
                        "Revisión de recursos y menús existentes",
                        "Mis recomendaciones: suministros, platos, técnicas de cocina, proporción de ingredientes, etc."
                    ]
                },
                pricing: {
                    hourly: "Mi tarifa de consultoría por hora es de 100€.",
                    daily: "Las tarifas diarias y contratos más largos varían según los requisitos. Contáctame para un presupuesto.",
                    disclaimer: "También ofrezco servicios de cocina nutricional para aquellos con requisitos específicos."
                }
            },
            contactForm: {
                title: "¿Listo para empezar tu viaje?",
                subtitle: "Reserva hoy tu llamada de descubrimiento gratuita de 15 minutos.",
                name: "Nombre",
                email: "Correo electrónico",
                service: "Servicio de interés",
                message: "Mensaje",
                submit: "Enviar Mensaje",
                success: "¡Gracias! Me pondré en contacto contigo pronto.",
                options: {
                    general: "Consulta General",
                    menus: "Menús Personalizados",
                    cooking: "Cocina Nutricional"
                }
            },
            options: {
                general: "Consulta General",
                menus: "Menús Personalizados",
                cooking: "Cocina Nutricional"
            },
            foodAsMedicine: {
                title: "Alimentos como Medicina",
                subtitle: "Conviértete en tu propio nutricionista y detective de salud.",
                hero: {
                    highlight: "Serie",
                    desc: "Un viaje transformador que une la sabiduría ancestral con la ciencia clínica."
                },
                benefits: {
                    title: "¿Por qué este curso?",
                    items: [
                        { title: "Claridad", desc: "Entiende la conexión profunda entre comida, hormonas y vitalidad." },
                        { title: "Habilidad", desc: "Aprende a leer las señales de tu cuerpo y responder con inteligencia." },
                        { title: "Confianza", desc: "Toma decisiones informadas libres de confusión y miedo." }
                    ]
                },
                modules: {
                    title: "El Plan de Estudios",
                    list: [
                        { number: "01", title: "Confianza Alimentaria", desc: "Compras inteligentes y planificación sin estrés." },
                        { number: "02", title: "Decodifica tu Sangre", desc: "Entendiendo bio-marcadores y desequilibrios silenciosos." },
                        { number: "03", title: "Bienestar bajo Estrés", desc: "Optimizando energía, equilibrio y arquitectura del sueño." },
                        { number: "04", title: "Reparación Metabólica", desc: "Arreglando el sistema más allá de contar calorías." },
                        { number: "05", title: "Reinicio Intestinal", desc: "Apoyo digestivo como base de la salud total." },
                        { number: "06", title: "Resiliencia Inmune", desc: "Pasando de la defensa al equilibrio." },
                        { number: "07", title: "Mente Saludable", desc: "Mejorando el estado de ánimo, enfoque y energía cerebral." },
                        { number: "08", title: "Sincronización Hormonal", desc: "Navegando ciclos y menopausia con gracia." },
                        { number: "09", title: "Nutrición Deportiva", desc: "Apoyo al movimiento, recuperación y resultados físicos." }
                    ]
                },
                pricing: {
                    title: "Inversión",
                    session: "Por Sesión",
                    price: "35€",
                    free: "Primera Sesión Gratis",
                    cta: "Inscribirse Ahora"
                }
            },
            footer: {
                copyright: "© 2026 Maya Flynn. Todos los derechos reservados."
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // default language
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
