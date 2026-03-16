import React from 'react';

function About() {
    return (
        <section id="about">
            <div className="cyber-header">
                <h2 className="text-neon">&gt; QUI-JE-SUIS</h2>
            </div>

            <div className="terminal">
                <div className="terminal-header">
                    <div className="terminal-circle red"></div>
                    <div className="terminal-circle yellow"></div>
                    <div className="terminal-circle green"></div>
                </div>
                <div className="terminal-body">
                    <span className="terminal-command">cat about_me.txt</span>
                    <div className="terminal-output">
                        Étudiant depuis 6 mois à l'école H3 HITEMA (75), je suis actuellement en première année de BTS SIO (Services Informatiques aux Organisations), spécialité SISR (Solutions d'Infrastructure, Systèmes et Réseaux). Passionné par l'informatique et toujours curieux des évolutions technologiques, j'ai naturellement choisi cette voie après avoir obtenu mon Bac Général avec mention Assez Bien en 2022.
                    </div>

                    <span className="terminal-command">cat professional_project.txt</span>
                    <div className="terminal-output">
                        Sur le plan professionnel, mon objectif est de me spécialiser vers le métier « d'Expert Réseau Infrastructures et Sécurité ». Après avoir obtenu mon BTS SIO (BAC+2), je souhaite poursuivre ma formation avec un Bachelor Architecture et administration systèmes (BAC+3), puis, à terme, décrocher le diplôme d'Expert Réseaux Infrastructures et Sécurité (BAC+5).
                    </div>

                    <span className="terminal-command">execute generate_goals.sh</span>
                    <div className="terminal-output">
                        [+] Acquérir une expérience professionnelle enrichissante<br />
                        [+] Participer activement à des projets d’innovation et de développement<br />
                        [+] Contribuer à la sécurisation des données, un enjeu majeur pour la cybersécurité
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
