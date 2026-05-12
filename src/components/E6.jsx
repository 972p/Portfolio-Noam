import React from 'react';
import { FileText } from 'lucide-react';

function E6() {
    return (
        <section id="e6" className="py-12">
            <div className="cyber-header mb-8">
                <h2 className="text-neon text-3xl font-bold flex items-center gap-3">
                    &gt; ÉPREUVE E6 - RÉALISATIONS PROFESSIONNELLES
                </h2>
            </div>

            <p className="mb-8 text-secondary text-lg">
                Fiches descriptives des situations professionnelles présentées à l'examen du BTS SIO.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="cyber-box hover:shadow-[0_0_20px_rgba(0,170,255,0.3)] transition-all flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <FileText color="#0ae" size={32} />
                            <h3 className="text-xl font-medium text-[var(--neon-blue)]">Situation Professionnelle (Réseau)</h3>
                        </div>
                        <p className="text-secondary mb-6 text-sm leading-relaxed">
                            Conception architecture réseau hiérarchisée avec segmentation par VLANs pour isoler les services Comptabilité, Commercial et Informatique, ainsi qu'une configuration routage inter-VLAN sur passerelle Gateway. Mise en service DHCP et DNS avec accès WAN sécurisé.
                        </p>
                    </div>
                    <a href="/Fiches projet SISR (E6) MOUHOUBI Noam Réseaux.pdf" download="Fiches projet SISR (E6) MOUHOUBI Noam Réseaux.pdf" className="inline-flex items-center gap-2 text-[var(--neon-blue)] no-underline border border-[var(--neon-blue)] px-4 py-2 w-max transition-all hover:bg-[rgba(0,170,255,0.1)]">
                        <span className="text-sm font-bold">&gt; Télécharger la fiche E6 (PDF)</span>
                    </a>
                </div>

                <div className="cyber-box hover:shadow-[0_0_20px_rgba(255,189,46,0.3)] transition-all flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <FileText color="#ffbd2e" size={32} />
                            <h3 className="text-xl font-medium text-[#ffbd2e]">Situation Professionnelle (Système)</h3>
                        </div>
                        <p className="text-secondary mb-6 text-sm leading-relaxed">
                            Déploiement d'un GLPI sur Debian 12 pour gestion de parc et outil helpdesk. Déploiement d'un contrôleur de domaine Active Directory sur Windows Server et configuration d'un connecteur LDAP pour synchronisation des comptes utilisateurs avec une sécurisation via un pare-feu pfSense.
                        </p>
                    </div>
                    <a href="/Fiches projet SISR (E6) MOUHOUBI Noam Système.pdf" download="Fiches projet SISR (E6) MOUHOUBI Noam Système.pdf" className="inline-flex items-center gap-2 text-[#ffbd2e] no-underline border border-[#ffbd2e] px-4 py-2 w-max transition-all hover:bg-[rgba(255,189,46,0.1)]">
                        <span className="text-sm font-bold">&gt; Télécharger la fiche E6 (PDF)</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default E6;
