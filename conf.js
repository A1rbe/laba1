const WC_vci = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Витік конфіденційної інформації з мережі каналами зв’язку (email, web, chat/IM тощо)",
    dzerelo: "Хакер",
    mec: "Злом корпоративної електронної пошти, що містить конфіденційну інформацію, і поширення цієї інформації через відсутність програмного додатка Safe Mailbox",
  },
];
const WC_vmp = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Витік конфіденційної інформації на мобільних пристроях",
    dzerelo: "Розробник №3, працюючий за ПК8",
    mec: "Використання сесій продукту на мобільних пристроях і зберігання конфіденційних даних на мобільних пристроях через відсутність правил зберігання конфіденційної інформації.",
  },
];
const WC_vni = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Витік конфіденційної інформації на носіях інформації",
    dzerelo: "Тестувальник №2, працюючий за комп’ютером ПК19",
    mec: "Зберігання конфіденційної інформації на флеш-накопичувачах і переміщення їх за межі контрольованих зон, оскільки переміщення фізичних носіїв не контролюється.",
  },
];

const WC_pzk = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Прослуховування зовнішніх каналів зв’язку зловмисниками",
    dzerelo: "Зловмисник",
    mec: "Підслуховування зовнішніх каналів зв'язку, перехоплення та розповсюдження програмними продуктами пакетів, що містять дані аутентифікації користувача, через відсутність захисту зовнішніх каналів зв'язку.",
  },
];

const WC_pcd = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Порушення конфіденційності даних, що передаються мережами зв’язку, які проходять поза контрольованою зоною, здійснене зовнішніми порушниками шляхом пасивного прослуховування каналів зв’язку",
    dzerelo: "Хакер",
    mec: "Неадекватне шифрування шляхів зв'язку та брандмауери дають змогу програмним продуктам перехоплювати та поширювати дані аутентифікації користувачів",
  },
];
const WC_cia = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Модифікація інформації аутентифікації внаслідок пасивного прослуховування у системі зовнішніх комунікацій",
    dzerelo: "Хакер",
    mec: "Модифікація програмних продуктів шляхом пасивного підслуховування всієї мережі з використанням зовнішніх каналів зв'язку, перехоплення і розповсюдження пакетів, що містять дані про сертифікацію продукту, через відсутність міжмережевих екранів.",
  },
];
const WC_inc = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Модифікація інформації автентифікації внаслідок пасивного прослуховування у системі внутрішніх комунікацій",
    dzerelo: "Хакер",
    mec: "Модифікація сертифікаційних даних програмних продуктів та їх поширення шляхом пасивного прослуховування у внутрішніх системах зв'язку з використанням програмних додатків NMAP через відсутність взаємозв'язку.",
  },
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Модифікація інформації автентифікації внаслідок пасивного прослуховування у системі внутрішніх комунікацій",
    dzerelo: "Розробник №5, працюючий за комп’ютером ПК10",
    mec: "Фальсифікація даних сертифікації програмних продуктів шляхом пасивного прослуховування в системах внутрішнього зв'язку, перехоплення даних та їхнього розповсюдження через неадекватні правила контролю доступу та засоби аутентифікації й ідентифікації користувачів програмного забезпечення",
  },
];
const WC_api = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Модифікація інформації автентифікації внаслідок активного прослуховування у системі внутрішніх комунікацій",
    dzerelo: "Розробник №4, працюючий за комп’ютером ПК10",
    mec: "Фальсифікація автентифікаційних даних програмних продуктів шляхом активного підслуховування та перехоплення через неадекватні правила контролю доступу та програмні засоби автентифікації та ідентифікації користувачів, а також передача зовнішнім державним службам.",
  },
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Модифікація інформації автентифікації внаслідок активного прослуховування у системі внутрішніх комунікацій",
    dzerelo: "Хакер",
    mec: "Фальсифікація сертифікаційних даних програмних продуктів шляхом активного підслуховування, перехоплення і передачі даних, а також несанкціонованого копіювання даних через невстановлені брандмауери.",
  },
];
const WC_mcd = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Модифікація конфіденційних даних внаслідок активного прослуховування у системі зовнішніх комунікацій",
    dzerelo: "Хакер",
    mec: "Фальсифікація та розповсюдження конфіденційних даних програмного продукту шляхом активного підслуховування пакетів даних, що містять конфіденційні дані програмного продукту, у зовнішніх системах зв'язку через відсутність міжмережевих екранів і захисту зовнішніх ліній зв'язку.",
  },
];
const WC_mpd = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Модифікація конфіденційних даних внаслідок пасивного прослуховування у системі зовнішніх комунікацій",
    dzerelo: "Хакер",
    mec: "Фальсифікація конфіденційних даних програмного продукту і завантаження їх на публічний ресурс шляхом пасивного підслуховування всієї мережі через зовнішні лінії зв'язку і перехоплення пакетів, що містять конфіденційні дані продукту, через відсутність брандмауерів і захисту зовнішніх ліній зв'язку.",
  },
];
const WC_cda = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Модифікація конфіденційних даних внаслідок активного прослуховування у системі внутрішніх комунікацій",
    dzerelo: "Хакер",
    mec: "Фальсифікація конфіденційних даних програмних продуктів через активне підслуховування, перехоплення та передавання даних і несанкціоноване копіювання через відсутність брандмауерів і захисту внутрішніх ліній зв'язку.",
  },
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Модифікація конфіденційних даних внаслідок активного прослуховування у системі внутрішніх комунікацій",
    dzerelo: "Розробник №2, працюючий за комп’ютером ПК7",
    mec: "Фальсифікація конфіденційних даних програмних продуктів через активне підслуховування, перехоплення та передавання їх на загальнодоступні сервери через відсутність правил контролю доступу та автентифікації програмного забезпечення й ідентифікації користувачів.",
  },
];
const WC_ppi = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Модифікація конфіденційних даних внаслідок пасивного прослуховування у системі внутрішніх комунікацій",
    dzerelo: "Розробник №7, працюючий за комп’ютером ПК19",
    mec: "Фальсифікація конфіденційних даних програмних продуктів шляхом пасивного підслуховування та перехоплення і передавання даних у внутрішніх системах зв'язку за відсутності Розробника 3 на робочому місці через неадекватні правила розмежування доступу та програмного додатка Dark Screen, програмного засобу для аутентифікації та ідентифікації користувачів",
  },
];
const WC_pil = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Перехоплення інформації на лініях зв’язку шляхом використання різноманітних видів аналізаторів мережевого трафіку",
    dzerelo: "Тестер №2, працюючий за комп’ютером ПК17",
    mec: "Підключення до локальної мережі за відсутності Розробника №3 на робочому місці через відсутність програмного додатка Темний екран - програмного засобу для безпечного з'єднання і аутентифікації та ідентифікації користувачів, а також перехоплення інформації по лініях зв'язку за допомогою утиліти NMAP.",
  },
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Перехоплення інформації на лініях зв’язку шляхом використання різноманітних видів аналізаторів мережевого трафіку",
    dzerelo: "Хакер",
    mec: "Перехоплення інформації на телекомунікаційних лініях за допомогою активних засобів сніфінгу, а також під'єднання до локальної мережі шляхом порушення захисту мережі WPA2 через відсутність брандмауера.",
  },
];
const WC_piy = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Перехоплення інформації які передають каналами зв’язку з метою її подальшого використання для обходження засобів мережевої аутентифікації",
    dzerelo: "Хакер",
    mec: "Перехоплення інформації в каналах зв'язку з використанням конфігурацій SDR (технологія, що використовує побічне випромінювання), відображення інформації про продукцію та автентифікаційної інформації інсайдерів через відсутність заходів безпеки, що забезпечують захист від побічного випромінювання.",
  },
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Перехоплення інформації які передають каналами зв’язку з метою її подальшого використання для обходження засобів мережевої аутентифікації",
    dzerelo: "Розробник №9, працюючий за комп’ютером ПК29",
    mec: "Активне прослуховування пакетних даних і використання їх для перехоплення та перехоплення інформації внутрішніми каналами зв'язку з метою обходу автентифікації ініціювання сеансу зв'язку з програмним продуктом, зважаючи на відсутність Розробника №3 на робочому місці та відсутності безпечних та надійних каналів зв'язку, автентифікації програмного забезпечення і засобів ідентифікації користувачів між програмним додатком ICMP Secure Connection та інсайдерами.",
  },
];
const WC_sam = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Статистичний аналіз мережевого трафіку",
    dzerelo: "Хакер",
    mec: "Перехоплення і статистичний аналіз мережевого трафіку за допомогою утиліти Network Monitor через відсутність брандмауерів, а також модифікація і видалення певних ресурсів програмного продукту.",
  },
];
const WC_nrc = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Ненавмисне розкриття конфіденційної інформації співробітниками організації",
    dzerelo: "Розробник №2, працюючий за комп’ютером ПК7",
    mec: "Ненавмисне розкриття конфіденційної інформації шляхом зберігання конфіденційної інформації про програмні продукти на фізичних носіях за відсутності розробника №3 на робочому місці через відсутність політики безпеки фізичних носіїв і програмного додатка Dark Screen, а потім переміщення зазначених носіїв за межі контрольованої зони та їх втрати.",
  },
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Ненавмисне розкриття конфіденційної інформації співробітниками організації",
    dzerelo: "Розробник №2, працюючий за комп’ютером ПК7",
    mec: "Ненавмисне розкриття конфіденційної інформації шляхом зберігання конфіденційної інформації про програмні продукти на фізичних носіях за відсутності розробника №3 на робочому місці через відсутність політики безпеки фізичних носіїв і програмного додатка Dark Screen, а потім переміщення зазначених носіїв за межі контрольованої зони та їх втрати.",
  },
];
const WC_rci = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Розкриття конфіденційної інформації підрядниками або партнерами організації",
    dzerelo: "Зовнішній аудитор",
    mec: "Передання результатів аудиту програмних продуктів третім особам, оскільки передача інформації за межі контрольованої зони не контролюється.",
  },
];
const WC_nsd = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Несанкціонований доступ (НСД) до ресурсів організації ЛВС з боку внутрішніх зловмисників",
    dzerelo: "Розробник №4, працюючий за комп’ютером ПК9",
    mec: "Несанкціонований доступ до ресурсів організації шляхом модифікації сертифікаційної бази даних програмного продукту в той час, коли Розробник 3 не перебуває на робочому місці, через відсутність програмних засобів аутентифікації та ідентифікації користувачів.",
  },
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Несанкціонований доступ (НСД) до ресурсів організації ЛВС з боку внутрішніх зловмисників",
    dzerelo: "Тестувальник №2, працюючий за комп’ютером ПК19",
    mec: "Несанкціонований доступ до організаційних ресурсів шляхом копіювання або розповсюдження бази даних автентифікації програмного додатка без розробника №3 на робочому місці через відсутність засобів автентифікації програмного забезпечення або ідентифікації користувача.",
  },
];
const WC_ndz = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "НСД до ресурсів організації ЛВС з боку зовнішніх зловмисників",
    dzerelo: "Хакер",
    mec: "Несанкціонований доступ до ресурсів організації шляхом впровадження шкідливих програм, спрямованих на копіювання конфіденційної інформації користувачів, і повного скачування програмних ресурсів із програмних продуктів через відсутність міжмережевих екранів і брандмауерів",
  },
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "НСД до ресурсів організації ЛВС з боку зовнішніх зловмисників",
    dzerelo: "Хакер",
    mec: "Несанкціонований доступ до ресурсів організації шляхом впровадження шкідливих програм і повного копіювання конфіденційних даних у програмних додатках через відсутність брандмауерів і протипожежних бар'єрів.",
  },
];
const WC_nja = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "НСД до журналів аудиту",
    dzerelo: "Хакер",
    mec: "НСД для аудиту журналів, їх копіювання та розповсюдження, оскільки відсутні брандмауери та захист конфіденційної інформації.",
  },
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "НСД до журналів аудиту",
    dzerelo: "Тестер №2, працюючий за комп’ютером ПК17",
    mec: "Несанкціонований доступ до журналу аудиту завантаженого матеріалу на фізичному носії програмного продукту та його розповсюдження за відсутності Розробника №3 на робочому місці через недоліки в автентифікації програмного забезпечення та автентифікації користувачів.",
  },
];
const WC_nza = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "НСД до засобів аудиту",
    dzerelo: "Зовнішній аудитор",
    mec: "Вплив НСД на засоби аудиту у зв'язку з несанкціонованим зберіганням інформації про продукцію на різних носіях через відсутність правил контролю доступу та програмного забезпечення для аутентифікації та ідентифікації користувачів",
  },
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "НСД до засобів аудиту",
    dzerelo: "Розробник №7, працюючий за ПК 17",
    mec: "НРД з підготовки аудиторської документації та копіювання даних журналу аудиту програмного продукту за відсутності на робочому місці Розробника 3, тому що відсутні правила контролю доступу та програмне забезпечення для аутентифікації та ідентифікації користувачів.",
  },
];
const WC_bau = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Неумисне розголошення критичної для бізнесу інформації з боку інсайдерів",
    dzerelo: "Бізнес-аналітик  №3, працюючий за комп’ютером ПК23",
    mec: "Завантаження баз даних, що містять інформацію про клієнтів, на загальнодоступні сервери через низький рівень кваліфікації співробітників.",
  },
];
const WC_eop = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Порушення інформаційної безпеки з причин недотримання операційних процедур",
    dzerelo: "Розробник №3, працюючий за комп’ютером ПК8",
    mec: "Перенесення гілки розробки в майстер-гілку, де не було дотримано робочих процедур, що призвело до конфліктів і втрати всіх сертифікаційних файлів.",
  },
];
const WC_nep = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Порушення інформаційної безпеки з причин неточних планів забезпечення неперервності",
    dzerelo: "Тестувальник №2, працюючий за комп’ютером ПК19",
    mec: "Переведення продукту на етап виробництва призвело до скасування додаткових змін у процесі розробки та відсутності контролю версій і постійної технічної підтримки програмного продукту, що призвело до розкриття конфіденційної інформації.",
  },
];
const WC_nop = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Порушення інформаційної безпеки з причин несвоєчасного оновлення планів",
    dzerelo: "Бізнес-планувальник №1, працюючий за комп’ютером ПК22",
    mec: "Нездатність своєчасно усунути прогалини в системах інформаційної безпеки через відсутність безперервності в захисті інформаційних систем і процесів.",
  },
];
const WC_epc = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Помилка у процесах супроводу",
    dzerelo: "Тестувальник №2, працюючий за комп’ютером ПК19",
    mec: "Викладання вихідного коду програмних продуктів у публічні репозиторії через низьку кваліфікацію співробітників.",
  },
];
const WC_num = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Несанкціоноване використання матеріалів, які є інтелектуальною власністю",
    dzerelo: "Розробник №3, працюючий за комп’ютером ПК8",
    mec: "Несанкціоноване використання логотипів продукції інших компаній у програмних продуктах, що є інтелектуальною власністю, оскільки не існує правил використання матеріалів, захищених авторським правом.",
  },
];
const WC_nka = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Невиконання контрактних зобов’язань",
    dzerelo: "Бізнес-аналітик №2, працюючий за ПК23",
    mec: "Невиконання зобов'язань щодо захисту конфіденційної інформації через відсутність контролю за виконанням контактних зобов'язань.",
  },
];
const WC_nul = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Несанкціоноване використання програмного забезпечення",
    dzerelo: "Розробник №2, працюючий за комп’ютером ПК7",
    mec: "Використання програмних додатків і відсутність положень політики безпеки щодо програм аутентифікації та ідентифікації користувачів, що призвело до використання несанкціонованого програмного забезпечення та витоку конфіденційної інформації.",
  },
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Несанкціоноване використання програмного забезпечення",
    dzerelo: "Хакер",
    mec: "Несанкціоноване використання програмних додатків і поширення конфіденційних даних через відсутність брандмауерів",
  },
];

const WC_mrd = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Маскарад (привласнення ідентифікатора користувача)",
    dzerelo: "Хакер",
    mec: "Перехоплення даних профілю користувача програмними продуктами та їхній витік і поширення через відсутність міжмережевих екранів і захисту каналів зв'язку між співробітниками.",
  },
];
const WC_ujk = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Використання чужих ідентифікаторів користувачів",
    dzerelo: "Розробник №5, працюючий за комп’ютером ПК11",
    mec: "Відсутність програмних засобів для ідентифікації та автентифікації користувачів на біометричному рівні дає змогу ідентифікаторам розробника 3 отримати доступ до ПК 8 та витік конфіденційної інформації.",
  },
];
const WC_rpi = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Розкриття паролів та іншої інформації аутентифікаці",
    dzerelo: "Розробник №3, працюючий за ПК8",
    mec: "Завантаження конфіденційної інформації у вигляді бази даних паролів і логінів користувачів у публічне сховище, що призвело до збою через низьку кваліфікацію співробітників.",
  },
];
const WC_nud = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ПЗ",
    zagroza: "Нелегальне використання програмного забезпечення",
    dzerelo: "Розробник №2, працюючий за комп’ютером ПК7",
    mec: "Використання неліцензійного програмного забезпечення, що призводить до витоку конфіденційної інформації через відсутність правил використання програмного забезпечення",
  },
];
const WC_pew = [
  {
    name: "Комп'ютерний пристрій",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ФП",
    zagroza: "Побічні електромагнітні випромінювання інформативного сигналу від технічних засобів та мереж передавання інформації",
    dzerelo: "Хакер",
    mec: "Перехоплення інформації в каналах зв'язку з використанням конфігурацій SDR (технологія, що використовує побічне випромінювання) і маркування інформації про продукцію через відсутність засобів забезпечення безпеки від побічного випромінювання.",
  },
  {
    name: "Комп'ютерний пристрій",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ФП",
    zagroza: "Побічні електромагнітні випромінювання інформативного сигналу від технічних засобів та мереж передавання інформації",
    dzerelo: "Компанія-виробник",
    mec: "Перехоплення інформації підслуховуючими особами каналами зв'язку, використання технології переливу і відображення інформації про продукт через відсутність засобів забезпечення безпеки ефектів переливу",
  },
];
const WC_wci = [
  {
    name: "Комп'ютерний пристрій",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ФП",
    zagroza: "Витік конфіденційної інформації на мобільних пристроях, носіях інформації, ноутбуках тощо",
    dzerelo: "Розробник №3, працюючий за ПК8",
    mec: "Зберігання конфіденційної інформації на мобільних пристроях через відсутність правил зберігання конфіденційної інформації.",
  },
  {
    name: "Комп'ютерний пристрій",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ФП",
    zagroza: "Витік конфіденційної інформації на мобільних пристроях, носіях інформації, ноутбуках тощо",
    dzerelo: "Тестувальник №2, працюючий за комп’ютером ПК19",
    mec: "Зберігання конфіденційної інформації на флеш-носіях і переміщення її за межі контрольованих зон, оскільки фізичне переміщення носіїв не контролюється.",
  },
];
const WC_rud = [
  {
    name: "Комп'ютерний пристрій",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ФП",
    zagroza: "Радіовипромінювання обумовлені дією на технічні засоби високочастотних сигналів, які створені за допомогою розвідувального обладнання, та їх модуляції інформативним сигналом",
    dzerelo: "Зловмисник",
    mec: "Перепрограмування технічного обладнання та розкриття конфіденційної інформації для громадськості через недотримання захисту технічного обладнання від радіації.",
  },
];
const WC_aud = [
  {
    name: "Комп'ютерний пристрій",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ФП",
    zagroza: "Акустичне випромінювання інформативного мовного сигналу",
    dzerelo: "Зловмисник ",
    mec: "Жодних заходів захисту від підслуховування не передбачено, тому конфіденційну інформацію може бути перехоплено датчиками вібрації скла.",
  },
];
const WC_vrs = [
  {
    name: "Комп'ютерний пристрій",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ФП",
    zagroza: "Вібраційні сигнали, які виникають шляхом перетворення інформативного акустичного сигналу при його дії на будівельні конструкції та інженерно-технічні комунікації виділених приміщень",
    dzerelo: "Зловмисник",
    mec: "Немає захисту від розкриття, тому хвилі модулюються в звукову інформацію для зчитування коливань металевої конструкції.",
  },
];
const WC_pid = [
  {
    name: "Комп'ютерний пристрій",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ФП",
    zagroza: "Перегляд інформації з екранів дисплеїв та інших засобів її зображення за допомогою оптичних засобів",
    dzerelo: "Зловмисник ",
    mec: "Розробник №3, який працює на ПК 8, використовує оптичні засоби для шпигунства за моніторами і зчитування конфіденційної інформації через відсутність програмного додатка Dark Screen і антишпигунських заходів.",
  },
];


const form3 = document.querySelector("#Zagrozaconf");
const tableBody3 = document.querySelector("#Table_zagconf tbody");

form3.addEventListener("submit", event => {
  event.preventDefault();
  const inputValue3 = document.querySelector("#input3").value;

  if (inputValue3 === "Витік конфіденційної інформації з мережі каналами зв’язку (email, web, chat/IM тощо)") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_vci.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Витік конфіденційної інформації на мобільних пристроях") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_vmp.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Витік конфіденційної інформації на носіях інформації") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_vni.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Прослуховування зовнішніх каналів зв’язку зловмисниками") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_pzk.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Порушення конфіденційності даних, що передаються мережами зв’язку, які проходять поза контрольованою зоною, здійснене зовнішніми порушниками шляхом пасивного прослуховування каналів зв’язку") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_pcd.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Модифікація інформації аутентифікації внаслідок пасивного прослуховування у системі зовнішніх комунікацій") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_cia.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Модифікація інформації автентифікації внаслідок пасивного прослуховування у системі внутрішніх комунікацій") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_inc.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Модифікація інформації автентифікації внаслідок активного прослуховування у системі внутрішніх комунікацій") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_api.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Модифікація конфіденційних даних внаслідок активного прослуховування у системі зовнішніх комунікацій") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_mcd.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Модифікація конфіденційних даних внаслідок пасивного прослуховування у системі зовнішніх комунікацій") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_mpd.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Модифікація конфіденційних даних внаслідок активного прослуховування у системі внутрішніх комунікацій") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_cda.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Модифікація конфіденційних даних внаслідок пасивного прослуховування у системі внутрішніх комунікацій") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_ppi.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Перехоплення інформації на лініях зв’язку шляхом використання різноманітних видів аналізаторів мережевого трафіку") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_pil.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Перехоплення інформації які передають каналами зв’язку з метою її подальшого використання для обходження засобів мережевої аутентифікації") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_piy.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Статистичний аналіз мережевого трафіку") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_sam.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Ненавмисне розкриття конфіденційної інформації співробітниками організації") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_nrc.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Розкриття конфіденційної інформації підрядниками або партнерами організації") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_rci.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Несанкціонований доступ (НСД) до ресурсів організації ЛВС з боку внутрішніх зловмисників") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_nsd.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "НСД до ресурсів організації ЛВС з боку зовнішніх зловмисників") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_ndz.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "НСД до журналів аудиту") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_nja.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "НСД до засобів аудиту") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_nza.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Неумисне розголошення критичної для бізнесу інформації з боку інсайдерів") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_bau.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Порушення інформаційної безпеки з причин недотримання операційних процедур") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_eop.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Порушення інформаційної безпеки з причин неточних планів забезпечення неперервності") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_nep.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Порушення інформаційної безпеки з причин несвоєчасного оновлення планів") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_nop.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Помилка у процесах супроводу") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_epc.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Несанкціоноване використання матеріалів, які є інтелектуальною власністю") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_num.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Невиконання контрактних зобов’язань") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_nka.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Несанкціоноване використання програмного забезпечення") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_nul.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Маскарад (привласнення ідентифікатора користувача)") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_mrd.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Використання чужих ідентифікаторів користувачів") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_ujk.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Розкриття паролів та іншої інформації аутентифікаці") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_rpi.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Нелегальне використання програмного забезпечення") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_nud.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Побічні електромагнітні випромінювання інформативного сигналу від технічних засобів та мереж передавання інформації") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_pew.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Витік конфіденційної інформації на мобільних пристроях, носіях інформації, ноутбуках тощо") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_wci.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Радіовипромінювання обумовлені дією на технічні засоби високочастотних сигналів, які створені за допомогою розвідувального обладнання, та їх модуляції інформативним сигналом") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_rud.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Акустичне випромінювання інформативного мовного сигналу") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_aud.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Вібраційні сигнали, які виникають шляхом перетворення інформативного акустичного сигналу при його дії на будівельні конструкції та інженерно-технічні комунікації виділених приміщень") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_vrs.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else if (inputValue3 === "Перегляд інформації з екранів дисплеїв та інших засобів її зображення за допомогою оптичних засобів") {
    // Clear table
    tableBody3.innerHTML = "";

    // Loop through array and create table rows and cells
    WC_pid.forEach(person => {
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

      tableBody3.appendChild(row);
    });
  } else {
    // Clear table
    tableBody3.innerHTML = "";
  }
  // 
});
