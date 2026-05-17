
const achievementData = [
  { year:'Năm học 2025 - 2026', items:[{ title:'Đang cập nhật thành tích mới...', meta:'Có thể bổ sung giấy khen/bằng khen mới tại đây.', img:'' }] },
  { year:'Năm học 2024 - 2025', items:[
    { title:'Bằng khen: Hoàn thành tốt nhiệm vụ trong công tác Hội và phong trào sinh viên Thành phố.', img:'https://i.postimg.cc/xT39QNk1/17759797866846062832999507798652.jpg' },
    { title:'Bằng khen: Hoàn thành tốt nhiệm vụ trong công tác Đoàn và phong trào thanh niên khu vực Trường học trực thuộc Thành Đoàn.', img:'https://i.postimg.cc/5tN0Tqnb/1775979630314420865579778540449.jpg' }
  ] },
  { year:'Giai đoạn 2020 - 2025', items:[
    { title:'Bằng khen Đoàn TNCS Hồ Chí Minh: Tài trợ, đồng hành cùng công tác Đội và phong trào thanh niên của tỉnh Gia Lai, giai đoạn 2020 - 2025.', img:'https://i.postimg.cc/m2vCvqHf/177598025292945887650459368505.jpg' }
  ] },
  { year:'Giai đoạn 2023 - 2024', items:[
    { title:'Bằng khen: Đã có thành tích xuất sắc trong hoạt động hè và chiến dịch tình nguyện mùa hè năm 2023.', img:'https://i.postimg.cc/L5fL5BcG/17759804119765640100651833659791.jpg' },
    { title:'Bằng khen: Hoàn thành tốt nhiệm vụ trong công tác Hội và phong trào sinh viên Thành phố năm học 2023 - 2024.', img:'https://i.postimg.cc/G3YykKNw/17759804875103428681758681828689.jpg' },
    { title:'Bằng khen: Đã có thành tích xuất sắc trong Chiến dịch Xuân Tình Nguyện lần thứ 16 - Năm 2024.', img:'https://i.postimg.cc/m2Bt7sCt/17759805504048646737124821434762.jpg' },
    { title:'Bằng khen: Hoàn thành tốt nhiệm vụ trong công tác Đoàn và phong trào thanh niên năm học 2023 - 2024.', img:'https://i.postimg.cc/zDjJZRHD/17759806429335671105990705789210.jpg' },
    { title:'Giấy khen: Đạt danh hiệu Cán bộ Đoàn tiêu biểu cấp Khối năm 2024.', meta:'Đại diện: Đ/c Nguyễn Minh Ngọc - 07/11/2024', img:'' },
    { title:'Giấy khen: Đạt danh hiệu Tập thể tiên tiến làm theo lời Bác giai đoạn 2023 - 2024.', meta:'Đại diện: Đoàn trường ĐH Công Thương TP.HCM - 07/11/2024', img:'' }
  ] },
  { year:'Năm 2022', items:[
    { title:'Giấy khen: Đạt thành tích xuất sắc trong công tác Đoàn và phong trào thanh niên năm 2022.', meta:'Đại diện: Đoàn trường / cá nhân tiêu biểu', img:'' },
    { title:'Bằng khen: Đạt nhiều đóng góp tích cực trong Chương trình Trí thức Khoa học trẻ tình nguyện TP.HCM lần thứ 13 năm 2022.', img:'' }
  ] }
];
function renderAchievements(){
  const wrap = document.getElementById('kvhAchievementList'); if(!wrap) return;
  wrap.innerHTML = achievementData.map((group,gi)=>`
    <section class="kvh-achievement-year">
      <h3>${group.year}</h3>
      <ul class="kvh-cert-list">
        ${group.items.map((item,ii)=>`
          <li class="kvh-cert-item" data-gi="${gi}" data-ii="${ii}">
            <b>${item.title.split(':')[0]}:</b>${item.title.includes(':') ? item.title.substring(item.title.indexOf(':')+1) : item.title}
            ${item.meta ? `<span class="kvh-cert-meta">${item.meta}</span>` : ''}
          </li>`).join('')}
      </ul>
    </section>`).join('');
  wrap.querySelectorAll('[data-gi]').forEach(el => el.addEventListener('click', () => {
    const item = achievementData[Number(el.dataset.gi)].items[Number(el.dataset.ii)];
    openModal({
      title:item.title,
      text:`<p>${item.meta || 'Nhấn vào ảnh để xem chi tiết. Nếu mục này chưa có ảnh, bạn có thể thay link ảnh trong file achievements.js.'}</p>`,
      img:item.img || '',
    });
    addContent('Bảng vàng');
  }));
}
document.addEventListener('DOMContentLoaded', renderAchievements);
