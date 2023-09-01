function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // get tag img
  const img = document.querySelector("#profile img")

  // replace the image
  if (html.classList.contains("light")) {
    // if it's in light mode, add the light image
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos de sol e jaqueta preta, sem barba e fundo azul gradiente."
    )
  } else {
    // if it's not in light mode, keep the normal image
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo."
    )
  }
}
