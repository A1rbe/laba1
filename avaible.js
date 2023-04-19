


const ZD_fpd = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ЕФ",
    zagroza: "Модифікація інформації аутентифікації внаслідок активного прослуховування у системі зовнішніх комунікацій",
    dzerelo: "Хакер",
    mec: "Фальсифікація програмних продуктів шляхом активного підслуховування пакетів даних, що містять дані аутентифікації програмного продукту, у зовнішніх системах зв'язку через відсутність міжмережевих екранів"
  },
];
const ZD_fpp = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ЕФ",
    zagroza: "Модифікація інформації аутентифікації внаслідок пасивного прослуховування у системі зовнішніх комунікацій",
    dzerelo: "Хакер",
    mec: "Фальсифікація програмних продуктів шляхом пасивного підслуховування всієї мережі з використанням зовнішніх каналів зв'язку та перехоплення пакетів, що містять дані аутентифікації продукту, через відсутність міжмережевих екранів."
  },
];
const ZD_hpp = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Модифікація інформації автентифікації внаслідок пасивного прослуховування у системі внутрішніх комунікацій",
    dzerelo: "Хакер",
    mec: "Фальсифікація сертифікаційних даних програмних продуктів шляхом пасивного прослуховування у внутрішніх системах зв'язку, що використовують програмні додатки НМАП, через відсутність взаємозв'язку."
  },
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Модифікація інформації автентифікації внаслідок пасивного прослуховування у системі внутрішніх комунікацій",
    dzerelo: "Розробник №5, працюючий за комп’ютером ПК10",
    mec: "Перехоплення даних автентифікації програмного продукту, їхнє переспрямування та фальсифікація шляхом пасивного підслуховування у внутрішніх комунікаційних системах через неадекватні правила контролю доступу та засобів автентифікації програмного продукту й ідентифікації користувачів."
  },
];
const ZD_mia = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Модифікація інформації автентифікації внаслідок активного прослуховування у системі внутрішніх комунікацій",
    dzerelo: "Розробник №4, працюючий за комп’ютером ПК9",
    mec: "Передавання та фальсифікація даних автентифікації програмного продукту шляхом активного підслуховування та перехоплення через неадекватні правила контролю доступу та засоби автентифікації та ідентифікації користувачів програмного забезпечення"
  },
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Модифікація інформації автентифікації внаслідок активного прослуховування у системі внутрішніх комунікацій",
    dzerelo: "Хакер",
    mec: "Фальсифікація сертифікаційних даних програмних продуктів шляхом активного підслуховування та перехоплення, а також їхнього переспрямування та фальсифікації, несанкціоноване копіювання через невстановлені брандмауери"
  },
];
const ZD_msd = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Маскарад (привласнення ідентифікатора користувача)",
    dzerelo: "Хакер",
    mec: "Перехоплення і незаконне привласнення даних профілю користувача програмними продуктами через відсутність міжмережевих екранів і захищених каналів зв'язку між співробітниками"
  },
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Маскарад (привласнення ідентифікатора користувача)",
    dzerelo: "Хакер",
    mec: "Перехоплення програмними продуктами даних у профілях користувачів, видалення їх з активних профілів і їхній витік через відсутність міжмережевих екранів і захисту каналів зв'язку між співробітниками."
  },
];
const ZD_udu = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Використання чужих ідентифікаторів користувачів",
    dzerelo: "Розробник №4, працюючий за комп’ютером ПК9",
    mec: "Через відсутність програмних засобів для ідентифікації та автентифікації користувача на біометричному рівні, ідентифікатор розробника3 використовується для доступу до комп'ютера PC8 і присвоєння собі профілю користувача."
  },
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Використання чужих ідентифікаторів користувачів",
    dzerelo: "Хакер",
    mec: "Порушення безпеки серверів компанії з базами даних аутентифікації для застосунків співробітників, перехоплення і неправомірне використання ідентифікаторів через відсутність брандмауерів або надійних систем безпеки."
  },
];
const ZD_rpi = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Розкриття паролів та іншої інформації аутентифікаці",
    dzerelo: "Тестувальник №1, працюючий за ПК18",
    mec: "Завантаження конфіденційної інформації у вигляді бази даних паролів і логінів користувачів у публічне сховище, що призвело до збою через низьку кваліфікацію співробітників."
  },
];
const ZD_ndr = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Несанкціонований доступ (НСД) до ресурсів організації ЛВС з боку внутрішніх зловмисників",
    dzerelo: "Розробник №2, працюючий за комп’ютером ПК7",
    mec: "Несанкціонований доступ до ресурсів організації шляхом модифікації сертифікаційної бази даних програмного продукту в той час, коли Розробник 3 не перебуває на робочому місці, через відсутність програмних засобів аутентифікації та ідентифікації користувачів."
  },
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Несанкціонований доступ (НСД) до ресурсів організації ЛВС з боку внутрішніх зловмисників",
    dzerelo: "Тестувальник №2, працюючий за комп’ютером ПК19",
    mec: "Несанкціонований доступ до ресурсів організації шляхом зміни бази даних автентифікації до комп'ютерної системи за відсутності Розробника №3 на робочому місці у зв'язку з відсутністю програмних засобів автентифікації та ідентифікації користувачів."
  },
  {
    name: "Комп'ютерний пристрій",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ФП",
    zagroza: "Несанкціонований доступ (НСД) до ресурсів організації ЛВС з боку внутрішніх зловмисників",
    dzerelo: "Розробник №2, працюючий за комп’ютером ПК7",
    mec: "Несанкціонований доступ до ресурсів організації та пошкодження фізичних носіїв зробили комп'ютерне обладнання недоступним через відсутність додаткового фізичного захисту."
  },
];
const ZD_nsd = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "НСД до ресурсів організації ЛВС з боку зовнішніх зловмисників",
    dzerelo: "Хакер",
    mec: "Несанкціонований доступ до ресурсів організації шляхом впровадження шкідливих програмних черв'яків або повного завантаження програмних ресурсів із програмних продуктів, роблячи їх недоступними через відсутність брандмауерів або міжмережевих екранів."
  },
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "НСД до ресурсів організації ЛВС з боку зовнішніх зловмисників",
    dzerelo: "Хакер",
    mec: "Несанкціонований доступ до ресурсів організації шляхом впровадження шкідливих програм або повного завантаження програмних ресурсів із програмних продуктів, а також недоступність через неадекватні міжмережеві екрани або брандмауери."
  },
];
const ZD_vzz = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Видавання зовнішнім зловмисником себе за легального користувача шляхом підроблення адрес у заголовках мережевих пакетів",
    dzerelo: "Хакер",
    mec: "Через відсутність програмного додатка ICMP Secure Connection, брандмауера і програмного засобу аутентифікації та ідентифікації користувачів, хакери використовували утиліту Network Monitor для підробки адреси призначення пакетів даних і підміни даних аутентифікації користувачів на програмний продукт, таким чином перехоплюючи мережевий трафік і видаючи себе за легітимних користувачів."
  },
];
const ZD_vru = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Видавання зовнішнім зловмисником себе за легального користувача шляхом підроблення інформації канального рівня",
    dzerelo: "Хакер",
    mec: "Хакери, за відсутності брандмауерів і програмного додатка ICMP Secure Connection, програмного засобу для автентифікації та ідентифікації користувачів, підробляють адреси призначення пакетів даних за допомогою програмних продуктів, перехоплюють потік інформації на канальному рівні внаслідок зміни даних автентифікації користувача і видають себе за законних користувачів, повторно передаючи ці пакети в іншу мережу."
  },
];
const ZD_nsr = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "НСД зовнішнім зловмисником внаслідок збоїв у роботі засобів захисту та при відновленні системи безпечний стан може бути встановлений некоректно ",
    dzerelo: "Хакер",
    mec: "Хакери атакують систему програмного продукту шляхом перезавантаження системи та знищення бази даних автентифікації користувачів програмного продукту через латку пролома в системі безпеки, спричиненого невчасним реагуванням або застаріванням системи безпеки, відсутністю автентифікації програмного продукту або ідентифікації користувача."
  },
];
const ZD_nsw = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "НСД до веб-сайту організації та зовнішнім хостам з боку зовнішніх зловмисників",
    dzerelo: "Хакер",
    mec: "Несанкціонований доступ до вебсайту організації шляхом перехоплення автентифікаційних даних та їх використання для зміни даних сайту в ресурсах програмного продукту шляхом переписування кодів входу на сайт, оскільки не існує правил, які дають змогу розмежувати доступ до сайту та програмних засобів автентифікації або ідентифікації користувача."
  },
];
const ZD_nsn = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "НСД до безпровідної мережі організації",
    dzerelo: "Хакер",
    mec: "Відсутність брандмауерів і програмного забезпечення для автентифікації та ідентифікації користувачів для перехоплення пакетів автентифікації користувачів і використання пристроїв для їхньої зміни з метою розшифрування паролів мережі WPA2 і отримання несанкціонованого доступу до бездротової мережі організації."
  },
];
const ZD_nsk = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "НСД до резервних копій даних",
    dzerelo: "Хакер",
    mec: "Відсутність брандмауерів, надійного захисту та програмного забезпечення для автентифікації та ідентифікації користувачів для критично важливих резервних даних перехоплює автентифікаційні дані користувачів, які мають доступ до резервних копій, і перехоплює локальну мережу для отримання несанкціонованого доступу до резервних копій."
  },
  {
    name: "Комп'ютерний пристрій",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ФП",
    zagroza: "НСД до резервних копій даних",
    dzerelo: "Тестувальник №2, працюючий за комп’ютером ПК19",
    mec: "Несанкціонований доступ до резервних копій даних на фізичних носіях або їх пошкодження через неадекватні правила контролю доступу"
  },
];
const ZD_zqa = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Зміна конфігурації активного мережевого обладнання",
    dzerelo: "Провайдер",
    mec: "Усі автентифікаційні дані користувачів корпоративного сайту було втрачено внаслідок зміни виділеної статичної IP-адреси на іншу, через низький рівень кваліфікації провайдера та відсутність додаткового джерела підключення до інтернету."
  },
];
const ZD_nzf = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Несанкціонована зміна файлів даних та баз даних з боку інсайдерів",
    dzerelo: "Бізнес-аналітик №1, працюючий за комп’ютером ПК20",
    mec: "Ненавмисна зміна ідентифікаторів користувачів програмних продуктів через низьку кваліфікацію співробітників."
  },
];
const ZD_nzz = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Несанкціонована зміна звітів з боку інсайдерів",
    dzerelo: "Розробник №4, працюючий за комп’ютером ПК9",
    mec: "Видалення електронних файлів звітів за програмними продуктами через відсутність правил контролю доступу, засобів автентифікації та ідентифікації користувачів програмного забезпечення, а також відповідних вимог до зберігання звітів."
  },
];
const ZD_fzz = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Фальшування записів",
    dzerelo: "Тестувальник №2, працюючий за комп’ютером ПК19",
    mec: "Фальсифікація звітів про програмні продукти через неадекватні правила контролю доступу, автентифікації програмного забезпечення та автентифікації користувачів."
  },
];
const ZD_nmj = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Несанкціонована модифікація журналів аудиту",
    dzerelo: "Зовнішній аудитор",
    mec: "Порушення цілісності аудиторського сліду шляхом зміни результатів аудиту програмних продуктів через відсутність правил контролю доступу, засобів автентифікації та ідентифікації користувачів програмного забезпечення, а також вимог до належного зберігання аудиторських слідів."
  },
];
const ZD_nan = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Несанкціонована або ненавмисна модифікація",
    dzerelo: "Розробник №4, працюючий за комп’ютером ПК9",
    mec: "Перехоплення та перенаправлення даних і фальсифікація даних автентифікації в програмні продукти через відсутність правил контролю доступу та програмних засобів автентифікації та ідентифікації користувачів."
  },
];
const ZD_atv = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Атаки на відмову в обслуговуванні на зовнішні хости організації",
    dzerelo: "Хакер",
    mec: "Відмова в обслуговуванні через цілеспрямовані атаки на мережеве обладнання, перевантаження через постійні запити, спричинені відсутністю функції анти-спуфінгу, тощо."
  },
];
const ZD_rsn = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Реалізація спроби НСД для потенційного зловмисника внаслідок збоїв у роботі засобів захисту ",
    dzerelo: "Хакер",
    mec: "Збої в системі безпеки через прогалини в політиці безпеки або недосконалість системи безпеки, автентифікації програмного забезпечення або ідентифікації користувачів, унаслідок яких хакери отримують доступ до ресурсів програмного продукту або даних аудиту."
  },
];
const ZD_uep = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Використання помилок проектування, кодування та конфігурації програмного забезпечення (ПЗ)",
    dzerelo: "Хакер",
    mec: "Доступ і зміна аутентифікаційних даних користувачів через низьку кваліфікацію співробітників (системних адміністраторів) і відсутність брандмауерів."
  },
];
const ZD_unm = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Використання незадекларованих можливостей у ПЗ, які залишені для налагодження",
    dzerelo: "Розробник №3, працюючий за комп’ютером ПК8",
    mec: "Відсутність чітких правил використання програмного забезпечення і низька кваліфікація співробітників призводять до використання неперевіреного програмного забезпечення у виробництві та ненавмисного видалення баз даних з авторизаційними даними користувачів."
  },
];
const ZD_inp = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Впровадження несанкціонованого ПЗ ",
    dzerelo: "Системний адміністратор. працюючий за комп’ютером ПК26",
    mec: "Встановлення несанкціонованих програмних додатків через відсутність правил використання програмних додатків."
  },
];
const ZD_int = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Впровадження непротестованого ПЗ",
    dzerelo: "Системний адміністратор, працюючий за комп’ютером ПК26",
    mec: "Для опрацювання даних про програмні продукти було встановлено неперевірене програмне забезпечення, а базу даних, що містить авторизаційні дані користувачів програмних продуктів, було пошкоджено через низьку кваліфікацію співробітників."
  },
];
const ZD_izp = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Впровадження зловмисного ПЗ",
    dzerelo: "Хакер",
    mec: "Каналами зв'язку компанії розсилають пакети для завантаження шкідливого ПЗ і, зважаючи на відсутність брандмауерів і механізмів захисту каналів зв'язку, видалення наявних баз даних, що містять аутентифікаційні дані користувачів ПЗ."
  },
];
const ZD_nit = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Недоступність ІТ сервісів та інформації з причин логічного збою комп’ютерного обладнання",
    dzerelo: "Хакер",
    mec: "Впровадження шкідливого програмного забезпечення, яке призводить до логічного збою комп'ютерного обладнання шляхом переспрямування інформаційних пакетів локальними каналами зв'язку та завантаження їх на все комп'ютерне обладнання через неадекватність міжмережевих екранів, захисту каналів зв'язку та міжмережевих екранів, а також програм аутентифікації та ідентифікації користувачів."
  },
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Недоступність ІТ сервісів та інформації з причин логічного збою комп’ютерного обладнання",
    dzerelo: "Інсайдер",
    mec: "Завантаження шкідливих програм на комп'ютер Розробника 3 і впровадження шкідливих програм, що спричиняють логічний збій апаратного та програмного забезпечення комп'ютера шляхом фальсифікації вікна даних автентифікації через відсутність брандмауерів і програмного забезпечення для автентифікації та ідентифікації користувачів."
  },
];
const ZD_ztp = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Збиток, завданий тестами на проникнення",
    dzerelo: "Тестер №2, працюючий за ПК19",
    mec: "Ненавмисна модифікація таблиці мережевих адрес програмних додатків унаслідок несанкціонованого доступу до ПК 8 через відсутність програмного захисту на мережевому рівні."
  },
];
const ZD_zcn = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Зміна конфігурації активного мережевого обладнання",
    dzerelo: "Провайдер",
    mec: "Призначену статичну IP-адресу було змінено на іншу, що призвело до втрати всіх даних автентифікації користувачів програмного додатка через низький рівень кваліфікації провайдера та відсутність додаткових джерел доступу в Інтернет."
  },
];
const ZD_nzs = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Несанкціонована зміна системної конфігурації з боку інсайдерів",
    dzerelo: "Системний адміністратор, працюючий за комп’ютером ПК26",
    mec: "Змінивши прив'язку MAC-адреси комп'ютера8 , програмне забезпечення комп'ютера повністю перестало працювати через низьку кваліфікацію співробітника."
  },
];

const ZD_str = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Страйк",
    dzerelo: "Працівники",
    mec: "Призупинення робіт над програмними продуктами і системами у зв'язку з відмовою співробітників продовжувати роботу через незадоволеність умовами праці."
  },
];
const ZD_prc = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Природні катастрофи",
    dzerelo: "Природі чинники",
    mec: "Вихід з ладу обладнання внаслідок стихійних лих через недостатню готовність до стихійних лих."
  },
];
const ZD_nis = [
  {
    name: "Комп'ютерний пристрій",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ФП",
    zagroza: "Недоступність ІТ сервісів та інформації з причин фізичного збою комп’ютерного обладнання",
    dzerelo: "Системний адміністратор, працюючий за комп’ютером ПК26",
    mec: "Пошкодження фізичного обладнання сервера та знищення фізичного носія з програмним продуктом, що призводить до недоступності даних продукту та ІТ-послуг, а також віддалених копій сервера, які здійснюють аутентифікацію та ідентифікацію користувачів програмного забезпечення."
  },
];
const ZD_npo = [
  {
    name: "Комп'ютерний пристрій",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ФП",
    zagroza: "Недоступність ІТ сервісів та інформації з причин логічного збою периферійного обладнання",
    dzerelo: "Системний адміністратор, працюючий за ПК26",
    mec: "Пошкодження периферійних пристроїв унаслідок проникнення шкідливих програм, спрямованих на порушення логічної структури периферійних пристроїв або припинення роботи каналу зв'язку; неможливість використання ІТ-послуг через відсутність захисних заходів для каналів зв'язку та периферійних пристроїв, а також програмного забезпечення для аутентифікації та ідентифікації користувачів."
  },
  {
    name: "Комп'ютерний пристрій",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ФП",
    zagroza: "Недоступність ІТ сервісів та інформації з причин логічного збою периферійного обладнання",
    dzerelo: "Хакер",
    mec: "Пошкодження периферійних пристроїв унаслідок упровадження шкідливих програм із використанням логічних бомб, надісланих електронною поштою, спрямованих на руйнування логічної структури периферійних пристроїв і припинення комунікаційних шляхів; неадекватні брандмауери, заходи захисту комунікаційних шляхів, периферійних пристроїв, правил конфігурації електронної пошти працівників компанії та програмного забезпечення для автентифікації й ідентифікації користувачів, що призвело до втрати доступу до ІТ-послуг для розроблення програмного забезпечення, що дозволяє розробляти програмні продукти."
  },
];
const ZD_zcp = [
  {
    name: "Комп'ютерний пристрій",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ФП",
    zagroza: "Збій комунікаційних послуг",
    dzerelo: "Провайдер",
    mec: "Ненавмисне видалення профілів користувачів і присвоєних офісам IP-адрес через низький рівень відповідності вимогам провайдера і відсутність додаткових джерел доступу в Інтернет"
  },
];
const ZD_nif = [
  {
    name: "Комп'ютерний пристрій",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ФП",
    zagroza: "Недоступність ІТ сервісів та інформації з причин фізичного збою периферійного обладнання",
    dzerelo: "Тестувальник №2, працюючий за комп’ютером ПК",
    mec: "Пошкодження периферійного обладнання внаслідок руйнування периферійних структур або вимкнення шляхів зв'язку перешкоджає доступу до ІТ-послуг для розроблення програмного продукту, оскільки правила контролю доступу, аутентифікація програмного забезпечення та ідентифікація користувачів недоступні."
  },
];
const ZD_pfm = [
  {
    name: "Комп'ютерний пристрій",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ФП",
    zagroza: "Фізичне пошкодження мережевого та каналоутворюючого обладнання внутрішніми зловмисниками",
    dzerelo: "Провайдер",
    mec: "Пошкодження фізичних серверів під час налаштування через недостатню кваліфікацію провайдера"
  },
];
const ZD_ant = [
  {
    name: "Комп'ютерний пристрій",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ФП",
    zagroza: "Антропогенні катастрофи",
    dzerelo: "Зловмисник",
    mec: "Навмисне видалення зовнішніх кабелів через недостатню стійкість до розкриття."
  },
];
const ZD_bls = [
  {
    name: "Комп'ютерний пристрій",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ФП",
    zagroza: "Блискавка",
    dzerelo: "Природні чинники",
    mec: "Повний вихід з ладу робочого обладнання через удари блискавки, спричинені недостатнім заземленням в офісних будівлях."
  },
];

const form2 = document.querySelector("#Zagrozadost");
const tableBody2 = document.querySelector("#Table_zagdost tbody");

form2.addEventListener("submit", event => {
  event.preventDefault();
  const inputValue2 = document.querySelector("#input2").value;

  if (inputValue2 === "Модифікація інформації аутентифікації внаслідок активного прослуховування у системі зовнішніх комунікацій") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_fpd.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Модифікація інформації аутентифікації внаслідок пасивного прослуховування у системі зовнішніх комунікацій") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_fpp.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Модифікація інформації автентифікації внаслідок пасивного прослуховування у системі внутрішніх комунікацій") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_hpp.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Модифікація інформації автентифікації внаслідок активного прослуховування у системі внутрішніх комунікацій") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_mia.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Маскарад (привласнення ідентифікатора користувача)") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_msd.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Використання чужих ідентифікаторів користувачів") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_udu.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Розкриття паролів та іншої інформації аутентифікаці") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_rpi.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Несанкціонований доступ (НСД) до ресурсів організації ЛВС з боку внутрішніх зловмисників") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_ndr.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "НСД до ресурсів організації ЛВС з боку зовнішніх зловмисників") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_nsd.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Видавання зовнішнім зловмисником себе за легального користувача шляхом підроблення адрес у заголовках мережевих пакетів") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_vzz.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Видавання зовнішнім зловмисником себе за легального користувача шляхом підроблення інформації канального рівня") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_vru.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "НСД зовнішнім зловмисником внаслідок збоїв у роботі засобів захисту та при відновленні системи безпечний стан може бути встановлений некоректно") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_nsr.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "НСД до веб-сайту організації та зовнішнім хостам з боку зовнішніх зловмисників") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_nsw.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "НСД до безпровідної мережі організації") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_nsn.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "НСД до резервних копій даних") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_nsk.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Зміна конфігурації активного мережевого обладнання") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_zqa.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Несанкціонована зміна файлів даних та баз даних з боку інсайдерів") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_nzf.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Несанкціонована зміна звітів з боку інсайдерів") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_nzz.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Фальшування записів") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_fzz.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Несанкціонована модифікація журналів аудиту") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_nmj.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Несанкціонована або ненавмисна модифікація") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_nan.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Атаки на відмову в обслуговуванні на зовнішні хости організації") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_atv.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Реалізація спроби НСД для потенційного зловмисника внаслідок збоїв у роботі засобів захисту") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_rsn.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Використання помилок проектування, кодування та конфігурації програмного забезпечення (ПЗ)") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_uep.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Використання незадекларованих можливостей у ПЗ, які залишені для налагодження") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_unm.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Впровадження несанкціонованого ПЗ") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_inp.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Впровадження непротестованого ПЗ") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_int.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Впровадження зловмисного ПЗ") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_izp.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Недоступність ІТ сервісів та інформації з причин логічного збою комп’ютерного обладнання") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_nit.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Збиток, завданий тестами на проникнення") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_ztp.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Зміна конфігурації активного мережевого обладнання") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_zcn.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Несанкціонована зміна системної конфігурації з боку інсайдерів") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_nzs.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Страйк") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_str.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Природні катастрофи") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_prc.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Недоступність ІТ сервісів та інформації з причин фізичного збою комп’ютерного обладнання") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_nis.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Недоступність ІТ сервісів та інформації з причин логічного збою периферійного обладнання") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_npo.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Недоступність ІТ сервісів та інформації з причин фізичного збою периферійного обладнання") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_nif.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Збій комунікаційних послуг") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_zcp.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Фізичне пошкодження мережевого та каналоутворюючого обладнання внутрішніми зловмисниками") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_pfm.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Антропогенні катастрофи") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_ant.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else if (inputValue2 === "Блискавка") {
    // Clear table
    tableBody2.innerHTML = "";

    // Loop through array and create table rows and cells
    ZD_bls.forEach(person => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;
      row.appendChild(nameCell);

      const ownerCell = document.createElement("td");
      ownerCell.textContent = person.owner;
      row.appendChild(ownerCell);

      const locationCell = document.createElement("td");
      locationCell.textContent = person.location;
      row.appendChild(locationCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = person.category;
      row.appendChild(categoryCell);

      const zagrozaCell = document.createElement("td");
      zagrozaCell.textContent = person.zagroza;
      row.appendChild(zagrozaCell);

      const dzereloCell = document.createElement("td");
      dzereloCell.textContent = person.dzerelo;
      row.appendChild(dzereloCell);

      const mecCell = document.createElement("td");
      mecCell.textContent = person.mec;
      row.appendChild(mecCell);

      tableBody2.appendChild(row);
    });
  } else {
    // Clear table
    tableBody2.innerHTML = "";
  }
  // 
});
