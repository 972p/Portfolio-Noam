import React from 'react';
import { Server, Cpu, FileText } from 'lucide-react';

function Projects() {
    return (
        <section id="projects">
            <div className="cyber-header">
                <h2 className="text-neon">&gt; ACTIVE_PROJECTS</h2>
            </div>

            <p className="mb-4 text-secondary">
                Je travaille actuellement sur plusieurs projets techniques qui couvrent différents aspects de l’informatique.
            </p>

            <div className="grid grid-cols-3">
                <div className="cyber-box">
                    <Server className="mb-2" color="#0ae" size={32} />
                    <h3 className="mb-2">Debian 12</h3>
                    <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Installation et configuration d'un système Linux robuste pour environnements serveurs.</p>
                </div>

                <div className="cyber-box">
                    <Cpu className="mb-2" color="#ff003c" size={32} />
                    <h3 className="mb-2">Montage de PC</h3>
                    <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Sélection de composants et montage sur mesure pour garantir des performances optimales selon les besoins.</p>
                </div>

                <div className="cyber-box">
                    <FileText className="mb-2" color="#00ff41" size={32} />
                    <h3 className="mb-2">Rédaction de procédures</h3>
                    <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Documentation GLPI, Teams et Active Directory pour standardiser les processus IT et la maintenance.</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;
