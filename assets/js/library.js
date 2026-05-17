
const libraryData = [
  {
    "id": 1,
    "category": "van-kien",
    "title": "Đường Kách mệnh",
    "desc": "Tập hợp các bài giảng của Nguyễn Ái Quốc tại Quảng Châu năm 1927.",
    "img": "https://stbook.vn/static/covers/CP111BK120250520163836/cover.clsbi",
    "details": "Tác phẩm có vai trò quan trọng trong việc truyền bá chủ nghĩa Mác - Lênin vào Việt Nam, chuẩn bị về tư tưởng và tổ chức cho việc thành lập Đảng Cộng sản Việt Nam.",
    "link": "https://vi.wikipedia.org/wiki/%C4%90%C6%B0%E1%BB%9Dng_K%C3%A1ch_m%E1%BB%87nh"
  },
  {
    "id": 2,
    "category": "van-kien",
    "title": "Bản án chế độ thực dân Pháp",
    "desc": "Tác phẩm tố cáo tội ác của chủ nghĩa thực dân, thức tỉnh tinh thần đấu tranh.",
    "img": "https://baotanglichsu.vn/DataFiles/2022/08/News/Tieng%20Viet/16.8.2022/Sach%20Ban%20an%20che%20do%20thuc%20dan%20phap%20luu%20giu%20tai%20BTLSQG/2.jpg",
    "details": "Tác phẩm phê phán hệ thống thuộc địa của thực dân Pháp, đồng thời thể hiện tiếng nói mạnh mẽ bênh vực các dân tộc bị áp bức.",
    "link": "https://vi.wikipedia.org/wiki/B%E1%BA%A3n_%C3%A1n_ch%E1%BA%BF_%C4%91%E1%BB%99_th%E1%BB%B1c_d%C3%A2n_Ph%C3%A1p"
  },
  {
    "id": 3,
    "category": "van-kien",
    "title": "Tuyên ngôn Độc lập",
    "desc": "Bản hùng ca khai sinh nước Việt Nam Dân chủ Cộng hòa ngày 2/9/1945.",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYsUaOY-3ET7xrzXa7AWgVbdQ0gL2mh0Xhg&s",
    "details": "Văn kiện lịch sử khẳng định quyền độc lập, tự do của dân tộc Việt Nam trước toàn thế giới.",
    "link": "https://baotanglichsu.vn/vi/Articles/3097/19484/tuyen-ngon-djoc-lap2-9-1945-ban-tuyen-bo-ve-nhan-quyen-o-viet-nam.html"
  },
  {
    "id": 4,
    "category": "van-kien",
    "title": "Di chúc Chủ tịch Hồ Chí Minh",
    "desc": "Những lời căn dặn tâm huyết cuối cùng của Người dành cho toàn Đảng, toàn dân.",
    "img": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935279170067.jpg",
    "details": "Di chúc là văn kiện lịch sử vô giá, kết tinh tư tưởng, đạo đức, phong cách và niềm tin của Chủ tịch Hồ Chí Minh vào tương lai dân tộc.",
    "link": "https://baotanglichsu.vn/vi/Articles/3097/74657/di-chuc-cua-chu-tich-ho-chi-minh-van-kien-lich-su-vo-gia.html"
  },
  {
    "id": 5,
    "category": "thi-ca",
    "title": "Nhật ký trong tù",
    "desc": "Tập thơ chữ Hán thể hiện ý chí kiên cường và tinh thần lạc quan cách mạng.",
    "img": "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m40hyha72b1s8b@resize_w450_nl.webp",
    "details": "Tập thơ được sáng tác trong thời gian Người bị giam giữ tại Quảng Tây, Trung Quốc, thể hiện chất thép và chất tình trong tâm hồn Hồ Chí Minh.",
    "link": "https://sonoivu.hochiminhcity.gov.vn/documents/20197/109501/Nhat+Ky+Trong+Tu.pdf/fdc56a56-16d4-4e9b-b05a-253d28a1f255"
  },
  {
    "id": 6,
    "category": "van-kien",
    "title": "Lời kêu gọi toàn quốc kháng chiến",
    "desc": "Lời hiệu triệu toàn dân đứng lên bảo vệ nền độc lập dân tộc năm 1946.",
    "img": "https://file3.qdnd.vn/data/images/0/2021/12/18/phucthang/loi-keu-goi-toan-quoc-khang-chien.jpg",
    "details": "Văn kiện thể hiện ý chí quyết tâm bảo vệ độc lập, tinh thần toàn dân kháng chiến và niềm tin tất thắng của dân tộc Việt Nam.",
    "link": "https://hochiminh.vn/tac-pham-cua-chu-tich-ho-chi-minh/loi-keu-goi-toan-quoc-khang-chien-1946-2"
  },
  {
    "id": 7,
    "category": "van-kien",
    "title": "Sửa đổi lối làm việc",
    "desc": "Tác phẩm quan trọng về xây dựng Đảng, rèn luyện cán bộ và chống chủ nghĩa cá nhân.",
    "img": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935279175284.jpg",
    "details": "Tác phẩm nhấn mạnh tác phong làm việc khoa học, dân chủ, gần dân, nói đi đôi với làm và thường xuyên tự phê bình, phê bình.",
    "link": "https://hochiminh.vn/tac-pham-cua-chu-tich-ho-chi-minh/sua-doi-loi-lam-viec-1947-3"
  },
  {
    "id": 8,
    "category": "van-kien",
    "title": "Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân",
    "desc": "Bài viết nổi bật về rèn luyện đạo đức cách mạng của cán bộ, đảng viên.",
    "img": "https://www.nxbctqg.org.vn/img_data/images/900104892145_nang_cao_dao_duc_cach_mang.jpg",
    "details": "Nội dung nhấn mạnh việc chống chủ nghĩa cá nhân, giữ gìn phẩm chất cần, kiệm, liêm, chính, chí công vô tư.",
    "link": "https://hochiminh.vn/tac-pham-cua-chu-tich-ho-chi-minh/nang-cao-dao-duc-cach-mang-quet-sach-chu-nghia-ca-nhan-1969-4"
  },
  {
    "id": 9,
    "category": "van-kien",
    "title": "Dân vận",
    "desc": "Bài báo ngắn gọn nhưng sâu sắc về vai trò của nhân dân và công tác dân vận.",
    "img": "https://file1.dangcongsan.vn/data/0/images/2020/10/12/upload_2676/dan-van.jpg",
    "details": "Tác phẩm nêu quan điểm: việc dân vận rất quan trọng, dân vận khéo thì việc gì cũng thành công.",
    "link": "https://hochiminh.vn/tac-pham-cua-chu-tich-ho-chi-minh/dan-van-1949-5"
  },
  {
    "id": 10,
    "category": "thi-ca",
    "title": "Thơ Hồ Chí Minh",
    "desc": "Tuyển chọn các bài thơ tiêu biểu của Chủ tịch Hồ Chí Minh.",
    "img": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935235227934.jpg",
    "details": "Thơ của Người giàu tinh thần yêu nước, yêu thiên nhiên, yêu con người, đồng thời thể hiện bản lĩnh cách mạng và tâm hồn nhân văn.",
    "link": "#"
  },
  {
    "id": 11,
    "category": "media",
    "title": "Bác Hồ với thiếu nhi",
    "desc": "Tư liệu hình ảnh và câu chuyện về tình yêu thương của Bác dành cho thiếu nhi.",
    "img": "https://cdn.noron.vn/2019/05/16/4b210b0af81b83a39fe4991560529b63.jpg?w=568",
    "details": "Chủ đề phù hợp để xây dựng album ảnh, infographic, video ngắn hoặc hoạt động kể chuyện trong sinh hoạt chi đoàn.",
    "link": "#"
  },
  {
    "id": 12,
    "category": "media",
    "title": "Bác Hồ với thanh niên",
    "desc": "Tư liệu về lời dạy của Bác đối với thanh niên và thế hệ trẻ Việt Nam.",
    "img": "https://file1.dangcongsan.vn/data/0/images/2021/03/26/upload_2676/bac-ho-voi-thanh-nien.jpg",
    "details": "Chủ đề giúp sinh viên hiểu rõ hơn trách nhiệm học tập, rèn luyện, cống hiến và phụng sự Tổ quốc.",
    "link": "#"
  },
  {
    "id": 13,
    "category": "media",
    "title": "Bác Hồ với giáo dục",
    "desc": "Tư liệu về quan điểm trồng người, giáo dục đạo đức và xây dựng con người mới.",
    "img": "https://cdnmedia.baotintuc.vn/Upload/DmtgOUlHWBO5POIHzIwr1A/files/2020/09/04/bac-ho-040920.jpg",
    "details": "Nội dung phù hợp cho chuyên đề giáo dục lý tưởng, đạo đức, lối sống và trách nhiệm công dân trong sinh viên.",
    "link": "#"
  },
  {
    "id": 14,
    "category": "van-kien",
    "title": "Con đường dẫn tôi đến chủ nghĩa Lênin",
    "desc": "Bài viết kể lại bước ngoặt tư tưởng của Nguyễn Ái Quốc khi đến với chủ nghĩa Mác - Lênin.",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Lenin_CL_Colour.jpg/640px-Lenin_CL_Colour.jpg",
    "details": "Tác phẩm giúp người học hiểu quá trình Nguyễn Ái Quốc tìm thấy con đường giải phóng dân tộc đúng đắn.",
    "link": "#"
  },
  {
    "id": 15,
    "category": "media",
    "title": "Bảo tàng Hồ Chí Minh trực tuyến",
    "desc": "Liên kết tư liệu, hình ảnh, không gian trưng bày và tham quan số.",
    "img": "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1200&auto=format&fit=crop",
    "details": "Có thể dùng để gắn tour 3D, video thuyết minh, ảnh tư liệu và câu hỏi tương tác trong không gian văn hóa số.",
    "link": "https://map3d.visithcmc.vn/?startscene=scene_bnr_view4&startactions=lookat%280,0,120,0,0%29%3B"
  }
];
let currentFilter = 'all';
function catName(c){ return c==='van-kien'?'Văn kiện':c==='thi-ca'?'Thi ca':'Tư liệu'; }
function renderLibrary(){
  const grid = document.getElementById('kvhLibraryGrid'); if(!grid) return;
  const q = (document.getElementById('kvhLibrarySearch')?.value || '').toLowerCase().trim();
  const items = libraryData.filter(b => (currentFilter==='all' || b.category===currentFilter) && (b.title.toLowerCase().includes(q) || b.desc.toLowerCase().includes(q) || b.details.toLowerCase().includes(q)));
  grid.innerHTML = items.map((b,i)=>`
    <article class="kvh-card kvh-book" data-id="${b.id}">
      <img class="kvh-book-img" src="${b.img.trim()}" alt="${b.title}" onerror="this.style.display='none'">
      <div class="kvh-book-body">
        <span class="kvh-badge">${catName(b.category)}</span>
        <h3>${b.title}</h3>
        <p>${b.desc}</p>
      </div>
    </article>`).join('');
  document.getElementById('kvhLibraryEmpty').style.display = items.length ? 'none' : 'block';
  grid.querySelectorAll('[data-id]').forEach(el => el.addEventListener('click', () => {
    const b = libraryData.find(x => x.id === Number(el.dataset.id));
    openModal({title:b.title, text:`<p><b>${b.desc}</b></p><p>${b.details}</p>`, img:b.img, link:b.link});
    addContent('Tủ sách');
  }));
}
document.addEventListener('DOMContentLoaded', () => {
  renderLibrary();
  document.getElementById('kvhLibrarySearch')?.addEventListener('input', renderLibrary);
  document.querySelectorAll('.kvh-filter-btn').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.kvh-filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active'); currentFilter = btn.dataset.filter; renderLibrary();
  }));
});
