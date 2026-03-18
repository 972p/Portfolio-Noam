import React from 'react';
import { Laptop, Ticket, Building2, Globe } from 'lucide-react';

function PreparationPoste() {
    return (
        <section id="preparation-poste" className="py-12">
            <div className="cyber-header mb-8">
                <h2 className="text-neon text-3xl font-bold flex items-center gap-3">
                    &gt; PRÉPARATION POSTES : MASTERISATION
                </h2>
            </div>
            
            <p className="mb-8 text-secondary text-lg">
                Détail de mes missions concernant la préparation des postes physiques, la masterisation et la gestion du parc.
            </p>

            <div className="flex flex-col gap-8 max-w-6xl mx-auto">
                {/* Workstation */}
                <div className="cyber-box flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-[0_0_20px_rgba(0,170,255,0.3)] transition-all">
                    <div className="md:w-5/12 flex flex-col items-start text-left">
                        <Laptop className="mb-4" color="#0ae" size={40} />
                        <h3 className="text-2xl font-medium text-white mb-2">
                            <span className="text-[var(--neon-blue)]">Workstation</span> : outil pour gérer l'inventaire
                        </h3>
                        <p className="text-secondary">Gestion de l'inventaire de laptop de l'entreprise pour un suivi précis des équipements.</p>
                    </div>
                    <div className="md:w-7/12 flex justify-end w-full">
                        <img 
                            src="https://static.wixstatic.com/media/8232bc_f140d84a34f348469de3659bd0442417~mv2.png/v1/fill/w_800,h_450,al_c,q_85,enc_avif,quality_auto/workstation.png" 
                            alt="Workstation" 
                            className="rounded-lg shadow-[0_0_15px_rgba(0,170,255,0.3)] border border-[rgba(0,170,255,0.2)] object-cover max-h-72 w-full"
                        />
                    </div>
                </div>

                {/* Ticketing avec Easy Vista */}
                <div className="cyber-box flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all">
                    <div className="md:w-5/12 flex flex-col items-start text-left">
                        <Ticket className="mb-4" color="#00ff41" size={40} />
                        <h3 className="text-2xl font-medium text-white mb-2">
                            Ticketing avec <span className="text-[var(--neon-green)]">Easy Vista</span>
                        </h3>
                        <p className="text-secondary">Prise en charge et résolution des requêtes utilisateurs via l'outil de gestion de services IT.</p>
                    </div>
                    <div className="md:w-7/12 flex flex-col lg:flex-row gap-4 justify-end w-full">
                        <img 
                            src="https://static.wixstatic.com/media/8232bc_91e28caa4a2e445ca78ef1825df731d3~mv2.png/v1/fill/w_400,h_225,al_c,q_85,enc_avif,quality_auto/ticket%20.png" 
                            alt="Easy Vista Ticketing" 
                            className="rounded-lg shadow-[0_0_15px_rgba(0,255,65,0.3)] border border-[rgba(0,255,65,0.2)] object-cover max-h-64 lg:w-1/2 w-full"
                        />
                        <img 
                            src="https://static.wixstatic.com/media/8232bc_d1495aa22b9b4de68f49ae5f1b6f6b2b~mv2.png/v1/fill/w_400,h_225,al_c,q_85,enc_avif,quality_auto/easy%20vista.png" 
                            alt="Easy Vista Dashboard" 
                            className="rounded-lg shadow-[0_0_15px_rgba(0,255,65,0.3)] border border-[rgba(0,255,65,0.2)] object-cover max-h-64 lg:w-1/2 w-full"
                        />
                    </div>
                </div>

                {/* Masterisation sur site Levallois */}
                <div className="cyber-box flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-[0_0_20px_rgba(255,0,60,0.3)] transition-all">
                    <div className="md:w-5/12 flex flex-col items-start text-left">
                        <Building2 className="mb-4" color="#ff003c" size={40} />
                        <h3 className="text-2xl font-medium text-white mb-2">
                            Masterisation sur site <span className="text-[var(--neon-pink)]">(Levallois)</span>
                        </h3>
                        <p className="text-secondary">Préparation et configuration complète des postes informatiques directement sur le banc d'installation pour les utilisateurs locaux.</p>
                    </div>
                    <div className="md:w-7/12 flex justify-end w-full">
                        <img 
                            src="https://static.wixstatic.com/media/8232bc_15d966a62850481fbc553a89afa70e98~mv2.png/v1/fill/w_800,h_450,al_c,q_85,enc_avif,quality_auto/banc%20.png" 
                            alt="Masterisation Levallois" 
                            className="rounded-lg shadow-[0_0_15px_rgba(255,0,60,0.3)] border border-[rgba(255,0,60,0.2)] object-cover max-h-72 w-full"
                        />
                    </div>
                </div>

                {/* Masterisation sur le site de Londres */}
                <div className="cyber-box flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-[0_0_20px_rgba(255,189,46,0.3)] transition-all">
                    <div className="md:w-5/12 flex flex-col items-start text-left">
                        <Globe className="mb-4" color="#ffbd2e" size={40} />
                        <h3 className="text-2xl font-medium text-white mb-2">
                            Masterisation sur le site de <span className="text-[#ffbd2e]">Londres</span>
                        </h3>
                        <p className="text-secondary">Préparation de nombreux postes informatiques pour le site international, assurant un déploiement massif et uniformisé pour les collaborateurs étrangers.</p>
                    </div>
                    <div className="md:w-7/12 flex justify-end w-full">
                        <img 
                            src="https://static.wixstatic.com/media/8232bc_2e254671ca9d4194b42b1a3f107df831~mv2.png/v1/fill/w_800,h_450,al_c,q_85,enc_avif,quality_auto/serveur%20.png" 
                            alt="Masterisation Londres" 
                            className="rounded-lg shadow-[0_0_15px_rgba(255,189,46,0.3)] border border-[rgba(255,189,46,0.2)] object-cover max-h-72 w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PreparationPoste;
