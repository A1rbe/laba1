

const ZC_zzo = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Зловживання засобами аудиту",
    dzerelo: "Зовнішній аудитор",
    mec: "Руйнування цілісності інструментів аудиту шляхом модифікації результатів аудиту програмних продуктів через відсутність правил поділу доступу, програмних засобів аутентифікації та ідентифікації користувачів і відповідних вимог до зберігання інструментів аудиту"
  },
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Зловживання засобами аудиту",
    dzerelo: "Розробник №4 працюючий за комп’ютером ПК9",
    mec: "Видалення електронних файлів із результатами аудиту програмного продукту через відсутність правил розмежування доступу та програмних засобів аутентифікації та ідентифікації користувачів"
  },
];

const ZC_zoi = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Зловживання засобами оброблення інформації",
    dzerelo: "Розробник №1 працюючий за комп’ютером ПК6",
    mec: "Видалення незбережених даних документів програмного продукту через відсутність програмних додатків Safe Write і програмних інструментів для аутентифікації та ідентифікації користувача"
  },
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Зловживання засобами оброблення інформації",
    dzerelo: "Бухгалтер",
    mec: "Відсутність додатка для резервного копіювання даних Macrium Reflect ненавмисно порушила цілісність процесу опрацювання фінансових активів, що належать до програмного продукту."
  },
];

const ZC_mac = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Модифікація інформації аутентифікації внаслідок активного прослуховування у системі зовнішніх комунікацій",
    dzerelo: "Хакер",
    mec: "Фальсифікація автентифікаційної інформації програмних продуктів шляхом перехоплення і фальсифікації пакетів даних через відсутність брандмауерів і механізмів шифрування даних."
  },
];

const ZC_mpc = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Модифікація інформації аутентифікації внаслідок пасивного прослуховування у системі зовнішніх комунікацій",
    dzerelo: "Бізнес-аналітик №2, працюючий за комп’ютером ПК23",
    mec: "Ненавмисна фальсифікація даних аутентифікації клієнта через відсутність шифрування даних (наприклад, хешування)."
  },
];

const ZC_zdk = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Зміна даних користувачів в інформаційному потоці",
    dzerelo: "Хакер",
    mec: "Перехоплення даних користувачів програмного забезпечення через відсутність шифрування даних та їх зміна"
  },
];

const ZC_vdk = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Встановлення даних користувачів в інформаційному потоці",
    dzerelo: "Хакер",
    mec: "Злом каналів зв'язку та внесення персональних даних до систем доступу до програмних продуктів через відсутність належного ведення даних та адекватного захисту каналів зв'язку"
  },
];

const ZC_ddk = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Видалення даних користувачів в інформаційному потоці",
    dzerelo: "Хакер",
    mec: "Видалення баз даних, що містять користувацькі дані програмного продукту, через відсутність автоматизованого резервного копіювання даних."
  },
];

const ZC_nsd = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "НСД до журналів аудиту",
    dzerelo: "Хакер",
    mec: "Злом парольної системи внутрішньої мережі та знищення журналів аудиту програмного продукту через недостатню захищеність міжмережевих екранів і каналів зв'язку."
  },
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "НСД до журналів аудиту",
    dzerelo: "Тестер №2, працюючий за комп’ютером ПК17",
    mec: "Завантаження та розповсюдження матеріалів на фізичних носіях без правил контролю доступу або програмного забезпечення для автентифікації та ідентифікації користувача."
  },
];

const ZC_lbe = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Логічні бомби, які переслані електронною поштою",
    dzerelo: "Хакер",
    mec: "Розсилка логічних бомб із використанням протоколу SMTP і перехоплення інформації з баз електронної пошти співробітників із корпоративними даними через відсутність правил політики безпеки для конфігурації корпоративної електронної пошти та програмного забезпечення для автентифікації та ідентифікації користувачів."
  },
];

const ZC_vnc = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Впровадження несанкціонованого коду",
    dzerelo: "Розробник №3, працюючий за комп’ютером ПК8",
    mec: "Додавання до вихідного коду програмного продукту коду, який не був узгоджений із замовником, оскільки чіткі робочі інструкції не були кодифіковані."
  },
];

const ZC_vpc = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Впровадження непротестованого коду",
    dzerelo: "Тестувальник №3, працюючий за комп’ютером ПК19",
    mec: "Недбале ставлення співробітників до своїх обов'язків, коли програмні продукти запускаються у виробництво без належного тестування."
  },
];

const ZC_urk = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Умисне руйнування критичної для бізнесу інформації з боку інсайдерів",
    dzerelo: "Розробник №3, працюючий за комп’ютером ПК8",
    mec: "Знищення даних і вихідного коду програмного продукту через відсутність контролю над роботою співробітників і доступом до них."
  },
];

const ZC_uri = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Умисне руйнування критичної для бізнесу інформації з боку зовнішніх зловмисників",
    dzerelo: "Хакер",
    mec: "Знищення баз даних клієнтів на серверах компанії через відсутність програмних додатків для резервного копіювання даних і багатозонових систем зберігання критично важливої інформації."
  },
];

const ZC_zpz = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Знищення планів забезпечення неперервності бізнесу",
    dzerelo: "Бізнес-аналітик №2, працюючий за комп’ютером ПК23",
    mec: "Знищення даних бізнес-процесів через відсутність правил контролю доступу та структурування зберігання і введення даних бізнес-процесів"
  },
];

const ZC_pcd = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Порушення цілісності даних через помилки користувачів",
    dzerelo: "Користувач",
    mec: "Модифікація вихідного коду користувачем з метою припинення роботи програмного продукту, оскільки дані в програмному продукті не зашифровані."
  },
];

const ZC_nmb = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Неумисна модифікація баз даних, файлів даних, звітів у результаті помилок технічного персоналу",
    dzerelo: "Розробник №4, працюючий за комп’ютером ПК9",
    mec: "Ненавмисна зміна користувацьких і клієнтських даних програмного продукту через недостатню кваліфікацію персоналу та відсутність програмного забезпечення Macrium Reflect для створення резервних копій даних."
  },
];

const ZC_ppt = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Помилка персоналу технічної підтримки",
    dzerelo: "Системний адміністратор, працюючий за комп’ютером ПК26",
    mec: "Ненавмисна зміна ідентифікаційних та аутентифікаційних даних користувачів серверів компанії через низьку кваліфікацію співробітників"
  },
];

const ZC_pci = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер в кімнаті №3",
    category: "ЕФ",
    zagroza: "Порушення цілісності даних з боку інсайдерів",
    dzerelo: "Розробник №3, працюючий за комп’ютером ПК8",
    mec: "Macrium Reflect, додаток для резервного копіювання та часткове видалення файлів журналу програмного продукту через втрату контролю."
  },
];

const ZC_nvp = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ПЗ",
    zagroza: "Несанкціоноване використання програмного забезпечення",
    dzerelo: "Системний адміністратор, працюючий за комп’ютером ПК26",
    mec: "Відсутність чітких правил використання програмного забезпечення призвела до встановлення несанкціонованого програмного забезпечення та внесення змін до наявного програмного забезпечення."
  },
];

const ZC_vpk = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ПЗ",
    zagroza: "Використання помилок конфігурації програмного забезпечення (ПЗ)",
    dzerelo: "Хакер",
    mec: "Відсутній механізм закриття програмних прогалин, тому дані програми зчитуються і відкидаються."
  },
];

const ZC_amp = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ПЗ",
    zagroza: "Аналіз та модифікація ПЗ",
    dzerelo: "Системний адміністратор, працюючий за комп’ютером ПК №26",
    mec: "Ненавмисний злам наявного програмного забезпечення та впровадження неоригінального програмного забезпечення через недостатню кваліфікацію співробітників."
  },
];

const ZC_vnm = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ПЗ",
    zagroza: "Використання незадекларованих можливостей у ПЗ, які залишені для налагодження",
    dzerelo: "Розробник №3, працюючий за комп’ютером ПК8",
    mec: "Відсутність чітких правил використання програмного забезпечення, використання неперевіреного програмного забезпечення у виробництві або зміна файлів журналу для наявного програмного забезпечення."
  },
];

const ZC_vnz = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ПЗ",
    zagroza: "Впровадження несанкціонованого та непротестованого ПЗ",
    dzerelo: "Системний адміністратор, працюючий за комп’ютером ПК26",
    mec: "Завантаження неперевірених програмних додатків для роботи з програмними продуктами призвело до зміни вихідного коду через відсутність ліцензійного програмного забезпечення."
  },
];

const ZC_vzp = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ПЗ",
    zagroza: "Впровадження зловмисного ПЗ",
    dzerelo: "Хакер",
    mec: "Оскільки брандмауери та механізми захисту комунікаційних шляхів відсутні, через комунікаційні шляхи компанії відправляють пакети для завантаження шкідливих програм і видалення наявного програмного забезпечення."
  },
];

const ZC_rdz = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ПЗ",
    zagroza: "Руйнування даних з причин системного збою",
    dzerelo: "Розробник №3, працюючий за ПК8",
    mec: "Збій системи через відсутність програмного додатка для резервного копіювання Macrium Reflect, коли програмний додаток зі збереженими даними було видалено."
  },
];

const ZC_zsi = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ПЗ",
    zagroza: "Збій у системах інформаційної безпеки",
    dzerelo: "Хакер",
    mec: "Оскільки додаткових засобів захисту інформаційних систем не існує, прогалини в системах інформаційної безпеки використовуються для знищення програмного забезпечення з корпоративних пристроїв."
  },
];

const ZC_vvz = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ПЗ",
    zagroza: "Внесення випадкових змін у ПЗ та засоби спільного використання даних в обчислювальному середовищі",
    dzerelo: "Системний адміністратор, працюючий за ПК26",
    mec: "Ненавмисна модифікація програмного забезпечення через низьку кваліфікацію співробітників."
  },
];

const ZC_vuz = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ПЗ",
    zagroza: "Внесення умисних змін у ПЗ та засоби спільного використання даних в обчислювальному середовищі",
    dzerelo: "Хакер",
    mec: "Відсутність брандмауерів, механізмів безпеки, резервного копіювання даних і багатозональної доступності корпоративних серверів, що дає змогу зламувати мережу, підключатися до корпоративних серверів і видаляти їхній вміст."
  },
];

const ZC_upz = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ПЗ",
    zagroza: "Умисне пошкодження ПЗ та резервних копій внутрішніми порушниками",
    dzerelo: "Тестер №2, працюючий за ПК19",
    mec: "Знищення резервних копій програмних додатків і програмних продуктів через відсутність програмних засобів для ідентифікації та автентифікації користувачів, відсутність надійних програмних систем для захисту корпоративних пристроїв і відсутність розробника №3 на робочому місці."
  },
];

const ZC_vtp = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ПЗ",
    zagroza: "Вплив на технічні та програмні засоби з метою порушення цілісності, працездатності інформації шляхом спеціально впроваджених електронних та програмних засобів",
    dzerelo: "Компанія-партнер",
    mec: "Обмін програмним забезпеченням для опрацювання інформації та несанкціоноване копіювання даних програмного додатка через відсутність правил контролю доступу та відповідного контролю за поведінкою партнерів."
  },
];

const ZC_vte = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ПЗ",
    zagroza: "Вплив на технічні та програмні засоби з метою порушення працездатності адрес та своєчасного інформаційного обміну шляхом спеціально впроваджених електронних та програмних засобів",
    dzerelo: "Провайдер",
    mec: "Ненавмисне видалення призначеної DNS-адреси корпоративного сайту і повна недоступність корпоративного сайту у зв'язку з низькою кваліфікацією провайдера."
  },
];

const ZC_pcs = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ПЗ",
    zagroza: "Порушення цілісності систем та даних у результаті помилок технічного персоналу",
    dzerelo: "Системний адміністратор, працюючий за комп’ютером ПК26",
    mec: "Видалення всіх резервних ресурсів з ПК 8 через відсутність додаткового середовища для зберігання резервних даних."
  },
];

const ZC_ncs = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ПЗ",
    zagroza: "Неумисна модифікація системної конфігурації у результаті помилок технічного персоналу",
    dzerelo: "Системний адміністратор, працюючий за комп’ютером ПК26",
    mec: "Ненавмисні зміни даних комп'ютерної програми PC8 внаслідок завантаження системи з резервної копії через низький рівень кваліфікації співробітників."
  },
];

const ZC_zzt = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ПЗ",
    zagroza: "Збиток, завданий тестами на проникнення",
    dzerelo: "Тестер №2, працюючий за ПК19",
    mec: "Несанкціонований доступ до комп'ютерів PC8, що призводить до ненавмисних змін у таблиці мережевих адрес через відсутність програмного захисту на мережевому рівні."
  },
];

const ZC_vtz = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ПЗ",
    zagroza: "Втрата записів",
    dzerelo: "Розробник №3",
    mec: "Записи з даними програмного додатка губляться під час перезапуску ПК PC8 через відсутність запланованого створення резервних копій даних."
  },
];

const ZC_znj = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ПЗ",
    zagroza: "Знищення записів",
    dzerelo: "Хакер",
    mec: "Знищення резервних записів через неадекватні брандмауери або програмне забезпечення для ідентифікації та аутентифікації користувачів."
  },
];

const ZC_pck = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ПЗ",
    zagroza: "Порушення цілісності систем з боку інсайдерів",
    dzerelo: "Розробник №5, працюючий за комп’ютером ПК10",
    mec: "Ненавмисне знищення баз даних, що містять авторизаційні дані співробітників, на серверах компанії через відсутність правил контролю доступу та додаткових програмних засобів для зберігання критично важливої інформації."
  },
];

const ZC_atm = [
  {
    name: "Програмне забеспечення",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ПЗ",
    zagroza: "Аналіз та модифікація ПЗ",
    dzerelo: "Хакер",
    mec: "У результаті злому корпоративної мережі шкідливе ПЗ було впроваджено у вісім ПК через відсутність актуального програмного забезпечення безпеки та застарілих механізмів мережевого захисту."
  },
];

const ZC_vmz = [
  {
    name: "Комп'ютерний пристрій",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ФП",
    zagroza: "Використання мережевих засобів несанкціонованим чином",
    dzerelo: "Інсайдер",
    mec: "Зміна мережевих налаштувань технічними засобами через недостатній захист внутрішніх мережевих налаштувань."
  },
];

const ZC_nao = [
  {
    name: "Комп'ютерний пристрій",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ФП",
    zagroza: "Необережне або умисне зловживання обладнанням з причини відсутності розподілу обов’язків або їх невиконання",
    dzerelo: "Інсайдер",
    mec: "Використання несанкціонованих пристроїв зберігання даних, втрата даних через відсутність поділу обов'язків тощо."
  },
];

const ZC_pni = [
  {
    name: "Комп'ютерний пристрій",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ФП",
    zagroza: "Пошкодження носіїв інформації",
    dzerelo: "Розробник №3",
    mec: "Жорсткий диск, на якому зберігалася інформація, був пошкоджений, а вимог до використання фізичного носія не було дотримано, що зробило його повністю непрацездатним."
  },
];

const ZC_zmo = [
  {
    name: "Комп'ютерний пристрій",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ФП",
    zagroza: "Збої мережевого обладнання",
    dzerelo: "Системний адміністратор",
    mec: "Використання неоригінального програмного забезпечення призвело до збоїв у роботі мережевого обладнання, оскільки не було дотримано вимог щодо встановлення та використання додатків і програмного забезпечення."
  },
];
const ZC_zra = [
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ЕФ",
    zagroza: "Зловживання ресурсами та активами",
    dzerelo: "Розробник №2, працюючий за комп’ютером ПК7",
    mec: "Видалення незбережених даних документів програмного продукту через відсутність програмних додатків Safe Write і програмних інструментів для аутентифікації та ідентифікації користувача."
  },
  {
    name: "Програмний продукт",
    owner: "Розробник №3",
    location: "Комп'ютер ПК №8 в кімнаті №3",
    category: "ЕФ",
    zagroza: "Зловживання ресурсами та активами",
    dzerelo: "Програма “System Updater”",
    mec: "Збій у роботі програмних продуктів через повне завантаження операційних ресурсів пристрою внаслідок відсутності програмного забезпечення для моніторингу ресурсів."
  },
];

const form = document.querySelector("#Zagrozacil");
const tableBody = document.querySelector("#Table_zagcil tbody");

form.addEventListener("submit", event => {
  event.preventDefault();
  const inputValue = document.querySelector("#input").value;

  if (inputValue === "Зловживання засобами аудиту") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_zzo.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Зловживання засобами оброблення інформації") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_zoi.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Зловживання ресурсами та активами") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_zra.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Модифікація інформації аутентифікації внаслідок активного прослуховування у системі зовнішніх комунікацій") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_mac.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Модифікація інформації аутентифікації внаслідок пасивного прослуховування у системі зовнішніх комунікацій") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_mpc.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Зміна даних користувачів в інформаційному потоці") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_zdk.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Встановлення даних користувачів в інформаційному потоці") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_vdk.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Видалення даних користувачів в інформаційному потоці") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_ddk.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "НСД до журналів аудиту") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_nsd.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Логічні бомби, які переслані електронною поштою") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_lbe.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Впровадження несанкціонованого коду") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_vnc.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Впровадження непротестованого коду") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_vpc.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Умисне руйнування критичної для бізнесу інформації з боку інсайдерів") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_urk.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Умисне руйнування критичної для бізнесу інформації з боку зовнішніх зловмисників") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_uri.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Знищення планів забезпечення неперервності бізнесу") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_zpz.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Порушення цілісності даних через помилки користувачів") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_pcd.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Неумисна модифікація баз даних, файлів даних, звітів у результаті помилок технічного персоналу") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_nmb.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Помилка персоналу технічної підтримки") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_ppt.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Порушення цілісності даних з боку інсайдерів") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_pci.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Несанкціоноване використання програмного забезпечення") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_nvp.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Використання помилок конфігурації програмного забезпечення (ПЗ)") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_vpk.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Аналіз та модифікація ПЗ") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_amp.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Використання незадекларованих можливостей у ПЗ, які залишені для налагодження") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_vnm.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Впровадження несанкціонованого та непротестованого ПЗ") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_vnz.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Впровадження зловмисного ПЗ") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_vzp.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Руйнування даних з причин системного збою") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_rdz.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Збій у системах інформаційної безпеки") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_zsi.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Внесення випадкових змін у ПЗ та засоби спільного використання даних в обчислювальному середовищі") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_vvz.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Внесення умисних змін у ПЗ та засоби спільного використання даних в обчислювальному середовищі") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_vuz.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Умисне пошкодження ПЗ та резервних копій внутрішніми порушниками") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_upz.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Вплив на технічні та програмні засоби з метою порушення цілісності, працездатності інформації шляхом спеціально впроваджених електронних та програмних засобів") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_vtp.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Вплив на технічні та програмні засоби з метою порушення працездатності адрес та своєчасного інформаційного обміну шляхом спеціально впроваджених електронних та програмних засобів") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_vte.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Порушення цілісності систем та даних у результаті помилок технічного персоналу") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_pcs.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Неумисна модифікація системної конфігурації у результаті помилок технічного персоналу") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_ncs.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Збиток, завданий тестами на проникнення") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_zzt.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Втрата записів") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_vtz.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Знищення записів") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_znj.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Порушення цілісності систем з боку інсайдерів") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_pck.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Аналіз та модифікація ПЗ") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_atm.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Використання мережевих засобів несанкціонованим чином") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_vmz.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Необережне або умисне зловживання обладнанням з причини відсутності розподілу обов’язків або їх невиконання") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_nao.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Пошкодження носіїв інформації") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_pni.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else if (inputValue === "Збої мережевого обладнання") {
    // Clear table
    tableBody.innerHTML = "";

    // Loop through array and create table rows and cells
    ZC_zmo.forEach(person => {
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

      tableBody.appendChild(row);
    });
  } else {
    // Clear table
    tableBody.innerHTML = "";
  }
  // Zagroza_cilisnosti done: 2143 lines, 42 zagrozy in 1-2-3st pints
});
