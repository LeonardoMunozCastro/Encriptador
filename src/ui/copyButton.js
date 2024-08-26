export const displayCopyButton = () => {
  const copyButton = document.createElement("button")
  copyButton.textContent = "Copiar"
  copyButton.className =
    "sm:text-sm md:text-base lg:text-lg bg-white w-2/4 border border-blue-800 text-blue-800 py-3 px-4 rounded-lg transition hover:bg-gray-50 duration-300 absolute bottom-0 mb-4"
  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(
      document.querySelector("#resultText").textContent
    )
  })
  document.querySelector("#result").appendChild(copyButton)
}