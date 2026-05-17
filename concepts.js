const concepts = {
  "01": {
    name: "Satisfy Drop",
    body: "concept-01",
    media: "assets/rotate-demo.mp4",
    mediaType: "video",
    eyebrow: "Manchester / founding drop",
    title: "Reserve the room before the room opens.",
    text: "A loud, campaign-led direction inspired by the current Calvin Harris single world: mint, red, grain, huge CTA, and club-culture urgency.",
    cta: "Pre-apply",
    secondary: "View output",
    sectionTitle: "A members-only content drop for DJs.",
    modules: [
      ["01", "Club-standard booth", "A serious DJ room with the visual language of a release campaign."],
      ["02", "Content machine", "Every set becomes a master, shorts, reels, and booking proof."],
      ["03", "Founding access", "Limited early membership before the full Manchester launch."]
    ]
  },
  "02": {
    name: "Noir Fashion",
    body: "concept-02",
    media: "assets/studio-concept.png",
    mediaType: "image",
    eyebrow: "Private studio / Manchester",
    title: "A broadcast room dressed like a fashion house.",
    text: "A cleaner premium direction: black, cream, sharp photography, restrained copy, and a members-club feel.",
    cta: "Apply now",
    secondary: "Memberships",
    sectionTitle: "Quiet luxury, serious output.",
    modules: [
      ["Access", "Members only", "Priority sessions, controlled room, and no technical friction."],
      ["Capture", "4K workflow", "Multiple camera angles, broadcast audio, and clean lighting."],
      ["Output", "Ready to post", "Short-form clips and long-form proof for promoters and socials."]
    ]
  },
  "03": {
    name: "Chrome Club",
    body: "concept-03",
    media: "assets/rotate-demo.mp4",
    mediaType: "video",
    eyebrow: "Automated performance capture",
    title: "The DJ booth becomes the content engine.",
    text: "A futuristic, high-tech direction with chrome, cyan light, automation, screens, and a more premium SaaS-meets-club feel.",
    cta: "Start capture",
    secondary: "See system",
    sectionTitle: "Built like production infrastructure.",
    modules: [
      ["Record", "Walk in and perform", "The room manages the camera-safe look, audio, and session capture."],
      ["Detect", "Key moments marked", "AI-assisted workflows identify the points that matter."],
      ["Deliver", "Platform-ready exports", "Horizontal sets, vertical reels, and clips for every social channel."]
    ]
  },
  "04": {
    name: "Red Warehouse",
    body: "concept-04",
    media: "assets/snug-vinyl-rotate-studio.jpg",
    mediaType: "image",
    eyebrow: "Manchester DJ content studio",
    title: "Mix. Record. Share.",
    text: "Perform once and leave with 4K video, clean audio, zip-line camera movement and AI-assisted clips ready for TikTok, Instagram and YouTube.",
    cta: "Join founding list",
    secondary: "Watch demo",
    sectionTitle: "One room for performance, production and release.",
    modules: [
      ["4K", "4K video + audio capture", "Every session is captured in 4K with clean DJ audio, proper monitoring and camera-safe lighting."],
      ["Zip", "Zip-line camera movement", "Moving overhead shots and booth angles give the set the motion of a proper broadcast, not a static phone clip."],
      ["AI", "Direct-to-social edits", "The system turns one performance into a full set, vertical clips and platform-ready assets for TikTok, Instagram and YouTube."]
    ]
  },
  "05": {
    name: "White Label",
    body: "concept-05",
    media: "assets/warehouse-front.jpeg",
    mediaType: "image",
    eyebrow: "Premium studio membership",
    title: "Less noise. More signal.",
    text: "A high-fashion editorial route: off-white space, black type, lots of restraint, and a very premium membership product feel.",
    cta: "Reserve access",
    secondary: "View pricing",
    sectionTitle: "A private tool for public momentum.",
    modules: [
      ["Founder", "£129 / month", "Priority early access, six studio hours, and standard capture."],
      ["Pro", "£259 / month", "Twelve hours, advanced lighting, all cameras, and production access."],
      ["Session", "From £96", "A low-friction way to turn one performance into a content package."]
    ]
  }
};

const stats = [
  ["1.4M+", "Mixmag SoundCloud audience"],
  ["4K", "multi-camera capture"],
  ["24h", "target delivery"],
  ["Zip", "camera movement"]
];

const manchesterCapabilities = [
  ["4K video", "Multi-camera capture for full sets, promo clips and high-quality archive footage."],
  ["Audio capture", "Clean DJ audio recorded properly at source so the set sounds as good as it looks."],
  ["Zip-line cameras", "Dynamic movement over the booth and crowd-facing angles for broadcast energy."],
  ["AI clipping", "Key moments detected and cut into vertical edits for Instagram, TikTok and YouTube."],
  ["Production suites", "Full production rooms for writing, finishing records, label work and creator sessions."],
  ["Lessons", "DJ, production and content lessons for members who want to sharpen the craft, not just rent a room."]
];

function mediaMarkup(concept, cls = "hero-media") {
  if (concept.mediaType === "video") {
    return `<video class="${cls}" src="${concept.media}" autoplay muted loop playsinline></video>`;
  }
  return `<img class="${cls}" src="${concept.media}" alt="">`;
}

function renderConcept() {
  const id = document.body.dataset.concept;
  const concept = concepts[id];
  if (!concept) return;

  document.body.classList.add(concept.body);
  document.title = `Rotate Studios / ${concept.name}`;
  const nav = id === "04"
    ? `<a href="#capture">Capture</a><a href="#mixmag">Mixmag</a><a href="#sankeys">Sankeys</a><a href="#reserve">Apply</a>`
    : `<a href="#system">System</a><a href="#proof">Proof</a><a href="#reserve">Apply</a>`;
  const manchesterSections = id === "04" ? `
      <section id="capture" class="concept-section capability-section">
        <p class="micro">World's first direct-to-social DJ studio</p>
        <h2 class="section-title">Record once. Leave with the content system.</h2>
        <div class="capability-grid">
          ${manchesterCapabilities.map(([title, text]) => `
            <article>
              <h3>${title}</h3>
              <p>${text}</p>
            </article>
          `).join("")}
        </div>
      </section>
      <section id="mixmag" class="concept-section mixmag-section">
        <div class="mixmag-heading">
          <div class="mixmag-lockup">
            <div class="mixmag-logo-frame">
              <img src="assets/mixmag-logo.png?v=20260517s" alt="Mixmag">
            </div>
            <span>Quarterly mix feature</span>
          </div>
          <p class="micro">Flagship partnership</p>
          <h2 class="section-title">A quarterly Mixmag spotlight for Rotate DJs.</h2>
        </div>
        <div class="mixmag-card">
          <span class="mixmag-number">1.4M+</span>
          <p>Every quarter, Mixmag will feature one Rotate DJ, giving selected members a route into Mixmag's 1.4M+ SoundCloud audience and global electronic music network.</p>
          <a class="pill light" href="https://m.soundcloud.com/mixmag-1" target="_blank" rel="noreferrer">View Mixmag SoundCloud</a>
        </div>
      </section>
      <section id="sankeys" class="concept-section sankeys-section">
        <div class="partner-strip">
          <div>
            <p class="micro">Manchester partner route</p>
            <h2 class="section-title">Built to sit beside serious club culture.</h2>
            <p>Sankeys brings the underground Manchester signal. Rotate turns that same credibility into repeatable studio content: captured, edited and ready to travel online.</p>
          </div>
          <div class="sankeys-lockup">
            <img src="assets/sankeys-official-logo.svg" alt="Sankeys">
          </div>
        </div>
      </section>
  ` : "";
  document.querySelector("#app").innerHTML = `
    <header class="concept-header">
      <a class="concept-logo" href="designs.html" aria-label="Rotate design lab">
        <span class="rotate-symbol" aria-hidden="true"></span>
        <span class="rotate-wordmark">R&oslash;TATE</span>
      </a>
      <nav class="concept-nav" aria-label="Concept navigation">
        ${nav}
      </nav>
      <a class="pill ${id === "01" || id === "05" ? "dark" : "light"}" href="#reserve">${concept.cta}</a>
    </header>
    <main>
      <section class="concept-hero">
        ${mediaMarkup(concept)}
        <div class="hero-poster"></div>
        ${id === "01" ? '<div class="orbital" aria-hidden="true"></div>' : ""}
        <div class="hero-copy">
          <p class="eyebrow">${concept.eyebrow}</p>
          <h1>${concept.title}</h1>
          <p>${concept.text}</p>
          <div class="hero-actions">
            <a class="pill ${id === "01" || id === "05" ? "dark" : "light"}" href="#reserve">${concept.cta}</a>
            <a class="pill stroke" href="#system">${concept.secondary}</a>
          </div>
        </div>
      </section>
      <section id="system" class="concept-section split">
        <div class="media-frame">
          <video src="assets/rotate-demo.mp4" controls muted playsinline poster="assets/studio-concept.png"></video>
        </div>
        <div>
          <p class="micro">${concept.name}</p>
          <h2 class="section-title">${concept.sectionTitle}</h2>
          <div class="stack">
            ${concept.modules.map(([num, title, text]) => `
              <article>
                <span>${num}</span>
                <div>
                  <h3>${title}</h3>
                  <p>${text}</p>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
      ${manchesterSections}
      <section id="proof" class="concept-section">
        <p class="micro">Founding proof</p>
        <h2 class="section-title">Built for DJs who need content that travels.</h2>
        <div class="stats">
          ${stats.map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join("")}
        </div>
      </section>
      <section id="reserve" class="reserve-band">
        <h2>Founding memberships are limited.</h2>
        <a class="pill ${id === "01" || id === "05" ? "dark" : "light"}" href="index.html#reserve">Reserve your spot</a>
      </section>
    </main>
    <footer class="concept-footer">
      <span>Rotate Studios / Manchester</span>
      <a href="designs.html">Back to all five concepts</a>
    </footer>
  `;

  if (window.location.hash) {
    const scrollToHash = () => {
      document.querySelector(window.location.hash)?.scrollIntoView({ block: "start" });
    };
    requestAnimationFrame(scrollToHash);
    setTimeout(scrollToHash, 450);
    window.addEventListener("load", scrollToHash, { once: true });
  }
}

function renderLab() {
  const lab = document.querySelector("[data-lab]");
  if (!lab) return;
  lab.innerHTML = Object.entries(concepts).map(([id, concept]) => `
    <article class="lab-card">
      <div>
        <span>${id} / ${concept.name}</span>
        <h2>${concept.title}</h2>
        <p>${concept.text}</p>
      </div>
      <a class="pill ${id === "02" || id === "03" || id === "04" ? "light" : "dark"}" href="concept-${id}.html">Open concept ${id}</a>
    </article>
  `).join("");
}

renderConcept();
renderLab();
