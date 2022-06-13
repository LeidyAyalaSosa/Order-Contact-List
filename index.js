// Crea una lista de contactos

const contactos = [
  {
    id: 8,
    nombreCompleto: "Harry Edward Style Anne Cox",
    celular: 158540993,
    correo: "HarryStyles.Music@gmail.com",
  },
  {
    id: 5,
    nombreCompleto: "Elvis Aaron Presley",
    celular: 506845427,
    correo: "ElvysPresley.ReyRock@gmail.com",
  },
  {
    id: 3,
    nombreCompleto: "Austin Robert Butler",
    celular: 3002539638,
    correo: "AustinButler.Actor@hotmail.com",
  },
  {
    id: 7,
    nombreCompleto: "Freddie Farrokh Mercury Bulsara",
    celular: 3114837887,
    correo: "FreddieMercury.VozRock@gmail.com",
  },
  {
    id: 9,
    nombreCompleto: "Min Yoon-gii",
    celular: 3185317140,
    correo: "Agust-D.Suga@hotmail.com",
  },
  {
    id: 10,
    nombreCompleto: "Tirone José Gonzales Orama",
    celular: 3122419307,
    correo: "Canserbero.ReyRap@gmail.com",
  },
  {
    id: 6,
    nombreCompleto: "Kim Nam-Joon",
    celular: 3160938172,
    correo: "KimNam-Joon.Kpop@hotmail.com",
  },
  {
    id: 2,
    nombreCompleto: "Amy Jane Winehouse",
    celular: 3162198404,
    correo: "AmyWinehouse.Jazz@hotmail.com",
  },
  {
    id: 4,
    nombreCompleto: "Norma Jeane Mortenson",
    celular: 3244632880,
    correo: "MarilynMonroe.IconicaActriz@gmail.com",
  },
  {
    id: 1,
    nombreCompleto: "Michael Joseph Jackson",
    celular: 3170955409,
    correo: "MichaelJackson.ReyPop@hotmail.com",
  },
];

window.alert("Añadir un nuevo contacto");

const nuevoLengthPush = (contactos.push = {
  id: window.prompt("Ingrese la posición en la que se encontrará el contacto"),

  nombre: window.prompt("Ingrese sus nombres"),

  apellido: window.prompt("Ingrese sus apellidos"),

  celular: window.prompt("Ingrese el número celular"),

  ubicaciones: window.prompt("Ingrese su lugar y dirección de residencia"),

  correo: window.prompt("Ingrese su dirección de correo electrónico"),
});

console.log(contactos), contactos.splice(3, 1);

const eliminado = contactos.splice(2, 1);
console.log("Eliminado: ", eliminado);

const mercury = contactos.filter(function (elem) {
  return elem.id === 4;
});

console.log(mercury);

// No sé por qué no funciona con el id 4.

const eliminados = contactos.splice(4, 1, {
  id: 7,
  nombreCompleto: "Aretha Louise Franklin",
  celular: "3004329031",
  correo: "ArethaFranklin.Respect@gmail.com",
});

console.log("Eliminado: ", eliminados);

contactos.sort((a, b) => {
  if (a.id < b.id) {
    return -1;
  }

  if (a.id > b.id) {
    return 1;
  }

  return 0;
});

console.log(contactos);
