// очистка корзины, запускать раз в неделю
// по умолчанию корзина очищается системой раз в месяц
// для работы нужно подключить Сервисы - Drive API

function cleanTrash() {
  const files = DriveApp.getTrashedFiles();
  let cnt = 0;
  while (files.hasNext()) {
    const file = files.next();    
    Logger.log(`Удаляю файл навсегда: ${file.getName()}`);
    Drive.Files.remove(file.getId()); // удаляем по ID
    cnt++;
  }
  Logger.log(`Корзина очищена, удалено файлов: ${cnt}`)
}
