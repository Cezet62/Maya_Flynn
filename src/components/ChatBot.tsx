import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
    id: number;
    text: string;
    isBot: boolean;
    timestamp: Date;
}

const SYSTEM_PROMPT = `You are Maya Flynn - a certified nutritional therapist, gut health specialist, and holistic lifestyle coach with over 10 years of clinical experience.

YOUR PHILOSOPHY:
- "Food as Medicine" - you believe in the transformative power of nutrition
- You bridge ancient wisdom with modern clinical science
- Health is holistic: it's not just what you eat, but how you live, think, and feel
- You help people become their own nutritionist and health detective
- Your goal is to give people Clarity, Ability, and Confidence in their health choices

YOUR EXPERTISE AREAS (from your Food as Medicine course):
1. Food Confidence - Smart shopping, label reading, stress-free meal planning
2. Blood Biomarkers - Understanding blood work and signs of silent imbalances
3. Wellness Under Stress - Optimizing energy, balance, and sleep architecture
4. Metabolic Repair - Fixing the metabolic system beyond just counting calories
5. Gut Reset - Digestive support as the foundation of total body health
6. Immune Resilience - Balanced immune protection and modulation
7. The Healthy Mind - Enhancing mood, focus, and brain energy through nutrition
8. Hormone Sync - Navigating cycles, perimenopause, and menopause with grace
9. Fitness Fueling - Supporting movement, recovery, and physical performance

YOUR SERVICES:
- Personalised 7-day menus tailored to goals, symptoms, and lifestyle
- Nutritional cooking consulting for chefs, restaurants, hotels, schools
- Food as Medicine course (9 modules, €35/session, first session free)
- Free 15-minute discovery calls

RESPONSE GUIDELINES:
- Be warm, supportive, and empowering - never preachy or judgmental
- Give practical, actionable advice
- Explain the "why" behind recommendations when helpful
- Mention your services naturally when relevant, but don't be pushy
- For serious health concerns, encourage consultation with a healthcare professional
- Keep responses concise but informative (2-4 paragraphs max)
- Always respond in English
- You're based in Palma de Mallorca, Spain (Santa Catalina area)

Remember: You're helping people reclaim their energy and health through the power of food.`;

const ChatBot = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hi there! I'm Maya, your virtual wellness assistant. How can I help you today?",
            isBot: true,
            timestamp: new Date()
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendToGemini = async (userMessage: string): Promise<string> => {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

        if (!apiKey) {
            return "Sorry, I can't respond right now - API key is missing. Please contact the site administrator.";
        }

        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [
                                    { text: SYSTEM_PROMPT },
                                    { text: `User asks: ${userMessage}` }
                                ]
                            }
                        ],
                        generationConfig: {
                            temperature: 0.7,
                            maxOutputTokens: 1024,
                        }
                    })
                }
            );

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            return data.candidates?.[0]?.content?.parts?.[0]?.text ||
                   "Sorry, I couldn't generate a response. Please try again.";
        } catch (error) {
            console.error('Gemini API error:', error);
            return "Sorry, there was an error connecting to the assistant. Please try again in a moment.";
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now(),
            text: inputText.trim(),
            isBot: false,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputText('');
        setIsLoading(true);

        const botResponse = await sendToGemini(userMessage.text);

        const botMessage: Message = {
            id: Date.now() + 1,
            text: botResponse,
            isBot: true,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
    };

    const suggestedQuestions = [
        'How can food be used as medicine?',
        'What does your gut health program include?',
        'How do I get a personalised menu?'
    ];

    return (
        <section id="chatbot" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-heading font-bold mb-4 text-slate-900">
                        Ask Maya
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Have questions about healthy living? Chat with my AI assistant
                        for guidance on nutrition, gut health, and overall wellbeing.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="bg-slate-50 rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                        {/* Header */}
                        <div className="bg-primary px-6 py-4 flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <MessageCircle className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Maya - AI Assistant</h3>
                                <p className="text-white/80 text-sm">Healthy lifestyle & nutrition</p>
                            </div>
                            <div className="ml-auto flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                <span className="text-white/80 text-sm">Online</span>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="h-96 overflow-y-auto p-6 space-y-4">
                            <AnimatePresence>
                                {messages.map((message) => (
                                    <motion.div
                                        key={message.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className={`flex gap-3 ${message.isBot ? '' : 'flex-row-reverse'}`}
                                    >
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                                            message.isBot ? 'bg-primary' : 'bg-slate-700'
                                        }`}>
                                            {message.isBot ? (
                                                <Bot className="w-4 h-4 text-white" />
                                            ) : (
                                                <User className="w-4 h-4 text-white" />
                                            )}
                                        </div>
                                        <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                                            message.isBot
                                                ? 'bg-white shadow-sm border border-slate-100'
                                                : 'bg-primary text-white'
                                        }`}>
                                            <p className={`text-sm leading-relaxed whitespace-pre-wrap ${
                                                message.isBot ? 'text-slate-700' : 'text-white'
                                            }`}>
                                                {message.text}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex gap-3"
                                >
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                                        <Bot className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="bg-white shadow-sm border border-slate-100 rounded-2xl px-4 py-3">
                                        <Loader2 className="w-5 h-5 text-primary animate-spin" />
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggested questions */}
                        {messages.length === 1 && (
                            <div className="px-6 pb-4">
                                <p className="text-xs text-slate-500 mb-2">Suggested questions:</p>
                                <div className="flex flex-wrap gap-2">
                                    {suggestedQuestions.map((question, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setInputText(question)}
                                            className="text-xs bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full hover:border-primary hover:text-primary transition-colors"
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-100">
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    placeholder="Type your question..."
                                    disabled={isLoading}
                                    className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-slate-700 placeholder-slate-400 disabled:opacity-50"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputText.trim() || isLoading}
                                    className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                >
                                    <Send className="w-4 h-4" />
                                    <span className="hidden sm:inline">Send</span>
                                </button>
                            </div>
                        </form>
                    </div>

                    <p className="text-center text-xs text-slate-400 mt-4">
                        This AI assistant provides general wellness advice. For health concerns, please consult a healthcare professional.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ChatBot;
