// Popup-ad pools for the home page nav.
// Work items mirror the portfolio sheet that /work reads; regenerate when it changes.
// Sketchbook list mirrors /sketchbook/image-list.js.
// w/h are the real pixel dimensions of each source file, so a popup can be sized
// to its own aspect ratio before the image has loaded (no reflow, no cropping).
window.POPUP_ADS = {
  sketchbookBase: '/sketchbook/Webp/',
  work: [
    { src: "/assets/thumbnails/Farm.webp", title: "Farm Films", w: 800, h: 450, tags: ["web"] },
    { src: "/assets/thumbnails/Giant.webp", title: "Giant Films", w: 800, h: 450, tags: ["web"] },
    { src: "/assets/thumbnails/open-secrets.webp", title: "Open Secrets", w: 800, h: 450, tags: ["web"] },
    { src: "/assets/thumbnails/mindjoy-AI.webp", title: "Mindjoy Minidoc", w: 1280, h: 720, tags: ["video", "writing"] },
    { src: "/assets/thumbnails/truevo.webp", title: "Truevo Ecommerce", w: 800, h: 450, tags: ["video"] },
    { src: "/assets/thumbnails/replit.webp", title: "Mindjoy & Replit", w: 800, h: 450, tags: ["video", "writing"] },
    { src: "/assets/thumbnails/cloakroom.webp", title: "Cloakroom", w: 800, h: 450, tags: ["web"] },
    { src: "/assets/thumbnails/alchemica.webp", title: "Alchemica.cards", w: 1280, h: 720, tags: ["web"] },
    { src: "/assets/thumbnails/nikki.webp", title: "Nikki Smit", w: 800, h: 450, tags: ["web"] },
    { src: "/assets/thumbnails/nftacademy.webp", title: "NFT Academy", w: 800, h: 450, tags: ["video", "writing"] },
    { src: "/assets/thumbnails/Posixions.webp", title: "Posixions", w: 800, h: 451, tags: ["web"] },
    { src: "/assets/thumbnails/Makaira.webp", title: "Makaira Co", w: 800, h: 448, tags: ["web"] },
    { src: "/assets/thumbnails/lazerbeam.webp", title: "Team Lazerbeam", w: 1280, h: 720, tags: ["web"] },
    { src: "/assets/thumbnails/self-owned-portfolio.webp", title: "Self-Owned Portfolio Guide", w: 800, h: 450, tags: ["writing"] },
    { src: "/assets/thumbnails/dado-originals.webp", title: "Dado Originals", w: 800, h: 450, tags: ["video"] },
    { src: "/assets/thumbnails/naf.webp", title: "The National Arts Festival", w: 800, h: 486, tags: ["video"] },
    { src: "/assets/thumbnails/dunked-wings.webp", title: "EatSleep - Dunked Wings", w: 800, h: 450, tags: ["video"] },
    { src: "/assets/thumbnails/soundcloud.webp", title: "Music & Remixes", w: 800, h: 450, tags: ["music"] },
    { src: "/assets/thumbnails/indexzero.webp", title: "Index Zero", w: 800, h: 450, tags: ["web"] },
    { src: "/assets/thumbnails/black-mirror.webp", title: "Black Mirror Worldbuilding", w: 800, h: 450, tags: ["video", "writing"] },
    { src: "/assets/thumbnails/dado-cv.webp", title: "Hirekit CV", w: 800, h: 450, tags: [] },
    { src: "/assets/thumbnails/nathans-room.webp", title: "Nathan's Room", w: 800, h: 450, tags: ["music", "video", "web"] },
    { src: "/assets/thumbnails/landscapev001.webp", title: "Landscape-v001", w: 800, h: 450, tags: ["video"] },
    { src: "/assets/thumbnails/natenoged.webp", title: "nathannn.com", w: 800, h: 450, tags: ["web"] },
    { src: "/assets/thumbnails/lint.webp", title: "Lintracer demo", w: 1280, h: 720, tags: ["web"] },
    { src: "/assets/thumbnails/dancefloor.webp", title: "Mourning The Dancefloor", w: 800, h: 450, tags: ["video", "writing"] },
    { src: "/assets/thumbnails/blee.webp", title: "Blee's Adventure", w: 800, h: 450, tags: ["video"] },
    { src: "/assets/thumbnails/bloss.webp", title: "BLOSS", w: 800, h: 450, tags: ["music"] },
    { src: "/assets/thumbnails/places-of-rest.webp", title: "Places of Rest", w: 800, h: 450, tags: ["music", "writing"] },
  ],
  // [ filename, width, height ]
  sketchbook: [
    ["0.webp", 800, 800],
    ["000018 copy.webp", 800, 1194],
    ["000020 copy.webp", 800, 1194],
    ["000032 copy.webp", 800, 1194],
    ["002.webp", 800, 1071],
    ["003.webp", 800, 1071],
    ["004.webp", 800, 1071],
    ["005.webp", 800, 1071],
    ["1 (2).webp", 800, 1422],
    ["1.webp", 800, 800],
    ["2.webp", 800, 800],
    ["2023-11-20_173527.webp", 800, 1102],
    ["2023-11-20_174905 (2).webp", 800, 1101],
    ["2023-11-20_180653 (2).webp", 800, 1101],
    ["3.webp", 800, 800],
    ["6.webp", 800, 1071],
    ["7.webp", 800, 1071],
    ["7_Friendly Demon.webp", 800, 800],
    ["80_1.webp", 800, 800],
    ["80_2.webp", 800, 800],
    ["80_3.webp", 800, 800],
    ["A5.webp", 800, 1132],
    ["Around.webp", 1080, 1123],
    ["BNOCS copy.webp", 800, 1106],
    ["Castle_v008.webp", 800, 450],
    ["Castle_v011 copy.webp", 800, 450],
    ["Cloud Dragon.webp", 800, 533],
    ["Croxibition.webp", 800, 541],
    ["Daniel_Pianiel.webp", 800, 1071],
    ["DarkmagicAuraCore.webp", 800, 541],
    ["DeadDuck.webp", 800, 450],
    ["Deorsus.webp", 800, 714],
    ["DoBe2.webp", 800, 800],
    ["DoBe3.webp", 800, 800],
    ["Document_2023-11-20_180525.webp", 800, 1101],
    ["E001-1.webp", 800, 1092],
    ["E001-2.webp", 800, 1092],
    ["E001.webp", 800, 1092],
    ["E002.webp", 800, 1071],
    ["E003.webp", 800, 1071],
    ["Eggy Lads.webp", 800, 541],
    ["FACE.webp", 800, 800],
    ["Final_Day.webp", 800, 450],
    ["Final_Night.webp", 800, 450],
    ["FireGroup_2.webp", 800, 874],
    ["Frame 1.webp", 800, 760],
    ["Frame 2.webp", 800, 1084],
    ["Frame 7.webp", 800, 701],
    ["Gronklet copy.webp", 800, 800],
    ["Group 106.webp", 800, 956],
    ["Group 107.webp", 800, 755],
    ["Group 24.webp", 800, 841],
    ["Hair Party.webp", 800, 541],
    ["Handwritten_2023-11-20_173755 (3).webp", 800, 1101],
    ["Handwritten_2023-11-20_180447 (10).webp", 800, 1101],
    ["Handwritten_2023-11-20_180744 (12).webp", 800, 1101],
    ["Huggins-1 copy.webp", 800, 450],
    ["ISO_7010_W024 1.webp", 800, 700],
    ["ITUNES2.webp", 800, 800],
    ["Insta1.webp", 800, 800],
    ["Insta2.webp", 800, 800],
    ["Insta2a.webp", 800, 800],
    ["Insta3.webp", 800, 800],
    ["Invite-1.webp", 800, 1012],
    ["Logos.webp", 800, 485],
    ["Magnet&Star.webp", 800, 483],
    ["NOTO copy2.webp", 800, 800],
    ["NR-Skratch.webp", 800, 1293],
    ["NS.webp", 800, 1259],
    ["Nathans Room Hero copy.webp", 800, 450],
    ["Newtenoged2.webp", 800, 800],
    ["Peeps.webp", 800, 525],
    ["PersonalityQuiz.webp", 800, 354],
    ["PhyllotaxisGalaxis.webp", 800, 450],
    ["Shirt Popup.webp", 800, 659],
    ["Sklob_The Great copy 2.webp", 800, 450],
    ["Skullboy.webp", 800, 1572],
    ["Starjump pillars 4.webp", 800, 450],
    ["Stellus Heretica.webp", 800, 1147],
    ["The Nighthelmets.webp", 800, 541],
    ["The angel ball.webp", 800, 527],
    ["VisitingEbrith-0.webp", 800, 566],
    ["VisitingEbrith-2.webp", 800, 1137],
    ["Ylsador.webp", 800, 1050],
    ["ZIA-1.webp", 800, 1080],
    ["bb.webp", 800, 629],
    ["glassboi_LightLines.webp", 800, 450],
    ["months.webp", 800, 1100],
    ["nate_2.webp", 800, 800],
    ["noto2 copy.webp", 800, 800],
    ["scribblemania-1.webp", 800, 1099],
    ["scribblemania-2.webp", 800, 586],
    ["scribblemania-3.webp", 800, 501],
    ["scribblemania-4.webp", 800, 558],
    ["scribblemania-5.webp", 800, 1327],
    ["untitled.webp", 800, 450],
    ["yeahyougotthatYUMMI.webp", 800, 1731],
  ]
};

(() => {
  const data = window.POPUP_ADS;
  if (!data) return;

  // Desktop only, on two counts.
  // Pointer capability is a property of the device and never changes, so failing
  // it bails out for good - nothing is bound on touch or with a coarse pointer.
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  // Width does change, so it is re-checked every time rather than once: this is
  // the same 768px breakpoint styles.css uses, so the popups exist exactly when
  // the desktop layout does, and a window dragged narrow stops producing them.
  const wideEnough = window.matchMedia('(min-width: 768px)');

  const byTag = tag => data.work.filter(item => item.tags.includes(tag));
  const pools = {
    work: data.work,
    web: byTag('web'),
    video: byTag('video'),
    writing: byTag('writing'),
    music: byTag('music'),
    sketchbook: data.sketchbook.map(([file, w, h]) => ({
      src: data.sketchbookBase + encodeURIComponent(file),
      title: file.replace(/\.webp$/i, ''),
      w: w,
      h: h
    }))
  };

  const WIDTH = 220;      // keep in sync with .popup-ad in styles.css
  const BAR = 29;         // title bar height
  const GAP = 14;         // distance from the cursor
  const EDGE = 12;        // keep this much clear of the viewport edge
  const HOVER_DELAY = 350; // rest on a link this long before it fires
  const CLOSE_GRACE = 120; // bridges the GAP between link and popup

  let current = null;
  let pending = 0;
  let closeTimer = 0;
  const cursor = { clientX: 0, clientY: 0 };

  const pick = key => {
    const pool = pools[key];
    return pool && pool.length ? pool[Math.floor(Math.random() * pool.length)] : null;
  };

  // Every popup is WIDTH wide and as tall as its own source ratio makes it.
  const heightOf = item => Math.round(WIDTH * item.h / item.w) + BAR;

  const close = ad => {
    if (!ad) return;
    if (current === ad) current = null;
    clearTimeout(closeTimer);
    ad.el.classList.add('is-closing');
    ad.el.addEventListener('animationend', () => ad.el.remove(), { once: true });
    setTimeout(() => ad.el.remove(), 400); // in case the animation is suppressed
  };

  // Hangs down and right of the cursor. If that would run it off the right or
  // bottom edge it flips to the other side of the cursor instead of being pushed
  // sideways, so the popup never ends up sitting under the pointer. Heights vary
  // with each image's ratio, so the bottom test uses this popup's own height.
  // The clamp is the backstop that guarantees it is fully on screen.
  const place = (event, height) => {
    const maxX = window.innerWidth - WIDTH - EDGE;
    const maxY = Math.max(EDGE, window.innerHeight - height - EDGE);
    let x = event.clientX + GAP;
    let y = event.clientY + GAP;

    if (x > maxX) x = event.clientX - WIDTH - GAP;
    if (y > maxY) y = event.clientY - height - GAP;

    return {
      x: Math.max(EDGE, Math.min(x, maxX)),
      y: Math.max(EDGE, Math.min(y, maxY))
    };
  };

  // Closing is deferred by a hair rather than done on the spot: leaving the link
  // for the popup means crossing GAP pixels of dead space, and an instant close
  // would kill it mid-journey. Re-entering either the link or the popup cancels.
  const scheduleClose = ad => {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => close(ad), CLOSE_GRACE);
  };

  const holdOpen = () => clearTimeout(closeTimer);

  const show = (item, link) => {
    close(current); // one at a time

    const { x, y } = place(cursor, heightOf(item));
    const el = document.createElement('a');
    el.className = 'popup-ad';
    el.href = link.getAttribute('href');
    // decorative duplicate of a link that is already in the nav, and it only
    // exists while a mouse is hovering - keep it out of the a11y tree entirely
    el.setAttribute('aria-hidden', 'true');
    el.tabIndex = -1;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.innerHTML =
      '<div class="popup-ad-bar">' +
        '<span class="popup-ad-title"></span>' +
        '<span class="popup-ad-close">×</span>' +
      '</div>' +
      '<img alt="" decoding="async">';

    el.querySelector('.popup-ad-title').textContent = item.title;
    const img = el.querySelector('img');
    // reserve the exact box up front so nothing reflows when the file arrives
    img.style.aspectRatio = item.w + ' / ' + item.h;
    img.src = item.src;

    const ad = { el: el, link: link };

    el.querySelector('.popup-ad-close').addEventListener('click', event => {
      event.preventDefault();  // the close box must not navigate
      event.stopPropagation();
      close(ad);
    });
    el.addEventListener('mouseenter', holdOpen);
    el.addEventListener('mouseleave', () => scheduleClose(ad));

    document.body.appendChild(el);
    current = ad;
  };

  const track = event => {
    cursor.clientX = event.clientX;
    cursor.clientY = event.clientY;
  };

  // drop anything on screen if the window is dragged down into the mobile layout
  wideEnough.addEventListener('change', event => {
    if (!event.matches) {
      clearTimeout(pending);
      close(current);
    }
  });

  document.querySelectorAll('[data-popup]').forEach(link => {
    // Nothing fires while you are just crossing the menu. The item is chosen on
    // entry and its image starts downloading immediately, so the hover delay
    // doubles as the fetch window - by the time it opens the file is usually in.
    link.addEventListener('mouseenter', event => {
      if (!wideEnough.matches) return;
      track(event);
      clearTimeout(pending);
      // coming back to the link this popup belongs to keeps it alive; arriving at
      // a different link does not, so the old one still goes away
      if (current && current.link === link) holdOpen();
      const item = pick(link.dataset.popup);
      if (!item) return;
      new Image().src = item.src;
      pending = setTimeout(() => show(item, link), HOVER_DELAY);
    });
    link.addEventListener('mousemove', track, { passive: true });
    link.addEventListener('mouseleave', () => {
      clearTimeout(pending);
      if (current) scheduleClose(current);
    });
  });
})();
