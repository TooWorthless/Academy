// Класс сервера
class Server {
    constructor(name, speed) {
        this.name = name; // Имя сервера
        this.speed = speed; // Скорость обработки (чем меньше, тем быстрее)
        this.load = 0; // Текущая нагрузка
        this.pheromone = 1; // Начальное количество феромонов
    }

    // Обработка запроса
    handleRequest() {
        this.load++; // Увеличиваем нагрузку
        setTimeout(() => {
            this.load--; // Освобождаем сервер через время, зависящее от скорости
        }, this.speed);
    }

    // Обновление феромонов
    updatePheromone() {
        // Чем меньше загрузка и выше скорость, тем выше уровень феромонов
        this.pheromone = Math.max(1, (1 / (this.load + 1)) * this.speed);
    }
}

// Класс муравьиного балансировщика
class AntColonyLoadBalancer {
    constructor(servers) {
        this.servers = servers;
    }

    // Метод выбора сервера
    getServer() {
        let totalPheromone = this.servers.reduce((sum, s) => sum + s.pheromone, 0);
        let rand = Math.random() * totalPheromone;
        let cumulative = 0;

        for (let server of this.servers) {
            cumulative += server.pheromone;
            if (rand <= cumulative) {
                return server;
            }
        }
        return this.servers[0]; // На случай ошибки выбираем первый сервер
    }

    // Обрабатываем новый запрос
    handleRequest() {
        const selectedServer = this.getServer();
        console.log(`Запрос направлен на сервер: ${selectedServer.name}`);
        selectedServer.handleRequest();
        this.updatePheromones();
    }

    // Обновление феромонов
    updatePheromones() {
        this.servers.forEach(server => server.updatePheromone());
    }

    // Вывод статуса серверов
    printStatus() {
        console.log("Текущее состояние серверов:");
        this.servers.forEach(server => {
            console.log(`Сервер ${server.name}: Нагрузка: ${server.load}, Феромоны: ${server.pheromone.toFixed(2)}`);
        });
    }
}

// Создаем серверы с разными скоростями
const serverA = new Server("Server A", 500);
const serverB = new Server("Server B", 300);
const serverC = new Server("Server C", 700);

// Инициализируем балансировщик
const balancer = new AntColonyLoadBalancer([serverA, serverB, serverC]);

// Демонстрация работы
for (let i = 0; i < 10; i++) {
    balancer.handleRequest();
}

// Печатаем статус серверов через 1 секунду
setTimeout(() => {
    balancer.printStatus();
}, 1000);
