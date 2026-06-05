
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ShieldCheck, ClipboardList, Users, Bell, Lock, FileClock, CheckCircle2,
  ArrowRight, Menu, X, Database, BarChart3, UserRound, Mail, Phone,
  MapPin, Star, ChevronDown, Sparkles, MonitorCheck, AlertTriangle
} from "lucide-react";

const features = [
  { icon: ClipboardList, title: "Transmissions structurées", text: "Centralisez observations, événements, actions éducatives et suites à prévoir avec catégories, priorités et filtres." },
  { icon: Users, title: "Fiches bénéficiaires", text: "Projet personnalisé, contacts autorisés, référent, points de vigilance et historique de suivi dans une fiche claire." },
  { icon: Bell, title: "Alertes d’équipe", text: "Identifiez les situations sensibles, gardez une trace des alertes ouvertes et clôturez-les avec traçabilité." },
  { icon: FileClock, title: "Historique des modifications", text: "Chaque modification importante est historisée pour renforcer la transparence et la continuité de service." },
  { icon: ShieldCheck, title: "Rôles et habilitations", text: "Éducateur, chef de service, administrateur : chaque profil dispose d’un accès adapté à ses responsabilités." },
  { icon: BarChart3, title: "Pilotage simplifié", text: "Dashboard clair : transmissions non lues, alertes ouvertes, bénéficiaires présents et dernières activités." }
];

const steps = [
  ["01", "Observer", "L’équipe note une situation, un comportement, un rendez-vous ou une information utile."],
  ["02", "Transmettre", "La transmission est classée par bénéficiaire, catégorie, priorité et auteur."],
  ["03", "Suivre", "Les collègues marquent comme lu, consultent l’historique et traitent les alertes."],
  ["04", "Piloter", "Le chef de service garde une vision claire de l’activité et des points sensibles."]
];

const prices = [
  { name: "Démo", price: "0 €", sub: "Pour tester le concept", items: ["Application front démo", "Données fictives", "Export local", "Présentation équipe"], cta: "Tester la démo" },
  { name: "Établissement", price: "Sur devis", sub: "Pour une structure ESMS", highlighted: true, items: ["Utilisateurs selon périmètre", "Paramétrage établissement", "Rôles et accès", "Formation courte", "Support de lancement"], cta: "Demander un rendez-vous" },
  { name: "Réseau", price: "Sur devis", sub: "Pour plusieurs services", items: ["Multi-services", "Tableaux de bord consolidés", "Accompagnement RGPD", "Exports avancés", "Support prioritaire"], cta: "Construire l’offre" }
];

const faqs = [
  ["Liaison Plus remplace-t-il le dossier usager informatisé ?", "Non. Le positionnement initial est celui d’un cahier de liaison opérationnel centré sur les transmissions quotidiennes. Il peut compléter un DUI existant selon le besoin."],
  ["Est-ce utilisable directement avec de vraies données ?", "La version actuelle est une base produit. Pour manipuler de vraies données médico-sociales, il faut ajouter un backend sécurisé, une authentification réelle, des sauvegardes, une politique RGPD et un hébergement adapté."],
  ["À qui s’adresse l’outil ?", "Aux équipes éducatives, chefs de service, coordinateurs et structures médico-sociales qui veulent fluidifier les transmissions internes."],
  ["Peut-on l’adapter à un établissement précis ?", "Oui. Les catégories, rôles, champs bénéficiaires, exports et tableaux de bord peuvent être adaptés au fonctionnement d’un service."]
];

function App() {
  const [menu, setMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <style>{CSS}</style>
      <div className="site">
        <header className="nav">
          <a className="brand" href="#top"><span>LP</span><b>Liaison Plus</b></a>
          <nav className={menu ? "open" : ""}>
            <a onClick={() => setMenu(false)} href="#produit">Produit</a>
            <a onClick={() => setMenu(false)} href="#securite">Sécurité</a>
            <a onClick={() => setMenu(false)} href="#tarifs">Tarifs</a>
            <a onClick={() => setMenu(false)} href="#faq">FAQ</a>
            <a onClick={() => setMenu(false)} href="#contact">Contact</a>
          </nav>
          <div className="nav-actions">
            <a className="btn ghost" href="#demo">Voir la démo</a>
            <a className="btn primary" href="#contact">Demander un accès</a>
          </div>
          <button className="menu-btn" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
        </header>

        <main id="top">
          <section className="hero">
            <div className="hero-copy">
              <div className="eyebrow"><Sparkles size={16} /> Cahier de liaison numérique pour ESMS</div>
              <h1>Des transmissions éducatives claires, tracées et utiles à toute l’équipe.</h1>
              <p>Liaison Plus aide les établissements médico-sociaux à centraliser les transmissions, suivre les alertes, consulter les fiches bénéficiaires et garder une continuité d’accompagnement.</p>
              <div className="hero-actions">
                <a className="btn primary large" href="#contact">Présenter le projet à une structure <ArrowRight size={18} /></a>
                <a className="btn ghost large" href="#produit">Découvrir le produit</a>
              </div>
              <div className="trust-row">
                <span><CheckCircle2 size={16} /> Pensé terrain</span>
                <span><CheckCircle2 size={16} /> Responsive</span>
                <span><CheckCircle2 size={16} /> Conçu pour évoluer vers la conformité RGPD</span>
              </div>
            </div>

            <div className="hero-visual" id="demo">
              <div className="browser">
                <div className="browser-top"><i></i><i></i><i></i><span>app.liaisonplus.fr</span></div>
                <div className="dashboard">
                  <aside><b>LP</b><span></span><span></span><span></span></aside>
                  <section>
                    <div className="dash-head"><div><h3>Dashboard</h3><p>Équipe éducative</p></div><em>Démo fictive</em></div>
                    <div className="stat-grid">
                      <div><ClipboardList size={20}/><b>128</b><span>Transmissions</span></div>
                      <div><Bell size={20}/><b>7</b><span>Alertes</span></div>
                      <div><Users size={20}/><b>42</b><span>Bénéficiaires</span></div>
                    </div>
                    <div className="fake-list">
                      <article><strong>Lucas F.</strong><p>Temps calme proposé après tension...</p><small>Comportement · Haute</small></article>
                      <article><strong>Emma L.</strong><p>Retour positif du stage...</p><small>Projet · Normale</small></article>
                      <article><strong>Nora B.</strong><p>Participation active en atelier...</p><small>Scolarité · Faible</small></article>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>

          <section className="logos"><span>Pour</span><b>MECS</b><b>Foyers</b><b>IME</b><b>SAVS</b><b>CHRS</b><b>Services éducatifs</b></section>

          <section className="section" id="produit">
            <div className="section-head">
              <span className="kicker">Produit</span>
              <h2>Un outil simple pour les transmissions du quotidien</h2>
              <p>Pas une usine à gaz : une interface lisible, orientée terrain, pensée pour être utilisée rapidement par les équipes.</p>
            </div>
            <div className="feature-grid">{features.map((f) => <Feature key={f.title} {...f} />)}</div>
          </section>

          <section className="split">
            <div>
              <span className="kicker">Méthode</span>
              <h2>De l’observation au suivi d’équipe</h2>
              <p className="muted">Liaison Plus transforme les informations éparpillées en transmissions exploitables, consultables et suivies.</p>
              <div className="steps">{steps.map(([num, title, text]) => <div className="step" key={num}><b>{num}</b><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
            </div>
            <div className="card-xl">
              <MonitorCheck size={34} />
              <h3>Une interface compréhensible dès la première utilisation</h3>
              <p>L’objectif est de réduire la perte d’information entre professionnels : recherche rapide, filtres, badge non lu, historique et fiches liées.</p>
              <ul>
                <li><CheckCircle2 /> Moins de doublons</li>
                <li><CheckCircle2 /> Meilleure continuité</li>
                <li><CheckCircle2 /> Lecture plus rapide</li>
                <li><CheckCircle2 /> Traçabilité renforcée</li>
              </ul>
            </div>
          </section>

          <section className="section security" id="securite">
            <div className="section-head">
              <span className="kicker">Sécurité & conformité</span>
              <h2>Conçu pour évoluer vers un usage professionnel sécurisé</h2>
              <p>Le site présente le produit. L’application finale devra être raccordée à une infrastructure sécurisée avant toute utilisation avec de vraies données.</p>
            </div>
            <div className="security-grid">
              <Security icon={Lock} title="Accès par rôles" text="Limiter les droits selon les responsabilités : éducateur, chef de service, administrateur." />
              <Security icon={Database} title="Base de données sécurisée" text="Prévoir chiffrement, sauvegardes et séparation des environnements." />
              <Security icon={FileClock} title="Audit non modifiable" text="Conserver une trace datée des actions sensibles et modifications." />
              <Security icon={ShieldCheck} title="Cadre RGPD" text="Minimisation des données, habilitations, durée de conservation et information des personnes." />
            </div>
            <div className="notice"><b>Note importante :</b> la version actuelle est une base produit. Pour une exploitation réelle en ESMS, il faudra valider l’architecture, l’hébergement, la sécurité, les droits d’accès et les procédures RGPD.</div>
          </section>

          <section className="section" id="tarifs">
            <div className="section-head">
              <span className="kicker">Offres</span>
              <h2>Une offre simple à présenter à une structure</h2>
              <p>Commence par vendre un pilote court : démo, adaptation au terrain, puis déploiement progressif.</p>
            </div>
            <div className="pricing">{prices.map(p => <Price key={p.name} {...p} />)}</div>
          </section>

          <section className="testimonial">
            <div><Star /><Star /><Star /><Star /><Star /></div>
            <blockquote>“Liaison Plus vise un problème terrain identifié : perdre moins d’informations entre deux prises de poste, rendre les transmissions plus lisibles et garder une trace claire des suites à donner.”</blockquote>
            <p>Analyse de positionnement produit — ce texte n’est pas un avis client.</p>
          </section>

          <section className="section faq" id="faq">
            <div className="section-head"><span className="kicker">FAQ</span><h2>Questions fréquentes</h2></div>
            <div className="faq-list">
              {faqs.map(([q, a], i) => (
                <button className="faq-item" key={q} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  <div><b>{q}</b><ChevronDown className={openFaq === i ? "rotate" : ""} /></div>
                  {openFaq === i && <p>{a}</p>}
                </button>
              ))}
            </div>
          </section>

          <section className="contact" id="contact">
            <div>
              <span className="kicker">Contact</span>
              <h2>Présenter Liaison Plus à un établissement</h2>
              <p>Utilise ce site comme vitrine pour montrer le concept, expliquer le besoin terrain et proposer un pilote à une structure médico-sociale.</p>
              <div className="contact-info">
                <span><Mail size={17}/> contact@liaisonplus.fr</span>
                <span><Phone size={17}/> 06 87 96 86 26</span>
                <span><MapPin size={17}/> Île-de-France · France</span>
              </div>
            </div>
            <form
  action="https://formspree.io/f/xnjyjada"
  method="POST"
>
  <input className="hp" type="text" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" />

  <label>Nom</label>
  <input name="nom" placeholder="Votre nom" autoComplete="name" required />

  <label>Email</label>
  <input name="email" placeholder="votre@email.fr" type="email" autoComplete="email" required />

  <label>Structure</label>
  <input name="structure" placeholder="Nom de l’établissement" />

  <label>Message</label>
  <textarea name="message" rows="5" placeholder="Bonjour, je souhaite découvrir Liaison Plus..." required />

  <p className="form-note">
    Les informations saisies servent uniquement à répondre à votre demande.
  </p>

  <button className="btn primary large" type="submit">
    Envoyer la demande <ArrowRight size={18} />
  </button>
</form>
          </section>

          <section className="legal-section" id="mentions-legales">
            <span className="kicker">Informations légales</span>
            <h2>Mentions légales</h2>
            <div className="legal-grid">
              <article><h3>Éditeur du site</h3><p><b>Liaison Plus</b><br />Projet en cours de constitution<br />Île-de-France, France<br />Email : contact@liaisonplus.fr</p><p className="muted small">SIRET : à compléter après immatriculation.</p></article>
              <article><h3>Responsable de publication</h3><p>Alioune Gueye, porteur du projet Liaison Plus.</p></article>
              <article><h3>Hébergement</h3><p>À compléter selon l’hébergeur retenu avant la mise en ligne définitive : nom, raison sociale, adresse et site web de l’hébergeur.</p></article>
              <article><h3>Nature du site</h3><p>Ce site est une vitrine de démonstration. Aucun accès à une application réelle n’est fourni sans accord préalable.</p></article>
            </div>
          </section>

          <section className="legal-section" id="confidentialite">
            <span className="kicker">Données personnelles</span>
            <h2>Politique de confidentialité</h2>
            <div className="legal-grid">
              <article><h3>Données collectées</h3><p>Le formulaire peut collecter le nom, l’email, le nom de la structure et le message transmis.</p></article>
              <article><h3>Finalité et base légale</h3><p>Ces données sont utilisées uniquement pour répondre à une demande de contact ou de démonstration. La base légale est l’intérêt légitime lié au suivi d’une demande entrante.</p></article>
              <article><h3>Durée de conservation</h3><p>Les demandes de contact sont conservées au maximum 12 mois, sauf relation commerciale ou obligation légale nécessitant une durée différente.</p></article>
              <article><h3>Vos droits</h3><p>Vous pouvez demander l’accès, la rectification ou la suppression de vos données en écrivant à contact@liaisonplus.fr.</p></article>
            </div>
            <div className="notice"><b>Important :</b> aucune donnée médico-sociale réelle ne doit être saisie dans la démo ou dans le formulaire de contact.</div>
          </section>
        </main>

        <footer>
          <div className="brand"><span>LP</span><b>Liaison Plus</b></div>
          <p>© 2026 Liaison Plus. Site vitrine de démonstration produit.</p>
          <div className="footer-links"><a href="#mentions-legales">Mentions légales</a><a href="#confidentialite">Confidentialité</a></div>
        </footer>
      </div>
    </>
  );
}

function Feature({ icon: Icon, title, text }) {
  return <article className="feature"><div><Icon size={24} /></div><h3>{title}</h3><p>{text}</p></article>;
}

function Security({ icon: Icon, title, text }) {
  return <article className="security-card"><Icon size={26} /><h3>{title}</h3><p>{text}</p></article>;
}

function Price({ name, price, sub, items, cta, highlighted }) {
  return (
    <article className={`price ${highlighted ? "highlighted" : ""}`}>
      {highlighted && <em>Recommandé</em>}
      <h3>{name}</h3><b>{price}</b><p>{sub}</p>
      <ul>{items.map(i => <li key={i}><CheckCircle2 size={17} /> {i}</li>)}</ul>
      <a className={highlighted ? "btn primary full" : "btn ghost full"} href="#contact">{cta}</a>
    </article>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
:root{--bg:#08111f;--card:#111827;--line:#243044;--text:#e5eefb;--muted:#91a0b8;--primary:#6366f1;--primary2:#22d3ee;--shadow:0 30px 100px rgba(0,0,0,.35)}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font-family:Inter,system-ui,sans-serif;background:var(--bg);color:var(--text)}a{text-decoration:none;color:inherit}button,input,textarea{font:inherit}.site{overflow:hidden}
.nav{position:fixed;top:0;left:0;right:0;z-index:50;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:16px clamp(18px,5vw,72px);background:rgba(8,17,31,.78);backdrop-filter:blur(18px);border-bottom:1px solid rgba(255,255,255,.07)}
.brand{display:flex;align-items:center;gap:10px;font-weight:800}.brand span{width:38px;height:38px;border-radius:14px;display:grid;place-items:center;color:white;background:linear-gradient(135deg,var(--primary),var(--primary2));font-weight:900}.nav nav{display:flex;align-items:center;gap:22px;color:var(--muted);font-size:14px}.nav nav a:hover{color:white}.nav-actions{display:flex;gap:10px}.menu-btn{display:none;background:transparent;border:0;color:white}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:1px solid rgba(255,255,255,.12);border-radius:999px;padding:11px 16px;font-weight:700;font-size:14px;cursor:pointer}.btn.primary{background:linear-gradient(135deg,var(--primary),#4f46e5);border-color:transparent;color:white;box-shadow:0 14px 40px rgba(99,102,241,.32)}.btn.ghost{background:rgba(255,255,255,.04);color:#dbeafe}.btn.large{padding:14px 20px;font-size:15px}.btn.full{width:100%}
main{padding-top:80px}.hero{min-height:calc(100vh - 80px);display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center;padding:70px clamp(18px,5vw,72px);position:relative}.hero:before{content:"";position:absolute;inset:-180px -120px auto auto;width:620px;height:620px;background:radial-gradient(circle,rgba(99,102,241,.32),transparent 65%);pointer-events:none}.hero-copy{position:relative;z-index:1}
.eyebrow,.kicker{display:inline-flex;align-items:center;gap:8px;color:#c7d2fe;background:rgba(99,102,241,.12);border:1px solid rgba(99,102,241,.28);padding:8px 12px;border-radius:999px;font-size:13px;font-weight:800}.hero h1{font-size:clamp(42px,6vw,76px);line-height:.95;margin:20px 0 18px;letter-spacing:-.06em}.hero p{font-size:19px;line-height:1.75;color:var(--muted);max-width:680px}.hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:28px}.trust-row{display:flex;gap:18px;flex-wrap:wrap;margin-top:24px;color:#b6c4db;font-weight:700;font-size:14px}.trust-row span{display:flex;gap:7px;align-items:center}
.browser{background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.03));border:1px solid rgba(255,255,255,.13);border-radius:28px;padding:12px;box-shadow:var(--shadow);transform:rotate(1.2deg)}.browser-top{height:42px;display:flex;align-items:center;gap:8px;padding:0 12px;color:#73829a;font-size:12px}.browser-top i{width:11px;height:11px;border-radius:50%;background:#334155}.browser-top i:nth-child(1){background:#ef4444}.browser-top i:nth-child(2){background:#f59e0b}.browser-top i:nth-child(3){background:#22c55e}.browser-top span{margin-left:8px}
.dashboard{height:520px;background:#0b1220;border-radius:20px;display:grid;grid-template-columns:86px 1fr;overflow:hidden;border:1px solid rgba(255,255,255,.08)}.dashboard aside{background:#020617;padding:18px;display:grid;align-content:start;gap:18px}.dashboard aside b{width:44px;height:44px;border-radius:15px;background:linear-gradient(135deg,var(--primary),var(--primary2));display:grid;place-items:center}.dashboard aside span{height:38px;border-radius:13px;background:#101827}.dashboard section{padding:22px}.dash-head{display:flex;justify-content:space-between;align-items:center}.dash-head h3{margin:0;font-size:28px}.dash-head p{margin:4px 0;color:var(--muted)}.dash-head em{font-style:normal;background:#022c22;color:#86efac;border:1px solid #14532d;border-radius:999px;padding:7px 10px;font-size:12px;font-weight:800}
.stat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:22px 0}.stat-grid div{background:#111827;border:1px solid #243044;border-radius:18px;padding:16px;display:grid;gap:8px}.stat-grid b{font-size:28px}.stat-grid span{color:var(--muted);font-size:12px}.fake-list{display:grid;gap:12px}.fake-list article{background:#111827;border:1px solid #243044;border-radius:18px;padding:16px;border-left:4px solid var(--primary)}.fake-list p{font-size:14px;margin:6px 0;color:#cbd5e1}.fake-list small{color:#93c5fd}
.logos{display:flex;gap:22px;flex-wrap:wrap;justify-content:center;align-items:center;padding:24px clamp(18px,5vw,72px);border-top:1px solid rgba(255,255,255,.07);border-bottom:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.02);color:#8fa0b8}.logos b{color:#dbeafe}
.section,.split,.contact,.testimonial{padding:90px clamp(18px,5vw,72px)}.section-head{text-align:center;max-width:780px;margin:0 auto 42px}.section-head h2,.split h2,.contact h2{font-size:clamp(32px,4vw,52px);line-height:1.05;letter-spacing:-.04em;margin:16px 0}.section-head p,.muted,.contact p{color:var(--muted);font-size:17px;line-height:1.7}
.feature-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.feature,.security-card,.price,.card-xl{background:linear-gradient(180deg,rgba(255,255,255,.055),rgba(255,255,255,.025));border:1px solid rgba(255,255,255,.09);border-radius:28px;padding:24px;box-shadow:0 20px 70px rgba(0,0,0,.18)}.feature div,.security-card svg,.card-xl>svg{width:52px;height:52px;border-radius:18px;padding:13px;background:rgba(99,102,241,.14);color:#a5b4fc}.feature h3,.security-card h3,.card-xl h3{font-size:20px;margin:20px 0 10px}.feature p,.security-card p,.card-xl p,.price p{color:var(--muted);line-height:1.65}
.split{display:grid;grid-template-columns:1fr .8fr;gap:44px;align-items:center;background:linear-gradient(180deg,rgba(99,102,241,.05),transparent)}.steps{display:grid;gap:14px;margin-top:26px}.step{display:flex;gap:16px;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.08);border-radius:22px;padding:18px}.step>b{width:46px;height:46px;border-radius:16px;display:grid;place-items:center;background:#111827;color:#a5b4fc;flex:0 0 auto}.step h3{margin:0}.step p{margin:6px 0 0;color:var(--muted);line-height:1.6}.card-xl ul{list-style:none;padding:0;margin:22px 0 0;display:grid;gap:12px}.card-xl li{display:flex;gap:10px;align-items:center;color:#dbeafe}.card-xl li svg{color:#22c55e}
.security{background:#07101d}.security-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.notice{margin:22px auto 0;max-width:980px;background:rgba(34,211,238,.08);border:1px solid rgba(34,211,238,.2);border-radius:22px;padding:18px;color:#c7e8f0;line-height:1.65}
.pricing{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;align-items:stretch}.price{position:relative;display:flex;flex-direction:column}.price.highlighted{border-color:rgba(99,102,241,.6);transform:translateY(-10px)}.price em{position:absolute;right:20px;top:18px;font-style:normal;background:#4f46e5;border-radius:999px;padding:6px 10px;font-size:12px;font-weight:800}.price h3{font-size:24px;margin:0 0 10px}.price>b{font-size:38px;letter-spacing:-.04em}.price ul{list-style:none;padding:0;margin:22px 0;display:grid;gap:12px;flex:1}.price li{display:flex;gap:10px;align-items:flex-start;color:#dbeafe}.price li svg{color:#22c55e;flex:0 0 auto}
.testimonial{text-align:center;background:radial-gradient(circle at 50% 0%,rgba(99,102,241,.18),transparent 45%)}.testimonial svg{color:#fbbf24;fill:#fbbf24}.testimonial blockquote{max-width:900px;margin:22px auto;font-size:clamp(24px,3vw,38px);line-height:1.25;font-weight:800;letter-spacing:-.04em}.testimonial p{color:var(--muted)}
.faq-list{max-width:900px;margin:0 auto;display:grid;gap:12px}.faq-item{width:100%;text-align:left;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);border-radius:22px;color:white;padding:20px}.faq-item div{display:flex;justify-content:space-between;gap:14px;align-items:center}.faq-item p{color:var(--muted);line-height:1.7;margin:14px 0 0}.rotate{transform:rotate(180deg)}
.contact{display:grid;grid-template-columns:.9fr 1fr;gap:40px;align-items:start;background:linear-gradient(135deg,rgba(99,102,241,.13),rgba(34,211,238,.06))}.contact-info{display:grid;gap:12px;margin-top:24px;color:#dbeafe}.contact-info span{display:flex;align-items:center;gap:10px}form{background:#111827;border:1px solid rgba(255,255,255,.09);border-radius:28px;padding:24px;display:grid;gap:10px}input,textarea{width:100%;background:#0b1220;border:1px solid #243044;border-radius:16px;padding:13px 14px;color:white;outline:none}input:focus,textarea:focus{border-color:#818cf8}label{color:#9fb0c8;font-size:13px;font-weight:700}.hp{position:absolute;left:-9999px;opacity:0}.form-note{font-size:12px;color:var(--muted);line-height:1.5;margin:4px 0 8px}.legal-section{padding:90px clamp(18px,5vw,72px);border-top:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.018)}.legal-section h2{font-size:clamp(30px,4vw,48px);margin:16px 0 28px;letter-spacing:-.04em}.legal-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.legal-grid article{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);border-radius:24px;padding:20px}.legal-grid h3{margin:0 0 10px}.legal-grid p{color:var(--muted);line-height:1.65;margin:0 0 10px}.small{font-size:13px}.footer-links{display:flex;gap:16px;flex-wrap:wrap}.footer-links a{color:#c7d2fe}
footer{display:flex;justify-content:space-between;gap:20px;align-items:center;padding:28px clamp(18px,5vw,72px);border-top:1px solid rgba(255,255,255,.07);color:var(--muted)}
@media(max-width:1050px){.hero,.split,.contact{grid-template-columns:1fr}.feature-grid,.security-grid,.pricing{grid-template-columns:1fr 1fr}.hero-visual{max-width:760px}}
@media(max-width:780px){.legal-grid{grid-template-columns:1fr}.nav nav,.nav-actions{display:none}.nav nav.open{display:flex;position:absolute;left:14px;right:14px;top:70px;flex-direction:column;align-items:flex-start;background:#111827;border:1px solid #243044;border-radius:22px;padding:18px}.menu-btn{display:block}.hero{padding-top:50px}.feature-grid,.security-grid,.pricing{grid-template-columns:1fr}.price.highlighted{transform:none}.dashboard{height:440px;grid-template-columns:60px 1fr}.stat-grid{grid-template-columns:1fr}.logos{justify-content:flex-start}footer{flex-direction:column;align-items:flex-start}}
`;

createRoot(document.getElementById("root")).render(<App />);
