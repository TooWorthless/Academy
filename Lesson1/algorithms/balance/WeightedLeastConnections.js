// Класс сервера
class Server {
    constructor(name, weight) {
        this.name = name; // Имя сервера
        this.weight = weight; // Вес сервера (мощность)
        this.activeConnections = 0; // Количество активных соединений
    }

    // Добавление нового соединения
    addConnection() {
        this.activeConnections++;
    }

    // Завершение соединения
    removeConnection() {
        if (this.activeConnections > 0) {
            this.activeConnections--;
        }
    }
}

// Класс балансировщика Weighted Least Connections
class WeightedLeastConnectionsBalancer {
    constructor(servers) {
        this.servers = servers; // Список серверов
    }

    // Метод выбора сервера
    getServer() {
        let bestServer = null;
        let minLoad = Infinity;

        for (let server of this.servers) {
            // Вычисляем нагрузку: (активные соединения / вес)
            let load = server.activeConnections / server.weight;

            // Ищем сервер с наименьшей нагрузкой
            if (load < minLoad) {
                minLoad = load;
                bestServer = server;
            }
        }

        return bestServer;
    }

    // Обрабатываем новый запрос
    handleRequest() {
        const selectedServer = this.getServer();
        console.log(`Запрос направлен на сервер: ${selectedServer.name}`);
        selectedServer.addConnection();
    }

    // Завершаем обработку запроса
    finishRequest(serverName) {
        const server = this.servers.find((s) => s.name === serverName);
        if (server) {
            server.removeConnection();
        }
    }

    // Выводим статус серверов
    printStatus() {
        console.log("Текущее состояние серверов:");
        this.servers.forEach((server) =>
            console.log(`Сервер ${server.name}: ${server.activeConnections} активных соединений`)
        );
    }
}

// Создаем серверы с разными весами
const serverA = new Server("Server A", 3);
const serverB = new Server("Server B", 2);
const serverC = new Server("Server C", 1);

// Инициализируем балансировщик
const balancer = new WeightedLeastConnectionsBalancer([serverA, serverB, serverC]);

// Демонстрация работы
balancer.handleRequest(); // Server A (самый мощный, получает первый запрос)
balancer.handleRequest(); // Server B
balancer.handleRequest(); // Server C
balancer.handleRequest(); // Server A (так как он мощнее, у него больше лимит)

balancer.printStatus(); // Выводим текущее состояние

// Завершаем соединение на Server A
balancer.finishRequest("Server A");
balancer.printStatus();

// Добавляем еще запрос
balancer.handleRequest(); // Server A (снова, так как теперь он менее загружен)
balancer.printStatus();
