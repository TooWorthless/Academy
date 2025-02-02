// Функция хеширования IP-адреса (простая версия)
function hashIP(ip) {
    return ip.split('.').reduce((hash, part) => hash * 31 + Number(part), 0);
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

// Класс балансировщика IP Hash
class IPHashBalancer {
    constructor(servers) {
        this.servers = servers;
    }

    // Метод выбора сервера на основе хеша IP
    getServer(ip) {
        const hash = hashIP(ip);
        const index = hash % this.servers.length;
        return this.servers[index];
    }

    // Обрабатываем новый запрос
    handleRequest(ip) {
        const selectedServer = this.getServer(ip);
        selectedServer.handleRequest();
        console.log(`Запрос от IP ${ip} направлен на сервер: ${selectedServer.name}`);
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
const balancer = new IPHashBalancer([serverA, serverB, serverC]);

// Демонстрация работы
balancer.handleRequest("192.168.1.10"); // Запрос от 192.168.1.10
balancer.handleRequest("192.168.1.11"); // Запрос от 192.168.1.11
balancer.handleRequest("192.168.1.10"); // Снова от 192.168.1.10 (должен пойти на тот же сервер)
balancer.handleRequest("10.0.0.5"); // Новый IP

balancer.printStatus();
