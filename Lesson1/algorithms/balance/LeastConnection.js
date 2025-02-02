// Моделируем серверы с активными соединениями
class Server {
    constructor(name) {
        this.name = name; // Имя сервера
        this.activeConnections = 0; // Количество активных соединений
    }

    // Метод для добавления соединения
    addConnection() {
        this.activeConnections++;
    }

    // Метод для завершения соединения
    removeConnection() {
        if (this.activeConnections > 0) {
            this.activeConnections--;
        }
    }
}

// Least Connection алгоритм
class LeastConnectionBalancer {
    constructor(servers) {
        this.servers = servers; // Список серверов
    }

    // Метод выбора сервера с наименьшим количеством соединений
    getServer() {
        let leastLoadedServer = this.servers[0];

        for (let server of this.servers) {
            if (server.activeConnections < leastLoadedServer.activeConnections) {
                leastLoadedServer = server;
            }
        }

        return leastLoadedServer;
    }

    // Обработка нового запроса
    handleRequest() {
        const selectedServer = this.getServer();
        console.log(`Запрос направлен на сервер: ${selectedServer.name}`);
        selectedServer.addConnection();
    }

    // Завершение обработки запроса на сервере
    finishRequest(serverName) {
        const server = this.servers.find((srv) => srv.name === serverName);
        if (server) {
            server.removeConnection();
        }
    }

    // Отображение состояния серверов
    printStatus() {
        console.log("Текущее состояние серверов:");
        this.servers.forEach((server) =>
            console.log(`Сервер ${server.name}: ${server.activeConnections} активных соединений`)
        );
    }
}

// Создаем серверы
const server1 = new Server("Server 1");
const server2 = new Server("Server 2");
const server3 = new Server("Server 3");

// Инициализируем балансировщик
const balancer = new LeastConnectionBalancer([server1, server2, server3]);

// Демонстрация работы
balancer.handleRequest(); // Server 1
balancer.handleRequest(); // Server 2
balancer.handleRequest(); // Server 3
balancer.handleRequest(); // Server 1 (теперь у всех серверов равное число соединений, алгоритм начнет по кругу)

balancer.printStatus();

// Завершаем соединение на Server 1
balancer.finishRequest("Server 1");
balancer.printStatus();

// Добавляем еще запрос
balancer.handleRequest(); // Server 1 (т.к. там стало меньше соединений)
balancer.printStatus();
