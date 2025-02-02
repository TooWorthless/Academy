// Класс сервера
class Server {
    constructor(name) {
        this.name = name; // Имя сервера
        this.activeConnections = 0; // Количество активных соединений
        this.responseTimes = []; // Храним историю времени откликов
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

    // Метод для обновления времени отклика
    updateResponseTime(time) {
        this.responseTimes.push(time);
        if (this.responseTimes.length > 5) {
            this.responseTimes.shift(); // Храним последние 5 измерений
        }
    }

    // Получаем среднее время отклика
    getAverageResponseTime() {
        if (this.responseTimes.length === 0) return Infinity;
        return this.responseTimes.reduce((sum, t) => sum + t, 0) / this.responseTimes.length;
    }
}

// Балансировщик Least Response Time
class LeastResponseTimeBalancer {
    constructor(servers) {
        this.servers = servers; // Список серверов
    }

    // Метод выбора сервера
    getServer() {
        let bestServer = null;
        let minResponseTime = Infinity;

        for (let server of this.servers) {
            let avgTime = server.getAverageResponseTime();

            if (
                avgTime < minResponseTime ||
                (avgTime === minResponseTime && server.activeConnections < bestServer.activeConnections)
            ) {
                minResponseTime = avgTime;
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

    // Обновляем время отклика сервера
    updateResponseTime(serverName, responseTime) {
        const server = this.servers.find((s) => s.name === serverName);
        if (server) {
            server.updateResponseTime(responseTime);
        }
    }

    // Выводим статус серверов
    printStatus() {
        console.log("Текущее состояние серверов:");
        this.servers.forEach((server) =>
            console.log(
                `Сервер ${server.name}: ${server.activeConnections} активных соединений, Среднее время отклика: ${server.getAverageResponseTime().toFixed(2)} ms`
            )
        );
    }
}

// Создаем серверы
const serverA = new Server("Server A");
const serverB = new Server("Server B");
const serverC = new Server("Server C");

// Инициализируем балансировщик
const balancer = new LeastResponseTimeBalancer([serverA, serverB, serverC]);

// Обновляем времена отклика серверов
balancer.updateResponseTime("Server A", 120); // Сервер A: 120 мс
balancer.updateResponseTime("Server B", 100); // Сервер B: 100 мс
balancer.updateResponseTime("Server C", 150); // Сервер C: 150 мс

// Демонстрация работы
balancer.handleRequest(); // Должен выбрать Server B (самый быстрый)
balancer.handleRequest(); // Server B опять (он самый быстрый)
balancer.updateResponseTime("Server B", 200); // У Server B увеличилось время отклика
balancer.handleRequest(); // Теперь выберет Server A
balancer.printStatus(); // Покажет состояние

// Завершаем соединение
balancer.finishRequest("Server A");
balancer.printStatus();

// Еще одно обновление времени
balancer.updateResponseTime("Server C", 90); // Теперь Server C самый быстрый
balancer.handleRequest(); // Теперь выберет Server C
balancer.printStatus();
