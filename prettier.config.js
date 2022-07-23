// prettier.config.js or .prettierrc.js
module.exports = {
    // До 100 символов в строке
    printWidth: 100,
    // Используйте 4 пробела для отступа
    tabWidth: 2,
    // Не использовать отступы, использовать пробелы
    useTabs: false,
    // в конце строки должна быть точка с запятой
    semi: true,
    // Используйте одинарные кавычки
    singleQuote: false,
    // Ключ объекта цитируется только при необходимости
    quoteProps: "as-needed",
    // jsx не использует одинарные кавычки, а двойные кавычки
    jsxSingleQuote: false,
    // Без запятой в конце
    trailingComma: "none",
    // В начале и конце фигурных скобок нужны пробелы
    bracketSpacing: true,
    // Задние угловые скобки тегов jsx необходимо обернуть
    jsxBracketSameLine: false,
    // Для стрелочных функций круглые скобки также необходимы, когда есть только один параметр
    arrowParens: "always",
    // Диапазон форматирования каждого файла - это все содержимое файла
    rangeStart: 0,
    rangeEnd: Infinity,
    // Нет необходимости писать @prettier в начале файла
    requirePragma: false,
    // Нет необходимости автоматически вставлять @prettier в начало файла
    insertPragma: false,
    // Использовать стандарт разрыва строки по умолчанию
    proseWrap: "preserve",
    // Решаем, разбивать ли html в соответствии со стилем отображения
    htmlWhitespaceSensitivity: "css",
    // Используйте lf для новой строки
    endOfLine: "lf"
  };