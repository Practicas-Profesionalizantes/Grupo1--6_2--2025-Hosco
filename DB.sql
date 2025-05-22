
create database hosco;
use hosco;

CREATE TABLE usuarios (
    id INT(11) AUTO_INCREMENT,
    username VARCHAR(25),
    passw VARCHAR(55),
    correo VARCHAR(55),
    telefono VARCHAR(55),
    enviarInfo INT(1) default 0,
    rol VARCHAR(10) default 'user',
    PRIMARY KEY (id)
);

CREATE TABLE stockInv (
    id INT(11) AUTO_INCREMENT,
    nombre VARCHAR(150),
    descripcion TEXT(350),
    rutaImg TEXT(350),
    talle TEXT(3),
    precio DOUBLE(8, 2),
    stockDisponible INT(3) default 0,
    stockReservado INT(3) default 0,
    stockEnPedido INT(3) default 0,
    mostrar INT(1) default 0,
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
	cantidades TEXT(1000),
	metodoDePago VARCHAR(50),
	precioUnitarios TEXT(1000),
	subtotales TEXT(1000),
	total DOUBLE(8,2),
	PRIMARY KEY (id),
    FOREIGN KEY (idUser) REFERENCES usuarios (id)
);

INSERT INTO usuarios (username, passw, correo, telefono, enviarInfo, rol) values ("Alberto", "1234", "example@example.com", "1122334455", 0, "user");
INSERT INTO usuarios (username, passw, correo, telefono, enviarInfo, rol) values ("Zeus", "1234", "example@example.com", "1122334455", 0, "user");
INSERT INTO stockInv (nombre, descripcion, rutaImg, talle, precio, stockDisponible, stockReservado, stockEnPedido, mostrar) values("a","-","-","-",14.9,15,0,0,1);
INSERT INTO stockInv (nombre, descripcion, rutaImg, talle, precio, stockDisponible, stockReservado, stockEnPedido, mostrar) values("b","-","-","-",15.9,14,0,0,1);
INSERT INTO stockInv (nombre, descripcion, rutaImg, talle, precio, stockDisponible, stockReservado, stockEnPedido, mostrar) values("c","-","-","-",16.9,13,0,0,1);
INSERT INTO stockInv (nombre, descripcion, rutaImg, talle, precio, stockDisponible, stockReservado, stockEnPedido, mostrar) values("d","-","-","-",17.9,12,0,0,1);
INSERT INTO stockInv (nombre, descripcion, rutaImg, talle, precio, stockDisponible, stockReservado, stockEnPedido, mostrar) values("e","-","-","-",18.9,11,0,0,1);
