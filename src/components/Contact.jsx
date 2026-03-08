import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
    return (
        <section id="contact" style={{ marginBottom: '2rem' }}>
            <div className="cyber-header">
                <h2 className="text-neon">&gt; CONNECTION_ESTABLISHED</h2>
            </div>

            <div className="cyber-box" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h3 className="mb-4 text-mono">CONTACT_INFO</h3>
                    <ul className="cyber-list">
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={16} color="#00ff41" /> 06 09 92 77 37</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={16} color="#00ff41" /> noam.mouhoubiii@gmail.com</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} color="#00ff41" /> 9 rue Pascal, 95380 Louvres, France</li>
                    </ul>
                </div>

                <div style={{ textAlign: 'right' }}>
                    <p className="text-mono mb-2" style={{ color: 'var(--cyber-blue)' }}>STATUS: ONLINE</p>
                    <a href="mailto:noam.mouhoubiii@gmail.com" className="btn-cyan" style={{ display: 'inline-block', textDecoration: 'none' }}>ENCRYPT_MESSAGE</a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
