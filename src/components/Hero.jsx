import React from 'react';
import { Terminal } from 'lucide-react';

function Hero() {
    return (
        <section id="hero" className="mb-8" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="mb-2">
                <Terminal size={48} color="#00ff41" />
            </div>
            <div className="glitch-wrapper mb-4">
                <h1 className="glitch" data-text="MOUHOUBI Noam">MOUHOUBI Noam</h1>
            </div>
            <h2 className="text-neon text-mono mb-4">&lt;Futur Expert Réseaux Infrastructures et Sécurité /&gt;</h2>
            <p className="text-secondary" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
                Système initialisé. Bienvenue sur mon portfolio interactif.
                Accès autorisé aux données professionnelles et académiques.
            </p>
        </section>
    );
}

export default Hero;
