
const honorData = [
  { id:'bac', title:'Thanh niên tiên tiến làm theo lời Bác', theme:'kvh-honor-red', icon:'⭐', text:'Danh sách các gương thanh niên tiêu biểu trong học tập, rèn luyện, cống hiến và lan tỏa giá trị sống đẹp.', images:['https://i.postimg.cc/GpPgNkSY/1.png','https://i.postimg.cc/8ccyjxkf/10.png','https://i.postimg.cc/7hhBfjPM/11.png','https://i.postimg.cc/5yrsvpjB/12.png','https://i.postimg.cc/BZ7YdZNS/13.png','https://i.postimg.cc/qqF1nQgP/14.png','https://i.postimg.cc/J7Y697KG/15.png','https://i.postimg.cc/026WxgHH/16.png'] },
  { id:'doan', title:'Cán bộ Đoàn - Hội tiêu biểu', theme:'kvh-honor-blue', iconImg:'https://upload.wikimedia.org/wikipedia/vi/0/09/Huy_Hi%E1%BB%87u_%C4%90o%C3%A0n.png', text:'Vinh danh những cán bộ Đoàn - Hội năng động, trách nhiệm, sáng tạo và tiên phong trong phong trào sinh viên.', images:['https://i.postimg.cc/YCnxZdtZ/1.png','https://i.postimg.cc/HxC8hM87/10.png','https://i.postimg.cc/V6c0Vt02/11.png','https://i.postimg.cc/QNmKfH8T/12.png','https://i.postimg.cc/ncLjgprg/13.png','https://i.postimg.cc/cLgK1hQ8/14.png'] },
  { id:'hoi', title:'Sinh viên 5 tốt tiêu biểu cấp trường', theme:'kvh-honor-pink', iconImg:'https://upload.wikimedia.org/wikipedia/vi/thumb/d/dd/Huy_hi%E1%BB%87u_H%E1%BB%99i_SVVN.svg/1280px-Huy_hi%E1%BB%87u_H%E1%BB%99i_SVVN.svg.png', text:'Lan tỏa những sinh viên tiêu biểu ở các tiêu chí học tập, đạo đức, tình nguyện, hội nhập và thể lực.', images:['https://i.postimg.cc/5N6CRbkx/1.png','https://i.postimg.cc/QN67mHmP/2.png','https://i.postimg.cc/kMjSsBw3/3.png','https://i.postimg.cc/2jHWGVTY/4.png','https://i.postimg.cc/bvjSrbYy/5.png'] },
  { id:'giaovien', title:'Nhà giáo trẻ tiêu biểu', theme:'kvh-honor-purple', icon:'🎓', text:'Tôn vinh những nhà giáo trẻ tận tâm, sáng tạo, truyền cảm hứng học tập và nghiên cứu cho sinh viên HUIT.', images:['https://i.postimg.cc/3Rq6Fn0X/1.png','https://i.postimg.cc/KzWVDJ3n/2.png','https://i.postimg.cc/V6hTWD0W/3.png','https://i.postimg.cc/ZRQgxVvL/4.png','https://i.postimg.cc/br25Ck13/5.png'] }
];
function renderHonors(){
  const wrap = document.getElementById('kvhHonorGrid'); if(!wrap) return;
  wrap.innerHTML = honorData.map((h,i) => `
    <article class="kvh-honor-card ${h.theme}" data-index="${i}">
      ${h.iconImg ? `<img class="kvh-honor-icon" src="${h.iconImg}" alt="">` : `<div class="kvh-honor-emoji">${h.icon}</div>`}
      <h3 class="kvh-honor-title">${h.title}</h3>
      <div class="kvh-honor-action">Xem danh sách »</div>
    </article>`).join('');
  wrap.querySelectorAll('[data-index]').forEach(el => el.addEventListener('click', () => {
    const h = honorData[Number(el.dataset.index)];
    openModal({title:h.title, text:`<p>${h.text}</p>`, gallery:h.images});
    addContent('Gương điển hình');
  }));
}
document.addEventListener('DOMContentLoaded', renderHonors);
