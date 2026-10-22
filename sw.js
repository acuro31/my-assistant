// 오프라인 기능은 없음. 빈 fetch 처리기는 화면을 열 때마다 서비스 워커를 깨우기만 해서 두지 않음
self.addEventListener('install', () => self.skipWaiting());
