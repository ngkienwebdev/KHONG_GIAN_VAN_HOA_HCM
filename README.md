# Không gian Văn hóa Hồ Chí Minh HUIT - bản V3

## Điểm mới
- Trang thống kê đã có màn hình đăng nhập.
  - Tài khoản: HUIT
  - Mật khẩu: 1905
- Dashboard cập nhật realtime trong trình duyệt, đồng bộ giữa nhiều tab bằng BroadcastChannel/storage event.
- Quiz lấy ngẫu nhiên 30 câu từ ngân hàng câu hỏi Tư tưởng Hồ Chí Minh.
- Trước khi thi có popup nhập Họ tên, Lớp, Khoa.
- Có bảng xếp hạng chi tiết: hạng, họ tên, lớp, khoa, điểm, tỷ lệ, thời gian, ngày thi.
- Nội dung chi tiết của các mốc Hành trình cứu nước đã được viết dài hơn.
- Tủ sách Hồ Chí Minh đã bổ sung thêm nhiều tài liệu.
- Footer đã cập nhật bản quyền và nhà sáng tạo.

## File chính
- index.html: Trang chủ
- dashboard.html: Trang thống kê có đăng nhập
- hanh-trinh.html: Hành trình cứu nước + bảo tàng số
- guong-dien-hinh.html: Gương điển hình
- bang-vang.html: Bảng vàng thành tích
- tu-sach.html: Tủ sách Hồ Chí Minh
- quiz.html: Quiz online + bảng xếp hạng

## File dữ liệu dễ sửa
- assets/js/home.js: Tin nổi bật, câu nói chạy chữ
- assets/js/journey.js: Các mốc thời gian và nội dung chi tiết
- assets/js/examples.js: Gương điển hình và gallery ảnh
- assets/js/achievements.js: Thành tích, giấy khen, bằng khen
- assets/js/library.js: Tủ sách Hồ Chí Minh
- assets/js/quiz.js: Ngân hàng câu hỏi, quiz, bảng xếp hạng
- assets/js/dashboard-auth.js: Tài khoản/mật khẩu trang thống kê
- assets/js/main.js: Modal, menu, thống kê realtime dùng chung

## Lưu ý quan trọng
Bản thống kê và bảng xếp hạng hiện lưu bằng localStorage nên phù hợp demo, trình bày và chạy trên một thiết bị/trình duyệt. Nếu cần realtime thật giữa nhiều người dùng/thiết bị, hãy nối Firebase, Supabase hoặc backend riêng.


## Bản V4 nâng cấp
- Dashboard có panel realtime, đồng bộ giữa các tab cùng trình duyệt bằng BroadcastChannel + storage event.
- Footer nâng cấp dạng glass/gradient hiện đại.
- Quiz chỉ hiện kết quả sau khi làm hết bài.
- Quiz có phần xem lại đáp án đúng/sai sau khi nộp bài.
- Bảng xếp hạng chi tiết hiển thị họ tên, lớp, khoa, điểm, tỷ lệ, thời gian và ngày thi.

## Lưu ý realtime
Realtime hiện là “live local”: cập nhật tức thì trong phiên truy cập/trình duyệt và giữa nhiều tab.
Muốn realtime thật giữa nhiều thiết bị/người dùng, cần nối Firebase Realtime Database, Firestore, Supabase hoặc backend riêng.


## Bản V5 cập nhật
- Đã bỏ câu ở footer: “Dữ liệu tương tác đang được cập nhật theo thời gian thực trong phiên truy cập.”
- Bảng xếp hạng quiz đã chuẩn bị chế độ realtime toàn hệ thống qua Firebase Firestore.
- Xem hướng dẫn bật realtime nhiều IP/thiết bị trong file `FIREBASE_REALTIME_GUIDE.md`.
- Nếu chưa cấu hình Firebase, leaderboard vẫn chạy offline bằng localStorage.
