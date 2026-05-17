const dashboardAuthKey = 'kvh_dashboard_logged_in_v1';
const USERNAME = 'HUIT';
const PASSWORD = '1905';
function dashboardIsLogged(){ return sessionStorage.getItem(dashboardAuthKey) === '1'; }
function showDashboard(){ document.getElementById('dashboardLogin')?.classList.add('hidden'); document.getElementById('dashboardContent')?.classList.remove('hidden'); renderAnalytics(); }
function hideDashboard(){ document.getElementById('dashboardLogin')?.classList.remove('hidden'); document.getElementById('dashboardContent')?.classList.add('hidden'); }
function loginDashboard(){
  const u = document.getElementById('dashboardUser')?.value.trim();
  const p = document.getElementById('dashboardPass')?.value.trim();
  const err = document.getElementById('dashboardError');
  if(u === USERNAME && p === PASSWORD){ sessionStorage.setItem(dashboardAuthKey,'1'); showDashboard(); if(err) err.textContent=''; }
  else { if(err) err.textContent = 'Tài khoản hoặc mật khẩu chưa đúng.'; }
}
function logoutDashboard(){ sessionStorage.removeItem(dashboardAuthKey); hideDashboard(); }
document.addEventListener('DOMContentLoaded', () => {
  if(dashboardIsLogged()) showDashboard(); else hideDashboard();
  document.getElementById('dashboardLoginBtn')?.addEventListener('click', loginDashboard);
  document.getElementById('dashboardPass')?.addEventListener('keydown', e => { if(e.key === 'Enter') loginDashboard(); });
});
window.logoutDashboard = logoutDashboard;
