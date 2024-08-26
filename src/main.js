import "./index.css"
import { encrypt } from "./utils/encrypt"
import { decrypt } from "./utils/decrypt"
import { main } from "./templates/main"
import { displayCopyButton } from "./ui/copyButton"

document.querySelector("#app").innerHTML = main

document.querySelector("#btnEncrypt").addEventListener("click", () => {
  const text = document.querySelector("#text").value
  if (text === "") {
    return
  }
  const encryptedText = encrypt(text)
  document.querySelector(
    "#result"
  ).innerHTML = `<p id="resultText" class="text-gray-700 text-center">${encryptedText}</p>`
  displayCopyButton()
})

document.querySelector("#btnDecrypt").addEventListener("click", () => {
  const text = document.querySelector("#text").value
  if (text === "") {
    return
  }
  const decryptedText = decrypt(text)
  document.querySelector(
    "#result"
  ).innerHTML = `<p id="resultText" class="text-gray-700 text-center">${decryptedText}</p>`
  displayCopyButton()
})
