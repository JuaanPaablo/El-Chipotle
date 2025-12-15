import React from 'react';
import { ExternalLink, Download } from 'lucide-react';
import { MENU_IMAGES } from '../../utils/constants';

const FullMenuGallery = () => {
    return (
        <section id="menu-completo" className="py-24 bg-gradient-to-b from-stone-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span
                        className="text-red-500 font-bold tracking-widest uppercase mb-2 block"
                        data-aos="fade-up"
                    >
                        Nuestro Menú Completo
                    </span>
                    <h2
                        className="font-mexican text-4xl md:text-6xl text-gray-900 mb-4"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Explora Todas Nuestras Delicias
                    </h2>
                    <p
                        className="text-gray-600 text-lg max-w-2xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Haz clic en cualquier imagen para verla en tamaño completo
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {MENU_IMAGES.map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl shadow-2xl border-4 border-stone-200 hover:border-red-500 transition-all duration-300"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            <img
                                src={image}
                                alt={`Menú completo de El Chipotle - Restaurante de comida mexicana - Página ${index + 1}`}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Overlay with buttons */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col sm:flex-row gap-3 px-4">
                                    {/* Open in new tab */}
                                    <a
                                        href={image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-lg transition-colors text-sm sm:text-base"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <ExternalLink size={20} />
                                        Ver Completo
                                    </a>

                                    {/* Download */}
                                    <a
                                        href={image}
                                        download={`menu-el-chipotle-${index + 1}.png`}
                                        className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-lg transition-colors text-sm sm:text-base"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Download size={20} />
                                        Descargar
                                    </a>
                                </div>
                            </div>

                            {/* Menu badge */}
                            <div className="absolute top-4 right-4 bg-yellow-500 text-red-900 font-bold px-4 py-2 rounded-full shadow-lg text-sm">
                                Menú {index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FullMenuGallery;
