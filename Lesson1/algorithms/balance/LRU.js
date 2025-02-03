// Класс сервера
class Server {
    constructor(name) {
        this.name = name; // Имя сервера
        this.lastUsed = Date.now(); // Время последнего использования
    }

    // Обработка запроса
    handleRequest() {
        this.lastUsed = Date.now(); // Обновляем время последнего использования
        console.log(`Запрос направлен на сервер: ${this.name}`);
    }
}

// Класс LRU балансировщика
class LruLoadBalancer {
    constructor(servers) {
        this.servers = servers;
    }

    // Метод выбора сервера (самый давно неиспользованный)
    getServer() {
        return this.servers.reduce((leastUsed, server) => 
            server.lastUsed < leastUsed.lastUsed ? server : leastUsed
        );
    }

    // Обрабатываем новый запрос
    handleRequest() {
        const selectedServer = this.getServer();
        selectedServer.handleRequest();
    }

    // Выводим статус серверов
    printStatus() {
        console.log("Текущее состояние серверов:");
        this.servers.forEach(server => {
            console.log(`Сервер ${server.name} | Последнее использование: ${new Date(server.lastUsed).toLocaleTimeString()}`);
        });
    }
}

// Создаем серверы
const serverA = new Server("Server A");
const serverB = new Server("Server B");
const serverC = new Server("Server C");

// Инициализируем балансировщик
const balancer = new LruLoadBalancer([serverA, serverB, serverC]);

// Демонстрация работы
balancer.handleRequest(); // Выберет первый сервер
balancer.handleRequest(); // Выберет второй сервер
balancer.handleRequest(); // Выберет третий сервер
balancer.handleRequest(); // Вернётся к серверу A, так как он дольше всех простаивал

// Печатаем статус серверов
setTimeout(() => {
    balancer.printStatus();
}, 1000);
