const controles = document.getElementById('controles')
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn')

controles.addEventListener('change', handleChange)


const handleStyle = {
  element: btn,
  texto(value){
    this.element.innerText = value
  },
  color(value) {
    this.element.style.color = value
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value
  },
  height(value) {
    this.element.style.height = value + 'px'
  },
  width(value) {
    this.element.style.width = value + 'px'
  },
  border(value) {
    this.element.style.border = value
  },
  borderRadius(value) {
    this.element.style.borderRadius = value
  },
  fontFamily(value) {
    this.element.style.fontFamily = value
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'px'
  },
  
}

function handleChange(event) {
  const name = event.target.name //pegando o name de cada mudandça feita
  const value = event.target.value //pegadno o valor de cada mudança feita
  // console.log(name, value)

  // acessando o método "handleStyle", passando o name e ativando a função colocando o "value" dentro de parenteses ()
  handleStyle[name](value)
  // handleChange.height(200) // é a mesma coisa que o de cima
  

  // Ambas as formas são jeitos para acessar os métodos de um objeto
  // console.log(handleChange.name)
  // console.log(handleChange["backGroudColor"])

    saveValues(name, value)
    showCSS()
}


function saveValues(name, value){
  localStorage[name] = value
}

function setValue() {
  const properties = Object.keys(localStorage)
  properties.forEach( item => {

    // handleStyle[name](value) é a mesma coisa que o de baixo só que tem que acessar com outros nomes

    handleStyle[item](localStorage[item])

    // console.log(controles.elements) // é uma array com todos os elemnto
    // controles.elements[color] poderia colocar um por um desta maneira, mas pelo forEach podemos colocar pelo item
    controles.elements[item].value = localStorage[item] //salvando os valores digitados, para que aparecça ele nos campos
  })
  showCSS() //ativando a funçaõ para que ao dar reflech ou abrir novamente a page ele já nos mostre o css
}

setValue()


function showCSS() {
  // cssText.innerText = btn.style.cssText //jogando os estuilos na tela

  // usando o "split" para separar os itens pelo ";" e ajundar eles novamento em um span para quebrar linha
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>')
}