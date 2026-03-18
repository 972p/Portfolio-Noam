import React from 'react';
import { Search, Rss, Layers, Server, Shield, Globe, ExternalLink, Cpu } from 'lucide-react';

function Veille() {
    const articles = [
        {
            title: "Virtualisation des serveurs - 11 avantages pratiques",
            source: "Fc Micro",
            link: "https://fcmicro.net/virtualisation-des-serveurs-11-avantages/",
            color: "var(--neon-blue)"
        },
        {
            title: "Comparing Server Virtualization Software",
            source: "Proxmox.com / Valentín Ortiz Ferretiz",
            link: "https://www.proxmox.com/en/products/proxmox-virtual-environment/comparison",
            color: "var(--neon-purple)"
        },
        {
            title: "Optimisez vos ressources informatiques avec la virtualisation",
            source: "technovateur.com / Christophe Wizert",
            link: "https://technovateur.com/virtualisation-des-serveurs/",
            color: "var(--neon-green)"
        },
        {
            title: "Construire une plateforme de virtualisation à succès en 2022",
            source: "medium.com / Marc-André Pezin",
            link: "https://medium.com/@marc.pezin/construire-une-plateforme-de-virtualisation-%C3%A0-succ%C3%A8s-en-2022-ac40631dfcb9",
            color: "var(--neon-pink)"
        },
        {
            title: "Virtualisation : comprendre une technologie clé du DevOps et de l'informatique moderne",
            source: "devuniversity.com",
            link: "https://www.devuniversity.com/blog/virtualisation-comprendre-une-technologie-cle-du-devops-et-de-linformatique-moderne",
            color: "#00ffff"
        },
        {
            title: "Virtualizing mixed-criticality systems: A survey on industrial trends and issues",
            source: "sciencedirect.com / La rédaction",
            link: "https://www.sciencedirect.com/science/article/abs/pii/S0167739X21004787",
            color: "#ffbd2e"
        }
    ];

    return (
        <section id="veille" className="py-12">
            <div className="cyber-header mb-8">
                <h2 className="text-neon text-3xl font-bold flex items-center gap-3">
                    <Search className="text-[var(--neon-purple)]" size={36} />
                    &gt; VEILLE_TECHNOLOGIQUE
                </h2>
            </div>

            {/* Outils de veille */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="cyber-box flex flex-col border border-[rgba(0,170,255,0.2)] hover:shadow-[0_0_20px_rgba(0,170,255,0.2)] transition-all">
                    <div className="flex items-center gap-4 mb-4">
                        <Rss className="text-[var(--neon-blue)]" size={32} />
                        <h3 className="text-2xl font-medium text-white">Feedly</h3>
                    </div>
                    <p className="text-secondary leading-relaxed">
                        Pour assurer une veille technologique efficace, j'utilise principalement <strong>Feedly</strong>. Cet outil me permet de centraliser mes sources d'information préférées, en suivant les blogs, sites spécialisés et revues technologiques les plus pertinents pour mon domaine. Grâce à son interface intuitive, je peux organiser mes flux par thématiques et rester informé des dernières tendances.
                    </p>
                </div>

                <div className="cyber-box flex flex-col border border-[rgba(255,189,46,0.2)] hover:shadow-[0_0_20px_rgba(255,189,46,0.2)] transition-all">
                    <div className="flex items-center gap-4 mb-4">
                        <Globe className="text-[#ffbd2e]" size={32} />
                        <h3 className="text-2xl font-medium text-white">Google Alertes</h3>
                    </div>
                    <p className="text-secondary leading-relaxed">
                        De son côté, <strong>Google Alertes</strong> m'aide à ne rien manquer en me notifiant en temps réel dès qu'un sujet clé est mentionné sur le web. Cela me permet d'être réactif face aux nouvelles évolutions et d'adapter ma stratégie en conséquence.
                        En combinant ces deux outils, je reste à jour sur les innovations de mon secteur tout en optimisant mon temps de recherche.
                    </p>
                </div>
            </div>

            {/* Sujet de veille */}
            <div className="cyber-box mb-12 border border-[max(var(--neon-green),0.2)] shadow-[0_0_15px_rgba(0,255,65,0.1)]">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3 flex justify-center">
                        <div className="relative">
                            <Server className="text-[var(--neon-green)]" size={120} />
                            <Layers className="text-[var(--neon-blue)] absolute -bottom-2 -right-2" size={48} />
                            <Cpu className="text-[var(--neon-pink)] absolute -top-2 -left-2" size={32} />
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <h3 className="text-3xl text-[var(--neon-green)] mb-6 font-bold tracking-wide">
                            <span className="text-white">&lt;</span> Virtualisation des serveurs <span className="text-white">/&gt;</span>
                        </h3>
                        <p className="text-secondary text-lg leading-relaxed mb-4">
                            J'ai choisi comme sujet de veille technologique <strong>la virtualisation des serveurs</strong>. La virtualisation consiste à créer plusieurs machines virtuelles (VMs) sur un seul serveur physique, ce qui permet de maximiser l'utilisation de ses ressources matérielles (CPU, mémoire, stockage).
                        </p>
                        <p className="text-secondary text-lg leading-relaxed">
                            Cette technologie facilite la gestion des services réseau, la sauvegarde, et la reprise d'activité après incident (PRA) tout en réduisant considérablement les coûts d'infrastructure physique. Des hyperviseurs populaires comme <strong>VMware ESXi, Microsoft Hyper-V ou Proxmox VE</strong> permettent aux administrateurs systèmes de créer, gérer et surveiller de nombreuses machines virtuelles de manière hautement centralisée et efficace.
                        </p>
                    </div>
                </div>
            </div>

            {/* Articles de référence */}
            <h3 className="text-2xl text-[var(--neon-purple)] mb-6 font-bold flex items-center gap-3">
                <Shield size={28} />
                Mes articles de référence :
            </h3>
            
            <div className="grid grid-cols-3">
                {articles.map((article, index) => (
                    <a 
                        key={index}
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cyber-box group border border-[rgba(255,255,255,0.05)] hover:border-transparent transition-all flex flex-col justify-between"
                        style={{ '--hover-color': 'var(--neon-green)' }}
                    >
                        <div>
                            <div className="flex justify-between items-start mb-4" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <ExternalLink size={24} style={{ color: 'var(--neon-green)' }} />
                                <span className="text-xs font-mono text-secondary px-2 py-1 bg-[#111] rounded border border-[rgba(255,255,255,0.1)]">Article {index + 1}</span>
                            </div>
                            <h4 className="text-lg font-medium text-neon mb-3 line-clamp-3" style={{ color: 'var(--neon-green)' }}>
                                {article.title}
                            </h4>
                        </div>
                        <div className="mt-4 pt-4 border-t border-[var(--glass-border)]" style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #1a1a1a' }}>
                            <p className="text-sm font-mono text-secondary opacity-70">Source:</p>
                            <p className="text-sm text-neon truncate" style={{ color: 'var(--neon-green)' }}>{article.source}</p>
                        </div>
                        {/* Hover glow effect via inline style in parent hover pseudo class (simulated via shadow) */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" style={{ boxShadow: `inset 0 0 20px rgba(0,255,65,0.15), 0 0 20px rgba(0,255,65,0.15)` }}></div>
                    </a>
                ))}
            </div>

        </section>
    );
}

export default Veille;
