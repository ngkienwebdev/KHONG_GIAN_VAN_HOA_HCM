
const quotes = [
  'Đâu cần thanh niên có, việc gì khó có thanh niên.',
  'Một năm khởi đầu từ mùa xuân. Một đời khởi đầu từ tuổi trẻ.',
  'Không có việc gì khó, chỉ sợ lòng không bền, đào núi và lấp biển, quyết chí ắt làm nên.',
  'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người.',
  'Không có gì quý hơn độc lập, tự do.',
  'Thanh niên phải có đức, có tài.'
];
const news = [
  {
    title:'[HIẾN MÁU TÌNH NGUYỆN 2026] Một giọt máu cho đi - Một cuộc đời ở lại',
    text:'Sáng nay, tại sân trường Đại học Công Thương, những cánh tay tình nguyện đã góp thêm niềm tin, hy vọng cho người bệnh. Mỗi đơn vị máu là một món quà nhân ái, thể hiện tinh thần xung kích và trách nhiệm cộng đồng của tuổi trẻ HUIT.',
    img:'https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1200&auto=format&fit=crop',
    link:'https://www.facebook.com/share/p/18YdYJYFPq/'
  },
  {
    title:'Vinh danh Nhà giáo trẻ tiêu biểu năm học 2025 - 2026',
    text:'Những người truyền lửa trẻ tuổi của HUIT không chỉ giỏi chuyên môn, vững nghiệp vụ mà còn tích cực đồng hành cùng phong trào thanh niên, truyền cảm hứng học tập và sáng tạo cho sinh viên.',
    img:'',
    link:'https://www.facebook.com/share/p/1TfYAssPdf/'
  },
  {
    title:'Tuyên dương Thanh niên tiên tiến làm theo lời Bác',
    text:'Các gương mặt tiêu biểu trong học tập, nghiên cứu, tình nguyện và hoạt động cộng đồng là minh chứng sinh động cho tinh thần học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.',
    img:'',
    link:'https://www.facebook.com/share/p/1AqhhHyyGV/'
  }
];

let quoteIndex = 0, charIndex = 0, deleting = false;
function typeWriter(){
  const el = document.getElementById('kvhTypeText'); if(!el) return;
  const q = quotes[quoteIndex];
  el.textContent = deleting ? q.substring(0, charIndex--) : q.substring(0, charIndex++);
  let speed = deleting ? 22 : 48;
  if(!deleting && charIndex > q.length){ deleting = true; speed = 3600; }
  if(deleting && charIndex < 0){ deleting = false; quoteIndex = (quoteIndex+1)%quotes.length; speed = 500; }
  setTimeout(typeWriter, speed);
}
function renderTicker(){
  const wrap = document.getElementById('kvhTickerTrack'); if(!wrap) return;
  wrap.innerHTML = news.map((n,i)=>`<span class="kvh-ticker-item" data-news="${i}">🔥 ${n.title}</span>`).join('');
  wrap.querySelectorAll('[data-news]').forEach(el => {
    el.addEventListener('click', () => {
      const n = news[Number(el.dataset.news)];
      openModal({ title:n.title, text:`<p>${n.text}</p>`, img:n.img, link:n.link });
      addContent('Trang chủ');
    });
  });
}
function initTabs(){
  document.querySelectorAll('.kvh-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.kvh-tab-btn').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.kvh-tab-panel').forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab)?.classList.add('active');
      addContent('Tư tưởng');
    });
  });
}
document.addEventListener('DOMContentLoaded', () => { renderTicker(); typeWriter(); initTabs(); });
