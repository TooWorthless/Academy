// Класс сервера с весом
class Server {
    constructor(name, weight) {
        this.name = name;   // Имя сервера
        this.weight = weight; // Вес сервера
        this.currentWeight = 0; // Временный вес для алгоритма
    }
}

// Взвешенный алгоритм Round Robin
class WeightedRoundRobin {
    constructor(servers) {
        this.servers = servers; // Список серверов
        this.index = -1; // Индекс текущего сервера
    }

    // Метод выбора сервера
    getServer() {
        let totalWeight = this.servers.reduce((sum, server) => sum + server.weight, 0);

        // Увеличиваем текущий вес каждого сервера
        for (let server of this.servers) {
            server.currentWeight += server.weight;
        }

        // Выбираем сервер с наибольшим накопленным весом
        let selectedServer = this.servers.reduce((prev, current) =>
            prev.currentWeight > current.currentWeight ? prev : current
        );

        // Уменьшаем его текущий вес на общий вес (чтобы балансировать)
        selectedServer.currentWeight -= totalWeight;

        return selectedServer;
    }

    // Обрабатываем новый запрос
    handleRequest() {
        const selectedServer = this.getServer();
        console.log(`Запрос направлен на сервер: ${selectedServer.name}`);
    }
}

// Создаем серверы с разными весами
const serverA = new Server("Server A", 3);
const serverB = new Server("Server B", 2);
const serverC = new Server("Server C", 1);

// Инициализируем балансировщик
const balancer = new WeightedRoundRobin([serverA, serverB, serverC]);

// Демонстрация работы: 10 запросов
for (let i = 0; i < 10; i++) {
    balancer.handleRequest();
}
