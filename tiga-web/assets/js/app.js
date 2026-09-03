/* =========================================================================
   TIGA — aplicação: formulário, pontuação e ficha
   ========================================================================= */
(() => {
  'use strict';

  const STORAGE = 'tiga-web-v1';
  const FORM_STEPS = [1, 2, 3, 4];
  const SILENCE_IDS = FACETS.filter(f => f.options.some(o => o.silence)).map(f => f.id);
  const RING = 2 * Math.PI * 52;

  const ICONS = {
    clapper: '<path d="M3 9h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/><path d="m3 9 4-6 4 6 4-6 4 6"/>',
    steering: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.5"/><path d="M12 5.5v4M7 14.5l3-2M17 14.5l-3-2"/>',
    cursor: '<path d="M4 4l7 16 2.5-6.5L20 11z"/>',
    chip: '<rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
    box: '<path d="M3 8l9-5 9 5v11l-9 5-9-5z"/><path d="M3 8l9 5 9-5M12 13v11"/>',
    export: '<path d="M12 3v10"/><path d="m8 7 4-4 4 4"/><rect x="4" y="13" width="16" height="8" rx="1"/>',
    server: '<rect x="3" y="4" width="18" height="6" rx="1"/><rect x="3" y="14" width="18" height="6" rx="1"/><path d="M7 7h.01M7 17h.01"/>',
    alert: '<path d="M12 3 2 20h20z"/><path d="M12 9v5"/><path d="M12 17h.01"/>',
    signature: '<path d="M4 19c4-6 7-4 9 0 3-7 6-5 7 0"/><path d="M4 19h16"/>',
    balance: '<path d="M12 3v18"/><path d="M5 8h14"/><path d="M5 8l-3 6h6zM19 8l-3 6h6z"/>',
    people: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6"/><circle cx="17" cy="9" r="2.5"/><path d="M21 20c0-2.8-2.2-5-5-5"/>',
    repeat: '<path d="M4 12a8 8 0 0 1 14-5l2 2"/><path d="M20 4v5h-5"/><path d="M20 12a8 8 0 0 1-14 5l-2-2"/><path d="M4 20v-5h5"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    eyeoff: '<path d="M3 3l18 18"/><path d="M10.6 10.6A3 3 0 0 0 13.4 13.4"/><path d="M7 7C4 9 2 12 2 12s4 7 10 7c1.7 0 3.2-.4 4.6-1.1M17 7.4C19.7 9 22 12 22 12s-1.3 2.3-3.5 4.2"/>',
    pencil: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
    layers: '<path d="M12 3 3 8l9 5 9-5z"/><path d="M3 12l9 5 9-5"/><path d="M3 16l9 5 9-5"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.6 5.6L3 18v3h3l6.1-6.1a4 4 0 0 0 5.6-5.6L16 11z"/>',
    handshake: '<path d="M8 13 4.5 9.5a2 2 0 0 1 0-3L7 4l5 5"/><path d="m16 13 3.5-3.5a2 2 0 0 0 0-3L17 4l-5 5"/><path d="M8 13c2 3 6 3 8 0"/>',
    robot: '<rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 8V5M9 13h.01M15 13h.01M9 17h6"/>',
    text: '<path d="M4 6h16M12 6v13M8 19h8"/>',
    sliders: '<path d="M4 6h16M4 12h10M4 18h13"/><circle cx="14" cy="12" r="2"/><circle cx="17" cy="18" r="2"/>',
    multi: '<rect x="3" y="4" width="8" height="8" rx="1"/><rect x="13" y="12" width="8" height="8" rx="1"/><path d="M14 8h4v4"/>',
    code: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4"/>',
    grain: '<circle cx="7" cy="7" r="1.4"/><circle cx="12" cy="5" r="1.2"/><circle cx="17" cy="8" r="1.4"/><circle cx="6" cy="13" r="1.2"/><circle cx="12" cy="12" r="1.5"/><circle cx="18" cy="14" r="1.2"/><circle cx="9" cy="18" r="1.3"/><circle cx="15" cy="18" r="1.2"/>',
    merge: '<path d="M8 4v6a4 4 0 0 0 4 4 4 4 0 0 0 4-4V4"/><path d="M12 14v6"/>',
    swap: '<path d="M7 7h11l-3-3"/><path d="M17 17H6l3 3"/>',
    dots: '<circle cx="6" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="18" cy="12" r="1.4"/>',
    question: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.3c-.8.4-1.4 1-1.4 2v.2"/><path d="M12 17h.01"/>',
    sail: '<path d="M6 21h12"/><path d="M8 21V5l10 10H8"/>',
    palette: '<path d="M12 3a9 9 0 1 0 0 18h1a2.5 2.5 0 0 0 0-5h-1"/><circle cx="7.5" cy="10" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="14.5" cy="7.5" r="1"/>',
    link: '<path d="M9 14l6-6"/><path d="M8 9H6a4 4 0 0 0 0 8h3"/><path d="M16 15h2a4 4 0 0 0 0-8h-3"/>',
    film: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 5v14M17 5v14M3 10h4M3 14h4M17 10h4M17 14h4"/>',
    image: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="1.5"/><path d="m21 15-5-4-8 8"/>',
    wave: '<path d="M3 12c2-6 3 6 5 0s3 6 5 0 3 6 5 0 3 6 5 0"/>',
    cube: '<path d="M12 3 4 7v10l8 4 8-4V7z"/><path d="M12 13 4 7m8 6 8-6M12 13v10"/>',
    sparkle: '<path d="M12 3v4M12 17v4M4.5 7.5l2.8 2.8M16.7 16.7l2.8 2.8M3 12h4M17 12h4M4.5 16.5l2.8-2.8M16.7 7.3l2.8-2.8"/>',
    desktop: '<rect x="3" y="4" width="18" height="12" rx="1"/><path d="M8 20h8M12 16v4"/>',
    cloud: '<path d="M7 18h11a4 4 0 0 0 0-8 6 6 0 0 0-11.3-1.8A4.5 4.5 0 0 0 7 18z"/>',
    shuffle: '<path d="M16 4h4v4"/><path d="m20 4-6 6"/><path d="M4 20l6-6"/><path d="M16 20h4v-4"/><path d="m20 20-5-5"/><path d="M4 4l5 5"/>',
    flicker: '<path d="M8 3v4M16 3v4M5 14h14M8 21v-4M16 21v-4"/><path d="M9 10h.01M15 10h.01"/>',
    dice: '<rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="15" r="1"/><circle cx="15" cy="9" r="1"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/>',
    stack: '<path d="M4 17h16M4 12h16M4 7h16"/>',
    grid: '<rect x="4" y="4" width="16" height="16"/><path d="M4 12h16M12 4v16"/>',
    coin: '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5c.6-.7 1.5-1 2.5-1s2 .4 2.5 1M9.5 14.5c.6.7 1.5 1 2.5 1s2-.4 2.5-1"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    user: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5"/>',
    doc: '<path d="M7 3h8l5 5v13H7z"/><path d="M15 3v5h5M9 13h6M9 17h6"/>',
    ghost: '<path d="M8 20c1-1.5 2-1.5 4 0s3 1.5 4 0V10a4 4 0 0 0-8 0z"/><path d="M10 10h.01M14 10h.01"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    archive: '<rect x="3" y="4" width="18" height="5" rx="1"/><path d="M5 9v11h14V9M10 13h4"/>',
    half: '<circle cx="12" cy="12" r="9"/><path d="M12 3v18"/>',
    warn: '<path d="M12 3 2 20h20z"/><path d="M12 9v5"/><path d="M12 17h.01"/>'
  };

  const state = {
    lang: 'pt',
    theme: 'system',
    expert: false,
    view: 'home',
    step: 1,
    answers: {},
    projectName: '',
    otherModel: '',
    error: false
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  function t(obj) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[state.lang] || obj.pt || obj.en || '';
  }
  function ui(key) { return t(UI[key]); }
  function icon(name) {
    const d = ICONS[name] || ICONS.dots;
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  }

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (!raw) return;
      const saved = JSON.parse(raw);
      Object.assign(state, {
        lang: saved.lang || 'pt',
        theme: saved.theme || 'system',
        expert: !!saved.expert,
        answers: saved.answers || {},
        projectName: saved.projectName || '',
        otherModel: saved.otherModel || ''
      });
    } catch (_) { /* ignore */ }
  }
  function persist() {
    localStorage.setItem(STORAGE, JSON.stringify({
      lang: state.lang, theme: state.theme, expert: state.expert,
      answers: state.answers, projectName: state.projectName, otherModel: state.otherModel
    }));
  }

  function applyTheme() {
    const root = document.documentElement;
    if (state.theme === 'system') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', state.theme);
    const dark = state.theme === 'dark' || (state.theme === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
    $('#icon-moon').hidden = dark;
    $('#icon-sun').hidden = !dark;
  }

  function applyLang() {
    document.documentElement.lang = state.lang === 'en' ? 'en' : 'pt-BR';
    document.title = state.lang === 'en'
      ? 'TIGA — spec sheet for AI in audiovisual'
      : 'TIGA — ficha de integração da IA no audiovisual';
    $$('[data-i18n]').forEach(el => { el.textContent = ui(el.dataset.i18n); });
    $$('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', ui(el.dataset.i18nAria)); });
    $$('[data-i18n-title]').forEach(el => { el.setAttribute('title', ui(el.dataset.i18nTitle)); });
    $$('.flag-btn').forEach(btn => { btn.setAttribute('aria-pressed', btn.dataset.lang === state.lang ? 'true' : 'false'); });
  }

  function facetsFor(step) { return FACETS.filter(f => f.step === step); }

  function selected(facet) {
    if (facet.multi) return state.answers[facet.id] || [];
    return state.answers[facet.id] || '';
  }
  function isChecked(facet, id) {
    const v = selected(facet);
    return facet.multi ? v.includes(id) : v === id;
  }

  function optionOf(facet, id) { return facet.options.find(o => o.id === id); }

  function setAnswer(facet, id, on) {
    if (facet.multi) {
      let cur = [...(state.answers[facet.id] || [])];
      const opt = optionOf(facet, id);
      if (opt?.exclusive) {
        cur = on ? [id] : [];
      } else {
        cur = cur.filter(x => !optionOf(facet, x)?.exclusive);
        if (on) { if (!cur.includes(id)) cur.push(id); }
        else cur = cur.filter(x => x !== id);
      }
      state.answers[facet.id] = cur;
    } else {
      state.answers[facet.id] = on ? id : '';
    }
    persist();
  }

  function scoreOf(facet, answers) {
    if (facet.multi) {
      const ids = answers[facet.id] || [];
      const vals = ids.map(id => optionOf(facet, id)?.score).filter(v => v != null);
      if (!vals.length) return null;
      return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
    }
    const s = optionOf(facet, answers[facet.id])?.score;
    return s == null ? null : s;
  }

  function scores(answers) {
    const autoF = FACETS.find(f => f.id === 'autonomy');
    const autonomy = scoreOf(autoF, answers) ?? 50;
    const techIds = ['family', 'output', 'infra', 'bottleneck'];
    const techVals = techIds.map(id => scoreOf(FACETS.find(f => f.id === id), answers)).filter(v => v != null);
    const tech = techVals.length ? Math.round(techVals.reduce((a, b) => a + b, 0) / techVals.length) : 50;
    const riskIds = ['authorship', 'bias', 'labor', 'reproducibility', 'perceptibility'];
    const riskVals = riskIds.map(id => scoreOf(FACETS.find(f => f.id === id), answers)).filter(v => v != null);
    const social = riskVals.length ? Math.round(riskVals.reduce((a, b) => a + b, 0) / riskVals.length) : 50;
    let silence = 0;
    for (const id of SILENCE_IDS) {
      const f = FACETS.find(x => x.id === id);
      const val = answers[id];
      const ids = Array.isArray(val) ? val : (val ? [val] : []);
      if (ids.some(i => optionOf(f, i)?.silence)) silence += 1;
    }
    return { autonomy, tech, social, silence };
  }

  function tone(n) {
    if (n < 34) return 'good';
    if (n < 67) return 'warn';
    return 'bad';
  }
  function badgeOf(s) {
    if (s.social < 35 && s.autonomy < 50) return 'low';
    if (s.social >= 62 || s.autonomy >= 90) return 'high';
    return 'mid';
  }
  function levelLabel(lv) {
    return { ok: ui('levelOk'), warn: ui('levelWarn'), alert: ui('levelAlert') }[lv] || lv;
  }
  function formalValue(facet, answers) {
    const v = answers[facet.id];
    const ids = facet.multi ? (v || []) : (v ? [v] : []);
    if (!ids.length) return ui('notAnswered');
    return ids.map(id => {
      const o = optionOf(facet, id);
      return o ? t(o.formal || o.label) : id;
    }).join('; ') + (facet.id === 'baseModel' && state.otherModel ? `; ${state.otherModel}` : '');
  }

  /* --- Home extras ----------------------------------------------------- */
  function renderPipeline() {
    $('#pipeline-strip').innerHTML = HOW_STEPS.map(s => `
      <div class="pipeline-cell">
        <span class="num">${s.n}</span>
        <span class="lbl">${t(s.title)}</span>
        <span class="sub">${t(STEPS[Number(s.n) - 1].label)}</span>
      </div>`).join('');
  }
  function renderHow() {
    $('#how-grid').innerHTML = HOW_STEPS.map(s => `
      <article class="how-cell">
        <span class="n">${s.n}</span>
        <h3>${t(s.title)}</h3>
        <p>${t(s.body)}</p>
      </article>`).join('');
  }
  function renderSample() {
    const c = CASES.find(x => x.id === 'magicvfx') || CASES[0];
    const s = scores(c.answers);
    const auto = FACETS.find(f => f.id === 'autonomy');
    const opt = optionOf(auto, c.answers.autonomy);
    $('#sample-card').innerHTML = `
      <div class="sample-head">
        <div>
          <p class="eyebrow">${ui('sampleLabel')}</p>
          <p class="sample-name">${c.name}</p>
          <p class="sample-note">${t(c.note)}</p>
        </div>
      </div>
      <div class="sample-body">
        <div class="mini-gauges">
          <div class="mini-g"><div class="n" data-tone="${tone(s.autonomy)}">${s.autonomy}</div><div class="l">${ui('gaugeAutonomy')}</div></div>
          <div class="mini-g"><div class="n" data-tone="${tone(s.tech)}">${s.tech}</div><div class="l">${ui('gaugeTech')}</div></div>
          <div class="mini-g"><div class="n" data-tone="${tone(s.social)}">${s.social}</div><div class="l">${ui('gaugeSocial')}</div></div>
        </div>
        <div class="sample-chips">
          <span class="tag">${opt ? t(opt.label) : ''}</span>
          <span class="tag">${t(DIMS.technical)}</span>
          <span class="tag">${t(DIMS.risk)}</span>
        </div>
        <p class="sample-note">${ui('sampleNote')}</p>
      </div>
      <div class="sample-foot">
        <button type="button" class="btn btn-ghost" data-example="${c.id}">${ui('openCase')}</button>
      </div>`;
  }
  function renderGloss() {
    $('#gloss-list').innerHTML = GLOSSARY.map(g => `
      <div class="gloss-item"><dt>${t(g.term)}</dt><dd>${t(g.def)}</dd></div>`).join('');
  }
  function renderAbout() {
    $('#about-root').innerHTML = `
      <p class="lead">${t(ABOUT.lead)}</p>
      <p>${t(ABOUT.p1)}</p>
      <p>${t(ABOUT.p2)}</p>
      <p>${t(ABOUT.p3)}</p>
      <p class="about-credit">${t(ABOUT.author)}</p>
      <p><button type="button" class="btn btn-ghost" data-go="home">${ui('backHome')}</button></p>`;
  }

  /* --- Form ------------------------------------------------------------ */
  function renderStepper() {
    $('#stepper').innerHTML = STEPS.map(s => {
      const st = s.n < state.step ? 'done' : s.n === state.step ? 'current' : 'todo';
      return `<li class="stepper-item" data-state="${st}">
        <div class="stepper-bar"></div>
        <div class="stepper-label"><span class="stepper-num">${s.n}</span><span class="stepper-text">${t(s.label)}</span></div>
      </li>`;
    }).join('');
    $('#step-count').textContent = ui('stepOf').replace('{n}', state.step).replace('{total}', '5');
  }

  function optionCard(facet, opt) {
    const type = facet.multi ? 'checkbox' : 'radio';
    const checked = isChecked(facet, opt.id) ? 'checked' : '';
    const corpus = opt.corpus != null
      ? `<span class="tag" title="${ui('corpusChipT')}">${ui('corpusChip').replace('{n}', opt.corpus)}</span>` : '';
    const formal = opt.formal
      ? `<span class="tag expert-only">${ui('formalLabel')}: ${t(opt.formal)}</span>` : '';
    return `<label class="opt" data-multi="${facet.multi}">
      <input class="opt-input" type="${type}" name="${facet.id}" value="${opt.id}" ${checked}>
      <span class="opt-inner">
        <span class="opt-mark">${icon('check')}</span>
        <span class="opt-glyph">${icon(opt.icon)}</span>
        <span>
          <span class="opt-label">${t(opt.label)}</span>
          <span class="opt-desc">${t(opt.desc)}</span>
          <span class="opt-foot">${corpus}${formal}</span>
        </span>
      </span>
    </label>`;
  }

  function questionBlock(facet) {
    const cols = facet.options.length > 3 ? 2 : 1;
    const hintBits = [
      facet.required ? '' : `<span class="tag">${ui('optional')}</span>`,
      facet.multi ? `<span class="tag">${ui('multiHint')}</span>` : `<span class="tag">${ui('singleHint')}</span>`,
      facet.options.some(o => o.id === 'unknown' || o.silence) ? `<span class="tag">${ui('dontKnowOk')}</span>` : ''
    ].join('');
    const other = facet.allowOther ? `
      <div class="other-field">
        <label class="field-label" for="other-${facet.id}">${ui('otherLabel')}</label>
        <input class="text-input" id="other-${facet.id}" data-other="${facet.id}" value="${escapeAttr(state.otherModel)}" placeholder="${ui('otherPh')}">
      </div>` : '';
    return `<fieldset class="qblock">
      <legend class="sr-only">${t(facet.question)}</legend>
      <div class="q-head">
        <span class="q-icon">${icon(facet.icon)}</span>
        <div>
          <p class="dim-chip">${t(DIMS[facet.dim === 'operational' ? 'operational' : facet.dim === 'technical' ? 'technical' : 'risk'])}</p>
          <h2 class="q-title">${t(facet.question)}</h2>
          <p class="q-hint">${t(facet.hint)}</p>
          <p class="q-hint expert-only">${t(facet.help)}</p>
          <div class="q-meta">
            ${hintBits}
            <span class="tag tag-sq expert-only">${ui('sqLabel')} ${facet.sq}</span>
            <span class="tag expert-only">${ui('formalLabel')}: ${t(facet.formalName)}</span>
          </div>
        </div>
      </div>
      <div class="opts" data-cols="${cols}">
        ${facet.options.map(o => optionCard(facet, o)).join('')}
        ${other}
      </div>
    </fieldset>`;
  }

  function renderForm() {
    renderStepper();
    const facets = facetsFor(state.step);
    const titles = {
      1: { pt: 'Em que momento a IA entra', en: 'When AI comes in' },
      2: { pt: 'Quem dá a palavra final', en: 'Who has the final say' },
      3: { pt: 'O que a ferramenta exige', en: 'What the tool demands' },
      4: { pt: 'O que isso custa para as pessoas', en: 'What that costs people' }
    };
    const leads = {
      1: { pt: 'Comece pela etapa da produção. É o que delimita o objeto da ficha.', en: 'Start with the production stage. That delimits the object of the sheet.' },
      2: { pt: 'Esta é a pergunta de maior poder discriminante da taxonomia.', en: 'This is the taxonomy’s most discriminating question.' },
      3: { pt: 'Tecnologia, modelo, saída, infraestrutura e o gargalo do dia a dia.', en: 'Technology, model, output, infrastructure and the everyday bottleneck.' },
      4: { pt: 'Autoria, viés, trabalho, reprodutibilidade e sinalização ao público.', en: 'Authorship, bias, labour, reproducibility and disclosure to the audience.' }
    };
    const nameField = state.step === 1 ? `
      <div class="qblock">
        <label class="field-label" for="project-name">${ui('projectName')} <span class="tag">${ui('projectOptional')}</span></label>
        <input class="text-input" id="project-name" value="${escapeAttr(state.projectName)}" placeholder="${ui('projectPh')}" autocomplete="off">
      </div>` : '';
    const last = state.step === 4;
    $('#form-root').innerHTML = `
      <header class="step-head">
        <p class="eyebrow">${ui('formTitle')}</p>
        <h1 class="step-title">${t(titles[state.step])}</h1>
        <p class="step-lead">${t(leads[state.step])}</p>
      </header>
      <div class="form-error" id="form-error" hidden>${icon('alert')}<span>${ui('required')}</span></div>
      ${nameField}
      ${facets.map(questionBlock).join('')}
      <div class="form-nav">
        <button type="button" class="btn btn-ghost" data-back ${state.step === 1 ? 'disabled' : ''}>${ui('back')}</button>
        <span class="spacer"></span>
        <button type="button" class="btn btn-primary" data-next>${last ? ui('seeResult') : ui('next')}</button>
      </div>`;
    if (state.error) {
      const err = $('#form-error');
      err.hidden = false;
      err.scrollIntoView({ block: 'nearest' });
    }
  }

  function stepValid() {
    return facetsFor(state.step).every(f => {
      if (!f.required) return true;
      const v = selected(f);
      return f.multi ? v.length > 0 : !!v;
    });
  }

  /* --- Result ---------------------------------------------------------- */
  function gaugeSVG(value) {
    const off = RING - RING * Math.max(0, Math.min(100, value)) / 100;
    return `<div class="gauge-ring">
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle class="track" cx="60" cy="60" r="52"></circle>
        <circle class="fill" cx="60" cy="60" r="52" stroke-dasharray="${RING.toFixed(2)}" stroke-dashoffset="${off.toFixed(2)}"></circle>
      </svg>
      <div class="gauge-num">${value}<small>${ui('costOf')}</small></div>
    </div>`;
  }

  function renderMap(s) {
    const W = 420, H = 300, p = { l: 48, r: 18, t: 18, b: 42 };
    const x = v => p.l + (v / 100) * (W - p.l - p.r);
    const y = v => H - p.b - (v / 100) * (H - p.t - p.b);
    const dots = CASES.map(c => {
      const cs = scores(c.answers);
      return `<circle class="dot-case" cx="${x(cs.autonomy)}" cy="${y(cs.social)}" r="6">
        <title>${c.name}</title></circle>
        <text class="lbl" x="${x(cs.autonomy) + 8}" y="${y(cs.social) - 8}">${c.name}</text>`;
    }).join('');
    return `<div class="map-wrap">
      <svg class="map-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${ui('mapTitle')}">
        <line class="grid" x1="${x(50)}" y1="${y(0)}" x2="${x(50)}" y2="${y(100)}"/>
        <line class="grid" x1="${x(0)}" y1="${y(50)}" x2="${x(100)}" y2="${y(50)}"/>
        <line class="axis" x1="${p.l}" y1="${H - p.b}" x2="${W - p.r}" y2="${H - p.b}"/>
        <line class="axis" x1="${p.l}" y1="${H - p.b}" x2="${p.l}" y2="${p.t}"/>
        <text class="lbl" x="${W / 2}" y="${H - 8}">${ui('mapAxisX')}</text>
        <text class="lbl" x="14" y="${H / 2}" transform="rotate(-90 14 ${H / 2})">${ui('mapAxisY')}</text>
        <text class="lbl" x="${x(2)}" y="${H - p.b + 16}">${ui('mapLow')}</text>
        <text class="lbl" x="${x(88)}" y="${H - p.b + 16}">${ui('mapHigh')}</text>
        ${dots}
        <circle class="dot-you" cx="${x(s.autonomy)}" cy="${y(s.social)}" r="8">
          <title>${ui('mapYou')}</title></circle>
        <text class="lbl" x="${x(s.autonomy) + 10}" y="${y(s.social) + 4}" fill="currentColor">${ui('mapYou')}</text>
      </svg>
      <div class="map-legend">
        <span><i class="you"></i>${ui('mapYou')}</span>
        <span><i class="case"></i>${ui('compareTitle')}</span>
      </div>
    </div>`;
  }

  function sheetHTML(answers) {
    const groups = [
      { key: 'operational', ids: FACETS.filter(f => f.dim === 'operational') },
      { key: 'technical', ids: FACETS.filter(f => f.dim === 'technical') },
      { key: 'risk', ids: FACETS.filter(f => f.dim === 'risk') }
    ];
    return `<div class="sheet">${groups.map(g => `
      <div class="sheet-dim">
        <h3>${ui(g.key === 'operational' ? 'dimOp' : g.key === 'technical' ? 'dimTe' : 'dimRi')}</h3>
        ${g.ids.map(f => `<div class="sheet-row"><span class="sheet-k">${t(f.formalName)}</span><span class="sheet-v">${formalValue(f, answers)}</span></div>`).join('')}
      </div>`).join('')}</div>`;
  }

  function sheetText(answers, s) {
    const lines = [
      `TIGA — ${ui('resultEyebrow')}`,
      state.projectName ? `${ui('projectName')}: ${state.projectName}` : '',
      `${ui('gaugeAutonomy')}: ${s.autonomy}/100`,
      `${ui('gaugeTech')}: ${s.tech}/100`,
      `${ui('gaugeSocial')}: ${s.social}/100`,
      ''
    ];
    for (const f of FACETS) lines.push(`${t(f.formalName)}: ${formalValue(f, answers)}`);
    return lines.filter(Boolean).join('\n');
  }

  function renderResult(answers) {
    const s = scores(answers);
    const badge = badgeOf(s);
    const name = state.projectName;
    const verdicts = VERDICTS.map(v => {
      const lv = v.level(answers);
      return `<article class="verdict" data-level="${lv}">
        <div class="verdict-top">
          <span class="verdict-ico">${icon(v.icon)}</span>
          <h3>${t(v.title)}</h3>
          <span class="level-pill">${levelLabel(lv)}</span>
        </div>
        <p class="verdict-body">${t(v.body[lv])}</p>
        <div class="verdict-action"><strong>${ui('actionLabel')}</strong>${t(v.action[lv])}</div>
      </article>`;
    }).join('');
    const recs = RULES.filter(r => r.when(answers, s));
    const recHTML = recs.length
      ? recs.map(r => `<article class="rec" data-tone="${r.tone}"><h3>${t(r.title)}</h3><p>${t(r.body)}</p></article>`).join('')
      : `<p class="rec-empty">${ui('recEmpty')}</p>`;
    const cases = CASES.map(c => {
      const cs = scores(c.answers);
      const auto = optionOf(FACETS.find(f => f.id === 'autonomy'), c.answers.autonomy);
      return `<article class="case-card">
        <h3>${c.name}</h3>
        <p class="note">${t(c.note)}</p>
        <div class="case-meta">
          <span class="tag">${auto ? t(auto.label) : ''}</span>
          <span class="tag">${ui('gaugeSocial')} ${cs.social}</span>
        </div>
        <button type="button" class="btn btn-quiet" data-example="${c.id}">${ui('openCase')}</button>
      </article>`;
    }).join('');

    $('#result-root').innerHTML = `
      <header class="result-head">
        <p class="eyebrow">${ui('resultEyebrow')}</p>
        <h1 class="result-title">${ui('resultTitle')}</h1>
        ${name ? `<p class="project-kicker">${escapeHtml(name)}</p>` : ''}
        <div class="badge" data-level="${badge}">
          <span class="badge-name">${ui(badge === 'low' ? 'badgeLow' : badge === 'high' ? 'badgeHigh' : 'badgeMid')}</span>
          <span class="badge-desc">${ui(badge === 'low' ? 'badgeLowD' : badge === 'high' ? 'badgeHighD' : 'badgeMidD')}</span>
        </div>
      </header>

      <div class="gauges">
        <article class="gauge" data-tone="${tone(s.autonomy)}">
          ${gaugeSVG(s.autonomy)}
          <h3>${ui('gaugeAutonomy')}</h3>
          <p>${ui('gaugeAutoHelp')}</p>
        </article>
        <article class="gauge" data-tone="${tone(s.tech)}">
          ${gaugeSVG(s.tech)}
          <h3>${ui('gaugeTech')}</h3>
          <p>${ui('gaugeTechHelp')}</p>
        </article>
        <article class="gauge" data-tone="${tone(s.social)}">
          ${gaugeSVG(s.social)}
          <h3>${ui('costLabel')}</h3>
          <p>${ui('gaugeSocHelp')}</p>
        </article>
      </div>
      <p class="caveat">${ui('costCaveat')}</p>

      <div class="silence-box" data-n="${s.silence}">
        <div class="silence-n">${s.silence}</div>
        <div>
          <h3>${ui('silenceTitle')}</h3>
          <p>${s.silence ? ui('silenceOf').replace('{n}', s.silence).replace('{total}', SILENCE_IDS.length) : ui('silenceNone')} ${ui('silenceHelp')}</p>
        </div>
      </div>

      <section class="result-block">
        <h2>${ui('verdictTitle')}</h2>
        <p class="lead">${ui('verdictLead')}</p>
        <div class="verdicts">${verdicts}</div>
      </section>

      <section class="result-block">
        <h2>${ui('recTitle')}</h2>
        <div class="recs">${recHTML}</div>
      </section>

      <section class="result-block">
        <h2>${ui('mapTitle')}</h2>
        <p class="lead">${ui('mapLead')}</p>
        ${renderMap(s)}
      </section>

      <section class="result-block">
        <h2>${ui('compareTitle')}</h2>
        <p class="lead">${ui('compareLead')}</p>
        <div class="compare">
          <div class="you-strip"><strong>${ui('youVs')}</strong>
            <span class="tag">${ui('gaugeAutonomy')} ${s.autonomy}</span>
            <span class="tag">${ui('gaugeTech')} ${s.tech}</span>
            <span class="tag">${ui('gaugeSocial')} ${s.social}</span>
          </div>
          ${cases}
        </div>
      </section>

      <section class="result-block">
        <h2>${ui('sheetTitle')}</h2>
        <p class="lead">${ui('sheetLead')}</p>
        ${sheetHTML(answers)}
        <div class="sheet-actions">
          <button type="button" class="btn btn-primary" data-copy>${ui('copySheet')}</button>
          <button type="button" class="btn btn-ghost" data-print>${ui('printSheet')}</button>
          <button type="button" class="btn btn-ghost" data-edit>${ui('edit')}</button>
          <button type="button" class="btn btn-quiet" data-restart>${ui('restart')}</button>
        </div>
      </section>`;
  }

  /* --- Navigation ------------------------------------------------------ */
  function showView(name, hash) {
    state.view = name;
    state.error = false;
    $$('.view').forEach(v => { v.hidden = v.id !== `view-${name}`; });
    $$('.header-nav button').forEach(b => {
      const on = b.dataset.go === name && (!b.dataset.hash || b.dataset.hash === hash);
      if (on) b.setAttribute('aria-current', 'page');
      else b.removeAttribute('aria-current');
    });
    if (name === 'form') renderForm();
    if (name === 'result') renderResult(state.answers);
    if (name === 'glossary') renderGloss();
    if (name === 'about') renderAbout();
    if (name === 'home') { renderPipeline(); renderHow(); renderSample(); }
    const target = hash ? document.getElementById(hash) : $('#main');
    (target || $('#main')).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function loadCase(id) {
    const c = CASES.find(x => x.id === id);
    if (!c) return;
    state.answers = { ...c.answers };
    state.projectName = c.name;
    state.otherModel = '';
    persist();
    showView('result');
  }

  function restart() {
    if (!confirm(ui('restartConfirm'))) return;
    state.answers = {};
    state.projectName = '';
    state.otherModel = '';
    state.step = 1;
    persist();
    showView('form');
  }

  async function copySheet() {
    const s = scores(state.answers);
    const text = sheetText(state.answers, s);
    try {
      await navigator.clipboard.writeText(text);
      const btn = $('[data-copy]');
      if (btn) { btn.textContent = ui('copied'); setTimeout(() => { btn.textContent = ui('copySheet'); }, 1800); }
    } catch (_) {
      alert(ui('copyFail'));
    }
  }

  function bind() {
    $('#expert-toggle').checked = state.expert;
    document.documentElement.dataset.expert = state.expert ? 'on' : 'off';

    document.addEventListener('click', e => {
      const go = e.target.closest('[data-go]');
      if (go) {
        showView(go.dataset.go, go.dataset.hash);
        return;
      }
      const ex = e.target.closest('[data-example]');
      if (ex) { loadCase(ex.dataset.example); return; }
      const langBtn = e.target.closest('[data-lang]');
      if (langBtn) {
        state.lang = langBtn.dataset.lang;
        persist();
        refresh();
        return;
      }
      if (e.target.closest('#theme-toggle')) {
        const darkNow = document.documentElement.getAttribute('data-theme') === 'dark'
          || (!document.documentElement.getAttribute('data-theme') && matchMedia('(prefers-color-scheme: dark)').matches);
        state.theme = darkNow ? 'light' : 'dark';
        persist();
        applyTheme();
        return;
      }
      if (e.target.closest('[data-next]')) {
        if (!stepValid()) { state.error = true; renderForm(); return; }
        state.error = false;
        if (state.step < 4) { state.step += 1; renderForm(); $('#form-root').scrollIntoView({ block: 'start' }); }
        else { state.step = 5; showView('result'); }
        return;
      }
      if (e.target.closest('[data-back]')) {
        if (state.step > 1) { state.step -= 1; state.error = false; renderForm(); }
        else showView('home');
        return;
      }
      if (e.target.closest('[data-edit]')) { state.step = 1; showView('form'); return; }
      if (e.target.closest('[data-restart]')) { restart(); return; }
      if (e.target.closest('[data-copy]')) { copySheet(); return; }
      if (e.target.closest('[data-print]')) { window.print(); return; }
    });

    document.addEventListener('change', e => {
      if (e.target.id === 'expert-toggle') {
        state.expert = e.target.checked;
        document.documentElement.dataset.expert = state.expert ? 'on' : 'off';
        persist();
        return;
      }
      const input = e.target.closest('.opt-input');
      if (input) {
        const facet = FACETS.find(f => f.id === input.name);
        if (!facet) return;
        setAnswer(facet, input.value, input.checked);
        if (facet.multi && (optionOf(facet, input.value)?.exclusive || facet.options.some(o => o.exclusive))) {
          renderForm();
        }
        state.error = false;
        const err = $('#form-error');
        if (err) err.hidden = true;
      }
    });

    document.addEventListener('input', e => {
      if (e.target.id === 'project-name') {
        state.projectName = e.target.value;
        persist();
      }
      if (e.target.dataset.other) {
        state.otherModel = e.target.value;
        persist();
      }
    });

    matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (state.theme === 'system') applyTheme();
    });
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  }
  function escapeAttr(str) { return escapeHtml(str); }

  function refresh() {
    applyLang();
    applyTheme();
    if (state.view === 'home') { renderPipeline(); renderHow(); renderSample(); }
    else if (state.view === 'form') renderForm();
    else if (state.view === 'result') renderResult(state.answers);
    else if (state.view === 'glossary') renderGloss();
    else if (state.view === 'about') renderAbout();
  }

  load();
  bind();
  applyTheme();
  applyLang();
  showView('home');
})();
