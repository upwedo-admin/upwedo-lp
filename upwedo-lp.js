// ===================================================================
// upwedo. — Logique + contenu des Landing Pages SEO
// Externalisé depuis le Body Code template SEO LPs
// Pour ajouter une LP : ajouter l'entrée slug dans les dictionnaires
// concernés (teamTexts, h2Map, textes sous CTA), commit, puis purger
// le cache jsDelivr.
// ===================================================================


// --- Team Content personnalisé par landing page (IIFE, affichage instantané) ---
(function() {
  var slug = window.location.pathname.split('/').pop();
  var teamTexts = {

    'agence-digitale-monaco': '<p><strong>30+ experts seniors</strong> mobilis\u00e9s \u00e0 la demande sur votre projet de croissance PME\u00a0: <strong>d\u00e9veloppeurs Shopify, PrestaShop et Webflow</strong>, <strong>experts SEO et GEO</strong>, <strong>paid media managers Google Ads</strong>, Meta Ads et LinkedIn Ads, social media managers, designers UX/UI, architectes produit, AI creative designers, <strong>sp\u00e9cialistes automatisation CRM HubSpot et n8n</strong>, producteur vid\u00e9o, ghostwriter LinkedIn.</p><p>Tous les leviers digitaux coordonn\u00e9s sur votre projet. Vous gardez la hauteur de vue strat\u00e9gique. On prend en charge la complexit\u00e9 op\u00e9rationnelle au quotidien.</p><p>Pas un chef de projet qui d\u00e9couvre votre dossier en r\u00e9union\u00a0: un <strong>directeur digital senior</strong> qui pilote chaque mission personnellement depuis <strong>Fontvieille en Principaut\u00e9 de Monaco</strong>, du diagnostic initial jusqu\u0027\u00e0 la mesure des r\u00e9sultats. <strong>Coordination m\u00e9thodologique</strong>, <strong>attribution multicanal claire</strong>, <strong>reporting mensuel structur\u00e9</strong>.</p>',

    'agence-seo-monaco': '<p><strong>30+ experts seniors</strong> mobilis\u00e9s \u00e0 la demande sur votre visibilit\u00e9 organique\u00a0: <strong>experts SEO technique et GEO</strong>, <strong>r\u00e9dacteurs IA sp\u00e9cialis\u00e9s longue tra\u00eene</strong>, <strong>consultants Local SEO et Google Business Profile</strong>, AI content specialists, d\u00e9veloppeurs Webflow et Shopify pour l\u0027optimisation on-page, paid media managers pour les synergies SEA/SEO, <strong>sp\u00e9cialistes tracking GA4 et Search Console</strong>, social media managers, ghostwriter LinkedIn.</p><p>Toute la cha\u00eene SEO+GEO coordonn\u00e9e sur votre projet. Vous gardez la hauteur de vue strat\u00e9gique. On prend en charge la complexit\u00e9 op\u00e9rationnelle au quotidien.</p><p>Pas un consultant ponctuel qui livre un audit et dispara\u00eet\u00a0: un <strong>directeur digital senior</strong> qui pilote chaque mission personnellement depuis <strong>Fontvieille en Principaut\u00e9 de Monaco</strong>, pour ranker simultan\u00e9ment sur <strong>Google, ChatGPT, Claude, Perplexity et Gemini</strong>. <strong>Suivi des positions hebdomadaire</strong>, <strong>attribution organique claire</strong>, <strong>reporting mensuel structur\u00e9</strong>.</p>',

    'agence-seo-nice': '<p><strong>30+ experts seniors</strong> mobilis\u00e9s \u00e0 la demande sur votre visibilit\u00e9 organique en r\u00e9gion PACA\u00a0: experts SEO technique et GEO, r\u00e9dacteurs IA sp\u00e9cialis\u00e9s longue tra\u00eene, consultants Local SEO Nice et C\u00f4te d\u0027Azur, AI content specialists, d\u00e9veloppeurs Webflow et Shopify pour l\u0027optimisation on-page, paid media managers pour les synergies SEA/SEO, sp\u00e9cialistes tracking GA4 et Search Console, social media managers.</p><p>Toute la cha\u00eene SEO+GEO coordonn\u00e9e sur votre projet. Vous gardez la hauteur de vue strat\u00e9gique. On prend en charge la complexit\u00e9 op\u00e9rationnelle au quotidien.</p><p>Pas un freelance isol\u00e9 ni une agence parisienne en visio\u00a0: un <strong>directeur digital senior</strong> qui pilote chaque mission personnellement, avec une connaissance fine de Nice, Sophia-Antipolis, Cannes, Antibes, pour ranker simultan\u00e9ment sur Google, ChatGPT, Claude, Perplexity et Gemini. Suivi des positions hebdomadaire, attribution organique claire, reporting mensuel structur\u00e9.</p>',

    'e-commerce-shopify': '<p><strong>30+ experts seniors</strong> mobilis\u00e9s \u00e0 la demande sur votre projet e-commerce Shopify\u00a0: <strong>d\u00e9veloppeurs Shopify experts th\u00e8mes Liquid et apps custom</strong>, <strong>experts CRO et tunnel de conversion e-commerce</strong>, <strong>sp\u00e9cialistes Shopify Plus et migrations</strong>, designers UX/UI fiches produit, experts SEO e-commerce, paid media managers <strong>Google Shopping et Meta Ads</strong>, <strong>sp\u00e9cialistes automatisation Klaviyo et HubSpot</strong>, AI creative designers produit.</p><p>Toute la cha\u00eene e-commerce Shopify coordonn\u00e9e sur votre projet. Vous gardez la hauteur de vue strat\u00e9gique. On prend en charge la complexit\u00e9 op\u00e9rationnelle au quotidien.</p><p>Pas un d\u00e9veloppeur Shopify en silo\u00a0: un <strong>directeur digital senior</strong> qui pilote chaque mission personnellement, du diagnostic catalogue initial jusqu\u0027\u00e0 la mesure du <strong>chiffre d\u0027affaires en ligne et du ROAS</strong>. <strong>Architecture catalogue optimis\u00e9e</strong>, <strong>attribution multicanal claire</strong>, <strong>reporting mensuel structur\u00e9</strong>.</p>',

    'freelance-ecommerce': '<p><strong>30+ freelances seniors</strong> mobilis\u00e9s \u00e0 la demande sur votre projet e-commerce, sur toute la cha\u00eene\u00a0: conception, acquisition, conversion, fid\u00e9lisation. Toute la cha\u00eene coordonn\u00e9e par une seule direction, sans les contraintes d\u0027une agence ni les limites d\u0027un freelance isol\u00e9.</p><p>Vous gardez la hauteur de vue strat\u00e9gique. On prend en charge la complexit\u00e9 op\u00e9rationnelle au quotidien.</p><p>Pas une plateforme qui vous laisse seul face \u00e0 50 profils\u00a0: un <strong>directeur digital senior</strong> qui s\u00e9lectionne, coordonne et pilote les bons experts pour chaque mission. <strong>Brief structur\u00e9</strong>, <strong>attribution claire</strong>, <strong>reporting mensuel structur\u00e9</strong>.</p>',

    'agence-seo-shopify': '<p><strong>30+ experts seniors</strong> mobilis\u00e9s \u00e0 la demande sur votre boutique Shopify\u00a0: <strong>experts SEO technique Shopify et GEO</strong>, <strong>d\u00e9veloppeurs Shopify Liquid et th\u00e8mes custom</strong>, <strong>int\u00e9grateurs Schema Product et Core Web Vitals</strong>, r\u00e9dacteurs IA sp\u00e9cialis\u00e9s fiches produits et cat\u00e9gories e-commerce, consultants intention de recherche SEMrush, <strong>sp\u00e9cialistes GEO ChatGPT, Claude, Perplexity et Gemini</strong>, paid media managers pour les synergies SEA/SEO Shopping, sp\u00e9cialistes tracking GA4 et Search Console, social media managers, ghostwriter LinkedIn.</p><p>Toute la cha\u00eene SEO et GEO Shopify coordonn\u00e9e sur votre boutique. Vous gardez la hauteur de vue strat\u00e9gique. On prend en charge la complexit\u00e9 op\u00e9rationnelle Shopify au quotidien.</p><p>Pas un freelance SEO ponctuel qui livre un audit et dispara\u00eet\u00a0: un <strong>directeur digital senior</strong> qui pilote chaque mission personnellement, du diagnostic technique initial jusqu\u0027\u00e0 la mesure du <strong>trafic organique et du chiffre d\u0027affaires e-commerce</strong>, pour ranker votre Shopify simultan\u00e9ment sur <strong>Google, ChatGPT, Claude, Perplexity et Gemini</strong>. <strong>Suivi des positions hebdomadaire</strong>, <strong>attribution organique e-commerce claire</strong>, <strong>reporting mensuel structur\u00e9</strong>.</p>',

    'creation-site-monaco': '<p><strong>Une \u00e9quipe compl\u00e8te pour votre cr\u00e9ation de site \u00e0 Monaco</strong>, mobilis\u00e9e \u00e0 la demande sur votre projet mon\u00e9gasque. D\u00e9veloppeurs Webflow, Framer, Shopify et PrestaShop, designers UX/UI et architectes produit, experts conversion et CRO. Sp\u00e9cialistes du multilingue, du SEO technique on-page et du GEO int\u00e9gr\u00e9s d\u00e8s la maquette. Experts <strong>Core Web Vitals</strong> et donn\u00e9es structur\u00e9es <strong>schema.org LocalBusiness Monaco</strong>, int\u00e9grateurs front-end responsive, copywriters natifs FR IT EN DE.</p><p>Toute la cha\u00eene de production d\u0027un <strong>site sur-mesure \u00e0 Monaco</strong> est coordonn\u00e9e sur votre projet, du wireframe \u00e0 la mise en ligne. Vous gardez la hauteur de vue strat\u00e9gique. On prend en charge la complexit\u00e9 op\u00e9rationnelle au quotidien.</p><p>Pas un freelance CMS seul qui livre un site en oubliant la moiti\u00e9 des fondations techniques. Un directeur digital senior pilote chaque projet personnellement <strong>depuis Fontvieille, en Principaut\u00e9 de Monaco</strong>, du diagnostic SERP initial jusqu\u0027\u00e0 la livraison d\u0027un site qui convertit et qui ranke sur <strong>Google, ChatGPT, Claude, Perplexity et Gemini</strong>. Architecture optimis\u00e9e conversion, multilingue FR IT EN DE structurel, reporting mensuel structur\u00e9.</p>',

    'agence-social-media-monaco': '<p><strong>30+ experts seniors</strong> mobilis\u00e9s \u00e0 la demande sur votre pr\u00e9sence sociale\u00a0: <strong>ghostwriter LinkedIn d\u00e9di\u00e9 dirigeants B2B</strong>, <strong>social media manager senior multi-plateformes</strong>, <strong>producteur vid\u00e9o HD bas\u00e9 entre Monaco et Nice</strong>, AI creative designer, designers UX/UI pour les landings de conversion, paid media managers <strong>Meta Ads, LinkedIn Ads et TikTok Ads</strong>, experts SEO et GEO pour la synergie organique, <strong>sp\u00e9cialistes tracking GA4 et attribution multicanal</strong>, copywriters multilingues FR IT EN.</p><p>Toute la cha\u00eene social media coordonn\u00e9e sur votre projet. Vous gardez la hauteur de vue strat\u00e9gique. On prend en charge la complexit\u00e9 op\u00e9rationnelle au quotidien.</p><p>Pas un community manager isol\u00e9 qui publie en silo\u00a0: un <strong>directeur digital senior</strong> qui pilote chaque mission personnellement depuis <strong>Fontvieille en Principaut\u00e9 de Monaco</strong>, pour faire de votre social media un canal de <strong>contacts qualifi\u00e9s mesurables</strong> sur <strong>LinkedIn, Instagram et TikTok</strong>. <strong>Pilotage hebdomadaire si enjeux forts</strong>, <strong>attribution multicanal claire</strong>, <strong>reporting mensuel structur\u00e9</strong>.</p>',

    'directeur-marketing-externalise': '<p><strong>30+ experts seniors</strong> mobilis\u00e9s \u00e0 la demande sur votre direction marketing\u00a0: <strong>directeur marketing externalis\u00e9 senior qui pilote</strong>, strat\u00e8ges seniors B2B et B2C, experts SEO et GEO sur Google et les moteurs IA (ChatGPT, Claude, Perplexity, Gemini), paid media managers Google Ads, Meta Ads et LinkedIn Ads, social media managers LinkedIn Instagram TikTok, designers UX/UI conversion, d\u00e9veloppeurs Webflow et Shopify, sp\u00e9cialistes CRM et automatisation (HubSpot, Brevo, Pipedrive), AI creative designer, sp\u00e9cialistes tracking GA4 et attribution multicanal, copywriters multilingues FR EN.</p><p>Toute la cha\u00eene marketing coordonn\u00e9e sur votre strat\u00e9gie. Vous gardez la hauteur de vue dirigeante. On prend en charge l\'arbitrage et l\'ex\u00e9cution op\u00e9rationnelle au quotidien.</p><p>Pas un freelance marketing isol\u00e9 ni une agence qui livre et part\u00a0: un directeur marketing externalis\u00e9 senior qui pilote personnellement votre projet chaque mois, avec un <strong>collectif r\u00e9parti partout en France</strong>. Pour transformer votre marketing en moteur de contacts qualifi\u00e9s mesurables sur Google, les moteurs IA, LinkedIn et Meta. Session strat\u00e9gique mensuelle, dashboard partag\u00e9, arbitrage budg\u00e9taire en continu.</p>',

    'fractional-cmo-monaco': '<p><strong>30+ senior experts</strong> mobilised on demand for your marketing direction\u00a0: <strong>a senior fractional CMO who pilots</strong>, senior B2B and B2C strategists, SEO and GEO experts across Google and AI engines (ChatGPT, Claude, Perplexity, Gemini), paid media managers Google Ads, Meta Ads and LinkedIn Ads, social media managers LinkedIn Instagram TikTok, conversion UX/UI designers, Webflow and Shopify developers, CRM and automation specialists (HubSpot, Brevo, Pipedrive), AI creative designer, GA4 tracking and multichannel attribution specialists, bilingual EN FR copywriters.</p><p>The entire marketing chain coordinated on your strategy, on a market as international and demanding as Monaco. You keep the executive altitude. We take on the arbitration and day-to-day operational execution.</p><p>Not an isolated freelance marketer nor an agency that delivers and leaves\u00a0: a senior fractional CMO who personally pilots your project every month, with a <strong>collective serving Monaco and the French Riviera</strong>. To turn your marketing into a predictable engine of measurable qualified leads on Google, AI engines, LinkedIn and Meta. Monthly strategic session, shared dashboard, continuous budget arbitrage.</p>',

    'audit-digital': '<p><strong>30+ experts seniors</strong> mobilis\u00e9s \u00e0 la demande sur votre audit digital 360\u00b0\u00a0: <strong>strat\u00e8ges seniors B2B et B2C</strong> qui analysent mod\u00e8le \u00e9conomique et structure de marge, <strong>experts SEO et GEO</strong> sur Google et les moteurs IA (ChatGPT, Claude, Perplexity, Gemini), <strong>analystes concurrentiels SERP</strong>, paid media managers Google Ads, Meta Ads et LinkedIn Ads, experts CRO et tunnel de conversion, designers UX/UI, d\u00e9veloppeurs Webflow et Shopify pour l\u0027audit technique, sp\u00e9cialistes tracking GA4 et attribution multicanal, experts CRM et automatisation (HubSpot, Brevo, Pipedrive).</p><p>Toute la cha\u00eene de diagnostic coordonn\u00e9e sur votre constat\u00a0: vente directe ou indirecte, verticales, \u00e9cosyst\u00e8me de ressources. Vous gardez la hauteur de vue dirigeante. On prend en charge l\u0027analyse et la hi\u00e9rarchisation des priorit\u00e9s.</p><p>Pas un consultant isol\u00e9 qui livre un audit g\u00e9n\u00e9rique et dispara\u00eet\u00a0: un <strong>directeur digital senior</strong> qui pilote personnellement votre audit digital, du <strong>constat business</strong> jusqu\u0027aux <strong>trois priorit\u00e9s chiffr\u00e9es</strong>, en couvrant les quatre niveaux du mod\u00e8le \u00e9conomique \u00e0 la technique. Pour transformer un diagnostic en d\u00e9cision, sur <strong>Google et les moteurs IA</strong>. Constat 360\u00b0, attribution multicanal claire, recommandation de trajectoire actionnable.</p>',

	'agence-geo-ia': '<p><strong>30+ experts seniors</strong> mobilis\u00e9s \u00e0 la demande sur votre visibilit\u00e9 dans les moteurs IA\u00a0: <strong>experts GEO et SEO</strong>, <strong>r\u00e9dacteurs IA sp\u00e9cialis\u00e9s contenu citable</strong>, <strong>int\u00e9grateurs Schema.org et donn\u00e9es structur\u00e9es</strong>, analystes de citations ChatGPT, Claude, Perplexity et Gemini, consultants intention de recherche et autorit\u00e9 de marque, d\u00e9veloppeurs Webflow et Shopify pour l\u0027optimisation on-page, paid media managers pour les synergies SEA/SEO, sp\u00e9cialistes tracking GA4 et Search Console, ghostwriter LinkedIn.</p><p>Toute la cha\u00eene <strong>GEO (Generative Engine Optimization)</strong> et SEO coordonn\u00e9e sur votre projet. Vous gardez la hauteur de vue strat\u00e9gique. On prend en charge la complexit\u00e9 op\u00e9rationnelle au quotidien.</p><p>Pas un consultant ponctuel qui livre un audit et dispara\u00eet\u00a0: une <strong>agence GEO</strong> pilot\u00e9e par un <strong>directeur digital senior</strong>, du diagnostic d\u0027empreinte IA initial jusqu\u0027\u00e0 la mesure des <strong>citations dans les r\u00e9ponses g\u00e9n\u00e9ratives</strong>, pour devenir la marque que <strong>ChatGPT, Claude, Perplexity et Gemini</strong> recommandent. Monitoring des citations IA r\u00e9gulier, attribution organique claire, reporting mensuel structur\u00e9.</p>'
  };
  var rt = document.querySelector('.team_content .w-richtext');
  if (rt) {
    var custom = teamTexts[slug];
    if (custom) {
      rt.innerHTML = custom;
    }
    rt.style.visibility = 'visible';
  }
})();


// --- H2 section équipe personnalisé par slug (IIFE + reveal) ---
(function() {
  if (window.location.pathname.indexOf('/services/') !== 0) return;
  var slug = window.location.pathname.replace(/\/+$/, '').split('/').pop();

  var h2Map = {
    'e-commerce-shopify':         'Votre \u00e9quipe e-commerce Shopify compl\u00e8te, sans recruter.',
    'freelance-ecommerce':        'Un freelance ex\u00e9cute. Nous pilotons votre croissance.',
	'agence-digitale-monaco':     'Agence digitale et web \u00e0 Monaco : tous vos leviers pilot\u00e9s, pas en silo.',
    'agence-seo-monaco':          'Votre \u00e9quipe SEO et GEO Monaco, sans recruter.',
    'agence-seo-nice':            'Votre \u00e9quipe SEO et GEO \u00e0 Nice, sans recruter.',
    'agence-seo-shopify':         'Votre \u00e9quipe SEO Shopify technique et GEO, sans recruter.',
    'creation-site-monaco':       'Votre \u00e9quipe cr\u00e9ation de site Monaco, sans recruter.',
    'agence-social-media-monaco': 'Votre \u00e9quipe social media Monaco, sans recruter.',
    'directeur-marketing-externalise': 'Votre directeur marketing externalis\u00e9, sans recruter.',
    'fractional-cmo-monaco': 'Your fractional CMO in Monaco, without hiring.',
    'audit-digital':              'Votre audit digital strat\u00e9gique complet, sans recruter.',
    'agence-geo-ia':              'Votre \u00e9quipe GEO et IA, sans recruter.'
  };

  var h2 = document.querySelector('.section-team .team_heading .heading-style-h2');
  if (h2) {
    if (h2Map[slug]) {
      h2.textContent = h2Map[slug];
    }
    h2.style.visibility = 'visible';
  }
})();


// --- Date "Mis à jour le..." — toutes LP SEO (branche anglaise incluse) ---
(function() {
  if (window.location.pathname.indexOf('/services/') !== 0) return;
  var d = new Date(document.lastModified);
  if (isNaN(d.getTime())) return;
  var slug = window.location.pathname.replace(/\/+$/, '').split('/').pop();
  var label;
  if (slug === 'fractional-cmo-monaco') {
    var monthsEN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    label = 'Last updated ' + monthsEN[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  } else {
    var mois = ['janvier','f\u00e9vrier','mars','avril','mai','juin','juillet','ao\u00fbt','septembre','octobre','novembre','d\u00e9cembre'];
    label = 'Mis \u00e0 jour le ' + d.getDate() + ' ' + mois[d.getMonth()] + ' ' + d.getFullYear();
  }
  var heroLabel = document.querySelector('.hero_v1-content-wrapper .text-size-regular.text-style-allcaps');
  if (!heroLabel) return;
  var dateEl = document.createElement('div');
  dateEl.textContent = label;
  dateEl.style.cssText = 'font-family:Instrumentsans,sans-serif; font-size:12px; color:rgba(255,255,255,0.5); margin-top:8px; text-transform:none;';
  heroLabel.parentElement.insertBefore(dateEl, heroLabel.nextSibling);
})();


// --- Counter animation KPIs — template SEO LPs (.title-feature) ---
window.addEventListener("load", () => {
  setTimeout(() => {
    const animateCounter = (el) => {
      const original = el.textContent.trim();
      const num = parseFloat(original.replace(/[^0-9.]/g, ""));
      if (isNaN(num) || num === 0) return;
      const prefix = original.match(/^[^0-9]*/)[0];
      const suffix = original.match(/[^0-9.]+$/)?.[0] || "";
      let start = 0;
      const duration = 1500;
      const stepTime = Math.max(Math.floor(duration / Math.min(num, 100)), 20);
      const increment = num / Math.min(num, 100);
      const counter = setInterval(() => {
        start += increment;
        if (start >= num) {
          el.textContent = original;
          clearInterval(counter);
        } else {
          el.textContent = prefix + Math.round(start) + suffix;
        }
      }, stepTime);
    };
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    document.querySelectorAll(".title-feature").forEach(el => {
      observer.observe(el);
    });
  }, 100);
});


// --- Splide carousel + Typed.js + Counter issues_list — FIX ResizeObserver ---
document.addEventListener("DOMContentLoaded", function () {
  var splideEl = document.querySelector('.splide');
  if (splideEl) {
    function setFullWidth() {
      var rect = splideEl.getBoundingClientRect();
      splideEl.style.width = window.innerWidth + 'px';
      splideEl.style.maxWidth = 'none';
      splideEl.style.marginLeft = -rect.left + 'px';
    }
    setFullWidth();
    if (window.ResizeObserver) {
      new ResizeObserver(setFullWidth).observe(document.documentElement);
    } else {
      window.addEventListener('resize', setFullWidth);
    }
    var splide = new Splide('.splide', {
      type: 'loop',
      gap: '0rem',
      autoWidth: true,
      arrows: false,
      pagination: false,
      autoScroll: {
        speed: 1,
        pauseOnHover: false,
        pauseOnFocus: false
      }
    });
    splide.on('mounted', function() {
      document.querySelectorAll('.splide__slide--clone').forEach(function(clone) {
        clone.setAttribute('aria-hidden', 'true');
        clone.setAttribute('data-nosnippet', '');
        clone.setAttribute('inert', '');
      });
      function protectOriginals() {
        document.querySelectorAll('.splide__slide:not(.splide__slide--clone)').forEach(function(slide) {
          slide.removeAttribute('aria-hidden');
          slide.removeAttribute('inert');
        });
      }
      protectOriginals();
      var track = document.querySelector('.splide__track');
      if (track) {
        new MutationObserver(protectOriginals).observe(track, {
          attributes: true, subtree: true, attributeFilter: ['aria-hidden']
        });
      }
    });
    splide.mount({ AutoScroll: window.splide.Extensions.AutoScroll });
  }
  // MODIF EN page : mots Typed.js en anglais sur fractional-cmo-monaco
  var typedStrings = (window.location.pathname.indexOf("fractional-cmo-monaco") !== -1)
    ? ["committed", "expert", "close to you"]
    : ["engag\u00e9", "expert", "proche de vous"];
  new Typed(".typedjs-multiple", {
    strings: typedStrings,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  });
});

window.addEventListener("load", () => {
  setTimeout(() => {
    const counters = [
      { end: 45,    prefix: "",  suffix: " %" },
      { end: 37,    prefix: "",  suffix: " %" },
      { end: 60000, prefix: "",  suffix: " \u20ac" }
    ];
    const animateCounter = (el, end, prefix, suffix) => {
      let start = 0;
      const duration = 1500;
      const steps = 60;
      const increment = end / steps;
      const stepTime = Math.floor(duration / steps);
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          el.textContent = prefix + end.toLocaleString("fr-FR") + suffix;
          clearInterval(counter);
        } else {
          el.textContent = prefix + Math.round(start).toLocaleString("fr-FR") + suffix;
        }
      }, stepTime);
    };
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const idx = parseInt(el.dataset.idx);
          const { end, prefix, suffix } = counters[idx];
          animateCounter(el, end, prefix, suffix);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.6 });
    const section = document.querySelector(".issues_list");
    if (section) {
      const displays = section.querySelectorAll(".display");
      displays.forEach((el, idx) => {
        if (idx < counters.length) {
          el.dataset.idx = idx;
          el.textContent = counters[idx].prefix + "0" + counters[idx].suffix;
          observer.observe(el);
        }
      });
    }
  }, 100);
});


// --- Bloc bio auteur + Schema Person Julien + Schema Person expert — MAJ 15/06/2026 ---
window.addEventListener("load", function() {
  setTimeout(function() {
    if (window.location.pathname.indexOf("/services/") !== 0) return;
    var slug = window.location.pathname.replace(/\/$/, "").split("/").pop();

    var julienJobTitle = "Directeur digital externalis\u00e9";
    if (slug === "directeur-marketing-externalise") julienJobTitle = "Directeur marketing externalis\u00e9";
    else if (slug === "fractional-cmo-monaco") julienJobTitle = "Fractional CMO";

    var julienSchema = document.createElement('script');
    julienSchema.type = 'application/ld+json';
    julienSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://www.upwedo.co/#julien-deloume",
      "name": "Julien Deloume",
      "jobTitle": julienJobTitle,
      "url": "https://www.upwedo.co/le-collectif/julien-deloume",
      "worksFor": {"@id": "https://www.upwedo.co/#organization"},
      "sameAs": [
        "https://www.linkedin.com/in/juliendeloume",
        "https://www.journaldunet.com/julien-deloume-1340128",
        "https://www.upwedo.co"
      ],
      "knowsAbout": [
        "Strat\u00e9gie digitale PME",
        "SEO",
        "GEO",
        "Generative Engine Optimization",
        "Direction digitale externalis\u00e9e",
        "Fractional CDO",
        "E-commerce",
        "Acquisition digitale",
        "Webflow",
        "Shopify"
      ],
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "KEDGE Business School"
      }
    });
    document.head.appendChild(julienSchema);

    var experts = [
      {
        keywords: ["seo", "referencement", "geo"],
        name: "Maxime Carpentier",
        role: "expert SEO et GEO chez upwedo.",
        desc: "Audit technique SEO (Schema.org, Core Web Vitals, robots.txt, hreflang), analyse d\u2019intention de recherche sur SEMrush, production \u00e9ditoriale calibr\u00e9e, pilotage GEO sur ChatGPT, Claude, Perplexity et Gemini. Suivi des positions et des citations IA sur dashboard Looker Studio.",
        photo: "https://cdn.prod.website-files.com/698214af8e24b79f834dc41d/69da23b07813a9362b41e960_Maxime%20-%20Expert%20SEO%20%26%20GEO.avif",
        link: "/le-collectif",
        external: false,
        schema: {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Maxime Carpentier",
          "jobTitle": "Expert SEO & GEO",
          "worksFor": {"@id": "https://www.upwedo.co/#organization"},
          "knowsAbout": ["SEO", "GEO", "Generative Engine Optimization", "Audit technique SEO", "Schema.org", "Core Web Vitals", "SEMrush", "Production \u00e9ditoriale SEO", "Looker Studio"],
          "sameAs": ["https://www.upwedo.co/le-collectif"],
          "url": "https://www.upwedo.co/le-collectif"
        }
      },
      {
        keywords: ["creation-site"],
        name: "In\u00e8s",
        role: "designer UI/UX senior chez upwedo.",
        desc: "Conception et wireframing UX/UI sur projets corporate et e-commerce premium, design system, direction artistique, int\u00e9gration Framer et Webflow. Plusieurs sites mon\u00e9gasques con\u00e7us au sein du collectif upwedo. dans l\u2019immobilier premium et la mode luxe internationale.",
        photo: "https://cdn.prod.website-files.com/698214af8e24b79f834dc41d/69da233ac699fe80d5a2c80d_Ines%20-%20Designer%20UI_UX.avif",
        link: "/le-collectif",
        external: false,
        schema: {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "In\u00e8s",
          "jobTitle": "Designer UI/UX senior",
          "worksFor": {"@id": "https://www.upwedo.co/#organization"},
          "knowsAbout": ["UI/UX Design", "Wireframing", "Design system", "Direction artistique", "Framer", "Webflow", "E-commerce premium", "Core Web Vitals"],
          "sameAs": ["https://www.upwedo.co/le-collectif"],
          "url": "https://www.upwedo.co/le-collectif"
        }
      },
      {
        keywords: ["social-media"],
        name: "Hugo",
        role: "ghostwriter LinkedIn senior chez upwedo.",
        desc: "Strat\u00e9gie \u00e9ditoriale et r\u00e9daction de posts pour fondateurs, CEO et dirigeants de PME B2B sur LinkedIn, premier r\u00e9seau social pour le business. 1500+ posts r\u00e9dig\u00e9s en 10 ans d\u2019accompagnement \u00e9ditorial, dont des dirigeants de fintech, de start-ups industrielles et d\u2019agences immobili\u00e8res premium. Plusieurs profils mon\u00e9gasques pilot\u00e9s au sein du collectif upwedo. avec une approche tone of voice sur mesure, calage strat\u00e9gique en amont, et coaching continu.",
        photo: "https://cdn.prod.website-files.com/698214af8e24b79f834dc41d/69da231800268de4cbf8f259_Hugo%20-%20Ghostwriter%20Linkedin.avif",
        link: "/le-collectif",
        external: false,
        schema: {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Hugo",
          "jobTitle": "Ghostwriter LinkedIn senior",
          "worksFor": {"@id": "https://www.upwedo.co/#organization"},
          "knowsAbout": ["Ghostwriting LinkedIn", "Strat\u00e9gie \u00e9ditoriale B2B", "Personal branding dirigeants", "LinkedIn", "Content marketing B2B", "Social media B2B", "Copywriting"],
          "sameAs": ["https://www.upwedo.co/le-collectif"],
          "url": "https://www.upwedo.co/le-collectif"
        }
      }
    ];

    var matchedExpert = null;
    for (var i = 0; i < experts.length; i++) {
      for (var j = 0; j < experts[i].keywords.length; j++) {
        if (slug.indexOf(experts[i].keywords[j]) !== -1) {
          matchedExpert = experts[i];
          break;
        }
      }
      if (matchedExpert) break;
    }

    var faqSection = document.querySelector('.section-faq');
    if (faqSection) {
      var bio = document.createElement('div');
      bio.style.cssText = 'background:#F8F9FA; padding:24px; border-radius:8px; max-width:800px; margin:0 auto 48px auto; font-family:Instrumentsans,sans-serif; font-size:15px; color:#1C1B1F; line-height:1.6;';

      var isEN = (slug === "fractional-cmo-monaco");
      var imgAlt = isEN ? "Julien Deloume, co-founder upwedo." : "Julien Deloume, co-fondateur upwedo.";
      var byLine = isEN
        ? 'Written by <a href="/le-collectif/julien-deloume" style="color:#1C1B1F; text-decoration:underline; font-weight:700;">Julien Deloume</a>, co-founder of upwedo.'
        : 'R\u00e9dig\u00e9 par <a href="/le-collectif/julien-deloume" style="color:#1C1B1F; text-decoration:underline; font-weight:700;">Julien Deloume</a>, co-fondateur d\u2019upwedo.';
      var bioDesc = isEN
        ? '20 years in digital. Ex-Solocal/PagesJaunes (search, SEO, e-commerce and multichannel acquisition strategy). Two entrepreneurial exits: Netvendeur (e-commerce) and Appart-Maison (digital real estate). Today he leads externalized marketing direction for 47+ businesses.'
        : '20 ans dans le digital. Ex-Solocal/PagesJaunes (r\u00e9f\u00e9rencement, SEO, e-commerce et strat\u00e9gie d\u2019acquisition multicanal). 2 exits entrepreneuriaux\u00a0: Netvendeur (e-commerce) et Appart-Maison (immobilier digital). Accompagne aujourd\u2019hui 47+ PME en direction digitale externalis\u00e9e.';

      var julienHTML = '<div style="display:flex; align-items:center; gap:14px; margin-bottom:16px;">'
        + '<img src="https://cdn.prod.website-files.com/698214af8e24b79f834dc41d/69da237318173e81603df9c6_Julien%20-%20Directeur%20Digital.avif" alt="' + imgAlt + '" style="width:48px; height:48px; border-radius:50%; object-fit:cover;">'
        + '<div>' + byLine + '</div>'
        + '</div>'
        + '<div style="font-size:14px; color:#4B5563; margin-bottom:' + (matchedExpert ? '16px' : '0') + ';">' + bioDesc + '</div>';

      var expertHTML = '';
      if (matchedExpert) {
        var linkTarget = matchedExpert.external ? ' target="_blank" rel="noopener"' : '';
        expertHTML = '<div style="display:flex; align-items:center; gap:14px; margin-bottom:16px;">'
          + '<img src="' + matchedExpert.photo + '" alt="' + matchedExpert.name + ', ' + matchedExpert.role + '" style="width:48px; height:48px; border-radius:50%; object-fit:cover;">'
          + '<div>Relu par <a href="' + matchedExpert.link + '"' + linkTarget + ' style="color:#1C1B1F; text-decoration:underline; font-weight:700;">' + matchedExpert.name + '</a>, ' + matchedExpert.role + '</div>'
          + '</div>'
          + '<div style="font-size:14px; color:#4B5563;">' + matchedExpert.desc + '</div>';

        var sc = document.createElement('script');
        sc.type = 'application/ld+json';
        sc.textContent = JSON.stringify(matchedExpert.schema);
        document.head.appendChild(sc);
      }

      bio.innerHTML = julienHTML + expertHTML;
      faqSection.parentElement.insertBefore(bio, faqSection);
    }
  }, 200);
});


// --- areaServed override : page agence-seo-nice uniquement (Monaco retiré) ---
window.addEventListener("load", function () {
  setTimeout(function () {
    if (window.location.pathname.indexOf("agence-seo-nice") === -1) return;

    var scripts = document.querySelectorAll('script[type="application/ld+json"]');
    var done = false;

    for (var i = 0; i < scripts.length; i++) {
      if (done) break;
      var data;
      try {
        data = JSON.parse(scripts[i].textContent);
      } catch (e) {
        console.log("[upwedo-debug] Nice areaServed : un JSON-LD non parsable a ete ignore");
        continue;
      }
      var type = data && data["@type"];
      var isService = (type === "Service") || (Array.isArray(type) && type.indexOf("Service") !== -1);
      if (isService) {
        data.areaServed = [
          { "@type": "City", "name": "Nice" },
          { "@type": "AdministrativeArea", "name": "Alpes-Maritimes" },
          { "@type": "Country", "name": "France" }
        ];
        scripts[i].textContent = JSON.stringify(data);
        done = true;
        console.log("[upwedo-debug] Nice areaServed mis a jour : Monaco retire, Nice ajoutee");
      }
    }
  }, 100);
});


// --- agence-seo-shopify : titre + phrase + tableau SEO Shopify (slug-gated) — 08/06/2026 ---
window.addEventListener("load", function() {
  setTimeout(function() {
    if (window.location.pathname.indexOf("/services/") !== 0) return;
    var slug = window.location.pathname.replace(/\/+$/, "").split("/").pop();
    if (slug !== "agence-seo-shopify") return;

    var sec = document.getElementById("uwd-seo-table-section");
    if (!sec) return;

    var h2 = sec.querySelector(".heading-style-h2");
    if (h2) h2.textContent = "SEO Shopify natif ou optimisé : ce qui change pour votre visibilité";

    var sub = sec.querySelector(".text-size-medium");
    if (sub) sub.textContent = "Shopify pose un cadre technique fiable, mais son référencement natif s'arrête vite : structure d'URL imposée, Schema Product incomplet, robots.txt limité, balisage multilingue partiel. Ces limites pèsent directement sur votre visibilité, sur Google comme sur les moteurs IA. Le tableau ci-dessous compare chaque levier : ce que Shopify gère seul, et ce qu'on optimise pour vous faire trouver.";

    var old = document.getElementById("uwd-old-table");
    if (!old) return;
    var inner = old.firstElementChild;
    if (!inner) return;
    inner.innerHTML = `
<div class="uwd-seoshop">
<style>
.uwd-seoshop{--ink:#171921;--rose:#C02C72;--line:#E5E5E5;font:inherit;color:var(--ink);width:100%;margin:0;}
.uwd-seoshop__wrap{border:1px solid var(--line);border-radius:16px;overflow:hidden;}
.uwd-seoshop table{width:100%;border-collapse:collapse;table-layout:fixed;font:inherit;}
.uwd-seoshop caption{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);}
.uwd-seoshop thead th{background:#F3F4F6;color:var(--ink);font-size:.86rem;font-weight:700;text-align:left;padding:15px 18px;border-bottom:1px solid var(--line);overflow-wrap:break-word;}
.uwd-seoshop thead th.is-focus{background:var(--ink);color:#fff;}
.uwd-seoshop tbody th{text-align:left;font-weight:700;color:var(--ink);font-size:.93rem;padding:15px 18px;background:#fff;overflow-wrap:break-word;}
.uwd-seoshop tbody td{font-size:.93rem;line-height:1.4;color:#6F6F6F;padding:15px 18px;vertical-align:top;background:#fff;overflow-wrap:break-word;}
.uwd-seoshop tbody td.is-focus{color:var(--ink);font-weight:700;box-shadow:inset 3px 0 0 var(--rose);background:#F4F5F7;}
.uwd-seoshop tbody tr:nth-child(even) th,.uwd-seoshop tbody tr:nth-child(even) td{background:#F8F9FA;}
.uwd-seoshop tbody tr:nth-child(even) td.is-focus{background:#F1F2F5;}
.uwd-seoshop tbody tr:not(:last-child) th,.uwd-seoshop tbody tr:not(:last-child) td{border-bottom:1px solid var(--line);}
.uwd-seoshop__resume{color:#6F6F6F;font-style:italic;font-size:.9rem;line-height:1.5;margin:14px 2px 0;}
@media(max-width:720px){
.uwd-seoshop thead{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);}
.uwd-seoshop table,.uwd-seoshop tbody,.uwd-seoshop tr,.uwd-seoshop th,.uwd-seoshop td{display:block;width:100%;}
.uwd-seoshop tbody tr{border-bottom:1px solid var(--line);padding:8px 0;}
.uwd-seoshop tbody tr:nth-child(even) th,.uwd-seoshop tbody tr:nth-child(even) td{background:#fff;}
.uwd-seoshop tbody th{font-size:1.04rem;padding:12px 16px 6px;}
.uwd-seoshop tbody td{border:0;padding:3px 16px;}
.uwd-seoshop tbody td::before{content:attr(data-label) " : ";font-weight:700;color:var(--ink);}
.uwd-seoshop tbody td.is-focus{box-shadow:none;background:#fff;border-top:1px solid var(--line);margin-top:8px;padding-top:10px;}
}
</style>
<div class="uwd-seoshop__wrap">
<table>
<caption>SEO Shopify natif comparé au référencement Shopify optimisé par upwedo.</caption>
<colgroup><col style="width:30%"><col style="width:35%"><col style="width:35%"></colgroup>
<thead><tr><th scope="col">Levier SEO Shopify</th><th scope="col">Shopify natif</th><th scope="col" class="is-focus">Optimisé par upwedo.</th></tr></thead>
<tbody>
<tr><th scope="row">Structure d'URL</th><td data-label="Shopify natif">/collections/ et /products/ figées</td><td data-label="Optimisé par upwedo." class="is-focus">Maillage interne dense, ancres optimisées</td></tr>
<tr><th scope="row">Schema Product</th><td data-label="Shopify natif">Incomplet : brand, gtin, priceValidUntil manquants</td><td data-label="Optimisé par upwedo." class="is-focus">Enrichi en Liquid custom</td></tr>
<tr><th scope="row">robots.txt</th><td data-label="Shopify natif">Limité par défaut</td><td data-label="Optimisé par upwedo." class="is-focus">robots.txt.liquid édité, exclusion ?variant=</td></tr>
<tr><th scope="row">Core Web Vitals</th><td data-label="Shopify natif">Dégradés par les apps</td><td data-label="Optimisé par upwedo." class="is-focus">Audit des apps, LCP sous 2,5 s</td></tr>
<tr><th scope="row">Multilingue</th><td data-label="Shopify natif">hreflang Markets partiel</td><td data-label="Optimisé par upwedo." class="is-focus">Ajustements manuels FR, EN, IT</td></tr>
<tr><th scope="row">Visibilité sur les moteurs IA (GEO)</th><td data-label="Shopify natif">Non couverte nativement</td><td data-label="Optimisé par upwedo." class="is-focus">llms.txt, FAQPage, sources tierces</td></tr>
</tbody>
</table>
</div>
<p class="uwd-seoshop__resume">En résumé : Shopify pose un cadre fiable mais bridé côté référencement. La visibilité vient de l'exécution sur ces leviers, pas de la plateforme seule.</p>
</div>`;
  }, 100);
});


// --- Texte sous CTA personnalisé par slug (SEO LP) — v2 corrigée 15/06 ---
window.addEventListener("load", function () {
  setTimeout(function () {
    var textes = {
      "directeur-marketing-externalise": [
        "Direction marketing externalisée pour PME : un pilote senior plus un collectif de 30+ experts coordonnés.",
        "Stratégie, acquisition, SEO et GEO, contenu et CRM, pilotés mois après mois, partout en France."
      ],
      "agence-digitale-monaco": [
        "Agence digitale à Monaco, implantée à Fontvieille depuis 2022, au service des PME de la Principauté.",
        "Direction digitale externalisée, acquisition, SEO et GEO et sites web, coordonnés par un seul pilote."
      ],
      "agence-seo-monaco": [
        "Agence SEO et GEO à Monaco, implantée à Fontvieille depuis 2022.",
        "Référencement Google et visibilité sur les moteurs IA pour les entreprises B2B et le luxe de la Principauté."
      ],
      "agence-seo-nice": [
        "Agence SEO et GEO à Nice et sur la Côte d'Azur, pour les PME du département 06.",
        "Référencement Google, visibilité sur les moteurs IA et maillage local, coordonnés par un seul pilote."
      ],
      "agence-seo-shopify": [
        "Référencement SEO et GEO pour boutiques Shopify, pensé pour les PME e-commerce en croissance.",
        "Schema Product, Core Web Vitals et intention commerciale : une visibilité Google et IA qui convertit."
      ],
      "e-commerce-shopify": [
        "Création de boutiques Shopify pensées pour la conversion, du parcours d'achat au tunnel de vente.",
        "Architecture SEO native, migration sans perte de trafic, e-commerce multilingue FR IT EN DE."
      ],
      "agence-social-media-monaco": [
        "Pilotage social media pour les entreprises de Monaco et de la Côte d'Azur.",
        "LinkedIn B2B, Instagram premium et TikTok : stratégie éditoriale, production locale HD et reporting ROI."
      ],
      "freelance-ecommerce": [
        "Freelance e-commerce ou direction digitale externalisée : le comparatif honnête pour PME en croissance.",
        "Quand un expert solo suffit, quand passer au collectif coordonné de 30+ experts seniors."
      ],
      "fractional-cmo-monaco": [
        "Fractional CMO for Monaco and French Riviera businesses, based in Fontvieille since 2022.",
        "Marketing strategy, paid media, SEO and GEO and AI visibility, piloted month after month, in English and French."
      ],
      "audit-digital": [
        "Audit digital pour PME : le constat business avant les canaux, modèle économique, marges et positionnement.",
        "Quatre niveaux passés au crible, du SEO et GEO au technique, jusqu'à trois priorités chiffrées et actionnables."
      ],
      "agence-geo-ia": [
        "Agence GEO et IA pour PME : devenez la marque que ChatGPT, Claude, Perplexity et Gemini recommandent.",
        "Diagnostic d'empreinte IA, contenu citable et autorit\u00e9 de marque : une visibilit\u00e9 sur Google et les moteurs IA, pilot\u00e9e mois apr\u00e8s mois."
      ]
    };

    var path = window.location.pathname.replace(/\/+$/, "");
    var slug = path.substring(path.lastIndexOf("/") + 1);
    var texte = textes[slug];

    var blocs = [];
    document.querySelectorAll("[class]").forEach(function (el) {
      var classes = (el.getAttribute("class") || "").toLowerCase().split(/\s+/);
      if (classes.indexOf("text-under-cta") !== -1) blocs.push(el);
    });

    console.log("[upwedo-debug] textUnderCTA | slug:", slug, "| texte trouvé:", !!texte, "| blocs:", blocs.length);
    if (!texte) return;

    blocs.forEach(function (n, i) {
      var txt = n.textContent || "";
      console.log("[upwedo-debug] bloc", i, ":", txt.trim().substring(0, 50));
      var iTxt = txt.indexOf("Premier");

      if (iTxt !== -1) {
        if (txt.substring(0, iTxt).trim().length > 30) {
          var html = n.innerHTML;
          var iH = html.indexOf("Premier");
          var m = html.substring(0, iH).match(/((?:\s*<br\s*\/?>\s*)+)$/i);
          var sep = m ? m[1] : "<br><br>";
          n.innerHTML = texte[0] + "<br>" + texte[1] + sep + html.substring(iH);
        }
      } else if (txt.trim().length > 30 && txt.indexOf("Réserver") === -1) {
        n.innerHTML = texte[0] + "<br>" + texte[1];
      }
    });
  }, 100);
});


// --- Dico EN (fractional-cmo-monaco) : insensible à la casse + sous-chaîne ---
(function () {
  if (window.location.pathname.indexOf('fractional-cmo-monaco') === -1) return;

  var MAP = {
    "30 mins pour repartir avec un plan d'action clair sur votre projet. Gratuit": "30 mins to leave with a clear action plan for your business. Free",
    "Réserver": "Book",
    "Collectif": "Collective",
    "Cas clients": "Case studies",
    "Nous contacter": "Contact us",
    "30+ experts coordonnés • 47+ PME accompagnées • 4,8/5 sur Google": "30+ coordinated experts • 47+ businesses supported • 4.8/5 on Google",
    "30+ experts coordonnés": "30+ coordinated experts",
    "47+ PME accompagnées": "47+ businesses supported",
    "4,8/5 sur Google": "4.8/5 on Google",
    "Vous n'êtes plus seul face à vos enjeux digitaux": "You're no longer alone with your digital challenges",
    "Guide détaillé": "Detailed guide",
    "Implantés en Principauté de Monaco": "Based in the Principality of Monaco",
    "Rédigé par": "Written by",
    "co-fondateur d'upwedo.": "co-founder of upwedo.",
    "20 ans dans le digital. Ex-Solocal/PagesJaunes (référencement, SEO, e-commerce et stratégie d'acquisition multicanal). 2 exits entrepreneuriaux : Netvendeur (e-commerce) et Appart-Maison (immobilier digital). Accompagne aujourd'hui 47+ PME en direction digitale externalisée.": "20 years in digital. Ex-Solocal/PagesJaunes (search, SEO, e-commerce and multichannel acquisition strategy). Two entrepreneurial exits: Netvendeur (e-commerce) and Appart-Maison (digital real estate). Today he leads externalized marketing direction for 47+ businesses.",
    "Premier échange offert • Réponse sous 24h • Point de contact unique": "First call free • Reply within 24h • Single point of contact",
    "Premier échange offert": "First call free",
    "Réponse sous 24h": "Reply within 24h",
    "Point de contact unique": "Single point of contact",
    "Clarté. Exécution. Résultats.": "Clarity. Execution. Results.",
    "Clarté.": "Clarity.",
    "Exécution.": "Execution.",
    "Résultats.": "Results.",
    "Clarté": "Clarity",
    "Exécution": "Execution",
    "Résultats": "Results",
    "Parlons de votre croissance": "Let's talk about your growth",
    "Stratégie digitale": "Digital strategy",
    "Acquisition & ADS": "Acquisition & Ads",
    "SEO, GEO & IA": "SEO, GEO & AI",
    "Automatisation CRM": "CRM automation",
    "Sites & Développement": "Websites & Development",
    "Tous nos services": "All our services",
    "Votre équipe": "Your team",
    "Rejoindre le collectif": "Join the collective",
    "Suivez-nous sur LinkedIn pour des insights stratégie digitale PME.": "Follow us on LinkedIn for digital strategy insights.",
    "Présence aussi sur d'autres réseaux.": "Also present on other networks.",
    "Tous droits réservés.": "All rights reserved.",
    "Mentions légales": "Legal notice",
    "Confidentialité": "Privacy",
    "CGV": "Terms of Sale",
    "CGU": "Terms of Use"
  };

  function deApos(s) { return s.replace(/[\u2019\u2018]/g, "'").replace(/\u00a0/g, ' '); }

  var entries = Object.keys(MAP).map(function (k) { return [deApos(k), MAP[k]]; });
  entries.sort(function (a, b) { return b[0].length - a[0].length; });

  function translate() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (n) {
      var orig = n.nodeValue;
      if (!orig || !orig.trim()) return;
      var cur = deApos(orig);
      var lower = cur.toLowerCase();
      var changed = false;
      for (var i = 0; i < entries.length; i++) {
        var fr = entries[i][0];
        var idx = lower.indexOf(fr.toLowerCase());
        if (idx !== -1) {
          cur = cur.slice(0, idx) + entries[i][1] + cur.slice(idx + fr.length);
          lower = cur.toLowerCase();
          changed = true;
        }
      }
      if (changed) n.nodeValue = cur;
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', translate);
  else translate();
  window.addEventListener('load', function () {
    translate();
    setTimeout(translate, 500);
    setTimeout(translate, 1200);
  });
})();


// --- Service override (fractional-cmo-monaco) : areaServed Monaco, offers, langues, image ---
window.addEventListener("load", function () {
  setTimeout(function () {
    if (window.location.pathname.indexOf("fractional-cmo-monaco") === -1) return;
    var scripts = document.querySelectorAll('script[type="application/ld+json"]');
    var done = false;
    for (var i = 0; i < scripts.length && !done; i++) {
      var data;
      try { data = JSON.parse(scripts[i].textContent); } catch (e) { continue; }
      var type = data && data["@type"];
      var isService = (type === "Service") || (Array.isArray(type) && type.indexOf("Service") !== -1);
      if (isService) {
        data.areaServed = [
          { "@type": "Country", "name": "Monaco" },
          { "@type": "AdministrativeArea", "name": "Alpes-Maritimes" }
        ];
        data.availableLanguage = ["en", "fr"];
        data.offers = {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "minPrice": 5000,
            "priceCurrency": "EUR",
            "unitText": "MONTH"
          }
        };
        if (data.image && (!data.image.url || data.image.url === "")) { delete data.image; }
        scripts[i].textContent = JSON.stringify(data);
        done = true;
        console.log("[upwedo-debug] fractional-cmo : Service override applique");
      }
    }
  }, 150);
});
