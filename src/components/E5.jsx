import React from 'react';
import { FileText } from 'lucide-react';

function E5() {
    return (
        <section id="e5">
            <div className="cyber-header">
                <h2 className="text-neon">&gt; E5 TABLEAU DE SYNTHÈSE</h2>
            </div>

            <p className="mb-4 text-secondary">
                Retrouvez ci-dessous mon tableau de synthèse pour l'épreuve E5 du BTS SIO.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="cyber-box" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <FileText className="mb-2" color="#00ff41" size={32} />
                        <h3 className="mb-2">Tableau de Synthèse E5</h3>
                        <p className="text-secondary mb-4" style={{ fontSize: '0.9rem' }}>Format Excel - BTS SIO 2026 - MOUHOUBI Noam</p>
                    </div>
                    <a href="/8 - ANNEXE VI.1 - EPREUVE E5 TABLEAU DE SYNTHESE - BTS SIO 2026 MOUHOUBI Noam.xlsx" download="8 - ANNEXE VI.1 - EPREUVE E5 TABLEAU DE SYNTHESE - BTS SIO 2026 MOUHOUBI Noam.xlsx" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--neon-green)', textDecoration: 'none', border: '1px solid var(--neon-green)', padding: '0.5rem 1rem', width: 'max-content', transition: 'all 0.3s ease' }}>
                        <span style={{ fontSize: '0.9rem' }}>&gt; DOWNLOAD_FILE</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default E5;
