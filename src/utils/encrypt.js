export const encrypt = (text) => {
  return text
    .split("")
    .map((char) => {
      return String.fromCharCode(char.charCodeAt(0) + 1)
    })
    .join("")
}