import React from 'react';

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
                        <p className="text-secondary" style={{ fontSize: '0.9rem' }}>H3 HITEMA - PARIS (75)</p>
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
