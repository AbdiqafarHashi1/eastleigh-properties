const toggle = document.querySelector('.menu-toggle');
const drawer = document.getElementById('mobileDrawer');
const mobileBackdrop = document.getElementById('mobileBackdrop');
const hero = document.querySelector('.hero');
const stickySearch = document.getElementById('stickySearch');
const stickySearchInput = document.getElementById('stickySearchInput');

const properties = [
{id:1,title:'Family Maisonette Near General Waruinge Street',category:'Houses',intent:'Buy',location:'Eastleigh Section 1',area:'General Waruinge corridor',price:26800000,priceType:'sale',beds:4,baths:3,size:'232m²',image:'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1100&q=80',badge:'Verified Sale',description:'Corner maisonette in a secure court with steady water and covered parking.',features:['Parking','Family Friendly']},
{id:2,title:'Newly Renovated 2 Bedroom Apartment — Eastleigh Section 1',category:'Apartments',intent:'Rent',location:'Eastleigh Section 1',area:'2nd Avenue',price:58000,priceType:'month',beds:2,baths:2,size:'116m²',image:'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1100&q=80',badge:'For Rent',description:'Recently updated unit with fitted kitchen and balcony facing the avenue.',features:['Furnished','Parking']},
{id:3,title:'Serviced Studio Apartment — Pangani',category:'Apartments',intent:'Rent',location:'Pangani',area:'Pumwani link road',price:22000,priceType:'month',beds:0,baths:1,size:'42m²',image:'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1100&q=80',badge:'For Rent',description:'Compact studio with caretaker support and reliable public transport access.',features:['New Development']},
{id:4,title:'1/8 Acre Plot Off Spine Road',category:'Land / Plots',intent:'Buy',location:'Kayole corridor',area:'Spine Road edge',price:4800000,priceType:'sale',beds:0,baths:0,size:'1/8 acre',image:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=80',badge:'For Sale',description:'Serviced residential plot suitable for a mid-rise rental block.',features:['Family Friendly']},
{id:5,title:'3 Bedroom Apartment Near Pangani Girls',category:'Apartments',intent:'Rent',location:'Pangani',area:'Pangani gardens lane',price:92000,priceType:'month',beds:3,baths:2,size:'172m²',image:'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1100&q=80',badge:'For Rent',description:'Large apartment with lift access, backup water and two parking slots.',features:['Parking','Family Friendly']},
{id:6,title:'Mixed-Use Commercial Plot Near Juja Road',category:'Land / Plots',intent:'Buy',location:'Juja Road corridor',area:'Main road frontage',price:119000000,priceType:'sale',beds:0,baths:0,size:'0.44 acres',image:'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1100&q=80',badge:'Commercial',description:'Prime frontage plot zoned for retail, offices and upper-floor apartments.',features:['Commercial Use']},
{id:7,title:'2 Bedroom Apartment in New Block — Section 3',category:'Apartments',intent:'Buy',location:'Eastleigh Section 3',area:'3rd Avenue',price:10300000,priceType:'sale',beds:2,baths:2,size:'126m²',image:'https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1100&q=80',badge:'For Sale',description:'Contemporary plan with lift, borehole and controlled entry lobby.',features:['New Development','Parking']},
{id:8,title:'5 Bedroom Townhouse on Muhoho Avenue',category:'Houses',intent:'Buy',location:'South C',area:'Muhoho Avenue',price:43800000,priceType:'sale',beds:5,baths:4,size:'340m²',image:'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1100&q=80',badge:'For Sale',description:'Multi-level townhouse ideal for larger families and diplomatic tenants.',features:['Parking','Family Friendly']},
{id:9,title:'1 Bedroom Apartment — California Estate',category:'Apartments',intent:'Rent',location:'California Estate',area:'Starehe lane',price:30000,priceType:'month',beds:1,baths:1,size:'70m²',image:'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&w=1100&q=80',badge:'For Rent',description:'Well-maintained one-bedroom with tiled floors and fitted wardrobes.',features:['Family Friendly']},
{id:10,title:'3 Bedroom Maisonette in Buru Buru Phase 3',category:'Houses',intent:'Rent',location:'Buru Buru',area:'Phase 3',price:102000,priceType:'month',beds:3,baths:3,size:'214m²',image:'https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1100&q=80',badge:'For Rent',description:'Standalone maisonette with perimeter wall and ample parking yard.',features:['Parking','Family Friendly']},
{id:11,title:'2 Bedroom Apartment on Parklands Edge',category:'Apartments',intent:'Buy',location:'Parklands edge',area:'Ngara connector',price:12900000,priceType:'sale',beds:2,baths:2,size:'132m²',image:'https://images.unsplash.com/photo-1560185009-dddeb820c7b7?auto=format&fit=crop&w=1100&q=80',badge:'For Sale',description:'Ideal investor unit close to CBD links, hospitals and universities.',features:['Furnished','Parking']},
{id:12,title:'Warehouse-Retail Development Parcel',category:'Land / Plots',intent:'Buy',location:'Eastleigh Section 2',area:'Juja Road service lane',price:82000000,priceType:'sale',beds:0,baths:0,size:'0.31 acres',image:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=80',badge:'Investment',description:'Commercial parcel suited for warehousing with retail frontage.',features:['Commercial Use']},
{id:13,title:'Luxury 3 Bedroom Apartment — Pangani Riverside',category:'Apartments',intent:'Buy',location:'Pangani',area:'Riverside edge',price:17600000,priceType:'sale',beds:3,baths:3,size:'188m²',image:'https://images.unsplash.com/photo-1560185009-dddeb820c7b7?auto=format&fit=crop&w=1100&q=80',badge:'For Sale',description:'Premium three-bedroom with ensuite rooms and skyline-facing lounge.',features:['New Development','Parking']},
{id:14,title:'Studio Loft Unit Near 6th Street',category:'Apartments',intent:'Rent',location:'Eastleigh Section 3',area:'6th Street',price:25000,priceType:'month',beds:0,baths:1,size:'45m²',image:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1100&q=80',badge:'For Rent',description:'Loft-style studio with fitted kitchenette and secure main entrance.',features:['Furnished']},
{id:15,title:'Detached 4 Bedroom House — California Estate',category:'Houses',intent:'Buy',location:'California Estate',area:'Inner loop',price:33200000,priceType:'sale',beds:4,baths:3,size:'272m²',image:'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1100&q=80',badge:'For Sale',description:'Detached home with mature garden, servant quarter and private driveway.',features:['Parking','Family Friendly']},
{id:16,title:'High-Density Redevelopment Plot — Section 1',category:'Land / Plots',intent:'Buy',location:'Eastleigh Section 1',area:'First Avenue commercial belt',price:168000000,priceType:'sale',beds:0,baths:0,size:'0.62 acres',image:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=80',badge:'Prime Plot',description:'Rare Eastleigh core plot ideal for mixed-use high-rise redevelopment.',features:['Commercial Use','New Development']}
];
const STORAGE_KEYS = { saved: 'eastleigh_saved_properties', recent: 'eastleigh_recently_viewed' };
const state = { intent: 'Buy', search: '', type: 'All Types', min: '', max: '', beds: 0, features: [], sort: 'newest', visibleCount: 0, saved: new Set(), recent: [], activePropertyId: null, formOpen: false, formSuccess: false, categoryFocus: null };
const grid = document.getElementById('featuredGrid');
const categoryCards = document.getElementById('categoryCards');
const resultCount = document.getElementById('resultCount');
const recentWrap = document.getElementById('recentlyViewedWrap');
const recentGrid = document.getElementById('recentlyViewedGrid');
const sortSelect = document.getElementById('sortSelect');
const activeChips = document.getElementById('activeChips');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const intentSectionAnchors = { Buy: 'buyPropertiesSection', Rent: 'rentPropertiesSection', 'Land / Plots': 'landPropertiesSection' };
const buyPropertiesGrid = document.getElementById('buyPropertiesGrid');
const rentPropertiesGrid = document.getElementById('rentPropertiesGrid');
const landPropertiesGrid = document.getElementById('landPropertiesGrid');
const formatPrice=(p,t)=>`KSh ${p.toLocaleString()}${t==='month'?' / month':''}`;
const intentLabel = (property) => property.category === 'Land / Plots' ? (property.features.includes('Commercial Use') ? 'Commercial' : 'Investment') : property.intent === 'Rent' ? 'For Rent' : 'For Sale';
const getProperty = (id) => properties.find((item) => item.id === Number(id));
let stickyVisible = false;
let tickingSticky = false;
const scrollToResults = () => {
  const target = resultCount;
  if (!target) return;
  const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
  const stickyVisible = stickySearch?.classList.contains('visible');
  const stickyHeight = stickyVisible ? (stickySearch?.offsetHeight || 0) : 0;
  const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - stickyHeight - 12;
  window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
};

const scrollToSection = (sectionId) => {
  const target = document.getElementById(sectionId);
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

function getIntentSectionProperties(intent){
  if(intent==='Land / Plots') return properties.filter((p)=>p.category==='Land / Plots');
  return properties.filter((p)=>p.intent===intent && p.category!=='Land / Plots');
}

function renderIntentSections(){
  if (buyPropertiesGrid) buyPropertiesGrid.innerHTML = getIntentSectionProperties('Buy').map(propertyCard).join('');
  if (rentPropertiesGrid) rentPropertiesGrid.innerHTML = getIntentSectionProperties('Rent').map(propertyCard).join('');
  if (landPropertiesGrid) landPropertiesGrid.innerHTML = getIntentSectionProperties('Land / Plots').map(propertyCard).join('');
}

function applyFilters(){return properties.filter((p)=>{if(state.intent==='Land / Plots'){if(p.category!=='Land / Plots')return false;} else if(p.intent!==state.intent)return false; if(state.type!=='All Types'&&p.category!==state.type)return false; if(state.min&&p.price<Number(state.min))return false; if(state.max&&p.price>Number(state.max))return false; if(state.beds>0&&p.category!=='Land / Plots'&&p.beds<state.beds)return false; if(state.features.length&&!state.features.every(f=>p.features.includes(f)))return false; const hay=`${p.title} ${p.location} ${p.category} ${p.area} ${p.features.join(' ')} ${p.description}`.toLowerCase(); if(state.search&&!hay.includes(state.search.toLowerCase()))return false; return true;});}

function getInitialVisibleCount(){return window.innerWidth<=640?4:8;}
function getVisibleStep(){return window.innerWidth<=640?4:4;}
function sortProperties(items){
  const list=[...items];
  if(state.sort==='priceAsc') list.sort((a,b)=>a.price-b.price);
  else if(state.sort==='priceDesc') list.sort((a,b)=>b.price-a.price);
  else if(state.sort==='bedsDesc') list.sort((a,b)=>b.beds-a.beds||b.id-a.id);
  else list.sort((a,b)=>b.id-a.id);
  return list;
}
function renderActiveChips(){
  const chips=[];
  if(state.type!=='All Types') chips.push({key:'type',label:`Type: ${state.type}`});
  if(state.beds>0) chips.push({key:'beds',label:`Beds: ${state.beds}+`});
  if(state.search) chips.push({key:'search',label:`Search: ${state.search}`});
  if(state.min) chips.push({key:'min',label:`Min: KSh ${Number(state.min).toLocaleString()}`});
  if(state.max) chips.push({key:'max',label:`Max: KSh ${Number(state.max).toLocaleString()}`});
  state.features.forEach((f)=>chips.push({key:'feature',value:f,label:f}));
  activeChips.innerHTML = chips.map((chip)=>`<span class="chip">${chip.label}<button type="button" data-chip-key="${chip.key}" data-chip-value="${chip.value||''}" aria-label="Remove ${chip.label}">×</button></span>`).join('') + (chips.length?'<button type="button" class="chip-clear-all" id="clearAllChips">Clear all</button>':'');
}
function renderCategories(){
  const cards=[
    {name:'Houses',count:properties.filter(p=>p.category==='Houses').length,img:'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80'},
    {name:'Apartments',count:properties.filter(p=>p.category==='Apartments').length,img:'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80'},
    {name:'Land / Plots',count:properties.filter(p=>p.category==='Land / Plots').length,img:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'},
    {name:'Commercial Spaces',count:properties.filter(p=>p.features.includes('Commercial Use')).length,img:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'}
  ];
  categoryCards.innerHTML=cards.map(c=>`<button class="image-card ${state.categoryFocus===c.name?'active':''}" type="button" data-category="${c.name}" aria-label="Filter by ${c.name}"><img src="${c.img}" alt="${c.name}"/><div><h3>${c.name}</h3><p>${c.count} listings</p></div></button>`).join('');
}
function applyCategoryFocus(categoryName){
  state.categoryFocus = categoryName;
  state.search = '';
  searchInput.value = '';
  stickySearchInput.value = '';
  if(categoryName === 'Houses' || categoryName === 'Apartments' || categoryName === 'Land / Plots'){
    state.type = categoryName;
    typeFilter.value = categoryName;
    state.intent = categoryName === 'Land / Plots' ? 'Land / Plots' : 'Buy';
  } else if (categoryName === 'Commercial Spaces'){
    state.type = 'Land / Plots';
    typeFilter.value = 'Land / Plots';
    state.intent = 'Land / Plots';
    state.features = ['Commercial Use'];
    document.querySelectorAll('#moreFilters input').forEach((input)=>{input.checked = input.value === 'Commercial Use';});
  }
  document.querySelectorAll('.tabs button').forEach((btn)=>{
    btn.classList.toggle('active', btn.dataset.intent===state.intent);
  });
  render({ jumpToResults:true, resetVisible:true });
}
const propertyCard=(p)=>`<article class="property-card fade-in" data-property-id="${p.id}" tabindex="0"><img src="${p.image}" alt="${p.title}"/><span class="badge ${p.priceType==='month'?'rent':''}">${p.badge}</span><button class="fav ${state.saved.has(p.id) ? 'active' : ''}" type="button" data-fav-id="${p.id}" aria-label="Save ${p.title}">${state.saved.has(p.id) ? '♥' : '♡'}</button><div class="card-body"><h3>${p.title}</h3><p>${p.location} · ${p.area}</p><strong>${formatPrice(p.price,p.priceType)}</strong><small>${p.category==='Land / Plots'?p.size:`${p.beds} Beds · ${p.baths} Baths · ${p.size}`}</small><em>${p.description}</em></div></article>`;

function persistState(){localStorage.setItem(STORAGE_KEYS.saved,JSON.stringify([...state.saved]));localStorage.setItem(STORAGE_KEYS.recent,JSON.stringify(state.recent));}
function syncUrl(id, push=true){const hash=id?`#property-${id}`:'#'; const statePayload={propertyId:id||null}; if(push) history.pushState(statePayload,'',hash); else history.replaceState(statePayload,'',hash);}
function hasModalHash(){return /^#property-(\d+)$/.test(window.location.hash);}
function openProperty(id,push=true){if(!getProperty(id)) return; const nextId=Number(id); const hadModalOpen=!!state.activePropertyId; state.activePropertyId=nextId;state.formOpen=false;state.formSuccess=false;state.recent=[nextId,...state.recent.filter(item=>item!==nextId)].slice(0,6);persistState(); if(push){const isSameHash=window.location.hash===`#property-${nextId}`; if(!isSameHash){syncUrl(nextId, !hadModalOpen);} else if((history.state?.propertyId ?? null)!==nextId){syncUrl(nextId,false);} } renderModal();renderRecent();}
function closeModal(push=true){if(!state.activePropertyId) return; state.activePropertyId=null; state.formOpen=false; state.formSuccess=false; renderModal(); if(!push) return; if(hasModalHash() && history.state?.propertyId){history.back(); return;} if(hasModalHash()){syncUrl(null,false);} }

function renderModal() {
  const existing = document.getElementById('propertyDetailModal'); existing?.remove();
  const property = getProperty(state.activePropertyId);
  document.body.classList.toggle('modal-open', !!property);
  if (!property) return;
  const isSaved = state.saved.has(property.id);
  const thumbs = [property.image, ...properties.filter((item) => item.category === property.category && item.id !== property.id).slice(0, 2).map((item) => item.image)];
  const formPanel = state.formOpen ? `<section class="inquiry-form-shell" id="inquiryFormSection"><h4>Schedule Viewing / Request Details</h4><form id="inquiryForm"><label>Full Name<input name="fullName" required type="text" placeholder="e.g. Amina Hassan"/></label><label>Phone Number<input name="phone" required type="tel" placeholder="+254 712 345 678"/></label><label>Preferred Viewing Date<input name="date" required type="date"/></label><label>Inquiry Type<select name="inquiryType" required><option value="">Select inquiry type</option><option>Schedule Viewing</option><option>Request More Details</option><option>Price Negotiation</option><option>Agent Callback</option></select></label><label>Message<textarea name="message" required rows="3" placeholder="Tell us what you need for this property."></textarea></label><button type="submit" class="btn btn-gold">Submit Request</button></form></section>` : '';
  const successPanel = state.formSuccess ? `<div class="form-success"><h4>Request prepared successfully.</h4><p>Backend submission will be connected in production for <strong>${property.title}</strong>.</p></div>` : '';
  const modal = document.createElement('div');
  modal.id = 'propertyDetailModal'; modal.className = 'property-modal-backdrop';
  const message = encodeURIComponent(`Hello Eastleigh Properties, I'm interested in ${property.title} listed at ${formatPrice(property.price,property.priceType)}. Please share more details.`);
  modal.innerHTML = `<section class="property-modal" role="dialog" aria-modal="true" aria-labelledby="propertyModalTitle"><header class="modal-header"><button type="button" class="modal-close" aria-label="Close property details">×</button></header><div class="modal-body" id="modalBodyScroll"><div class="modal-layout"><div class="modal-media"><img src="${property.image}" alt="${property.title}"/><div class="thumbs">${thumbs.map((image, i) => `<img src="${image}" alt="Property view ${i + 1}"/>`).join('')}</div></div><div class="modal-content"><span class="modal-intent">${intentLabel(property)}</span><h3 id="propertyModalTitle">${property.title}</h3><p class="modal-location">${property.location} · ${property.area}</p><strong>${formatPrice(property.price,property.priceType)}</strong><p class="modal-meta">${property.category} · ${property.category === 'Land / Plots' ? property.size : `${property.beds} Beds · ${property.baths} Baths · ${property.size}`}</p><p class="modal-description">${property.description}</p><ul class="feature-list">${property.features.map((feature) => `<li>${feature}</li>`).join('')}</ul><article class="agent-card"><h4>Your Eastleigh Agent</h4><p><strong>Nadia Yusuf</strong> · Senior Property Advisor</p><p>Call: +254 711 804 225</p></article><div class="modal-actions"><button type="button" class="btn ${isSaved ? '' : 'btn-gold'} save-modal">${isSaved ? 'Saved Property ♥' : 'Save Property'}</button><button type="button" class="btn btn-gold contact-agent">Contact Agent</button><a class="btn btn-gold" target="_blank" rel="noopener" href="https://wa.me/254711804225?text=${message}">WhatsApp Agent</a><button type="button" class="btn btn-gold schedule-viewing">Schedule Viewing</button></div><div class="contact-toast" hidden>Agent Nadia Yusuf · +254 711 804 225 · eastleigh.demo@broker.co.ke</div>${formPanel}${successPanel}</div></div></div></section>`;
  document.body.appendChild(modal);
}


function revealAndScrollToInquiryForm(){
  if (!state.activePropertyId) return;
  const modalBody = document.getElementById('modalBodyScroll');
  const formSection = document.getElementById('inquiryFormSection');
  if (formSection && modalBody) {
    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  state.formOpen = true;
  state.formSuccess = false;
  renderModal();
  requestAnimationFrame(() => {
    const newFormSection = document.getElementById('inquiryFormSection');
    if (newFormSection) newFormSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function renderRecent(){const items=state.recent.map(getProperty).filter(Boolean); if(!items.length){recentWrap.style.display='none'; return;} recentWrap.style.display='block'; recentGrid.innerHTML=items.map(propertyCard).join('');}
function render({ jumpToResults = false, resetVisible = false } = {}){const filtered=sortProperties(applyFilters()); if(resetVisible||!state.visibleCount) state.visibleCount=getInitialVisibleCount(); const visible=filtered.slice(0,state.visibleCount); grid.innerHTML=!filtered.length?`<article class="empty-state"><h3>No matching properties found</h3><p>Try broadening your search or reset the filters.</p><button id="clearFromEmpty" class="btn btn-gold" type="button">Clear filters</button></article>`:visible.map(propertyCard).join('');
resultCount.textContent=`${filtered.length} ${state.intent==='Rent'?'rentals':state.intent==='Land / Plots'?'land / plots':'properties'} shown`;renderCategories();renderRecent();renderIntentSections();renderActiveChips();document.getElementById('clearFromEmpty')?.addEventListener('click',clearFilters); loadMoreBtn.hidden = !filtered.length || state.visibleCount>=filtered.length; renderModal();if(jumpToResults) requestAnimationFrame(scrollToResults);}

function clearFilters(){state.search='';state.type='All Types';state.min='';state.max='';state.beds=0;state.features=[];state.categoryFocus=null;searchInput.value='';stickySearchInput.value='';typeFilter.value='All Types';minPrice.value='';maxPrice.value='';bedsFilter.value='0';document.querySelectorAll('#moreFilters input').forEach(i=>i.checked=false);render({ jumpToResults:true, resetVisible:true });}
function toggleSaved(id){if(state.saved.has(id)) state.saved.delete(id); else state.saved.add(id); persistState(); render();}
function setSearch(value,{jumpToResults=false}={}){state.search=value.trim();searchInput.value=state.search;stickySearchInput.value=state.search;render({ jumpToResults, resetVisible:true });}
function setDrawer(open){drawer.classList.toggle('open',open);mobileBackdrop.classList.toggle('open',open);document.body.classList.toggle('drawer-open',open);toggle.setAttribute('aria-expanded',String(open));}
function updateStickySearchVisibility(){
  const heroBottom = hero?.getBoundingClientRect().bottom ?? 0;
  const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
  const showSticky = heroBottom <= (headerHeight + 32);
  if(showSticky === stickyVisible) return;
  stickyVisible = showSticky;
  stickySearch.classList.toggle('visible', stickyVisible);
}
function onScrollSticky(){
  if(tickingSticky) return;
  tickingSticky = true;
  requestAnimationFrame(()=>{updateStickySearchVisibility();tickingSticky=false;});
}

toggle?.addEventListener('click',()=>setDrawer(!drawer.classList.contains('open')));
mobileBackdrop.addEventListener('click',()=>setDrawer(false));
drawer.querySelectorAll('a,button').forEach(el=>el.addEventListener('click',()=>setDrawer(false)));
window.addEventListener('scroll',onScrollSticky,{ passive:true });
window.addEventListener('resize',onScrollSticky);

searchBtn.addEventListener('click',()=>setSearch(searchInput.value,{ jumpToResults:true }));
stickySearchBtn.addEventListener('click',()=>setSearch(stickySearchInput.value,{ jumpToResults:true }));
searchInput.addEventListener('input',e=>setSearch(e.target.value));
stickySearchInput.addEventListener('input',e=>setSearch(e.target.value));
document.querySelectorAll('.tabs button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');scrollToSection(intentSectionAnchors[btn.dataset.intent]);}));
typeFilter.addEventListener('change',e=>{state.type=e.target.value;state.categoryFocus=null;render({ jumpToResults:true, resetVisible:true });});
minPrice.addEventListener('input',e=>{state.min=e.target.value;state.categoryFocus=null;render({ jumpToResults:true, resetVisible:true });});
maxPrice.addEventListener('input',e=>{state.max=e.target.value;state.categoryFocus=null;render({ jumpToResults:true, resetVisible:true });});
bedsFilter.addEventListener('change',e=>{state.beds=Number(e.target.value);state.categoryFocus=null;render({ jumpToResults:true, resetVisible:true });});
moreFiltersBtn.addEventListener('click',()=>moreFilters.classList.toggle('open'));
document.querySelectorAll('#moreFilters input').forEach(i=>i.addEventListener('change',()=>{state.features=[...document.querySelectorAll('#moreFilters input:checked')].map(n=>n.value);render({ jumpToResults:true, resetVisible:true });}));
document.getElementById('clearFilters').addEventListener('click',clearFilters);


sortSelect.addEventListener('change',(e)=>{state.sort=e.target.value;render({ jumpToResults:true, resetVisible:true });});
loadMoreBtn.addEventListener('click',()=>{state.visibleCount += getVisibleStep(); render();});
window.addEventListener('resize',()=>{if(state.visibleCount<getInitialVisibleCount()) state.visibleCount=getInitialVisibleCount();});
window.addEventListener('popstate',()=>{const match=window.location.hash.match(/^#property-(\d+)$/); if(match && getProperty(match[1])){state.activePropertyId=Number(match[1]);state.formOpen=false;state.formSuccess=false;renderModal();return;} if(state.activePropertyId){state.activePropertyId=null;state.formOpen=false;state.formSuccess=false;renderModal();}});

document.addEventListener('click', (event) => {
  const categoryButton = event.target.closest('[data-category]');
  if (categoryButton) {applyCategoryFocus(categoryButton.dataset.category);return;}
  const favButton = event.target.closest('[data-fav-id]');
  if (favButton) {toggleSaved(Number(favButton.dataset.favId));event.stopPropagation();return;}
  const card = event.target.closest('.property-card');
  if (card) {openProperty(Number(card.dataset.propertyId), true);return;}
  const chipBtn = event.target.closest('[data-chip-key]');
  if (chipBtn) {
    const key = chipBtn.dataset.chipKey;
    if (key==='type') {state.type='All Types';typeFilter.value='All Types';}
    if (key==='beds') {state.beds=0;bedsFilter.value='0';}
    if (key==='search') {state.search='';searchInput.value='';stickySearchInput.value='';}
    if (key==='min') {state.min='';minPrice.value='';}
    if (key==='max') {state.max='';maxPrice.value='';}
    if (key==='feature') {state.features=state.features.filter((f)=>f!==chipBtn.dataset.chipValue); document.querySelectorAll('#moreFilters input').forEach((input)=>{input.checked=state.features.includes(input.value);});}
    render({ jumpToResults:true, resetVisible:true });
    return;
  }
  if (event.target.id === 'clearAllChips') {clearFilters();return;}
  if (event.target.matches('.modal-close') || event.target.id === 'propertyDetailModal') closeModal(true);
  if (event.target.matches('.save-modal')) toggleSaved(state.activePropertyId);
  if (event.target.matches('.contact-agent')) {const toast = document.querySelector('.contact-toast'); if (toast) toast.hidden = !toast.hidden;}
  if (event.target.matches('.schedule-viewing')) revealAndScrollToInquiryForm();
});
document.addEventListener('submit', (event) => {if (event.target.id !== 'inquiryForm') return;event.preventDefault();const form = event.target;if (!form.checkValidity()) {form.reportValidity();return;}state.formOpen = false;state.formSuccess = true;renderModal();});
document.addEventListener('keydown', (event) => {if (event.key === 'Escape' && state.activePropertyId) closeModal(true);});

try {state.saved = new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.saved) || '[]'));state.recent = JSON.parse(localStorage.getItem(STORAGE_KEYS.recent) || '[]').filter(id=>getProperty(id));} catch {}
const urlMatch=window.location.hash.match(/^#property-(\d+)$/); if(urlMatch && getProperty(urlMatch[1])) state.activePropertyId=Number(urlMatch[1]);
state.visibleCount=getInitialVisibleCount();
sortSelect.value=state.sort;
setSearch(state.search); render({ resetVisible:true }); updateStickySearchVisibility(); if(state.activePropertyId) syncUrl(state.activePropertyId,false); else syncUrl(null,false);
