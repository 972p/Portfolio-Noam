import React from 'react';
import { HardDrive, Server, Network, FolderTree, Shield, Layers } from 'lucide-react';

function Projects() {
    return (
        <section id="projects" className="py-12">
            <div className="cyber-header mb-8">
                <h2 className="text-neon text-3xl font-bold flex items-center gap-3">
                    &gt; PROJETS_ÉCOLE
                </h2>
            </div>

            <p className="mb-8 text-secondary text-lg">
                Au cours de ma formation, j'ai réalisé plusieurs projets techniques pour acquérir de l'expérience pratique sur diverses technologies et architectures.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="cyber-box hover:shadow-[0_0_20px_rgba(0,170,255,0.3)] transition-all flex flex-col items-center text-center">
                    <HardDrive className="mb-4" color="#0ae" size={40} />
                    <h3 className="mb-2 text-xl font-medium text-[var(--neon-blue)]">Solution NAS</h3>
                    <p className="text-secondary" style={{ fontSize: '0.95rem' }}>Mise en place d'une solution de stockage en réseau (NAS).</p>
                </div>

                <div className="cyber-box hover:shadow-[0_0_20px_rgba(255,0,60,0.3)] transition-all flex flex-col items-center text-center">
                    <Server className="mb-4" color="#ff003c" size={40} />
                    <h3 className="mb-2 text-xl font-medium text-[var(--neon-pink)]">LAMP & GLPI</h3>
                    <p className="text-secondary" style={{ fontSize: '0.95rem' }}>Installation d'un Serveur LAMP et déploiement de GLPI.</p>
                </div>

                <div className="cyber-box hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all flex flex-col items-center text-center">
                    <Network className="mb-4" color="#00ff41" size={40} />
                    <h3 className="mb-2 text-xl font-medium text-[var(--neon-green)]">Active Directory</h3>
                    <p className="text-secondary" style={{ fontSize: '0.95rem' }}>Configuration d'un serveur Windows avec Active Directory.</p>
                </div>

                <div className="cyber-box hover:shadow-[0_0_20px_rgba(255,189,46,0.3)] transition-all flex flex-col items-center text-center">
                    <FolderTree className="mb-4" color="#ffbd2e" size={40} />
                    <h3 className="mb-2 text-xl font-medium text-[#ffbd2e]">Intégration LDAP</h3>
                    <p className="text-secondary" style={{ fontSize: '0.95rem' }}>Serveurs Linux reliés à l'AD DS grâce au protocole LDAP.</p>
                </div>

                <div className="cyber-box hover:shadow-[0_0_20px_rgba(157,0,255,0.3)] transition-all flex flex-col items-center text-center">
                    <Shield className="mb-4" color="#9d00ff" size={40} />
                    <h3 className="mb-2 text-xl font-medium text-purple-400">Pare-feu pfSense</h3>
                    <p className="text-secondary" style={{ fontSize: '0.95rem' }}>Déploiement et configuration d'un Pare-feu pfSense.</p>
                </div>

                <div className="cyber-box hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all flex flex-col items-center text-center">
                    <Layers className="mb-4" color="#00ffff" size={40} />
                    <h3 className="mb-2 text-xl font-medium text-cyan-400">Hyperviseur Proxmox</h3>
                    <p className="text-secondary" style={{ fontSize: '0.95rem' }}>Déploiement d'un hyperviseur de type 1 Proxmox VE.</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;

