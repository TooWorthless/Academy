// Класс сервера
class Server {
    constructor(name, maxRequests) {
        this.name = name; // Имя сервера
        this.maxRequests = maxRequests; // Максимальное количество запросов
        this.currentRequests = 0; // Текущее количество активных запросов
    }

    // Метод добавления запроса
    addRequest() {
        if (this.currentRequests < this.maxRequests) {
            this.currentRequests++;
            return true; // Запрос принят
        }
        return false; // Сервер перегружен
    }

    // Метод завершения запроса
    removeRequest() {
        if (this.currentRequests > 0) {
            this.currentRequests--;
        }
    }

    // Проверяем, доступен ли сервер
    isAvailable() {
        return this.currentRequests < this.maxRequests;
    }

    // Выводим состояние сервера
    getStatus() {
        return `${this.name}: ${this.currentRequests}/${this.maxRequests} запросов`;
    }
}

// Балансировщик Chained Failover
class ChainedFailoverBalancer {
    constructor(servers) {
        this.servers = servers; // Список серверов (в фиксированной цепочке)
    }

    // Метод обработки запроса
    handleRequest(request) {
        console.log(`🔄 Обработка запроса "${request}"...`);
        
        for (let server of this.servers) {
            if (server.addRequest()) {
                console.log(`✅ Запрос "${request}" направлен на ${server.name} (${server.currentRequests}/${server.maxRequests})`);
                return;
            }
            console.log(`⚠️ ${server.name} перегружен (${server.currentRequests}/${server.maxRequests})`);
        }

        console.log(`🚨 Ошибка: нет доступных серверов для "${request}"`);
    }

    // Завершаем обработку запроса
    finishRequest(serverName) {
        const server = this.servers.find((s) => s.name === serverName);
        if (server) {
            server.removeRequest();
            console.log(`🔽 Освобождён 1 запрос на ${server.name} (${server.currentRequests}/${server.maxRequests})`);
        }
    }

    // Выводим статус серверов
    printStatus() {
        console.log("\n📊 Текущее состояние серверов:");
        this.servers.forEach(server => console.log(server.getStatus()));
        console.log(""); // Пустая строка для читаемости
    }
}

// Создаём серверы с фиксированными лимитами
const serverA = new Server("Server A", 5);
const serverB = new Server("Server B", 3);
const serverC = new Server("Server C", 2);

// Инициализируем балансировщик
const balancer = new ChainedFailoverBalancer([serverA, serverB, serverC]);

// Демонстрация работы Chained Failover
balancer.handleRequest("/login");
balancer.handleRequest("/dashboard");
balancer.handleRequest("/api/data");
balancer.handleRequest("/profile");
balancer.handleRequest("/settings");
balancer.handleRequest("/notifications"); // Должен переключиться на Server B
balancer.handleRequest("/logout");
balancer.handleRequest("/home");
balancer.handleRequest("/admin"); // Должен переключиться на Server C
balancer.handleRequest("/error");
balancer.printStatus();

// Завершаем несколько запросов
balancer.finishRequest("Server A");
balancer.finishRequest("Server B");
balancer.printStatus();

// Новые запросы после освобождения мест
balancer.handleRequest("/new-request");
balancer.printStatus();
