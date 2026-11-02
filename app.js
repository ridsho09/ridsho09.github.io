'use strict';

const projects = [
  {
    id:'retail', title:'Retail & E-commerce Performance', categories:['data'], category:'Data Analytics', status:'Completed analysis', tools:['Excel','Power Query','PivotTables'], image:'retail-dashboard',
    summary:'From inconsistent order records to a clear, interactive view of delivered sales and data quality.',
    intro:'A retail portfolio analysis built to answer a practical question: what do the delivered orders tell us about products, channels and customer experience?',
    problem:'The source records needed cleaning and consistent definitions before they could support meaningful reporting. Missing ratings, duplicate records and date exceptions required explicit handling.',
    contribution:['Preserved the original data and prepared a separate working copy.','Removed nine duplicate records, leaving 600 unique orders.','Standardised fields, calculated order values and documented exceptions while preserving missing ratings.','Built PivotTables, charts, slicers and an interactive Excel dashboard.'],
    findings:'The delivered subset contains 125 orders and 448 units, with delivered order value of ₦179,339,382.51 and an average of ₦1,434,715.06 per delivered order. The average submitted delivered rating is 3.02/5; rating coverage is 68.80%.',
    note:'Delivered order value is not verified cash collected, recognised revenue or profit. One unusually large order affects product rankings, and date-provenance exceptions limit trend interpretation.',
    evidence:[['retail-dashboard','Interactive Excel dashboard · static preview']],
    links:[['View GitHub repository','https://github.com/ridsho09/retail-ecommerce-excel-analysis']]
  },
  {
    id:'pizza', title:'Plato Pizza Sales · 2015', categories:['data'], category:'Data Analytics', status:'Reporting project', tools:['Power BI','Power Query','DAX'], image:'pizza-overview',
    summary:'Sales performance, product rankings and trading patterns across a full year of pizza orders.',
    intro:'A three-page Power BI report exploring sales performance, product mix and time patterns in the 2015 Plato Pizza dataset.',
    problem:'Bring order and product tables together and make headline measures and ranking cards consistent with the underlying records and active filters.',
    contribution:['Prepared related order, order-detail, pizza and pizza-type tables.','Developed sales, order, quantity and average order measures in DAX.','Checked best-seller rankings against sorted verification tables.','Built Overview, Sales Detail and Sales Trends pages with category and month slicers.'],
    findings:'The full year shows approximately $815.11K in sales, 21,350 orders, 49,574 pizzas and $38.18 average order value. Thai Chicken leads sales; Classic Deluxe leads quantity. Friday has the highest aggregate weekday sales, Q2 leads the quarters, and the 12–16 afternoon bucket has the highest aggregate bucket sales.',
    note:'Time buckets have unequal durations, so bucket totals do not identify the busiest single hour. Under category filters, Sales per Matching Order divides category sales by matching orders; it is not full-basket AOV. The supplied refreshed PBIX has not been recalculated for this website.',
    evidence:[['pizza-overview','Overview · full-year ranking and KPI preview'],['pizza-detail','Sales Detail · day, hour and quarter'],['pizza-trends','Sales Trends · category and time patterns']],
    links:[['View project repository','https://github.com/ridsho09/Ridsho-Plato-Pizza-Sales-Summary']]
  },
  {
    id:'sql', title:'E-commerce Database & Sales Reporting', categories:['data'], category:'Data Analytics', status:'Sample-data project', tools:['MySQL','MySQL Workbench','SQL'], image:'sql-erd',
    summary:'Five related tables, a clear data model and SQL queries for customers, orders and inventory.',
    intro:'An Amazon-style practice project combining relational database design with basic customer, stock and completed-order reporting.',
    problem:'Organise e-commerce records in a reusable relational structure and answer everyday reporting questions without disconnected tables.',
    contribution:['Designed Customers, Products, Orders, OrderDetails and Payments tables.','Defined primary keys and foreign-key relationships.','Inserted sample records and wrote joins, aggregates, ranking and low-stock queries.','Documented the model in an entity relationship diagram.'],
    findings:'The August 2025 sample contains completed-order value of 24,690, with currency unspecified. Adam Smith leads all-status customer order value at 8,150. Low-stock queries select products with fewer than 10 units.',
    note:'Only one sample month is available. Customer ranking includes all order statuses. This is an Amazon-style learning exercise, with no claim of employment by or delivery for Amazon.',
    evidence:[['sql-erd','Database entity relationship diagram']],
    links:[['View SQL & documentation','https://github.com/ridsho09/Amazon-ecommerce-sql-database']]
  },
  {
    id:'cdurf', title:'CDURF Fashion House · Digital Operations', categories:['business'], category:'Business Analysis', status:'Requirements documented', tools:['Requirements workbook','Acceptance criteria'], visual:'requirements',
    summary:'Translating manual fashion-house operations into structured business and system requirements.',
    intro:'Requirements documentation for a move toward centrally managed customer, order, finance and collaboration workflows. My project role was Intern Business Analyst.',
    problem:'Manual processes made customer information, orders and operational visibility difficult to coordinate. The business needed a structured description of the proposed digital operations.',
    contribution:['Worked on business, stakeholder, functional and non-functional requirements in a structured workbook.','Documented priorities, related requirement identifiers and acceptance criteria.','Covered customer profiles and measurements, order status, invoicing, financial visibility and collaboration.','Included catalogues, administration, rewards and registration in the proposed scope.'],
    findings:'The workbook makes the proposed capabilities concrete: maintain customer profiles, monitor an order from booking to delivery, generate invoices and coordinate team responsibilities. It supports further stakeholder review and implementation planning.',
    note:'The deliverable is requirements documentation. Production delivery, client sign-off, complete traceability and completed testing are not established. Uptime and response-time values in the workbook are requirements, not achieved results.',
    table:{headers:['Area','Documented requirement','Priority'],rows:[['Customer management','Maintain profiles, measurements, contacts and preferences.','High'],['Order management','Track status from booking through delivery.','High'],['Invoicing','Generate and send professional invoices.','Medium'],['Team collaboration','Assign roles and coordinate work.','High']]},
    evidenceText:'Public summary transcribed from the supplied CDUFF BRD.xlsx workbook. The confirmed public project name is CDURF Fashion House. Template examples are excluded from the scope summary.',links:[]
  },
  {
    id:'a4', title:'A4 Homes & Agro · Discovery & Planning', categories:['business'], category:'Business Analysis', status:'Discovery & proposal', tools:['Stakeholder discovery','Process review','KPI planning'], visual:'discovery',
    summary:'Website discovery and a proposed business diagnostic for a real estate and agro company.',
    intro:'Two related planning workstreams within one consulting engagement: understanding a proposed website and structuring a business diagnostic.',
    problem:'Before designing a website or recommending operational changes, the business needed a clear view of its information, responsibilities, processes and desired outcomes.',
    contribution:['Prepared a website information-collection checklist covering company identity, properties, agro projects, media and enquiries.','Included inventory fields, discovery questions, permissions, integrations, reporting and approval responsibilities.','Structured a proposed diagnostic around stakeholder discovery, observation, document review, gap analysis and root causes.','Outlined a findings report and improvement roadmap with sales-process and KPI recommendations.'],
    findings:'The prepared checklist provides a structured basis for collecting and reviewing website content. The diagnostic proposal defines a path from discovery to prioritised recommendations; it does not establish that the full diagnostic or implementation was delivered.',
    note:'Deliverable status: checklist and proposal prepared. Completed client responses and a final approved website specification are not established. Commercial terms, fees and private client information are excluded.',
    table:{headers:['Workstream','Prepared output','Next validation step'],rows:[['Website discovery','Content, inventory and requirements checklist.','Collect responses and confirm scope.'],['Business diagnostic','Discovery and assessment proposal.','Validate findings before recommendations.'],['Performance reporting','Proposed lead, conversion and channel KPIs.','Agree definitions and available data.']]},
    evidenceText:'Selected public summary of the supplied Website Discovery & Requirements Checklist and Business Diagnostic Engagement Proposal.',links:[]
  },
  {
    id:'voice', title:'Mama Tee’s Kitchen · AI Voice Assistant', categories:['automation'], category:'AI & Automation', status:'Archived prototype', tools:['Voice AI','n8n','Webhooks','Google Sheets'], visual:'voice',
    summary:'A restaurant receptionist prototype for menu questions, order capture and reservations.',
    intro:'Exploring how a conversational assistant could capture restaurant enquiries and pass structured information into an operational workflow.',
    problem:'Restaurant enquiries combine menu questions, delivery information, orders and reservations. The prototype investigated a conversational entry point and structured follow-up records.',
    contribution:['Configured conversational-agent versions for restaurant enquiries.','Developed webhook-based n8n workflows and routed request data into Google Sheets.','Explored reservation logging and Calendar integration.','Tested voice-agent configurations and explored a Twilio phone connection.'],
    findings:'Recorded tests, configuration screens and populated logs document the prototype work. The focus was conversation design, field mapping and connecting voice requests to downstream records.',
    note:'Archived prototype; current agent access is unavailable. ElevenLabs and Vapi appear across different versions, rather than a proven single chain. The evidence does not establish reliable end-to-end voice-to-calendar operation.',
    evidenceText:'A recorded test is available through the owner-supplied Loom link. This is a historical demonstration, not a live phone agent.',
    links:[['Watch recorded demo','https://www.loom.com/share/34ff9548b4814a33a471ff7d1a6186d8']]
  },
  {
    id:'bizintel', title:'BizIntel AI · SME Platform MVP', categories:['business','automation'], category:'Business Analysis + AI & Automation', status:'In development', tools:['Lovable','Supabase','Data modelling'], visual:'bizintel',
    summary:'Defining an SME platform around organised business records, customers and future reporting.',
    intro:'An early application foundation for small-business records, combining business scoping with a Lovable frontend and external Supabase architecture.',
    problem:'Small businesses need organised customer and business information as a foundation for reporting and coordinated follow-up.',
    contribution:['Scoped core entities for businesses, members, plans, subscriptions, payments and customers.','Considered customer information, order capture, dashboards and lead follow-up in the product scope.','Established foundational application and database structures.','Selected an external Supabase architecture for continued development.'],
    findings:'The work establishes a product scope and foundational structures. It connects the business-analysis questions—what records and journeys are needed—with an early application implementation.',
    note:'MVP in development; workstream paused. Public availability is unverified. Live payment processing, production customers, completed AI features and efficiency gains are not claimed.',
    evidenceText:'The case study documents the supplied scope and development status. A tested public preview has not been supplied.',links:[]
  },
  {
    id:'verify', title:'InsightSphere Verify · Certificate Platform', categories:['business','automation'], category:'Business Analysis + AI & Automation', status:'In development', tools:['Lovable','Supabase','PostgreSQL','RLS'], visual:'verify',
    summary:'Learner and certificate records, admin journeys and a foundation for public verification.',
    intro:'A certificate-platform development project for InsightSphere programmes, spanning requirements, learner/admin journeys, database structures and certificate presentation.',
    problem:'Organise programme, learner and certificate information and support a future public certificate verification journey.',
    contribution:['Considered students, programmes, cohorts, enrolment, assessments and certificate records.','Mapped learner and admin needs, roles, permissions and audit history.','Built a Lovable frontend and external Supabase data-model foundation with row-level security.','Worked on certificate templates, signatory placement and validation.'],
    findings:'The platform foundation brings business records and permission requirements together. Certificate presentation, issuance, document generation and validation remain active development workstreams.',
    note:'In development; no live certificates are confirmed issued. Planned n8n integration, archived downloads and issuance are not described as production-proven. Internal identifiers and admin access are excluded.',
    evidenceText:'Public summary of the owner-confirmed architecture and development work. A tested public preview has not been supplied.',links:[]
  },
  {
    id:'youtube', title:'YouTube Publishing & Comment Automation', categories:['automation'], category:'AI & Automation', status:'Recorded demonstration', tools:['n8n','Drive','YouTube','AI models'], visual:'youtube',
    summary:'Connected workflows for video publishing, upload logging and AI-assisted comment replies.',
    intro:'An n8n automation demonstration coordinating prepared video assets and a separate comment-response workflow.',
    problem:'Publishing involves repeated metadata, upload, logging and file-management steps. Comment replies add another workflow that needs tracking to avoid handling the same entry repeatedly.',
    contribution:['Designed a publishing flow to retrieve a Drive video, generate metadata and parse output fields.','Connected YouTube upload, logging and file movement steps.','Built a separate flow to retrieve comments and filter previously handled entries.','Included AI-generated replies and response-posting steps.'],
    findings:'The supplied recording shows the workflow, YouTube Studio and upload/log views. The excerpt below focuses on the workflow canvas and illustrates the publishing and comment-response structure.',
    note:'Historical recorded demonstration; current uptime is unverified. No ongoing reliability, engagement-growth or time-saving claim is made. The excerpt is silent and cropped to the workflow canvas.',
    video:'youtube-workflow-demo.mp4',evidenceText:'Workflow excerpt from the owner-supplied youtube automation.mp4 recording.',links:[]
  },
  {
    id:'gmail', title:'Gmail-to-WhatsApp Alerts', categories:['automation'], category:'AI & Automation', status:'Configured & tested', tools:['Zapier','Gmail','SyncMate'], visual:'gmail',
    summary:'A matching email becomes a WhatsApp notification through a connected Zapier workflow.',
    intro:'An email-notification workflow exploring a direct alert channel for matching Gmail messages.',
    problem:'Important messages can be missed when email is not the main channel someone monitors. A targeted notification can bring selected messages into a more visible channel.',
    contribution:['Configured matching-email detection in Gmail.','Added a WhatsApp notification action through SyncMate in Zapier.','Mapped the notification inputs and tested the action.','Published the configured Zap.'],
    findings:'The supplied screenshots show a successful action test and a published Zap, documenting the configuration work completed at the time.',
    note:'Historical test evidence does not independently confirm current recipient delivery or uptime. The case study summarises the workflow without exposing recipient details or private workspace information.',
    evidenceText:'Public summary of the supplied action-test and published-Zap screenshots.',links:[]
  }
];

const credentials = [
  {name:'Data Analytics',issuer:'Page Innovations',image:'analytics-certificate',description:'Course completion certificate'},
  {name:'AI & Automation',issuer:'TS Academy',image:'ai-certificate',description:'Three-month programme · July 2026'},
  {name:'Data Analytics Foundations: Turn Data into Insights',issuer:'IBM · Coursera',image:'ibm-certificate',description:'July 2026',verify:'https://coursera.org/verify/BO7BCVSZ316T'},
  {name:'Getting started with Microsoft Office 365',issuer:'Coursera Project',image:'office-certificate',description:'July 2026',verify:'https://coursera.org/verify/6ZPV6M60IGP7'},
  {name:'CRM, SQL & Shell Scripting',issuer:'Techie Academy',image:'techie-certificate',description:'Certificate of Participation · 2025'}
];

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon = (symbol,label) => `<div class="workflow-node"><span class="node-icon" aria-hidden="true">${symbol}</span><span>${label}</span></div>`;

function flowVisual(type) {
  const flows = {
    voice:{kicker:'RESTAURANT RECEPTIONIST / PROTOTYPE',nodes:[['◉','Voice agent'],['↗','Webhook'],['⌁','n8n'],['▤','Sheets']],footer:'Conversation → structured request records'},
    youtube:{kicker:'PUBLISHING / WORKFLOW OVERVIEW',nodes:[['△','Drive'],['✧','Metadata'],['▷','YouTube'],['▤','Log upload']],footer:'Prepared video → upload → documented record'},
    gmail:{kicker:'EMAIL ALERTS / CONFIGURED WORKFLOW',nodes:[['✉','Gmail'],['⌕','Match email'],['ϟ','Zapier'],['◉','WhatsApp']],footer:'Matching message → notification action'}
  };
  const f=flows[type];
  return `<div class="workflow-panel"><div class="visual-kicker">${f.kicker}</div><div class="workflow-nodes">${f.nodes.map((n,i)=>`${i?'<span class="flow-arrow" aria-hidden="true">→</span>':''}${icon(n[0],n[1])}`).join('')}</div><div class="workflow-bottom"><i aria-hidden="true"></i>${f.footer}</div></div>`;
}

function projectVisual(p,index) {
  const marker=`<span class="visual-index">PROJECT / ${String(index+1).padStart(2,'0')}</span>`;
  if(p.image) return `<div class="project-visual">${marker}<img src="/assets/${p.image}.webp" alt="${escapeHTML(p.title)} — original project evidence" loading="lazy" width="900" height="500"></div>`;
  if(['voice','youtube','gmail'].includes(p.visual))return `<div class="project-visual workflow-visual">${marker}${flowVisual(p.visual)}</div>`;
  if(p.visual==='requirements')return `<div class="project-visual requirements-visual">${marker}<div class="requirements-panel"><div class="visual-kicker">CDURF / REQUIREMENTS SCOPE</div><h4>From business need to clear requirements.</h4><div class="requirements-row"><span>FR-01</span><span>Customer management</span><span>HIGH</span></div><div class="requirements-row"><span>FR-02</span><span>Order management</span><span>HIGH</span></div><div class="requirements-row"><span>FR-03</span><span>Invoicing & payment</span><span>MEDIUM</span></div></div></div>`;
  if(p.visual==='discovery')return `<div class="project-visual discovery-visual">${marker}<div class="discovery-panel"><div class="visual-kicker">A4 HOMES & AGRO / PLANNING</div><h4>Ask better questions.<br>Define a clearer direction.</h4><div class="discovery-steps"><span><b>01 / DISCOVER</b>People & processes</span><span><b>02 / DEFINE</b>Needs & gaps</span><span><b>03 / PRIORITISE</b>Proposed roadmap</span></div></div></div>`;
  const isVerify=p.visual==='verify';
  return `<div class="project-visual app-visual">${marker}<div class="app-panel"><div class="visual-kicker">APPLICATION FOUNDATION / IN DEVELOPMENT</div><h4>${isVerify?'InsightSphere Verify':'BizIntel AI'}</h4><div class="entity-tags">${(isVerify?['Students','Programmes','Cohorts','Assessments','Certificates','Roles & audits']:['Businesses','Members','Customers','Plans','Subscriptions','Payments']).map(t=>`<span>${t}</span>`).join('')}</div></div></div>`;
}

let activeFilter='all';
let expanded=false;
function renderProjects(){
  const filtered=projects.filter(p=>activeFilter==='all'||p.categories.includes(activeFilter));
  const visible=activeFilter==='all'&&!expanded?filtered.slice(0,6):filtered;
  $('#project-grid').innerHTML=visible.map(p=>`<article class="project-card" data-id="${p.id}">${projectVisual(p,projects.indexOf(p))}<div class="project-info"><div class="project-meta"><span class="project-category">${p.category}</span><span class="status ${p.status==='In development'?'dev':''}">${p.status}</span></div><h3>${p.title}</h3><p>${p.summary}</p><div class="project-footer"><span class="project-tools">${p.tools.slice(0,3).join(' / ')}</span><a class="project-link" href="#project/${p.id}" aria-label="Read case study: ${escapeHTML(p.title)}">View case study <span aria-hidden="true">↗</span></a></div></div></article>`).join('');
  $('#project-count').textContent=`${filtered.length} project${filtered.length===1?'':'s'}${visible.length<filtered.length?` · showing ${visible.length}`:''}`;
  $('#show-more').hidden=activeFilter!=='all'||expanded;
}

function renderCredentials(){
  $('#credential-grid').innerHTML=credentials.map(c=>`<article class="credential"><button class="cert-image" data-image="/assets/${c.image}.webp" data-caption="${escapeHTML(c.name+' — '+c.issuer)}" aria-label="Enlarge ${escapeHTML(c.name)} certificate"><img src="/assets/${c.image}.webp" alt="${escapeHTML(c.name+' certificate issued to Ridwan Shodipo by '+c.issuer)}" loading="lazy" width="600" height="420"></button><div class="credential-body"><div class="credential-issuer">${c.issuer}</div><h3>${c.name}</h3><p>${c.description}</p><div class="credential-actions"><a href="/assets/${c.image}.pdf" target="_blank" rel="noopener">Open PDF ↗</a>${c.verify?`<a href="${c.verify}" target="_blank" rel="noopener noreferrer">Verify ↗</a>`:''}</div></div></article>`).join('');
}

const projectDialog=$('#project-dialog');
const imageDialog=$('#image-dialog');
let lastProjectTrigger=null;
function updateBodyLock(){document.body.classList.toggle('modal-open',projectDialog.open||imageDialog.open);}
function openProject(id){
  const p=projects.find(p=>p.id===id);
  if(!p)return;
  lastProjectTrigger=document.activeElement;
  $('#project-detail').innerHTML=`<header class="detail-header"><div class="detail-categories">${p.category}</div><h2 id="project-title">${p.title}</h2><div class="detail-meta"><span class="status ${p.status==='In development'?'dev':''}">${p.status}</span>${p.tools.map(t=>`<span>${t}</span>`).join('')}</div><p class="detail-intro">${p.intro}</p></header>${p.image?`<figure class="detail-hero"><button data-image="/assets/${p.image}.webp" data-caption="${escapeHTML(p.evidence[0][1])}" aria-label="Enlarge project image"><img src="/assets/${p.image}.webp" alt="${escapeHTML(p.evidence[0][1])}"></button><figcaption>Original project evidence · select to enlarge</figcaption></figure>`:''}<div class="detail-body"><div class="detail-columns"><section><h3>The business question</h3><p>${p.problem}</p></section><section><h3>My contribution</h3><ul>${p.contribution.map(t=>`<li>${t}</li>`).join('')}</ul></section></div><section class="findings"><h3>${p.status==='In development'?'The foundation so far':'What the work shows'}</h3><p>${p.findings}</p></section>${p.table?`<section class="detail-section"><h3>Selected scope</h3><table class="case-table"><thead><tr>${p.table.headers.map(t=>`<th scope="col">${t}</th>`).join('')}</tr></thead><tbody>${p.table.rows.map(row=>`<tr>${row.map(t=>`<td>${t}</td>`).join('')}</tr>`).join('')}</tbody></table></section>`:''}${p.evidence&&p.evidence.length>1?`<section class="detail-section"><h3>Explore the report pages</h3><div class="detail-evidence-grid">${p.evidence.slice(1).map(e=>`<button data-image="/assets/${e[0]}.webp" data-caption="${escapeHTML(e[1])}"><img src="/assets/${e[0]}.webp" alt="${escapeHTML(e[1])}" loading="lazy"><span>${e[1]} ↗</span></button>`).join('')}</div></section>`:''}${p.video?`<section class="detail-section"><h3>Watch the workflow excerpt</h3><video controls playsinline preload="metadata" aria-label="Historical recorded workflow demonstration" src="/assets/${p.video}"><a href="/assets/${p.video}" target="_blank" rel="noopener">Open recorded demonstration</a></video><p class="fineprint">Silent recording · historical demonstration · workflow canvas excerpt</p></section>`:''}${p.evidenceText?`<section class="detail-section"><h3>Evidence & documentation</h3><p>${p.evidenceText}</p></section>`:''}<aside class="detail-note"><strong>Scope & interpretation</strong><br>${p.note}</aside><div class="detail-actions">${p.links.map(([label,url])=>`<a class="button primary" href="${url}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">↗</span></a>`).join('')}<a class="button secondary" href="#contact-details" data-contact-subject="${escapeHTML('Project enquiry: '+p.title)}">Discuss this project <span aria-hidden="true">↗</span></a><button class="button secondary" id="share-project">Copy project link <span aria-hidden="true">↗</span></button></div></div>`;
  if(!projectDialog.open)projectDialog.showModal();
  projectDialog.scrollTop=0;
  document.title=p.title+' — Ridexyoung';
  updateBodyLock();
}
function closeProject(updateHash=true){
  if(imageDialog.open)imageDialog.close();
  if(projectDialog.open)projectDialog.close();
  if(updateHash&&location.hash.startsWith('#project/'))history.replaceState(null,'','#projects');
  document.title='Ridexyoung — Data, Business & Automation';
  updateBodyLock();
  if(lastProjectTrigger&&lastProjectTrigger.isConnected)lastProjectTrigger.focus({preventScroll:true});
}
function syncRoute(){
  const id=location.hash.match(/^#project\/([a-z0-9-]+)$/)?.[1];
  if(id&&projects.some(p=>p.id===id))openProject(id);
  else if(projectDialog.open)closeProject(false);
}
function showImage(src,caption){
  $('#full-image').src=src;$('#full-image').alt=caption;$('#image-caption').textContent=caption;
  if(!imageDialog.open)imageDialog.showModal();
  updateBodyLock();
}
function closeImage(){imageDialog.close();updateBodyLock();}

function setContactSubject(subject){
  $('#contact-topic').textContent=subject;
  const email='ridsho09@gmail.com';
  const gmail=new URL('https://mail.google.com/mail/');
  gmail.search=new URLSearchParams({view:'cm',fs:'1',to:email,su:subject}).toString();
  const outlook=new URL('https://outlook.live.com/mail/0/deeplink/compose');
  outlook.search=new URLSearchParams({to:email,subject}).toString();
  $('#gmail-compose').href=gmail.href;
  $('#outlook-compose').href=outlook.href;
}
function openContact(subject){
  setContactSubject(subject);
  if(imageDialog.open)closeImage();
  if(projectDialog.open)closeProject();
  history.replaceState(null,'','#contact-details');
  const details=$('#contact-details');
  details.focus({preventScroll:true});
  details.scrollIntoView({behavior:'instant',block:'start'});
}
async function copyContact(targetId){
  const input=document.getElementById(targetId);
  if(!input)return;
  const label=targetId==='contact-email-address'?'Email address':'Phone number';
  let copied=false;
  try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(input.value);copied=true;}}catch{}
  if(!copied){
    input.focus({preventScroll:true});input.select();input.setSelectionRange(0,input.value.length);
    try{document.execCommand('copy');}catch{}
  }
  const message=copied?label+' copied.':label+' selected for copying. Use your device’s Copy command if needed.';
  $('#contact-feedback').textContent=message;
  toast(message);
}


$$('.filter').forEach(button=>button.addEventListener('click',()=>{
  activeFilter=button.dataset.filter;
  $$('.filter').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
  renderProjects();
}));
$('#show-more').addEventListener('click',()=>{expanded=true;renderProjects();const first=$$('.project-card')[6];if(first){first.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'});$('a',first).focus({preventScroll:true});}});
$('.menu-toggle').addEventListener('click',()=>{
  const toggle=$('.menu-toggle');const open=toggle.getAttribute('aria-expanded')!=='true';
  toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu');$('#navigation').classList.toggle('open',open);
});
$$('#navigation a').forEach(a=>a.addEventListener('click',()=>{$('#navigation').classList.remove('open');$('.menu-toggle').setAttribute('aria-expanded','false');$('.menu-toggle').setAttribute('aria-label','Open menu');}));
$('#inquiry').addEventListener('change',event=>setContactSubject(event.target.value));
$('#close-project').addEventListener('click',()=>closeProject());
$('#close-image').addEventListener('click',closeImage);
projectDialog.addEventListener('cancel',event=>{event.preventDefault();closeProject();});
imageDialog.addEventListener('close',()=>{$('#full-image').removeAttribute('src');updateBodyLock();});
projectDialog.addEventListener('close',()=>{$$('video',projectDialog).forEach(v=>v.pause());updateBodyLock();});
for(const dialog of [projectDialog,imageDialog])dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom){dialog===projectDialog?closeProject():closeImage();}});
document.addEventListener('click',async event=>{
  const contactLink=event.target.closest('[data-contact-subject],[data-contact-selected]');
  if(contactLink){event.preventDefault();openContact(contactLink.dataset.contactSubject||$('#inquiry').value);return;}
  const copyButton=event.target.closest('[data-copy-target]');
  if(copyButton){await copyContact(copyButton.dataset.copyTarget);return;}

  const imageButton=event.target.closest('[data-image]');
  if(imageButton){showImage(imageButton.dataset.image,imageButton.dataset.caption||'Project evidence');return;}
  const projectLink=event.target.closest('a[href^="#project/"]');
  if(projectLink){event.preventDefault();history.pushState(null,'',projectLink.getAttribute('href'));syncRoute();return;}
  if(event.target.closest('#share-project')){
    try{await navigator.clipboard.writeText(location.href);toast('Project link copied.');}
    catch{toast('Copy the project address from your browser to share it.');}
  }
  if(event.target.closest('.dialog-toolbar a'))closeProject();
});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!projectDialog.open&&!imageDialog.open){$('#navigation').classList.remove('open');$('.menu-toggle').setAttribute('aria-expanded','false');}});
let toastTimer;
function toast(message){clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').classList.add('show');toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),3000);}
window.addEventListener('hashchange',syncRoute);
window.addEventListener('popstate',syncRoute);
$('#year').textContent=new Date().getFullYear();
renderProjects();renderCredentials();setContactSubject($('#inquiry').value);syncRoute();
