// Класс сервера
class Server {
    constructor(name, avgProcessTime) {
      this.name = name; // Имя сервера
      this.activeConnections = 0; // Текущее количество соединений
      this.avgProcessTime = avgProcessTime; // Среднее время обработки запроса (в мс)
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
  
    // Оставшееся время обработки всех запросов
    getRemainingTime() {
      return this.activeConnections * this.avgProcessTime;
    }
  }
  
  // Класс балансировщика Least Time Remaining
  class LeastTimeRemainingBalancer {
    constructor(servers) {
      this.servers = servers; // Список серверов
    }
  
    // Метод выбора сервера
    getServer() {
      let bestServer = null;
      let minRemainingTime = Infinity;
  
      for (let server of this.servers) {
        let remainingTime = server.getRemainingTime();
  
        if (remainingTime < minRemainingTime) {
          minRemainingTime = remainingTime;
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
        console.log(
          `Сервер ${server.name}: ${server.activeConnections} активных соединений, Оставшееся время: ${server.getRemainingTime()} мс`
        )
      );
    }
  }
  
  // Создаем серверы с разным временем обработки запроса
  const serverA = new Server("Server A", 200); // 200 мс на запрос
  const serverB = new Server("Server B", 150); // 150 мс на запрос
  const serverC = new Server("Server C", 300); // 300 мс на запрос
  
  // Инициализируем балансировщик
  const balancer = new LeastTimeRemainingBalancer([serverA, serverB, serverC]);
  
  // Демонстрация работы
  balancer.handleRequest(); // Должен выбрать Server B (он обработает быстрее)
  balancer.handleRequest(); // Server B (снова, так как у него еще мало нагрузки)
  balancer.handleRequest(); // Теперь Server A
  balancer.handleRequest(); // Теперь Server C (у всех остальных уже накопилось время)
  balancer.printStatus(); // Выводим текущее состояние
  
  // Завершаем соединение
  balancer.finishRequest("Server B");
  balancer.printStatus();
  
  // Добавляем новый запрос
  balancer.handleRequest(); // Должен выбрать Server B, так как он снова свободен
  balancer.printStatus();
  