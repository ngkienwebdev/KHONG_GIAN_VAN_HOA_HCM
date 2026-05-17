# Hướng dẫn bật bảng xếp hạng realtime giữa nhiều IP/thiết bị

Bản V5 đã chuẩn bị sẵn Firebase Firestore cho bảng xếp hạng quiz.

## 1. Tạo Firebase Project
Vào Firebase Console, tạo project mới.

## 2. Tạo Web App
Project settings > Your apps > Web app > copy firebaseConfig.

## 3. Dán cấu hình
Mở file:

```text
assets/js/firebase-config.js
```

Đổi:

```js
const KVH_FIREBASE_ENABLED = false;
```

thành:

```js
const KVH_FIREBASE_ENABLED = true;
```

Sau đó dán firebaseConfig thật của bạn vào.

## 4. Bật Firestore Database
Vào Firestore Database > Create database.

## 5. Rule tạm thời để test
Chỉ nên dùng khi test nội bộ:

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /huit_hcm_quiz_leaderboard/{docId} {
      allow read, write: if true;
    }
  }
}
```

Khi chạy chính thức nên siết rule hoặc dùng backend để chống spam.

## 6. Cách hoạt động
- Khi người dùng ở IP/thiết bị khác nộp bài, kết quả được ghi lên Firestore.
- Bảng xếp hạng ở mọi máy đang mở trang quiz sẽ tự cập nhật realtime.
- Nếu chưa bật Firebase, hệ thống tự fallback về localStorage.
