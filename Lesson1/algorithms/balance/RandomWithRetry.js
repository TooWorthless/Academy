// Класс сервера
class Server {
    constructor(name, failureRate = 0) {
        this.name = name;
        this.requests = 0;
        this.failureRate = failureRate; // Вероятность отказа сервера (0 - всегда доступен, 1 - всегда сбоит)
    }

    handleRequest() {
        if (Math.random() < this.failureRate) {
            throw new Error(`Сервер ${this.name} временно недоступен`);
        }
        this.requests++;
    }
}

// Класс балансировщика Random with Retry
class RandomWithRetryBalancer {
    constructor(servers, maxRetries = 3) {
        this.servers = servers;
        this.maxRetries = maxRetries;
    }

    // Метод выбора случайного сервера
    getRandomServer() {
        return this.servers[Math.floor(Math.random() * this.servers.length)];
    }

    // Обрабатываем запрос с повторными попытками
    handleRequest(request) {
        let attempts = 0;
        while (attempts < this.maxRetries) {
            const server = this.getRandomServer();
            try {
                server.handleRequest();
                console.log(`Запрос "${request}" обработан сервером: ${server.name}`);
                return;
            } catch (error) {
                console.log(`Попытка ${attempts + 1}: ${error.message}`);
                attempts++;
            }
        }
        console.log(`Запрос "${request}" не удалось обработать после ${this.maxRetries} попыток`);
    }

    // Выводим состояние серверов
    printStatus() {
        console.log("Текущее состояние серверов:");
        this.servers.forEach((server) =>
            console.log(`Сервер ${server.name}: ${server.requests} обработанных запросов`)
        );
    }
}

// Создаём серверы с разной вероятностью отказа
const serverA = new Server("Server A", 0.2); // 20% отказов
const serverB = new Server("Server B", 0.5); // 50% отказов
const serverC = new Server("Server C", 0.1); // 10% отказов

// Инициализируем балансировщик
const balancer = new RandomWithRetryBalancer([serverA, serverB, serverC]);

// Демонстрация работы
balancer.handleRequest("/home");
balancer.handleRequest("/about");
balancer.handleRequest("/contact");
balancer.handleRequest("/home");
balancer.handleRequest("/products");

balancer.printStatus();
