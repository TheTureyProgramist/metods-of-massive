const massive = ['Mango', 'Poly', 'Kiwi', 'Ajax', 'Мій індичок не зайвий)'];
const cpusok = massive.join(',');
console.log(cpusok);
// for він трохи не працював але виправив
const massiveFor = ['Mango', 'Poly', 'Kiwi', 'Ajax', 'Мій індичок не зайвий)'];
let padok = '';
for (let induk = 0; induk < massiveFor.length; induk++) {
    if (induk === massiveFor.length - 1) {
        padok += massiveFor[induk];
    } else {
        padok += massiveFor[induk] + ' , Хто фан індиків?  ';
    }
}
console.log(padok);

// Частина 1: Фільм про те як індики перемагають жадібних людей і злочинців. Індики належали Дімі і він не знав що вони розумніші за все 
//і масють великі плани на світ Коли Діма поїхав в школу вони взялися відновлювати справедливість
// Частина 2: Як індики знищили день подяки в Америці і зробити так щоб замінити мясо індички на овочі і фрукти на цей день
const films = ['Фільм-Індики-Захопили-Світ-1', 'Фільм-Індики-Захопили-Світ-2', 'Фільм-Індики-Захопили-Світ-3', 'Фільм-Індики-Захопили-Світ-4', 'Фільм-Індики-Захопили-Світ-5',];
console.log(films);
// Фільм-Індики-Захопили-Світ--3 був видалений бо індики програли прибульцям - яких найняли можновладці що
// програли індикам в першій частині у цього фільму були низькі рейтинги тому ми його видалили
films.splice(2, 1);
console.log(films);
// Четверта частина: протистояння супроти булінгу в школі індики провчають хуліганив та навчають їх гарних манер
// Пята частина: продовження четверої
// Шоста частина: фінал перемога над лютим драконом з майнкрафту якого випустили Марк, Борислав
// та Тіма вони забули вимкнути компютер з грою (Оля і Артем домогли індикам) 
//а пані Тетяна знімала все бачене на телефон. Ну а Діма був у школі в бункері під час тривоги і нічого не бачив
films.splice(5, 0, 'Фільм-Індики-Захопили-Світ-6');
console.log(films);

// Оновлення в четвертій частині: індики здолали хуліганнів та прибульців з можновладцями яким програли в третій частині
films.splice(2, 1, 'Фільм-Індики-Захопили-Світ-4(Версія 2.0)');
console.log(films); 
// Ресисер Діма. Оцініть переглянутий фільм 1-100 балів