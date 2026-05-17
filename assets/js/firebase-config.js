// ================= FIREBASE REALTIME LEADERBOARD CONFIG =================
// Bước 1: Tạo Firebase project tại https://console.firebase.google.com/
// Bước 2: Bật Firestore Database
// Bước 3: Vào Project settings > Your apps > Web app, copy firebaseConfig dán vào dưới đây
// Bước 4: Đổi KVH_FIREBASE_ENABLED = true
//
// Lưu ý: Nếu chưa cấu hình Firebase, bảng xếp hạng vẫn chạy offline bằng localStorage,
// nhưng sẽ không realtime giữa nhiều IP/thiết bị.

const KVH_FIREBASE_ENABLED = false;

const firebaseConfig = {
  apiKey: "DAN_API_KEY_CUA_BAN",
  authDomain: "TEN_PROJECT.firebaseapp.com",
  projectId: "TEN_PROJECT",
  storageBucket: "TEN_PROJECT.appspot.com",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID"
};

const KVH_FIREBASE_COLLECTION = "huit_hcm_quiz_leaderboard";
