// Список серверов с географическими координатами
const servers = [
    { name: "Server US", location: { lat: 37.7749, lon: -122.4194 } }, // Сан-Франциско, США
    { name: "Server EU", location: { lat: 48.8566, lon: 2.3522 } },    // Париж, Франция
    { name: "Server Asia", location: { lat: 35.6895, lon: 139.6917 } } // Токио, Япония
];

// Функция вычисления расстояния между точками (формула Хаверсина)
function getDistance(lat1, lon1, lat2, lon2) {
    const toRad = (angle) => (angle * Math.PI) / 180;
    const R = 6371; // Радиус Земли в км
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Расстояние в километрах
}

// Функция выбора ближайшего сервера
function getNearestServer(clientLocation) {
    return servers.reduce((nearest, server) => {
        const distance = getDistance(
            clientLocation.lat, clientLocation.lon,
            server.location.lat, server.location.lon
        );
        return distance < nearest.distance ? { server, distance } : nearest;
    }, { server: null, distance: Infinity }).server;
}

// Пример: клиент из Берлина (Германия)
const clientLocation = { lat: 52.5200, lon: 13.4050 };

const nearestServer = getNearestServer(clientLocation);
console.log(`Клиенту назначен сервер: ${nearestServer.name}`);
