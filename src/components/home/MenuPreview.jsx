import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../utils/constants';

const MenuPreview = () => {
    return (
        <section id="menu" className="py-20 bg-stone-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-red-500 font-bold tracking-widest uppercase mb-2 block" data-aos="fade-up">Nuestro Menú</span>
                    <h2 className="font-mexican text-3xl md:text-5xl text-gray-900" data-aos="fade-up" data-aos-delay="100">Favoritos de la Casa</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Menu Card 1 */}
                    <div
                        className="group bg-white rounded-3xl shadow-lg overflow-hidden border border-stone-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="h-48 overflow-hidden relative">
                            <img src={IMAGES.steak} alt="Fajitas mexicanas con carne marinada, pimientos y cebolla - El Chipotle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <h3 className="font-mexican text-xl text-stone-800 mb-2 group-hover:text-red-600 transition-colors">Fajitas</h3>
                            <p className="text-gray-500 mb-5 text-xs leading-relaxed">Tiernas tiras de carne o pollo marinadas, salteadas con pimientos y cebolla, servidas con tortillas calientes y guacamole.</p>
                        </div>
                    </div>

                    {/* Menu Card 2 */}
                    <div
                        className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100 hover:shadow-2xl transition-all duration-300 transform md:-translate-y-6 relative z-10"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 text-xs font-bold px-3 py-1 text-center uppercase tracking-widest z-20">★ El Más Vendido ★</div>
                        <div className="h-48 overflow-hidden relative mt-6">
                            <img src={IMAGES.tacos} alt="Hamburguesa Chipotle gourmet con queso cheddar y salsa especial - El Chipotle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <h3 className="font-mexican text-2xl text-stone-800 mb-2 group-hover:text-red-600 transition-colors">Hamburguesa Chipotle</h3>
                            <p className="text-gray-500 mb-5 text-xs leading-relaxed">Jugosa carne de res, queso cheddar, lechuga fresca, tomate, cebolla caramelizada y nuestra salsa chipotle especial.</p>
                        </div>
                    </div>

                    {/* Menu Card 3 */}
                    <div
                        className="group bg-white rounded-3xl shadow-lg overflow-hidden border border-stone-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <div className="h-48 overflow-hidden relative">
                            <img src={IMAGES.salad} alt="Ensalada fresca con lechuga, aderezo ranch y pollo a la parrilla - El Chipotle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <h3 className="font-mexican text-xl text-stone-800 mb-2 group-hover:text-red-600 transition-colors">Ensaladas</h3>
                            <p className="text-gray-500 mb-5 text-xs leading-relaxed">Frescas lechugas mixtas, aderezo ranch de la casa, crutones artesanales, queso parmesano y pollo a la parrilla.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuPreview;
