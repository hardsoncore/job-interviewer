
<p>
  TypeScript предоставляет встроенные <strong>инструменты для трансформации существующих типов</strong> (особенно
  полезно при работе со стейт-менеджерами или сложными формами).
</p>

<h3>1. Partial&lt;Type> (Частичный)</h3>
<p>
  Делает все свойства переданного типа необязательными (добавляет <code>?</code> к каждому полю).
  <br>
  <strong>Где применять:</strong> Идеально подходит для функций обновления (patch), когда мы передаем только
  те поля, которые изменились.
</p>

<code class="code">
  interface Dog {
    name: string;
    breed: string;
    age: number;
    isGoodGirl: boolean;
  }

  // Представь, что мы обновляем профиль питомца. Нам не нужно передавать
  // все поля заново.
  function updateDogProfile(id: string, data: Partial&lt;Dog>) {
    // отправляем patch-запрос
  }

  // Валидно! Обновляем только возраст (например, Диуне исполнилось 3 года),
  // остальные поля TS не требует.
  updateDogProfile('123', { age: 3 });
</code>

<h3>2. Required&lt;Type> (Обязательный)</h3>
<p>
  Абсолютная противоположность <code>Partial</code>. Берет тип и делает все его свойства обязательными (удаляет <code>?</code>).
  <br>
  <strong>Где применять:</strong> Когда у тебя есть гибкий интерфейс настроек по умолчанию, но в каком-то строгом контексте
  (например, перед сохранением в БД или отправкой формы) ты должен гарантировать наличие абсолютно всех полей.
</p>

<code class="code">
  interface CarOptions {
    model: string;
    year?: number;
    tuning?: string;
  }

  // Для предварительного расчета страховки достаточно только модели:
  const draftPolicy: CarOptions = { model: 'Audi A3' };

  // Но для финального оформления договора мы жестко требуем все данные:
  const fullPolicy: Required&lt;CarOptions> = {
    model: 'Audi A3',
    year: 2015,
    tuning: 'Stock' // Если закомментировать это поле, TS выдаст ошибку
  };
</code>

<h3>3. Pick&lt;Type, Keys> (Выбрать)</h3>
<p>
  Создает новый тип, "выдергивая" из базового интерфейса <strong>только указанные ключи</strong>.
  <br>
  <strong>Где применять:</strong> Когда у тебя есть огромный интерфейс модели с бэкенда, а для конкретного
  UI-компонента (например, карточки превью) нужна лишь пара полей из него.
</p>

<code class="code">
  interface Game {
    id: string;
    title: string;
    platform: string;
    sizeGb: number;
    achievements: string[];
  }

  // Для списка релизов на главной странице нам не нужен размер в гигабайтах или ачивки
  type GamePreview = Pick&lt;Game, 'title' | 'platform'&gt;;

  const latestRelease: GamePreview = {
    title: 'God of War',
    platform: 'PS4'
    // TS ругнется, если попытаться добавить сюда sizeGb
  };
</code>

<h3>4. Omit&lt;Type, Keys> (Исключить)</h3>
<p>
  Работает как <code>Pick</code>, но наоборот. Берет базовый тип и выбрасывает из него указанные ключи. Всё остальное остается.
  <br>
  <strong>Где применять:</strong> Когда нужно взять интерфейс, но исключить из него технические или секретные данные
  (ID, пароли, токены).
</p>

<code class="code">
  interface Game {
    id: string;
    title: string;
    platform: string;
    sizeGb: number;
    achievements: string[];
  }

  // для публичного API скрываем внутренний ID
  type PublicGameInfo = Omit&lt;Game, 'id'>;

  const publicData: PublicGameInfo = {
    title: 'Bloodborne',
    platform: 'PS4',
    sizeGb: 41,
    achievements: ['Trophy 1', 'Trophy 2']
  };
</code>

<h3>5. Record&lt;Keys, Type> (Запись / Словарь)</h3>

<p>
  Создает тип объекта, где ключами выступает набор Keys, а значениями этих ключей будет <code>Type</code>.
  <br>
  <strong>Где применять:</strong> Самый популярный юзкейс — создание строго типизированных словарей (мап, хэш-таблиц).
  Заменяет устаревший подход с индексируемыми типами вроде <code>[key: string]: any</code>.
</p>

<code class="code">
  type Weekday = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

  // Строго типизируем статистику: ключами могут быть только дни недели,
  // а значениями - пройденные километры.
  const cyclingStats: Record&lt;Weekday, number> = {
    monday: 155,
    tuesday: 0,
    wednesday: 160,
    thursday: 0,
    friday: 0,
    saturday: 180,
    sunday: 0
  };
  // TS не позволит добавить ключ "someday" или передать строку вместо числа пробега.
</code>
    