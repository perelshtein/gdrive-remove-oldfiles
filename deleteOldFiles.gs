// скрипт для Google Apps / Google Drive
// перемещение в корзину старых файлов, которым больше 2 месяцев

function deleteOldFiles() {
  const folderId = "my_id"; // ID папки или "root" для всего диска
  const cutoffDate = new Date();
  cutoffDate.setMonth(cutoffDate.getMonth() - 2); // 2 месяца назад
  Logger.log(`Ищем файлы старше ${cutoffDate}`);

  const folder = DriveApp.getFolderById(folderId);
  const files = folder.getFiles();
  
  let cnt = 0;
  let cntDeleted = 0;
  while (files.hasNext()) {
    const file = files.next();
    const lastUpdated = file.getLastUpdated();
    cnt++;

    if (lastUpdated < cutoffDate) {
      Logger.log(`Кидаю в корзину: ${file.getName()} (Дата изменения: ${lastUpdated})`);
      cntDeleted++;
      file.setTrashed(true);
    }    
  }
  Logger.log(`Всего файлов: ${cnt}, удалено: ${cntDeleted}`)
}
