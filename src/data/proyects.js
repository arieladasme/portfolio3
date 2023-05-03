import calendar from '../assets/img/calendar.jpg'
import gestionGastos from '../assets/img/gestionGastos.jpg'
import seguros from '../assets/img/seguros.jpg'
import cotizador from '../assets/img/cotizador.jpg'
import noticias from '../assets/img/noticias.jpg'
import gif from '../assets/img/gif.jpg'
import hotel from '../assets/img/hotel.jpg'

export const backend = [
  {
    name: 'Nest Shop',
    technologies: 'NestJs, Postgress, TypeORM, Docker',
    description:
      'Proyecto backend para autenticación de usuarios y gestión de productos. Incluye JwtStrategy y funcionalidades CRUD con eliminación en cascada, paginación, seed, carga y validación de archivos múltiples.\n' +
      'Cuenta con organización de entidades, rutas privadas y custom decorators para protección de datos. Ideal para empresas que buscan una gestión de productos y usuarios potente, sencilla y segura.',
    url: 'https://github.com/arieladasme/teslo-shop',
  },

  {
    name: 'Natours',
    technologies: 'Express, Mongoose',
    description:
      'Desarrollo de una API RESTful avanzada que incluye operaciones CRUD con MongoDB y Mongoose, filtros, clasificaciones, paginación y características de seguridad mejoradas, como cifrado y sanitización de datos.\n' +
      'También se implementan técnicas para limitar la velocidad de la aplicación y se profundiza en las características avanzadas de Mongoose.',
    url: 'https://github.com/arieladasme/express-mongoose',
  },
  {
    name: 'Calendar App',
    technologies: 'Express, Mongoose',
    description:
      'Una aplicación de backend que utiliza Express.js y MongoDB para proporcionar una API para gestionar eventos del calendario.\n' +
      'La aplicación incluye rutas y endpoints, middlewares personalizados, Mongoose, autenticación de usuario con JWT y CRUDs para eventos del calendario.',
    url: 'https://github.com/arieladasme/calendar-backend',
  },
  {
    name: 'Nest Api personalizado',
    technologies: 'NestJs, Mongoose, TypeORM',
    description:
      'Aplicación de backend construida utilizando el framework de NestJS. El proyecto está disponible en dos ramas en Git, una utilizando MongoDB (en desarrollo) y otra utilizando TypeORM.\n' +
      'La aplicación incluye la gestión de usuarios y la autenticación con JWT para acceder a los endpoints protegidos. El objetivo es proporcionar una API base para nuevos proyectos con NestJS.',
    url: 'https://github.com/arieladasme/nest-api-base',
  },
]

export const frontend = [
  {
    title: 'Calendar App',
    description:
      'Guarda todos tus eventos importantes en un solo lugar y mantén un seguimiento de tus compromisos diarios, semanales y mensuales con facilidad.',
    imgUrl: calendar,
    url: 'https://remarkable-tulumba-79961b.netlify.app',
  },
  {
    title: 'Gestor de Gastos',
    description:
      'Ingresa tu presupuesto y registra tus gastos para ver fácilmente cuánto dinero te queda disponible.',
    imgUrl: gestionGastos,
    url: 'https://adoring-ardinghelli-0d8a7e.netlify.app/',
  },
  {
    title: 'Cotizador de Seguros',
    description: 'Revisa el seguro que necesitas con nuestra app.',
    imgUrl: seguros,
    url: 'https://suspicious-wing-c9a71e.netlify.app/',
  },
  {
    title: 'Cotizador Crypto',
    description: 'Revisa los valores actuales de tu criptomoneda favorita.',
    imgUrl: cotizador,
    url: 'https://cocky-jones-9fef5b.netlify.app/',
  },
  {
    title: 'Buscador de Noticias',
    description: 'Revisa las noticias que te mas te interesan con el buscador de noticias',
    imgUrl: noticias,
    url: 'https://infallible-hopper-bca53c.netlify.app/',
  },
  {
    title: 'GifFinderApp',
    description: 'Encuentra los mejores gif con nuestro buscador.',
    imgUrl: gif,
    url: 'https://gif-finder1.netlify.app/',
  },
  {
    title: 'Gastby Hotel',
    description: 'Descubre nuestros mejores espacios para descanzar en Gastby Hotel.',
    imgUrl: hotel,
    url: 'https://eloquent-sinoussi-22a498.netlify.app/',
  },
]

export const others = [
  {
    name: 'CSGO: Gungame Plugin',
    technologies: 'SourcePawn',
    description:
      'Plugin para el juego CS:GO que implementa el modo de juego Gun Game y que ha sido mejorado y personalizado para incluir mejoras visuales y nuevas funcionalidades para mejorar la experiencia de juego.',
    url: 'https://github.com/arieladasme/csgo-gungame-plugin',
  },
  {
    name: 'Deno CRUD Rest APi',
    technologies: 'Deno',
    description:
      'CRUD simple desarrollado en Deno para interactuar con una base de datos simple.\n' +
      'El objetivo principal es familiarizarse con la tecnología de Deno y su capacidad para crear aplicaciones web, mientras se aprende sobre el funcionamiento básico de un CRUD.',
    url: 'https://github.com/arieladasme/deno-crud-restapi',
  },
  {
    name: 'Python CRUD Rest APi',
    technologies: 'Python, MySql',
    description:
      'El proyecto es un CRUD simple desarrollado en Python utilizando el ORM SQLAlchemy, y una base de datos MySQL.\n' +
      'El objetivo del proyecto es familiarizarse con la tecnología de SQLAlchemy y su capacidad para interactuar con bases de datos relacionales como MySQL.',
    url: 'https://github.com/arieladasme/python-mysql-sqlalchemy',
  },
]
