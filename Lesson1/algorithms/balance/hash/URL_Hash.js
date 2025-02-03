// Функция хеширования URL (простая версия)
function hashURL(url) {
    return url.split('').reduce((hash, char) => hash * 31 + char.charCodeAt(0), 0);
}

// Класс сервера
class Server {
    constructor(name) {
        this.name = name;
        this.requests = 0; // Количество обработанных запросов
    }

    handleRequest() {
        this.requests++;
    }
}

// Класс балансировщика URL Hash
class URLHashBalancer {
    constructor(servers) {
        this.servers = servers;
    }

    // Метод выбора сервера на основе хеша URL
    getServer(url) {
        const hash = hashURL(url);
        const index = hash % this.servers.length;
        return this.servers[index];
    }

    // Обрабатываем новый запрос
    handleRequest(url) {
        const selectedServer = this.getServer(url);
        selectedServer.handleRequest();
        console.log(`Запрос на ${url} направлен на сервер: ${selectedServer.name}`);
    }

    // Выводим статус серверов
    printStatus() {
        console.log("Текущее состояние серверов:");
        this.servers.forEach((server) =>
            console.log(`Сервер ${server.name}: ${server.requests} обработанных запросов`)
        );
    }
}

// Создаем серверы
const serverA = new Server("Server A");
const serverB = new Server("Server B");
const serverC = new Server("Server C");

// Инициализируем балансировщик
const balancer = new URLHashBalancer([serverA, serverB, serverC]);

// Демонстрация работы
balancer.handleRequest("/home"); // Запрос на страницу /home
balancer.handleRequest("/about"); // Запрос на страницу /about
balancer.handleRequest("/contact"); // Запрос на страницу /contact
balancer.handleRequest("/home"); // Повторный запрос на /home (должен пойти на тот же сервер)
balancer.handleRequest("/products"); // Запрос на /products

balancer.printStatus();
