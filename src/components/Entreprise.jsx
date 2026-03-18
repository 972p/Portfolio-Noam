import React from 'react';
import { Building2, Briefcase, Wrench, Users, Cable, Settings, Globe, MonitorUp, Laptop, Ticket } from 'lucide-react';

function Entreprise() {
    return (
        <section id="entreprise" className="py-12">
            <div className="cyber-header mb-8">
                <h2 className="text-neon text-3xl font-bold flex items-center gap-3">
                    <Building2 className="text-[var(--neon-blue)]" size={36} />
                    &gt; ENTREPRISE : AYMING
                </h2>
            </div>

            <div className="cyber-box mb-12">
                <p className="text-secondary text-lg leading-relaxed mb-6">
                    Ayming accompagne les start-up, PME, ETI et grandes entreprises en stratégie, management et financement de l'innovation. Créé en 1986 d'abord sous le nom de Alma.
                </p>
                <h3 className="text-xl text-[var(--neon-green)] mb-4 font-semibold border-b border-[var(--glass-border)] pb-2 flex items-center gap-2">
                    Les sites Ayming en France et partout dans le monde
                </h3>
                <div className="flex justify-center mt-6">
                    <img
                        src="https://static.wixstatic.com/media/8232bc_66793b77cba44cb69e22603814048933~mv2.png/v1/fill/w_717,h_403,al_c,lg_1,q_85,enc_avif,quality_auto/8232bc_66793b77cba44cb69e22603814048933~mv2.png"
                        alt="Carte des sites Ayming"
                        className="rounded-lg shadow-[0_0_15px_rgba(0,170,255,0.3)] border border-[rgba(0,170,255,0.2)] max-w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300"
                    />
                </div>
            </div>

            <h3 className="text-2xl text-[var(--neon-purple)] mb-6 font-bold flex items-center gap-3 mt-12">
                <Briefcase size={28} />
                Mes missions :
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Support Utilisateur / Easyvista */}
                <div className="cyber-box p-0 overflow-hidden flex flex-col border border-[rgba(0,255,65,0.3)] hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all group">
                    <div className="relative h-48 w-full overflow-hidden bg-[#050505]">
                        <img 
                            src="https://static.wixstatic.com/media/8232bc_d1495aa22b9b4de68f49ae5f1b6f6b2b~mv2.png/v1/fill/w_600,h_300,al_c,q_85,enc_avif,quality_auto/easy%20vista.png" 
                            alt="Easy Vista Dashboard" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                        <div className="absolute bottom-4 left-4 bg-[#0a0a0a]/90 p-2.5 rounded-lg border border-[rgba(0,255,65,0.4)] shadow-[0_0_10px_rgba(0,255,65,0.2)] backdrop-blur-sm z-10">
                            <Ticket color="#00ff41" size={26} />
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow text-left relative z-10 bg-gradient-to-b from-[#0a0a0a] to-transparent">
                        <h4 className="text-xl mb-3 text-[var(--neon-green)] font-medium">
                            Support Utilisateur
                        </h4>
                        <p className="text-secondary flex-grow leading-relaxed">
                            Prise en charge et résolution des requêtes utilisateurs via l'outil de gestion de services IT <strong className="text-white font-medium">Easy Vista</strong>. Maintenance et assistance au quotidien.
                        </p>
                    </div>
                </div>

                {/* Préparation Postes / Masterisation Levallois */}
                <div className="cyber-box p-0 overflow-hidden flex flex-col border border-[rgba(255,0,60,0.3)] hover:shadow-[0_0_20px_rgba(255,0,60,0.3)] transition-all group">
                    <div className="relative h-48 w-full overflow-hidden bg-[#050505]">
                        <img 
                            src="https://static.wixstatic.com/media/8232bc_15d966a62850481fbc553a89afa70e98~mv2.png/v1/fill/w_800,h_450,al_c,q_85,enc_avif,quality_auto/banc%20.png" 
                            alt="Masterisation Levallois" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                        <div className="absolute bottom-4 left-4 bg-[#0a0a0a]/90 p-2.5 rounded-lg border border-[rgba(255,0,60,0.4)] shadow-[0_0_10px_rgba(255,0,60,0.2)] backdrop-blur-sm z-10">
                            <MonitorUp color="#ff003c" size={26} />
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow text-left relative z-10 bg-gradient-to-b from-[#0a0a0a] to-transparent">
                        <h4 className="text-xl mb-3 text-[var(--neon-pink)] font-medium">
                            Préparation Postes
                        </h4>
                        <p className="text-secondary flex-grow leading-relaxed">
                            Préparation et configuration complète des postes informatiques physiques directement sur le <strong className="text-white font-medium">banc d'installation (Levallois)</strong> pour les utilisateurs locaux.
                        </p>
                    </div>
                </div>

                {/* Gestion de Parc / Workstation */}
                <div className="cyber-box p-0 overflow-hidden flex flex-col border border-[rgba(0,170,255,0.3)] hover:shadow-[0_0_20px_rgba(0,170,255,0.3)] transition-all group">
                    <div className="relative h-48 w-full overflow-hidden bg-[#050505]">
                        <img 
                            src="https://static.wixstatic.com/media/8232bc_f140d84a34f348469de3659bd0442417~mv2.png/v1/fill/w_800,h_450,al_c,q_85,enc_avif,quality_auto/workstation.png" 
                            alt="Workstation" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                        <div className="absolute bottom-4 left-4 bg-[#0a0a0a]/90 p-2.5 rounded-lg border border-[rgba(0,170,255,0.4)] shadow-[0_0_10px_rgba(0,170,255,0.2)] backdrop-blur-sm z-10">
                            <Laptop color="#0ae" size={26} />
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow text-left relative z-10 bg-gradient-to-b from-[#0a0a0a] to-transparent">
                        <h4 className="text-xl mb-3 text-[var(--neon-blue)] font-medium">
                            Gestion de Parc
                        </h4>
                        <p className="text-secondary flex-grow leading-relaxed">
                            Gestion de l'inventaire des laptops de l'entreprise via l'outil <strong className="text-white font-medium">Workstation</strong> pour un suivi précis de tous les équipements matériels.
                        </p>
                    </div>
                </div>

                {/* Migration W11 / Masterisation Londres */}
                <div className="cyber-box p-0 overflow-hidden flex flex-col border border-[rgba(255,189,46,0.3)] hover:shadow-[0_0_20px_rgba(255,189,46,0.3)] transition-all group">
                    <div className="relative h-48 w-full overflow-hidden bg-[#050505]">
                        <img 
                            src="https://static.wixstatic.com/media/8232bc_2e254671ca9d4194b42b1a3f107df831~mv2.png/v1/fill/w_800,h_450,al_c,q_85,enc_avif,quality_auto/serveur%20.png" 
                            alt="Masterisation Londres et Migration" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                        <div className="absolute bottom-4 left-4 bg-[#0a0a0a]/90 p-2.5 rounded-lg border border-[rgba(255,189,46,0.4)] shadow-[0_0_10px_rgba(255,189,46,0.2)] backdrop-blur-sm z-10">
                            <Settings color="#ffbd2e" size={26} />
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow text-left relative z-10 bg-gradient-to-b from-[#0a0a0a] to-transparent">
                        <h4 className="text-xl mb-3 text-[#ffbd2e] font-medium">
                            Masterisation sur le site de Londres
                        </h4>
                        <p className="text-secondary flex-grow leading-relaxed">
                            <strong className="text-white font-medium">Migration Windows 11</strong> des postes utilisateurs. Préparation massive de postes pour le site international <strong className="text-white font-medium">(Londres)</strong>.
                        </p>
                    </div>
                </div>

                {/* Refonte Réseau */}
                <div className="cyber-box p-0 overflow-hidden flex flex-col border border-[rgba(157,0,255,0.3)] hover:shadow-[0_0_20px_rgba(157,0,255,0.3)] transition-all group">
                    <div className="relative h-48 w-full overflow-hidden bg-[#050505]">
                        <img 
                            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" 
                            alt="Refonte Réseau" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                        <div className="absolute bottom-4 left-4 bg-[#0a0a0a]/90 p-2.5 rounded-lg border border-[rgba(157,0,255,0.4)] shadow-[0_0_10px_rgba(157,0,255,0.2)] backdrop-blur-sm z-10">
                            <Globe color="#9d00ff" size={26} />
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow text-left relative z-10 bg-gradient-to-b from-[#0a0a0a] to-transparent">
                        <h4 className="text-xl mb-3 text-purple-400 font-medium">
                            Refonte Réseau
                        </h4>
                        <p className="text-secondary flex-grow leading-relaxed">
                            Refonte complète et modernisation de l'infrastructure du réseau internet interne de l'entreprise.
                        </p>
                    </div>
                </div>

                {/* Brassage */}
                <div className="cyber-box p-0 overflow-hidden flex flex-col border border-[rgba(0,255,255,0.3)] hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all group">
                    <div className="relative h-48 w-full overflow-hidden bg-[#050505]">
                        <img 
                            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800" 
                            alt="Brassage" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70 filter brightness-[0.8] contrast-[1.2] hue-rotate-[180deg]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                        <div className="absolute bottom-4 left-4 bg-[#0a0a0a]/90 p-2.5 rounded-lg border border-[rgba(0,255,255,0.4)] shadow-[0_0_10px_rgba(0,255,255,0.2)] backdrop-blur-sm z-10">
                            <Cable color="#00ffff" size={26} />
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow text-left relative z-10 bg-gradient-to-b from-[#0a0a0a] to-transparent">
                        <h4 className="text-xl mb-3 text-cyan-400 font-medium">
                            Brassage Câblages
                        </h4>
                        <p className="text-secondary flex-grow leading-relaxed">
                            Interventions physiques dans les baies serveurs pour le brassage de câbles réseaux et l'optimisation des flux de données.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Entreprise;

