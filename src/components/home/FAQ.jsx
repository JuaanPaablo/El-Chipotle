import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "¿Hacen envíos a domicilio?",
            answer: "¡Sí! Contamos con servicio de entrega propio en toda la ciudad. También nos encuentras en las principales apps de delivery."
        },
        {
            question: "¿Tienen opciones vegetarianas?",
            answer: "Claro que sí. Nuestra 'Ensalada Especial' y los tacos de vegetales asados son favoritos incluso entre los carnívoros."
        },
        {
            question: "¿Se requiere reservación?",
            answer: "Para grupos grandes (más de 6 personas) recomendamos reservar, especialmente los fines de semana. Para parejas o grupos pequeños, ¡solo ven!"
        },
        {
            question: "¿Aceptan tarjetas de crédito?",
            answer: "Aceptamos todas las tarjetas de crédito y débito, transferencias y efectivo."
        },
        {
            question: "¿Tienen parqueadero?",
            answer: "Sí, contamos con parqueadero privado y seguro para nuestros clientes justo al lado del restaurante."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-16 bg-stone-100">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-10">
                    <div
                        className="inline-flex items-center justify-center p-2 bg-red-100 rounded-full mb-3"
                        data-aos="zoom-in"
                    >
                        <HelpCircle className="text-red-600 w-7 h-7" />
                    </div>
                    <h2
                        className="font-mexican text-3xl md:text-4xl text-gray-900 mb-3"
                        data-aos="fade-up"
                    >
                        Preguntas Frecuentes
                    </h2>
                    <p
                        className="text-gray-600 text-sm"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Todo lo que necesitas saber antes de tu visita.
                    </p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${openIndex === index ? 'border-red-500 shadow-lg' : 'border-stone-200 hover:border-red-300'}`}
                            data-aos="fade-up"
                            data-aos-delay={200 + (index * 100)}
                        >
                            <button
                                className="w-full px-5 py-4 text-left flex justify-between items-center focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className={`font-bold text-base ${openIndex === index ? 'text-red-700' : 'text-stone-800'}`}>
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-red-500 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="text-stone-400 flex-shrink-0" />
                                )}
                            </button>

                            <div
                                className={`px-5 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-stone-600 leading-relaxed text-sm">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
