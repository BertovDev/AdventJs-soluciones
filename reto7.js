function contains(store, product) {

  let encontrado = false

  Object.entries(store).forEach(([key, value]) => {
    if (typeof value === "object") {
      encontrado = contains(value, product)
    } else {
      if (value === product) encontrado = true;
    }
  })


  return encontrado;

}



const store = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}


console.log(contains(store, "camiseta"))