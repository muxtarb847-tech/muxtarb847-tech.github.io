// База данных твоих 5 официальных приложений (Milli Proqram Vitrini)
const apps = [
    {
        id: 1,
        name: "BakuGo Master",
        developer: "azplaystore Team",
        rating: "4.9",
        size: "24 MB",
        icon: "https://flaticon.com",
        desc: "Usta və müştəriləri birləşdirən milli platforma.",
        apkUrl: "apks/bakugo-usta.apk"
    },
    {
        id: 2,
        name: "BakuGo Kargo",
        developer: "azplaystore Team",
        rating: "4.8",
        size: "18 MB",
        icon: "https://flaticon.com",
        desc: "Çatdırılma və logistika xidmətlərinin sürətli izlənilməsi.",
        apkUrl: "apks/bakugo-kargo.apk"
    },
    {
        id: 3,
        name: "Milli POS Terminal",
        developer: "azplaystore App",
        rating: "4.7",
        size: "12 MB",
        icon: "https://flaticon.com",
        desc: "Kiçik və orta sahibkarlıq üçün mobil kassa həlli.",
        apkUrl: "apks/milli-pos.apk"
    }
];

// Функция для вывода списка приложений на главную страницу
function renderApps() {
    const container = document.getElementById('appsContainer');
    if (!container) return;

    container.innerHTML = apps.map(app => `
        <div class="app-card" onclick="window.openAppDetails(${app.id})">
            <img src="${app.icon}" alt="${app.name}" class="app-icon">
            <div class="app-info">
                <h3>${app.name}</h3>
                <p class="dev">${app.developer}</p>
                <div class="rating">
                    <span class="material-icons">star</span>
                    <span>${app.rating}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Открытие модального окна приложения
window.openAppDetails = function(id) {
    const app = apps.find(a => a.id === id);
    if (!app) return;

    document.getElementById('modalIcon').src = app.icon;
    document.getElementById('modalName').innerText = app.name;
    document.getElementById('modalDeveloper').innerText = app.developer;
    document.getElementById('modalRating').innerText = app.rating;
    document.getElementById('modalSize').innerText = app.size;
    document.getElementById('modalDesc').innerText = app.desc;
    document.getElementById('modalDownloadLink').href = app.apkUrl; // Исправлено с app.apku

    const modal = document.getElementById('appModal');
    if (modal) {
        modal.style.display = 'flex';
    }
};

// Закрытие модального окна
window.closeAppDetails = function() {
    const modal = document.getElementById('appModal');
    if (modal) {
        modal.style.display = 'none';
    }
};

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    renderApps();

    // Закрытие модального окна при клике вне его области
    const modal = document.getElementById('appModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                window.closeAppDetails();
            }
        });
    }
});
