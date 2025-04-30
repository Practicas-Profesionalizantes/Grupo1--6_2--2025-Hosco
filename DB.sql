
create database hosco;
use hosco;

CREATE TABLE usuarios (
    id INT(11) AUTO_INCREMENT,
    username VARCHAR(25),
    passw VARCHAR(55),
    correo VARCHAR(55),
    telefono VARCHAR(55),
    enviarInfo INT(1),
    rol VARCHAR(10),
    PRIMARY KEY (id)
);

CREATE TABLE stockInv (
    id INT(11) AUTO_INCREMENT,
    nombre VARCHAR(150),
    descripcion TEXT(350),
    rutaImg TEXT(350),
    talle TEXT(3),
    precio DOUBLE(8, 2),
    stockDisponible INT(3),
    stockReservado INT(3),
    stockEnPedido INT(3),
    mostrar INT(1),
    PRIMARY KEY (id)
);

CREATE TABLE usuariosInv (
    id INT(11) AUTO_INCREMENT,
    usuarios VARCHAR(35),
    passw VARCHAR(55),
    nombre VARCHAR(35),
    telefono VARCHAR(55),
    PRIMARY KEY (id)
);

CREATE TABLE stockMat (
    id INT(11) AUTO_INCREMENT,
    nombre VARCHAR(150),
    descripcion TEXT(350),
    rutaImg TEXT(350),
    stock INT(3),
    PRIMARY KEY (id)
);

CREATE TABLE comunidad (
    id INT(11) AUTO_INCREMENT,
    idUser INT(11),
    titulo VARCHAR(150),
    descripcion TEXT(550),
    PRIMARY KEY (id),
    FOREIGN KEY (idUser) REFERENCES usuarios (id)
);

CREATE TABLE ofertas (
    id INT(11) AUTO_INCREMENT,
    idPrenda INT(11),
    porcentajeOff INT(3),
    PRIMARY KEY (id)
);

CREATE TABLE registroDeAcciones (
    id INT(11) AUTO_INCREMENT,
    idUser INT(11),
    accion VARCHAR(150),
    fecha DATE,
    hora VARCHAR(5),
    PRIMARY KEY (id),
    FOREIGN KEY (idUser) REFERENCES usuarios (id)
);

create table pedidos(
	id INT(11) AUTO_INCREMENT,
	idUser INT(11),
	idsPrendas TEXT(1000),
	cantidad TEXT(1000),
	metodoDePago VARCHAR(50),
	precioUnitario DOUBLE(8,2),
	subtotal DOUBLE(8,2),
	total DOUBLE(8,2),
	PRIMARY KEY (id),
  FOREIGN KEY (idUser) REFERENCES usuarios (id)
)
