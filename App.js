const recetas = [
    {
      nombre: "Arroz con Pollo (4 personas)",
      descripcion:"El arroz con pollo es un plato tradicional de la cocina latinoamericana que consiste en arroz cocido junto con trozos de pollo, sazonado con diversas especias y a menudo mezclado con verduras. Es una mezcla sabrosa y reconfortante que refleja la diversidad culinaria de la región.",
      cantidad: "4 personas",
      ingredientes: [
        { nombre: 'Pollo', cantidad: '1 pechuga'},
        { nombre: 'Arroz', cantidad: '1 taza'},
        { nombre: 'Tabanos', cantidad: '1 paq de 6 uniaddes'},
        { nombre: 'Habichuelas', cantidad: '200gr'},
        { nombre: 'Cebollas', cantidad: '1'}
      ],
      precio: 20,
    },
    {
      nombre: 'Spaguettis a la Bolognesa',
      descripcion:"Los espaguetis a la boloñesa son un plato de pasta italiano que consiste en fideos de espagueti cubiertos con una salsa espesa de carne, generalmente preparada con carne picada, tomate, cebolla, ajo y hierbas. Es una combinación deliciosa y popular en la cocina italiana.",
      cantidad: "2 personas",
      ingredientes: [
        { nombre: 'Spaguettis', cantidad: '250 gr'},
        { nombre: 'Salsa bolognesa', cantidad: '1 paquete'},
        { nombre: 'Carne de res molida', cantidad: '1 lb'},
        { nombre: 'Adobo para la carne', cantidad: '1 paquete'},
      ],
      precio : 15,
    },
    {
        nombre: 'Chuleta de cerdo',
        descripcion : "La chuleta de cerdo es una porción de carne de cerdo que incluye un hueso en el centro, a menudo parte del lomo o costillar. Se cocina asada, a la parrilla o a la plancha, y se caracteriza por su sabor jugoso y tierno. Es una elección popular en muchas cocinas debido a su versatilidad y delicioso sabor.",
        cantidad:"3 Personas",
        ingredientes: [
          { nombre: 'Carne pulpa', cantidad: '1 lb'},
          { nombre: 'Huevo', cantidad: '3 paquete'},
          { nombre: 'Pan molido', cantidad: '1 lb'},
          { nombre: 'Arroz', cantidad: '1 taza'},
        ]
      },
  ];

  let itrecetas =
  {
    nombre: '',
    descripcion : "",
    ingredientes: []
  };

  function mostrarIngredientes(receta) {
    const mensaje = "Ingredientes: " + receta.ingredientes.map(ingrediente => ingrediente.nombre).join(", ");
    alert(mensaje);
  }

  alert("Bienvenido al libro de recetas, Tacon tento");
  nombre = prompt("por favor escriba su nombre");

  let ingrecetas = parseInt(prompt(nombre + "," + "Qué receta desea conocer información. 1)Arroz con pollo, 2)Spaguetis en Salsa bolognesa, 3) Chuleta de cerdo 4) Deseas agregar una receta"));

  if (seleccionReceta >= 1 && seleccionReceta <= recetas.length) {
  let seleccionInfo = parseInt(prompt("¿Qué deseas conocer? 1) Descripción de la receta, 2) Cantidad de personas que comen, 3) Ingredientes"));

  if (seleccionInfo === 1) {
    mostrarDescripcion(recetas[seleccionReceta - 1]);
  } else if (seleccionInfo === 2) {
    mostrarCantidad(recetas[seleccionReceta - 1]);
  } else if (seleccionInfo === 3) {
    mostrarIngredientes(recetas[seleccionReceta - 1]);
  } else {
    alert("Opción no válida.");
  }
} else if (seleccionReceta === 4) {
  // Lógica para agregar una nueva receta
} else {
  alert("Opción no válida.");
}

