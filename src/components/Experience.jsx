import React from 'react';
import { ExternalLink } from 'lucide-react';

function Experience() {
    return (
        <section id="experience">
            <div className="cyber-header">
                <h2 className="text-neon">&gt; TIMELINE LOGS</h2>
            </div>

            <div className="timeline">
                <div className="timeline-item left">
                    <div className="timeline-content">
                        <h3 className="text-neon mb-1">2024 - À ce jour</h3>
                        <h4 className="mb-1">Alternance BTS SIO (Option SISR)</h4>
                        <p className="text-secondary" style={{ fontSize: '0.9rem' }}>AYMING - Siège, Levallois-Perret</p>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Apprentissage suivi au sein du support dans le service informatique.</p>
                    </div>
                </div>

                <div className="timeline-item right">
                    <div className="timeline-content">
                        <h3 className="text-neon mb-1">2024 - À ce jour</h3>
                        <h4 className="mb-1">BTS SIO - OPTION SISR</h4>
                        <p className="text-secondary mb-2" style={{ fontSize: '0.9rem' }}>H3 HITEMA - PARIS (75)</p>
                        
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                            <p className="mb-2 highlight">Option SISR : Solutions d'Infrastructures, Systèmes et Réseaux.</p>
                            <ul className="cyber-list mb-4">
                                <li>Administration Windows Serveur</li>
                                <li>Administration Linux</li>
                                <li>Administration PFSENSE</li>
                                <li>Création d'infrastructures réseau</li>
                                <li>Virtualisation</li>
                                <li>Mise en place de services système</li>
                            </ul>
                            
                            <a 
                                href="https://www.onisep.fr/ressources/structures-enseignement/ile-de-france/paris/h3-hitema" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="cyber-button-small"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    background: 'rgba(0, 170, 238, 0.2)',
                                    border: '1px solid var(--cyber-blue)',
                                    padding: '0.4rem 0.8rem',
                                    borderRadius: '4px',
                                    color: 'var(--cyber-blue)',
                                    transition: 'all 0.3s ease',
                                    marginTop: '0.5rem'
                                }}
                            >
                                <ExternalLink size={14} />
                                En savoir plus (Onisep)
                            </a>
                        </div>
                    </div>
                </div>

                <div className="timeline-item left">
                    <div className="timeline-content">
                        <h3 className="text-neon mb-1">Fév. 2023 - Juil. 2023</h3>
                        <h4 className="mb-1">Opérateur polyvalent</h4>
                        <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Parc Astérix, Plailly</p>
                    </div>
                </div>

                <div className="timeline-item right">
                    <div className="timeline-content">
                        <h3 className="text-neon mb-1">2019 - 2022</h3>
                        <h4 className="mb-1">Lycée Général</h4>
                        <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Lycée Paul Ricoeur - Louvres (95)</p>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Option Histoire et Anglais</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;

