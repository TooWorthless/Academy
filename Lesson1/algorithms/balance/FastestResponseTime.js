// Класс сервера
class Server {
    constructor(name, baseLatency) {
        this.name = name;
        this.requests = 0;
        this.baseLatency = baseLatency; // Базовая задержка сервера в мс
    }

    // Симулируем измерение времени отклика
    measureResponseTime() {
        return this.baseLatency + Math.random() * 50; // Добавляем случайную задержку
    }

    handleRequest() {
        this.requests++;
    }
}

// Класс балансировщика Fastest Response Time
class FastestResponseBalancer {
    constructor(servers) {
        this.servers = servers;
    }

    // Получаем сервер с наименьшим временем отклика
    getFastestServer() {
        return this.servers
            .map((server) => ({ server, latency: server.measureResponseTime() })) // Измеряем отклик
            .sort((a, b) => a.latency - b.latency)[0].server; // Выбираем самый быстрый сервер
    }

    // Обрабатываем запрос
    handleRequest(request) {
        const fastestServer = this.getFastestServer();
        fastestServer.handleRequest();
        console.log(`Запрос "${request}" обработан сервером: ${fastestServer.name}`);
    }

    // Выводим статус серверов
    printStatus() {
        console.log("Текущее состояние серверов:");
        this.servers.forEach((server) =>
            console.log(`Сервер ${server.name}: ${server.requests} обработанных запросов`)
        );
    }
}

// Создаём серверы с разными базовыми задержками
const serverA = new Server("Server A", 100); // 100 мс
const serverB = new Server("Server B", 50);  // 50 мс (самый быстрый)
const serverC = new Server("Server C", 120); // 120 мс

// Инициализируем балансировщик
const balancer = new FastestResponseBalancer([serverA, serverB, serverC]);

// Демонстрация работы
balancer.handleRequest("/home");
balancer.handleRequest("/about");
balancer.handleRequest("/contact");
balancer.handleRequest("/home");
balancer.handleRequest("/products");

balancer.printStatus();
