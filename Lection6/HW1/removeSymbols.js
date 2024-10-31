const inputString = prompt("Input string:");
const charsToRemove = prompt("Input characters to remove:");

function removeCharacters(inputString, charsToRemove) {
  return inputString
    .split("")
    .filter((char) => !charsToRemove.includes(char))
    .join("");
}
