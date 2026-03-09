import React from 'react';
import { Building2, Users, Globe, Briefcase } from 'lucide-react';

function Entreprise() {
    return (
        <section id="entreprise">
            <div className="cyber-header">
                <h2 className="text-neon">&gt; ENTREPRISE_ACCUEIL</h2>
            </div>

            <p className="mb-4 text-secondary">
                Mon expérience au sein d'Ayming, une société de conseil en performance business.
            </p>

            <div className="grid grid-cols-2">
                <div className="cyber-box">
                    <Building2 className="mb-2" color="#0ae" size={32} />
                    <h3 className="mb-2">Société Française</h3>
                    <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
                        Siège social situé à Levallois-Perret (92044).
                    </p>
                </div>

                <div className="cyber-box">
                    <Users className="mb-2" color="#00ff41" size={32} />
                    <h3 className="mb-2">1 250 Collaborateurs</h3>
                    <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
                        Présence à travers le monde entier.
                    </p>
                </div>

                <div className="cyber-box">
                    <Globe className="mb-2" color="#ff003c" size={32} />
                    <h3 className="mb-2">+15 000 Clients</h3>
                    <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
                        Une clientèle internationale accompagnée dans son développement.
                    </p>
                </div>

                <div className="cyber-box">
                    <Briefcase className="mb-2" color="#ffbd2e" size={32} />
                    <h3 className="mb-2">145 M€ de CA</h3>
                    <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
                        Chiffre d'affaires généré en 2021.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Entreprise;
