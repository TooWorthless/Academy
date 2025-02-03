// Функция хеширования (простой вариант)
function hashFunction(key) {
    return key.split('').reduce((hash, char) => hash * 31 + char.charCodeAt(0), 0) % 1000;
}

// Класс сервера
class Server {
    constructor(name) {
        this.name = name;
        this.requests = 0;
    }

    handleRequest() {
        this.requests++;
    }
}

// Класс балансировщика Consistent Hashing
class ConsistentHashingBalancer {
    constructor() {
        this.ring = new Map(); // "Кольцо" хеширования
        this.servers = new Map(); // Список серверов
    }

    // Добавляем сервер в кольцо
    addServer(server) {
        const hash = hashFunction(server.name);
        this.ring.set(hash, server);
        this.servers.set(server.name, server);
        console.log(`Добавлен сервер ${server.name} с хешем ${hash}`);
    }

    // Удаляем сервер
    removeServer(serverName) {
        const hash = hashFunction(serverName);
        this.ring.delete(hash);
        this.servers.delete(serverName);
        console.log(`Удалён сервер ${serverName} с хешем ${hash}`);
    }

    // Находим ближайший сервер по хешу ключа (URL, IP и т. д.)
    getServer(key) {
        const hash = hashFunction(key);
        const sortedHashes = [...this.ring.keys()].sort((a, b) => a - b);

        // Ищем первый сервер с хешем больше или равным нашему
        for (const serverHash of sortedHashes) {
            if (serverHash >= hash) {
                return this.ring.get(serverHash);
            }
        }

        // Если не нашли — берём первый сервер (замыкание кольца)
        return this.ring.get(sortedHashes[0]);
    }

    // Обрабатываем запрос
    handleRequest(key) {
        const server = this.getServer(key);
        server.handleRequest();
        console.log(`Запрос "${key}" направлен на сервер: ${server.name}`);
    }

    // Выводим статус серверов
    printStatus() {
        console.log("Текущее состояние серверов:");
        this.servers.forEach((server) =>
            console.log(`Сервер ${server.name}: ${server.requests} обработанных запросов`)
        );
    }
}

// Создаём балансировщик
const balancer = new ConsistentHashingBalancer();

// Добавляем серверы
balancer.addServer(new Server("Server A"));
balancer.addServer(new Server("Server B"));
balancer.addServer(new Server("Server C"));

// Демонстрация работы
balancer.handleRequest("/home");
balancer.handleRequest("/about");
balancer.handleRequest("/contact");
balancer.handleRequest("/home"); // Повторный запрос должен идти на тот же сервер
balancer.handleRequest("/products");

// Удаляем один сервер и проверяем перераспределение
balancer.removeServer("Server B");
balancer.handleRequest("/about"); // Запрос пойдёт на другой сервер

balancer.printStatus();
