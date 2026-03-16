import React from 'react';
import { Terminal, FileText, Download } from 'lucide-react';

function Hero() {
    return (
        <section id="hero" className="mb-8" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="mb-2">
                <Terminal size={48} color="#00ff41" />
            </div>
            <div className="glitch-wrapper mb-4">
                <h1 className="glitch" data-text="MOUHOUBI Noam">MOUHOUBI Noam</h1>
            </div>
            <h2 className="text-neon text-mono mb-4">&lt;Étudiant en BTS SIO SISR en alternance /&gt;</h2>
            <p className="text-secondary" style={{ maxWidth: '600px', fontSize: '1.1rem', marginBottom: '2rem' }}>
                Système initialisé. Bienvenue sur mon portfolio interactif.
                Accès autorisé aux données professionnelles et académiques.
            </p>

            <div className="mt-4">
                <a
                    href="/CV_MOUHOUBI_Noam.pdf"
                    download="CV_MOUHOUBI_Noam.pdf"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        color: 'var(--neon-green)',
                        textDecoration: 'none',
                        border: '1px solid var(--neon-green)',
                        padding: '0.75rem 1.5rem',
                        width: 'max-content',
                        transition: 'all 0.3s ease',
                        backgroundColor: 'rgba(0, 255, 65, 0.05)',
                        borderRadius: '4px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontWeight: '500'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0, 255, 65, 0.2)';
                        e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 65, 0.4)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0, 255, 65, 0.05)';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                >
                    <Download size={20} />
                    <span>&gt; DOWNLOAD_CV</span>
                </a>
            </div>
        </section>
    );
}

export default Hero;
