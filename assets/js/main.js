
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const storeKey = 'kvh_hcm_analytics_v2';
const uidKey = 'kvh_hcm_uid_v2';
const todayKey = () => new Date().toISOString().slice(0,10);
const fmt = n => new Intl.NumberFormat('vi-VN').format(Math.round(n || 0));
const mins = s => Math.max(1, Math.round((s || 0) / 60)) + 'p';

const defaultAnalytics = {
  totalVisits: 1268, uniqueUsers: 346, postViews: 894, interactions: 512,
  videoViews: 136, videoWatchSeconds: 8800, pageWatchSeconds: 15400,
  daily: {}, content: {
    'Trang chủ': 260, 'Hành trình': 330, 'Bảo tàng số': 240,
    'Gương điển hình': 186, 'Bảng vàng': 160, 'Tủ sách': 148, 'Quiz': 96
  }
};

function getData(){
  const raw = localStorage.getItem(storeKey);
  if(!raw){
    const data = structuredClone(defaultAnalytics);
    seedDaily(data);
    localStorage.setItem(storeKey, JSON.stringify(data));
    return data;
  }
  return JSON.parse(raw);
}
const kvhAnalyticsChannel = ('BroadcastChannel' in window) ? new BroadcastChannel('kvh_hcm_realtime') : null;
function saveData(data){
  localStorage.setItem(storeKey, JSON.stringify(data));
  try { kvhAnalyticsChannel?.postMessage({ type:'analytics-update', data }); } catch(e) {}
}
function seedDaily(data){
  for(let i=6;i>=0;i--){
    const d = new Date(); d.setDate(d.getDate()-i);
    const key = d.toISOString().slice(0,10);
    if(!data.daily[key]) data.daily[key] = Math.floor(45 + Math.random()*125);
  }
}
function registerVisit(){
  const data = getData(); const key = todayKey();
  data.totalVisits += 1;
  data.daily[key] = (data.daily[key] || 0) + 1;
  if(!localStorage.getItem(uidKey)){
    localStorage.setItem(uidKey, crypto.randomUUID ? crypto.randomUUID() : String(Date.now()+Math.random()));
    data.uniqueUsers += 1;
  }
  saveData(data); renderAnalytics();
}
function addInteraction(n=1){ const d=getData(); d.interactions+=n; saveData(d); renderAnalytics(); }
function addContent(name, n=1){
  const d=getData(); d.content[name]=(d.content[name]||0)+n; d.interactions+=1; saveData(d); renderAnalytics();
}
function addPostView(){ const d=getData(); d.postViews+=1; saveData(d); renderAnalytics(); }
function renderAnalytics(){
  const d = getData(); seedDaily(d); saveData(d);
  const ids = {
    kvhTotalVisits:d.totalVisits, kvhUniqueUsers:d.uniqueUsers, kvhTodayVisits:d.daily[todayKey()]||0,
    kvhPostViews:d.postViews, kvhInteractions:d.interactions, kvhVideoViews:d.videoViews
  };
  Object.entries(ids).forEach(([id,val]) => { const el = document.getElementById(id); if(el) el.textContent = fmt(val); });
  const wt = $('#kvhWatchTime'); if(wt) wt.textContent = mins(d.pageWatchSeconds);
  const vt = $('#kvhVideoTime'); if(vt) vt.textContent = mins(d.videoWatchSeconds);
  renderChart(d); renderContentBars(d);
}
function renderContentBars(d){
  const wrap = $('#kvhContentBars'); if(!wrap) return;
  const entries = Object.entries(d.content).sort((a,b)=>b[1]-a[1]);
  const max = Math.max(...entries.map(e=>e[1]), 1);
  wrap.innerHTML = entries.map(([name,value]) => `
    <div class="kvh-bar-row"><span>${name}</span><div class="kvh-bar"><span style="width:${(value/max)*100}%"></span></div><b>${value}</b></div>
  `).join('');
}
function renderChart(d){
  const canvas = $('#kvhTrafficChart'); if(!canvas) return;
  const ctx = canvas.getContext('2d'); const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  if(rect.width === 0) return;
  canvas.width = rect.width * ratio; canvas.height = rect.height * ratio; ctx.scale(ratio, ratio);
  ctx.clearRect(0,0,rect.width,rect.height);
  const keys = Object.keys(d.daily).sort().slice(-7); const values = keys.map(k => d.daily[k]);
  const max = Math.max(...values, 10); const pad = 34; const w = rect.width-pad*2; const h = rect.height-pad*2;
  ctx.strokeStyle = 'rgba(232,62,140,.16)'; ctx.lineWidth = 1;
  for(let i=0;i<5;i++){ const y=pad+(h/4)*i; ctx.beginPath(); ctx.moveTo(pad,y); ctx.lineTo(rect.width-pad,y); ctx.stroke(); }
  const pts = values.map((v,i)=>({x:pad+(w/(values.length-1||1))*i,y:pad+h-(v/max)*h}));
  const g = ctx.createLinearGradient(0,0,rect.width,0); g.addColorStop(0,'#e83e8c'); g.addColorStop(1,'#ffc857');
  ctx.strokeStyle=g; ctx.lineWidth=4; ctx.lineCap='round'; ctx.lineJoin='round';
  ctx.beginPath(); pts.forEach((p,i)=> i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y)); ctx.stroke();
  pts.forEach((p,i)=>{ ctx.fillStyle='#b91d6b'; ctx.beginPath(); ctx.arc(p.x,p.y,5,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='rgba(43,37,48,.72)'; ctx.font='12px Be Vietnam Pro'; ctx.textAlign='center'; ctx.fillText(values[i],p.x,p.y-12); ctx.fillText(keys[i].slice(5),p.x,rect.height-10);});
}
function resetAnalytics(){
  localStorage.removeItem(storeKey); localStorage.removeItem(uidKey); registerVisit();
}

function openModal({title, text='', img='', gallery=[], link=''}) {
  addPostView(); addInteraction();
  const modal = $('#kvhModal'); if(!modal) return;
  $('#kvhModalTitle').innerHTML = title || 'Nội dung';
  $('#kvhModalText').innerHTML = text || '';
  const cover = $('#kvhModalCover');
  if(img){ cover.src = img.trim(); cover.classList.add('show'); } else { cover.src = ''; cover.classList.remove('show'); }
  $('#kvhModalGallery').innerHTML = gallery.map(src => `<img src="${src.trim()}" alt="Ảnh minh họa" onclick="openModal({title:'Xem ảnh', img:this.src})">`).join('');
  $('#kvhModalAction').innerHTML = link ? `<a class="kvh-btn kvh-btn-primary" target="_blank" href="${link}">Mở liên kết chi tiết</a>` : '';
  modal.classList.add('show');
}
function closeModal(){ const m = $('#kvhModal'); if(m) m.classList.remove('show'); }
window.kvhCloseModal = closeModal;

function setupMenu(){
  const toggle = $('#kvhMobileToggle'); const menu = $('#kvhMenu');
  if(toggle && menu) toggle.addEventListener('click', ()=>menu.classList.toggle('open'));
  $$('#kvhMenu a').forEach(a => a.addEventListener('click', ()=> menu?.classList.remove('open')));
}
function scrollToId(id){ document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); addInteraction(); }
window.kvhScroll = scrollToId;
window.kvhAddContent = addContent;
window.kvhResetAnalytics = resetAnalytics;

function trackPageTime(){
  setInterval(() => {
    if(document.hidden) return;
    const d=getData(); d.pageWatchSeconds += 5; saveData(d); renderAnalytics();
  }, 5000);
}
window.addEventListener('resize', renderAnalytics);
window.addEventListener('storage', (e) => { if(e.key === storeKey) renderAnalytics(); });
kvhAnalyticsChannel?.addEventListener('message', (e) => { if(e.data?.type === 'analytics-update') renderAnalytics(); });
setInterval(renderAnalytics, 1000);
document.addEventListener('DOMContentLoaded', () => { setupMenu(); registerVisit(); trackPageTime(); renderAnalytics(); });



// ===== Realtime analytics V4 =====
const kvhChannel = ('BroadcastChannel' in window) ? new BroadcastChannel('kvh_analytics_live_v4') : null;
let kvhSessionStarted = Date.now();
let kvhOnlineId = sessionStorage.getItem('kvh_online_id_v4');
if(!kvhOnlineId){
  kvhOnlineId = crypto.randomUUID ? crypto.randomUUID() : String(Date.now()+Math.random());
  sessionStorage.setItem('kvh_online_id_v4', kvhOnlineId);
}
function kvhBroadcastNow(){
  const data = getData();
  data.lastUpdated = new Date().toISOString();
  data.activeSession = kvhOnlineId;
  localStorage.setItem(storeKey, JSON.stringify(data));
  if(kvhChannel) kvhChannel.postMessage({type:'analytics-update', data});
  window.dispatchEvent(new CustomEvent('kvh-analytics-update', {detail:data}));
}
if(kvhChannel){
  kvhChannel.onmessage = (ev) => {
    if(ev.data?.type === 'analytics-update'){
      renderAnalytics();
      renderRealtimeStatus();
    }
  };
}
window.addEventListener('storage', (ev) => {
  if(ev.key === storeKey){
    renderAnalytics();
    renderRealtimeStatus();
  }
});
function renderRealtimeStatus(){
  const box = document.getElementById('kvhRealtimeStatus');
  if(!box) return;
  const data = getData();
  const last = data.lastUpdated ? new Date(data.lastUpdated) : new Date();
  const sessionSeconds = Math.max(1, Math.round((Date.now() - kvhSessionStarted) / 1000));
  box.innerHTML = `
    <div class="kvh-realtime-row">
      <div><span class="kvh-live-dot"></span><b>Realtime đang chạy</b> · cập nhật lần cuối: ${last.toLocaleTimeString('vi-VN')}</div>
      <button class="kvh-btn kvh-btn-soft" onclick="renderAnalytics();renderRealtimeStatus()">Làm mới ngay</button>
    </div>
    <div class="kvh-mini-metrics">
      <div class="kvh-mini-metric"><span>Thời gian phiên hiện tại</span><strong>${Math.floor(sessionSeconds/60)}p ${sessionSeconds%60}s</strong></div>
      <div class="kvh-mini-metric"><span>Trạng thái</span><strong>Online</strong></div>
      <div class="kvh-mini-metric"><span>Cơ chế đồng bộ</span><strong>Live Local</strong></div>
    </div>
  `;
}
setInterval(renderRealtimeStatus, 1000);
const __kvhOldSaveData = saveData;
saveData = function(data){
  data.lastUpdated = new Date().toISOString();
  __kvhOldSaveData(data);
};
const __kvhOldAddInteraction = addInteraction;
addInteraction = function(n=1){
  const d=getData();
  d.interactions += n;
  d.lastUpdated = new Date().toISOString();
  localStorage.setItem(storeKey, JSON.stringify(d));
  if(kvhChannel) kvhChannel.postMessage({type:'analytics-update', data:d});
  renderAnalytics(); renderRealtimeStatus();
};
const __kvhOldAddContent = addContent;
addContent = function(name, n=1){
  const d=getData();
  d.content[name]=(d.content[name]||0)+n;
  d.interactions += 1;
  d.lastUpdated = new Date().toISOString();
  localStorage.setItem(storeKey, JSON.stringify(d));
  if(kvhChannel) kvhChannel.postMessage({type:'analytics-update', data:d});
  renderAnalytics(); renderRealtimeStatus();
};
const __kvhOldAddPostView = addPostView;
addPostView = function(){
  const d=getData();
  d.postViews+=1;
  d.lastUpdated = new Date().toISOString();
  localStorage.setItem(storeKey, JSON.stringify(d));
  if(kvhChannel) kvhChannel.postMessage({type:'analytics-update', data:d});
  renderAnalytics(); renderRealtimeStatus();
};
document.addEventListener('DOMContentLoaded', () => setTimeout(renderRealtimeStatus, 250));
