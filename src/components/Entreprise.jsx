import React from 'react';
import { Building2, Briefcase, Wrench, Users, Cable, Settings, Globe, MonitorUp } from 'lucide-react';

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Easyvista */}
                <div className="cyber-box flex flex-col items-center text-center hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all">
                    <Wrench className="mb-4" color="#00ff41" size={40} />
                    <h4 className="text-xl mb-4 text-[var(--neon-green)] font-medium">
                        Support Utilisateur
                    </h4>
                    <p className="text-secondary mb-6 flex-grow">
                        Maintenance et support utilisateur via Easyvista
                    </p>
                </div>

                {/* Préparation postes */}
                <div className="cyber-box flex flex-col items-center text-center hover:shadow-[0_0_20px_rgba(0,170,255,0.3)] transition-all">
                    <MonitorUp className="mb-4" color="#0ae" size={40} />
                    <h4 className="text-xl mb-4 text-[var(--neon-blue)] font-medium">
                        Préparation Postes
                    </h4>
                    <p className="text-secondary mb-6 flex-grow">
                        Préparation de postes utilisateurs physique
                    </p>
                </div>

                {/* Gestion Parc */}
                <div className="cyber-box flex flex-col items-center text-center hover:shadow-[0_0_20px_rgba(255,0,60,0.3)] transition-all">
                    <Building2 className="mb-4" color="#ff003c" size={40} />
                    <h4 className="text-xl mb-4 text-[var(--neon-pink)] font-medium">
                        Gestion de Parc
                    </h4>
                    <p className="text-secondary mb-6 flex-grow">
                        Gestion de parc informatique
                    </p>
                </div>

                {/* Migration W11 */}
                <div className="cyber-box flex flex-col items-center text-center hover:shadow-[0_0_20px_rgba(255,189,46,0.3)] transition-all">
                    <Settings className="mb-4" color="#ffbd2e" size={40} />
                    <h4 className="text-xl mb-4 text-[#ffbd2e] font-medium">
                        Migration OS
                    </h4>
                    <p className="text-secondary mb-6 flex-grow">
                        Migration Windows 11 de tous les postes utilisateurs
                    </p>
                </div>

                {/* Refonte Réseau */}
                <div className="cyber-box flex flex-col items-center text-center hover:shadow-[0_0_20px_rgba(157,0,255,0.3)] transition-all">
                    <Globe className="mb-4" color="#9d00ff" size={40} />
                    <h4 className="text-xl mb-4 text-purple-400 font-medium">
                        Refonte Réseau
                    </h4>
                    <p className="text-secondary mb-6 flex-grow">
                        Refonte complète du réseau internet
                    </p>
                </div>

                {/* Brassage */}
                <div className="cyber-box flex flex-col items-center text-center hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all">
                    <Cable className="mb-4" color="#00ffff" size={40} />
                    <h4 className="text-xl mb-4 text-cyan-400 font-medium">
                        Brassage
                    </h4>
                    <p className="text-secondary mb-6 flex-grow">
                        Brassage de câbles réseaux
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Entreprise;
