import React from 'react';
import { Award } from 'lucide-react';

function Diplomas() {
    return (
        <section id="diplomas">
            <div className="cyber-header">
                <h2 className="text-neon">&gt; CERTIFICATES & DIPLOMAS</h2>
            </div>

            <p className="mb-4 text-secondary">En parallèle, j’ai obtenu plusieurs attestations informatique, consolidant mes compétences ainsi que mes diplômes obtenus durant ma scolarité.</p>

            <div className="grid grid-cols-2">
                <div className="cyber-box" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <Award className="mb-2" color="#00ff41" size={32} />
                        <h3 className="mb-2">MOOC ANSSI</h3>
                        <p className="text-secondary mb-4" style={{ fontSize: '0.9rem' }}>Certification reconnue en sécurité numérique et cybersécurité.</p>
                    </div>
                    <a href="/MOOC_ANSSI_MOUHOUBI.pdf" download="MOOC_ANSSI_MOUHOUBI.pdf" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--neon-green)', textDecoration: 'none', border: '1px solid var(--neon-green)', padding: '0.5rem 1rem', width: 'max-content', transition: 'all 0.3s ease' }}>
                        <span style={{ fontSize: '0.9rem' }}>&gt; DOWNLOAD_CERT</span>
                    </a>
                </div>

                <div className="cyber-box" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <Award className="mb-2" color="#00ff41" size={32} />
                        <h3 className="mb-2">BAC Général</h3>
                        <p className="text-secondary mb-4" style={{ fontSize: '0.9rem' }}>Option Histoire et Anglais - Mention Assez Bien (2022)</p>
                    </div>
                    <a href="/BAC_GENERAL_MOUHOUBI.pdf" download="BAC_GENERAL_MOUHOUBI.pdf" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--neon-green)', textDecoration: 'none', border: '1px solid var(--neon-green)', padding: '0.5rem 1rem', width: 'max-content', transition: 'all 0.3s ease' }}>
                        <span style={{ fontSize: '0.9rem' }}>&gt; DOWNLOAD_DIPLOMA</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Diplomas;

