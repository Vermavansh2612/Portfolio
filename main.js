const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const SITE_CONTENT = {
  "meta": {
    "title": "Vansh Verma - Portfolio Deck",
    "description": "Vansh Verma portfolio deck. Soft white, forest green, charcoal, and mint."
  },
  "preloader": {
    "word": "PORTFOLIO."
  },
  "brand": {
    "name": "Vansh Verma",
    "ariaLabel": "Vansh Verma - home",
    "homeHref": "#home"
  },
  "deckNav": [
    { "href": "#home", "label": "Cover" },
    { "href": "#about", "label": "About" },
    { "href": "#education", "label": "Education" },
    { "href": "#work", "label": "Work" },
    { "href": "#experience", "label": "Experience" },
    { "href": "#skills", "label": "Skills" },
    { "href": "#contact", "label": "Contact" }
  ],
  "headerNav": [
    { "href": "#about", "label": "About" },
    { "href": "#work", "label": "Work" },
    { "href": "#skills", "label": "Skills" },
    { "href": "#contact", "label": "Hire Me", "cta": true }
  ],
  "ticker": {
    "repeat": 2,
    "items": [
      { "label": "STATUS", "value": "AVAILABLE FOR WORK" },
      { "label": "LOCATION", "value": "NEW DELHI, IN" },
      { "label": "ROLE", "value": "DESIGNER & DEVELOPER" },
      { "label": "MODE", "value": "FREELANCE + PART-TIME" }
    ]
  },
  "hero": {
    "id": "home",
    "cornerTag": "Portfolio \u00b7 2026",
    "eyebrow": "Origin",
    "nameLines": ["VANSH", "VERMA"],
    "namePop": ".",
    "lede": "I'm an AI/ML student building intelligent software while growing through hands-on projects, experimentation, and solving meaningful problems.",
    "photo": "assets/vansh-verma.jpg",
    "photoAlt": "Vansh Verma",
    "actions": [
      { "href": "#work", "label": "View Work", "primary": true },
      { "href": "assets/Vansh_CV.pdf", "label": "Download CV", "download": true }
    ],
    "stats": [
      { "label": "Internship", "value": "06" },
      { "label": "Projects", "value": "04" },
      { "label": "Creatives", "value": "20+" }
    ]
  },
  "about": {
    "id": "about",
    "slideNum": "01",
    "tag": "Player Profile",
    "title": "Every pixel is placed on purpose.",
    "quote": "\"Make it work, Make it look good.\"",
    "paragraphs": [
      "I'm a multidisciplinary designer who treats interfaces like presentation slides: clear hierarchy, deliberate contrast, and a visual language that never apologizes for taking up space.",
      "Clients come to me when the safe, minimal version already exists everywhere else - and they want something people actually remember after the call."
    ],
    "disciplinesTitle": "Core Disciplines",
    "disciplines": [
      { "icon": "cpu", "label": "Machine Learning" },
      { "icon": "code", "label": "Frontend Dev" },
      { "icon": "interface", "label": "UI / UX" },
      { "icon": "brand", "label": "Brand" }
    ],
    "note": "Four things I've grown good at - not a percentage, just the focus areas."
  },
  "education": {
    "id": "education",
    "slideNum": "02",
    "tag": "Education",
    "title": "Where the fundamentals came from.",
    "items": [
      {
        "year": "2025 - 2028",
        "title": "B.Tech, Artificial Intelligence & Machine Learning",
        "description": "University School of Automation and Robotics, GGSIPU | Favourite Course: Machine Learning, Artificial Intelligence, OOPs using Java, Analysis of Algorithm and Data structures.",
         "meta": "CGPA: 7.70 [4th Semester]",
        "status": { "label": "Pursuing", "type": "progress" }
      },
      {
        "year": "2022 - 2025",
        "title": "Diploma, Computer Engineering",
        "description": "Delhi Skill and Entrepreneurship University | Favourite Course: Data Mining 7 Warehousing, Programming in C, Operating Systems, and Database Management Systems.",
        "meta": "CGPA: 8.31",
        "status": { "label": "Completed", "type": "done" }
      },
      {
        "year": "2022",
        "title": "Secondary Education - Class 10",
        "description": "Closing out school with a strong, well-rounded foundation before moving into technical education.",
        "meta": "Percentage: 80%",
        "status": { "label": "Completed", "type": "done" }
      }
    ]
  },
  "experience": {
    "id": "experience",
    "slideNum": "04",
    "tag": "Experience",
    "title": "Where the work happened.",
    "items": [
      {
        "year": "Present",
        "title": "InAmigos Foundation",
        "description": "Started as a Graphic Designer Intern, designing posters and producing videos for the NGO's initiatives, then moved into an AI Web Development Intern role building AI-integrated features into the platform's web development work.",
        "meta": "AI Web Development Intern [Jul 2026] \u00b7 Graphic Designer Intern [Dec 2024]",
        "tag": "Internship"
      },
      {
        "year": "Jul - Nov 2024",
        "title": "Kushal:Aide",
        "description": "Took on three roles across a single stretch: led the company website as team lead (ranked best among five competitors), designed UI in Figma for web and mobile, and created hiring flyers plus curated content that lifted engagement by 20%.",
        "meta": "Web Developer Intern \u00b7 Creative Technologist \u00b7 UI Designer Intern",
        "tag": "Internship"
      },
      {
        "year": "Jul - Aug 2024",
        "title": "Tech Mahindra Foundation",
        "description": "Built a fully responsive E-library website and multiple static webpages as Web Developer Intern, while also developing strong communication skills and being recognized as star performer for presentation skills as Soft Skill Intern.",
        "meta": "Web Developer Intern \u00b7 Soft Skill Intern",
        "tag": "Internship"
      }
    ]
  },
  "work": {
    "id": "work",
    "slideNum": "03",
    "tag": "Level Select",
    "title": "Projects that cut through the noise.",
    "tech": {
      "heading": "Tech Projects",
      "subheading": "Built, shipped, deployed",
      "approachLabel": "Approach",
      "projects": [
        {
          "level": "TECH - 001 \u00b7 Featured",
          "title": "Faceswap Detector",
          "description": "A machine learning tool that flags face-swapped / deepfake images by spotting inconsistencies in facial landmarks and texture.",
          "approach": "Used OpenCV for face detection and alignment, then trained a classifier on real vs. swapped face data to score authenticity.",
          "tag": "Python / ML",
          "linkLabel": "Live Demo \u2192"
        },
        {
          "level": "TECH - 002",
          "title": "EVision",
          "description": "Helps EV owners find the best nearby charging stations, ranked by real user ratings, distance, and availability.",
          "approach": "Aggregated station data and ratings, then built ranking logic and a map-based UI so the best option surfaces first.",
          "tag": "Web / Maps",
          "linkLabel": "Live Demo \u2192"
        },
        {
          "level": "TECH - 003",
          "title": "Resume Analyser",
          "description": "Parses uploaded resumes and scores them against job requirements, highlighting missing skills and areas to improve.",
          "approach": "Built an NLP pipeline in Python to extract resume text and match it against role keywords and skill sets.",
          "tag": "Python / NLP",
          "linkLabel": "Live Demo \u2192"
        },
        {
          "level": "TECH - 004",
          "title": "Fertility Analysis",
          "description": "Analyzes fertility data to provide insights and recommendations for individuals.",
          "approach": "Utilized various inputs and machine learning algorithms to identify patterns and correlations in fertility data.",
          "tag": "Python / Statistics",
          "linkLabel": "Live Demo \u2192"
        }
      ]
    },
    "design": {
      "heading": "Design Projects",
      "subheading": "Posters, brand & visual work",
      "viewAllLabel": "View All Samples \u2192",
      "viewAllHref": "",
      "posters": [
        { "title": "Badminton", "from": "#205030", "to": "#1F1E19", "aspectRatio": "1/1", "image": "assets/s1.png" },
        { "title": "Anime", "from": "#FAFAFA", "to": "#205030", "aspectRatio": "9/16", "captionStyle": "background:var(--navy);", "image": "assets/s2.png" },
        { "title": "Cricket", "from": "#1F1E19", "to": "#205030", "aspectRatio": "4/5", "image": "assets/s3.png" },
        { "title": "Infographic", "from": "#FAFAFA", "to": "#1F1E19", "aspectRatio": "9/16", "image": "assets/s4.png" },
        { "title": "Matcha", "from": "#205030", "to": "#1F1E19", "aspectRatio": "1/1", "image": "assets/s5.png" },
        { "title": "Brand", "from": "#FAFAFA", "to": "#205030", "aspectRatio": "4/5", "image": "assets/s6.png" },
        { "title": "Nature", "from": "#1F1E19", "to": "#FF8A3D", "aspectRatio": "4/5", "image": "assets/s7.png" },
        { "title": "Chess", "from": "#205030", "to": "#69D09D", "aspectRatio": "1/1", "captionStyle": "background:var(--forest);", "image": "assets/s8.png" },
        { "title": "Gym", "from": "#1F1E19", "to": "#205030", "aspectRatio": "9/16", "image": "assets/s9.png" }
      ]
    }
  },
  "skills": {
    "id": "skills",
    "slideNum": "05",
    "tag": "Technical Skills",
    "title": "The toolkit, up close.",
    "items": [
      { "icon": "code", "label": "Python", "stack": "NumPy \u00b7 Pandas \u00b7 PyTorch \u00b7 Scikit-learn" },
      { "icon": "cpu", "label": "Machine Learning", "stack": "TensorFlow \u00b7 Keras \u00b7 OpenCV" },
      { "icon": "layers", "label": "Web Development", "stack": "React \u00b7 Node.js \u00b7 Next.js" },
      { "icon": "terminal", "label": "Languages", "stack": "C++ \u00b7 Java \u00b7 JavaScript" },
      { "icon": "database", "label": "Data & Databases", "stack": "MySQL \u00b7 MongoDB \u00b7 Firebase" },
      { "icon": "systems", "label": "Tools & Platforms", "stack": "Git \u00b7 Docker \u00b7 VS Code" }
    ]
  },
  "contact": {
    "id": "contact",
    "slideNum": "06",
    "tag": "Contact",
    "title": "Let's put your idea on the next slide.",
    "terminalTitle": "VV_CONTACT.EXE",
    "lead": "initiate_contact --project=new",
    "email": "vermavansh2612@gmail.com",
    "phone": "+91 98181 52580",
    "phoneLabel": "+91 98181 52580",
    "location": "New Delhi, India",
    "form": {
      "endpoint": "https://formsubmit.co/ajax/vermavansh2612@gmail.com",
      "hiddenFields": {
        "_subject": "New message from portfolio site",
        "_template": "table",
        "_captcha": "false"
      },
      "fields": [
        { "id": "name", "name": "name", "type": "text", "label": "Name", "placeholder": "Your name", "required": true },
        { "id": "email", "name": "email", "type": "email", "label": "Email", "placeholder": "you@email.com", "required": true },
        { "id": "message", "name": "message", "type": "textarea", "label": "Message", "placeholder": "What are we building?", "required": true, "full": true }
      ],
      "note": "No spam, no funnels - just tell me what you need and I'll reply myself.",
      "submitLabel": "Send",
      "sendingLabel": "Sending...",
      "statusInitial": "// Sent - talk soon.",
      "statusSending": "// Sending...",
      "statusSuccess": "// Sent - talk soon.",
      "statusError": "// Something broke - email me directly."
    }
  },
  "footer": {
    "brandName": "Vansh Verma",
    "brandPop": ".",
    "description": "Let's build something amazing together!",
    "cta": { "href": "#contact", "label": "Start a Project" },
    "columns": [
      {
        "title": "Navigate",
        "links": [
          { "href": "#about", "label": "About" },
          { "href": "#work", "label": "Work" },
          { "href": "#skills", "label": "Skills" }
        ]
      },
      {
        "title": "Elsewhere",
        "links": [
          { "href": "https://www.linkedin.com/in/vanshh-verma/", "label": "LinkedIn", "icon": "linkedin", "external": true },
          { "href": "https://www.instagram.com/dude_itzvansh/", "label": "Instagram", "icon": "instagram", "external": true },
          { "href": "https://github.com/Vermavansh2612", "label": "GitHub", "icon": "github", "external": true }
        ]
      }
    ],
    "copyright": "\u00a9 2026 Vansh Verma. All rights reserved.",
    "topLink": { "href": "#home", "label": "\u2191" }
  }
};

const ICON_PATHS = {
  illustration: '<path d="M17 3a2.8 2.8 0 0 1 4 4L7 21l-5 1 1-5Z"></path><path d="M14.5 5.5 18.5 9.5"></path>',
  interface: '<rect x="3" y="4" width="18" height="12" rx="1"></rect><path d="M3 8h18"></path><path d="M8 20l1.5-4h5L16 20"></path>',
  code: '<path d="M9 6 3 12l6 6"></path><path d="M15 6l6 6-6 6"></path>',
  brand: '<path d="M12 3c3 3 5 6 5 9a5 5 0 0 1-10 0c0-3 2-6 5-9Z"></path>',
  motion: '<rect x="3" y="4" width="18" height="16" rx="1"></rect><path d="M10 9.5v5l4.5-2.5Z"></path>',
  systems: '<rect x="4" y="4" width="9" height="9" rx="1"></rect><rect x="11" y="11" width="9" height="9" rx="1"></rect>',
  cpu: '<rect x="6" y="6" width="12" height="12" rx="2"></rect><rect x="10" y="10" width="4" height="4"></rect><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"></path>',
  database: '<ellipse cx="12" cy="5.5" rx="7.5" ry="2.5"></ellipse><path d="M4.5 5.5v6c0 1.38 3.36 2.5 7.5 2.5s7.5-1.12 7.5-2.5v-6"></path><path d="M4.5 11.5v6c0 1.38 3.36 2.5 7.5 2.5s7.5-1.12 7.5-2.5v-6"></path>',
  terminal: '<rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M7 9.5l3.5 2.5-3.5 2.5"></path><path d="M13 14.5h4"></path>',
  layers: '<path d="M12 3 3 8l9 5 9-5-9-5Z"></path><path d="M3 13l9 5 9-5"></path><path d="M3 10.5l9 5 9-5"></path>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A6 6 0 0 1 16 8Z"></path><rect x="2" y="8" width="4" height="13"></rect><circle cx="4" cy="3.5" r="2" fill="currentColor" stroke="none"></circle>',
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"></path>',
  location: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 7l9 6 9-6"></path>'
};

function esc(value = '') {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);
}

function icon(name, className) {
  const path = ICON_PATHS[name] || ICON_PATHS.interface;
  return `<svg class="${esc(className)}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
}

function setMeta(content) {
  document.title = content.meta?.title || 'Portfolio';
  const description = document.querySelector('meta[name="description"]');
  if (description && content.meta?.description) description.setAttribute('content', content.meta.description);
  const preloaderWord = document.getElementById('preloaderWord');
  if (preloaderWord) preloaderWord.textContent = content.preloader?.word || '';
  const brandLink = document.getElementById('brandLink');
  if (brandLink) {
    brandLink.href = content.brand?.homeHref || '#home';
    brandLink.setAttribute('aria-label', content.brand?.ariaLabel || 'Home');
  }
}

function renderDeckNav(items = []) {
  const deckNav = document.getElementById('deckNav');
  if (!deckNav) return;
  deckNav.innerHTML = items.map((item) => `<a href="${esc(item.href)}" data-label="${esc(item.label)}"></a>`).join('');
}

function renderHeaderNav(items = []) {
  const nav = document.getElementById('navLinks');
  if (!nav) return;
  nav.innerHTML = items.map((item) => {
    const className = item.cta ? ' class="nav-cta"' : '';
    return `<a href="${esc(item.href)}"${className}>${esc(item.label)}</a>`;
  }).join('');
}

function renderTicker(ticker = {}) {
  const track = document.getElementById('tickerTrack');
  if (!track) return;
  const repeat = Math.max(Number(ticker.repeat) || 1, 1);
  const items = Array.from({ length: repeat }, () => ticker.items || []).flat();
  track.innerHTML = items.map((item) => `<span><b>${esc(item.label)}:</b> ${esc(item.value)}</span>`).join('');
}

function renderHero(hero) {
  return `
    <section id="${esc(hero.id)}" class="slide slide--beige hero">
      <div class="shell">
        <span class="corner-tag">${esc(hero.cornerTag)}</span>
        <div class="hero-grid">
          <div class="hero-load">
            <div class="hero-eyebrow"><span class="dot"></span> ${esc(hero.eyebrow)}</div>
            <h1>${(hero.nameLines || []).map(esc).join('<br>')}<span class="pop">${esc(hero.namePop)}</span></h1>
            <p class="lede">${esc(hero.lede)}</p>
            <div class="hero-actions">
              ${(hero.actions || []).map((action) => `<a class="btn${action.primary ? ' btn-primary' : ''}" href="${esc(action.href)}"${action.download ? ` download`: ''}>${esc(action.label)}</a>`).join('')}
            </div>
          </div>
          <div class="id-card hero-load">
            <div class="photo">${hero.photo ? `<img src="${esc(hero.photo)}" alt="${esc(hero.photoAlt || '')}" loading="lazy" onerror="this.remove()" />` : ''}</div>
            ${(hero.stats || []).map((stat) => `<div class="row"><span>${esc(stat.label)}</span><span>${esc(stat.value)}</span></div>`).join('')}
          </div>
        </div>
      </div>
    </section>`;
}

function renderAbout(about) {
  return `
    <section id="${esc(about.id)}" class="slide slide--black">
      <span class="slide-num">${esc(about.slideNum)}</span>
      <div class="shell">
        <span class="kicker slide-tag reveal">${esc(about.tag)}</span>
        <h2 class="reveal">${esc(about.title)}</h2>
        <div class="about-grid">
          <div class="about-copy reveal">
            <p class="big-quote">${esc(about.quote)}</p>
            ${(about.paragraphs || []).map((paragraph) => `<p>${esc(paragraph)}</p>`).join('')}
          </div>
          <div class="stat-panel reveal" id="statPanel">
            <div class="stat-head">${esc(about.disciplinesTitle)}</div>
            <div class="discipline-box">
              ${(about.disciplines || []).map((item) => `<div class="discipline-item">${icon(item.icon, 'discipline-icon')}<span>${esc(item.label)}</span></div>`).join('')}
            </div>
            <p class="skill-tree-note">${esc(about.note)}</p>
          </div>
        </div>
      </div>
    </section>`;
}

function renderTimelineItem(item) {
  const status = item.status;
  const tag = status
    ? `<span class="tl-tag${status.type === 'progress' ? ' status-pursuing' : ''}"><span class="status-dot ${status.type === 'done' ? 'status-done' : 'status-progress'}"></span>${esc(status.label)}</span>`
    : `<span class="tl-tag">${esc(item.tag)}</span>`;
  return `
    <div class="tl-item">
      <span class="tl-year">${esc(item.year)}</span>
      <div class="tl-role">
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.description)}</p>
        ${item.meta ? `<p class="tl-meta">${esc(item.meta)}</p>` : ''}
      </div>
      ${tag}
    </div>`;
}

function renderTimelineSection(section, colorClass) {
  return `
    <section id="${esc(section.id)}" class="slide ${colorClass}">
      <span class="slide-num">${esc(section.slideNum)}</span>
      <div class="shell">
        <span class="slide-tag reveal">${esc(section.tag)}</span>
        <h2 class="reveal">${esc(section.title)}</h2>
        <div class="timeline reveal">
          ${(section.items || []).map(renderTimelineItem).join('')}
        </div>
      </div>
    </section>`;
}

function renderWork(work) {
  const tech = work.tech || {};
  const design = work.design || {};
  return `
    <section id="${esc(work.id)}" class="slide slide--beige work">
      <span class="slide-num">${esc(work.slideNum)}</span>
      <div class="shell">
        <span class="kicker slide-tag reveal">${esc(work.tag)}</span>
        <h2 class="reveal">${esc(work.title)}</h2>
        <div class="work-block">
          <div class="work-block-head reveal">
            <h3>${esc(tech.heading)}</h3>
            <span>${esc(tech.subheading)}</span>
          </div>
          <div class="project-grid">
            ${(tech.projects || []).map((project) => `
              <article class="project-card reveal">
                <div>
                  <span class="lvl">${esc(project.level)}</span>
                  <h3>${esc(project.title)}</h3>
                  <p>${esc(project.description)}</p>
                  <p class="approach"><b>${esc(tech.approachLabel)}:</b> ${esc(project.approach)}</p>
                </div>
                <div class="proj-foot">
                  <span class="tag">${esc(project.tag)}</span>
                  <button type="button" class="proj-link demo-trigger">${esc(project.linkLabel)}</button>
                </div>
              </article>`).join('')}
          </div>
        </div>
        <div class="work-block">
          <div class="work-block-head reveal">
            <h3>${esc(design.heading)}</h3>
            <span>${esc(design.subheading)}</span>
          </div>
          <div class="masonry reveal">
            ${(design.posters || []).map((poster) => `
              <div class="poster" style="--f1:${esc(poster.from)}; --f2:${esc(poster.to)};">
                <div class="poster-frame" style="aspect-ratio:${esc(poster.aspectRatio)};">
                  ${poster.image ? `<img class="poster-photo" src="${esc(poster.image)}" alt="${esc(poster.title)}" loading="lazy" onerror="this.remove()" />` : ''}
                  <span class="cap"${poster.captionStyle ? ` style="${esc(poster.captionStyle)}"` : ''}>${esc(poster.title)}</span>
                </div>
              </div>`).join('')}
          </div>
          ${design.viewAllHref ? `<div class="reveal" style="margin-top:26px;"><a class="btn btn-sm" href="${esc(design.viewAllHref)}" target="_blank" rel="noopener">${esc(design.viewAllLabel || 'View All Samples')}</a></div>` : ''}
        </div>
      </div>
    </section>`;
}

function renderSkills(skills) {
  return `
    <section id="${esc(skills.id)}" class="slide slide--navy">
      <span class="slide-num">${esc(skills.slideNum)}</span>
      <div class="shell">
        <span class="slide-tag reveal">${esc(skills.tag)}</span>
        <h2 class="reveal">${esc(skills.title)}</h2>
        <div class="toolkit-grid" id="toolkitGrid">
          ${(skills.items || []).map((item) => `<div class="toolkit-card reveal">${icon(item.icon, 'toolkit-icon')}<span class="toolkit-name">${esc(item.label)}</span>${item.stack ? `<p class="toolkit-stack">${esc(item.stack)}</p>` : ''}</div>`).join('')}
        </div>
      </div>
    </section>`;
}

function renderContact(contact) {
  const form = contact.form || {};
  const hiddenFields = Object.entries(form.hiddenFields || {}).map(([name, value]) => `<input type="hidden" name="${esc(name)}" value="${esc(value)}" />`).join('');
  const fields = (form.fields || []).map((field) => {
    const required = field.required ? ' required' : '';
    const full = field.full ? ' full' : '';
    if (field.type === 'textarea') {
      return `<div class="field${full}"><label for="${esc(field.id)}">${esc(field.label)}</label><textarea id="${esc(field.id)}" name="${esc(field.name)}" placeholder="${esc(field.placeholder)}"${required}></textarea></div>`;
    }
    return `<div class="field${full}"><label for="${esc(field.id)}">${esc(field.label)}</label><input type="${esc(field.type)}" id="${esc(field.id)}" name="${esc(field.name)}" placeholder="${esc(field.placeholder)}"${required} /></div>`;
  }).join('');
  return `
    <section id="${esc(contact.id)}" class="slide slide--beige contact">
      <span class="slide-num">${esc(contact.slideNum)}</span>
      <div class="shell">
        <span class="slide-tag reveal">${esc(contact.tag)}</span>
        <h2 class="reveal" style="max-width:900px;">${esc(contact.title)}</h2>
        <div class="terminal reveal">
          <div class="terminal-head"><span class="dot"></span><span class="dot"></span><span class="dot"></span> ${esc(contact.terminalTitle)}</div>
          <div class="terminal-body">
            <p class="contact-lead"><span class="prompt">&gt;</span> ${esc(contact.lead)}</p>
            <a class="contact-email" href="mailto:${esc(contact.email)}">${esc(contact.email)}</a>
            <div class="contact-meta">
              ${contact.phone ? `<a class="contact-meta-item" href="tel:${esc(contact.phone.replace(/[^+\d]/g, ''))}">${icon('phone', '')}${esc(contact.phoneLabel || contact.phone)}</a>` : ''}
              ${contact.location ? `<span class="contact-meta-item">${icon('location', '')}${esc(contact.location)}</span>` : ''}
            </div>
            <form id="contactForm" novalidate data-endpoint="${esc(form.endpoint)}">
              ${hiddenFields}
              <input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off" />
              <div class="form-grid">${fields}</div>
              <div class="form-foot">
                <p>${esc(form.note)}</p>
                <div style="display:flex; align-items:center; gap:16px;">
                  <span class="form-status" id="formStatus">${esc(form.statusInitial)}</span>
                  <button class="btn btn-primary" type="submit" id="submitBtn">${esc(form.submitLabel)}</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>`;
}

function renderFooter(footer) {
  const footerEl = document.getElementById('footer');
  if (!footerEl) return;
  footerEl.innerHTML = `
    <div class="shell">
      <div class="footer-top">
        <div class="footer-brand reveal">
          <h3>${esc(footer.brandName)}<span class="pop">${esc(footer.brandPop)}</span></h3>
          <p>${esc(footer.description)}</p>
          <a class="btn" href="${esc(footer.cta.href)}">${esc(footer.cta.label)}</a>
        </div>
        ${(footer.columns || []).map((column) => `
          <div class="footer-col reveal">
            <h4>${esc(column.title)}</h4>
            <ul>
              ${(column.links || []).map((link) => `<li><a href="${esc(link.href)}"${link.external ? ' target="_blank" rel="noopener"' : ''} aria-label="${esc(link.label)}">${link.icon ? icon(link.icon, '') : ''}<span>${esc(link.label)}</span></a></li>`).join('')}
            </ul>
          </div>`).join('')}
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-left"><span>${esc(footer.copyright)}</span></div>
        <a class="to-top" href="${esc(footer.topLink.href)}">${esc(footer.topLink.label)}</a>
      </div>
    </div>`;
}

function renderSite(content) {
  setMeta(content);
  renderDeckNav(content.deckNav);
  renderHeaderNav(content.headerNav);
  renderTicker(content.ticker);
  const main = document.getElementById('siteMain');
  main.innerHTML = [
    renderHero(content.hero),
    renderAbout(content.about),
    renderTimelineSection(content.education, 'slide--navy'),
    renderWork(content.work),
    renderTimelineSection(content.experience, 'slide--black'),
    renderSkills(content.skills),
    renderContact(content.contact)
  ].join('');
  renderFooter(content.footer);
}

function initPreloader() {
  const minDisplay = reduceMotion ? 300 : 2400;
  const started = performance.now();
  const reveal = () => {
    const elapsed = performance.now() - started;
    const wait = Math.max(minDisplay - elapsed, 0);
    setTimeout(() => document.body.classList.add('loaded'), wait);
  };
  if (document.readyState === 'complete') reveal();
  else window.addEventListener('load', reveal, { once: true });
  setTimeout(() => document.body.classList.add('loaded'), 6000);
}

function initInteractions(content) {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('navLinks');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.classList.toggle('open');
    });
    document.querySelectorAll('.nav-links a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.classList.remove('open');
      });
    });
  }

  document.querySelectorAll('.slide').forEach((slide) => {
    slide.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = Math.min(i * 70, 280) + 'ms';
    });
  });

  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => io.observe(el));

  const idCard = document.querySelector('.id-card');
  if (idCard && window.matchMedia('(pointer:fine)').matches && !reduceMotion) {
    idCard.style.transition = 'transform .25s ' + getComputedStyle(document.documentElement).getPropertyValue('--ease-snap');
    idCard.addEventListener('mousemove', (e) => {
      const r = idCard.getBoundingClientRect();
      const rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
      const ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
      idCard.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    idCard.addEventListener('mouseleave', () => {
      idCard.style.transform = 'perspective(700px) rotateX(0) rotateY(0)';
    });
  }

  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');
  const formCopy = content.contact?.form || {};
  const successModal = document.getElementById('successModal');
  const successModalClose = document.getElementById('successModalClose');
  const successModalOk = document.getElementById('successModalOk');
  let modalReturnFocus = null;

  function openModal(modalEl, focusEl) {
    if (!modalEl) return;
    modalReturnFocus = document.activeElement;
    modalEl.classList.add('open');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    requestAnimationFrame(() => focusEl?.focus());
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('open');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (modalReturnFocus && typeof modalReturnFocus.focus === 'function') modalReturnFocus.focus();
  }

  function openSuccessModal() { openModal(successModal, successModalOk); }
  function closeSuccessModal() { closeModal(successModal); }

  successModalClose?.addEventListener('click', closeSuccessModal);
  successModalOk?.addEventListener('click', closeSuccessModal);
  successModal?.addEventListener('click', (e) => {
    if (e.target === successModal) closeSuccessModal();
  });

  const demoModal = document.getElementById('demoModal');
  const demoModalClose = document.getElementById('demoModalClose');
  const demoModalOk = document.getElementById('demoModalOk');

  function openDemoModal() { openModal(demoModal, demoModalOk); }
  function closeDemoModal() { closeModal(demoModal); }

  demoModalClose?.addEventListener('click', closeDemoModal);
  demoModalOk?.addEventListener('click', closeDemoModal);
  demoModal?.addEventListener('click', (e) => {
    if (e.target === demoModal) closeDemoModal();
  });

  document.querySelectorAll('.demo-trigger').forEach((btn) => {
    btn.addEventListener('click', openDemoModal);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (successModal?.classList.contains('open')) closeSuccessModal();
    if (demoModal?.classList.contains('open')) closeDemoModal();
  });

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const originalLabel = submitBtn.textContent;
      submitBtn.textContent = formCopy.sendingLabel || 'Sending...';
      submitBtn.disabled = true;
      status.textContent = formCopy.statusSending || '// Sending...';
      status.classList.add('show');
      try {
        const res = await fetch(form.dataset.endpoint, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form)
        });
        if (!res.ok) throw new Error('Request failed');
        status.textContent = formCopy.statusSuccess || '// Sent.';
        form.reset();
        openSuccessModal();
      } catch (err) {
        status.textContent = formCopy.statusError || '// Something broke.';
      } finally {
        submitBtn.textContent = originalLabel;
        submitBtn.disabled = false;
        setTimeout(() => status.classList.remove('show'), 5000);
      }
    });
  }

  const deckLinks = document.querySelectorAll('#deckNav a');
  const deckNavEl = document.getElementById('deckNav');
  const sections = Array.from(deckLinks).map(a => document.querySelector(a.getAttribute('href')));
  const topLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveSection() {
    const mid = window.innerHeight * 0.4;
    let current = sections[0];
    for (const sec of sections) {
      if (!sec) continue;
      const rect = sec.getBoundingClientRect();
      if (rect.top <= mid && rect.bottom >= mid) { current = sec; break; }
      if (rect.top > mid) break;
      current = sec;
    }
    if (!current) return;
    const idx = sections.indexOf(current);
    deckLinks.forEach(l => l.classList.remove('active'));
    if (idx !== -1) deckLinks[idx].classList.add('active');
    const id = '#' + current.id;
    topLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id));
    const isDark = current.classList.contains('slide--black') || current.classList.contains('slide--navy');
    if (deckNavEl) deckNavEl.classList.toggle('on-dark', isDark);
  }

  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => { updateActiveSection(); scrollTicking = false; });
      scrollTicking = true;
    }
  }, { passive: true });
  window.addEventListener('resize', updateActiveSection);
  window.addEventListener('load', updateActiveSection);
  updateActiveSection();
}

function renderContentError(error) {
  console.error(error);
  const main = document.getElementById('siteMain');
  if (main) {
    main.innerHTML = '<section class="slide slide--beige"><div class="shell"><span class="slide-tag">Content Error</span><h2>Could not render content.</h2><p>The inline portfolio content could not be rendered. Check the browser console for details.</p></div></section>';
  }
  document.body.classList.add('loaded');
}

function loadContent() {
  try {
    renderSite(SITE_CONTENT);
    initInteractions(SITE_CONTENT);
  } catch (error) {
    renderContentError(error);
  }
}

initPreloader();
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', loadContent, { once: true });
else loadContent();
