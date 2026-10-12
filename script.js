// Лабораторна робота №2. Варіант 8.
// Завдання 1: діагоналі прямої призми з ромбом в основі.

// Отримання числового значення від користувача.
function readNumber(message) {
  const input = prompt(message);

  if (input === null) {
    return null; // Користувач натиснув «Скасувати».
  }

  if (input.trim() === "") {
    alert("Помилка: необхідно ввести число.");
    return null;
  }

  const value = Number(input.replace(",", "."));

  if (!Number.isFinite(value)) {
    alert("Помилка: введіть коректне число.");
    return null;
  }

  return value;
}

// Завдання 1.
function calculatePrismDiagonals() {
  const a = readNumber("Введіть сторону ромба a:");
  if (a === null) return;

  const angle = readNumber("Введіть кут між сторонами ромба (у градусах):");
  if (angle === null) return;

  const h = readNumber("Введіть висоту призми h:");
  if (h === null) return;

  if (a <= 0 || h <= 0 || angle <= 0 || angle >= 180) {
    alert("Помилка: сторона і висота мають бути додатними, а кут — від 0° до 180° (не включно).");
    return;
  }

  // Перетворюємо градуси на радіани для Math.cos().
  const angleRad = angle * Math.PI / 180;

  // У ромба дві діагоналі різної довжини (крім випадку квадрата).
  const baseDiagonal1 = a * Math.sqrt(2 + 2 * Math.cos(angleRad));
  const baseDiagonal2 = a * Math.sqrt(2 - 2 * Math.cos(angleRad));

  // Просторові діагоналі призми: D = sqrt(d² + h²).
  const diagonal1 = Math.sqrt(baseDiagonal1 ** 2 + h ** 2);
  const diagonal2 = Math.sqrt(baseDiagonal2 ** 2 + h ** 2);

  const result =
    "Результат обчислення:\n" +
    "Перша діагональ призми: " + diagonal1.toFixed(2) + "\n" +
    "Друга діагональ призми: " + diagonal2.toFixed(2);

  alert(result);
  console.log(result);
}

// Підключення функції до кнопки першого завдання.
document.getElementById("task1Button").addEventListener("click", calculatePrismDiagonals);

// Завдання 2: обчислення f(x) = sqrt(7 - x³).
function calculateFunction() {
  const resultElement = document.getElementById("result");
  const x = readNumber("Введіть значення x для функції f(x) = √(7 − x³):");

  if (x === null) {
    resultElement.textContent = "Розрахунок не виконано.";
    return;
  }

  const expression = 7 - x ** 3;

  if (expression < 0) {
    resultElement.textContent =
      "Помилка: при x = " + x + " вираз 7 − x³ від’ємний. " +
      "Функція не має дійсного значення.";
    return;
  }

  const y = Math.sqrt(expression);
  resultElement.textContent =
    "При x = " + x + ": f(x) = √(7 − " + x + "³) = " + y.toFixed(4);
}

// Підключення функції до кнопки другого завдання.
document.getElementById("task2Button").addEventListener("click", calculateFunction);

