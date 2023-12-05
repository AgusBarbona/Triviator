CREATE DATABASE  IF NOT EXISTS `triviator` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `triviator`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: triviator
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(255) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Disney'),(2,'Cine Argentino'),(3,'Ficción'),(4,'Marvel'),(5,'Caricaturas'),(6,'Romance');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preguntas`
--

DROP TABLE IF EXISTS `preguntas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preguntas` (
  `id_pregunta` int NOT NULL AUTO_INCREMENT,
  `id_categoria` int DEFAULT NULL,
  `enunciado` varchar(255) NOT NULL,
  `respuesta_correcta` varchar(255) NOT NULL,
  `respuesta_opcional_1` varchar(255) NOT NULL,
  `respuesta_opcional_2` varchar(255) NOT NULL,
  `respuesta_opcional_3` varchar(255) NOT NULL,
  PRIMARY KEY (`id_pregunta`),
  KEY `id_categoria` (`id_categoria`),
  CONSTRAINT `preguntas_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preguntas`
--

LOCK TABLES `preguntas` WRITE;
/*!40000 ALTER TABLE `preguntas` DISABLE KEYS */;
INSERT INTO `preguntas` VALUES (1,1,'En la película de Disney \"El Rey León\", ¿qué personaje es conocido como el consejero real del rey Mufasa y el futuro rey Simba?','Rafiki','Timón','Scar','Zazu'),(2,1,'¿Qué personaje ayuda a Aladdín a entrar en la Cueva de las Maravillas?','Abu','Jasmine','El Genio','Iago'),(3,1,'En la película de Disney “La Bella y la Bestia: ”¿Cómo se llama el objeto encantado que representa a Lumière en su forma humana?','Candelabro','Reloj','Tetera','Piano'),(4,1,'¿Cuál es el nombre de la sirenita?','Ariel','Bella','Aurora','Jasmine'),(5,1,'¿Cuál es el nombre de la madrastra de Blancanieves?','Reina Grimhilde','Maléfica','Úrsula','Reina de Corazones'),(6,1,'¿Cómo se llama el hada madrina de Cenicienta?','Flora','Fauna','Merryweather','Campanita'),(7,1,'¿Qué personaje se hace pasar por un hombre para unirse al ejército en lugar de su padre?','Mulán','Mushu','Shang','Yao'),(8,1,'¿Cuál es el nombre del hombre inglés con el que Pocahontas se enamora?','John Smith','Thomas','John Rolfe','John Ratcliffe'),(9,1,'¿Quién es el capitán del barco pirata en \"Peter Pan\"?','Capitán Garfio','Smee','Sr. Smee','Tinker Bell'),(10,1,'En la película de Disney “El Libro de la Selva ”¿Cómo se llama el oso que ayuda a Mowgli a sobrevivir en la selva?','Baloo','Bagheera','Shere Khan','Kaa'),(11,1,'¿Qué animal acompaña a Dumbo en su aventura?','Ratón','Cerdito','Canguro','Cigüeña'),(12,1,'¿Cómo se llama el personaje principal, el jorobado de Notre Dame?','Quasimodo','Phoebus','Esmeralda','Frollo'),(13,1,'¿Cómo se llama el camaleón que acompaña a Rapunzel en “Enredados”?','Pascal','Maximus','Flynn','Fidel'),(14,1,'¿Qué poderes especiales tiene Elsa en \"Frozen\"?','Control del hielo','Control del fuego','Control de la mente','Control de los animales'),(15,1,'¿Cuál es el nombre de la protagonista de \"Valiente\"?','Mérida','Moana','Rapunzel','Ariel'),(16,1,'¿Cuál es el nombre de la villana obsesionada con los dálmatas en “101 dálmatas”?','Cruella de Vil','Maléfica','Úrsula','Scar'),(17,1,'¿Qué personaje siempre está apresurado en \"Alicia en el País de las Maravillas\"?','El Conejo Blanco','El Gato de Cheshire','La Oruga Azul','El Sombrerero Loco'),(18,1,'¿Cómo se llama el personaje principal que es transformado en una llama en \"Las locuras del emperador\"?','Kuzco','Kronk','Yzma','Pacha'),(19,1,'¿Cuál es el nombre real de Mr. Increíble, el padre de la familia de superhéroes en \"Los Increíbles\"?','Robert «Bob» Parr','John Smith','Jack Johnson','David Clark'),(20,1,'¿Cuál es el nombre del asustador estrella de la compañía \"Monsters, Inc.\"?','James P. Sullivan (Sulley)','Mike Wazowski','Randall Boggs','Celia Mae'),(21,6,'En la película \"Primer amor\", ¿cuál de las siguientes afirmaciones es verdadera sobre la trama?','Los protagonistas experimentan un amor puro a pesar de los desafíos de la enfermedad','La película se desarrolla en París','Los personajes principales son un astronauta y un extraterrestre','La historia se centra en una guerra en un mundo de fantasía'),(22,6,'En la película \"Titanic,\" ¿cuál de las siguientes afirmaciones es verdadera sobre la trama? ','Los protagonistas, Jack y Rose, provienen de diferentes clases sociales','La película se desarrolla en un transatlántico llamado Britannic','Los personajes principales son un detective y un criminal','La historia se centra en un viaje espacial en el futuro'),(23,6,'En la película \"10 cosas que odio de ti,\" ¿qué personaje interpreta Heath Ledger?','Patrick Verona','Cameron James','Joey Donner','Michael Eckman'),(24,6,'En la película \"La La Land,\" ¿qué profesión tiene el personaje interpretado por Ryan Gosling?','Músico de jazz','Chef','Piloto','Arquitecto'),(25,6,'En la película \"Notting Hill,\" ¿qué personaje interpreta Julia Roberts?','Anna Scott','William Thacker','Spike','Bernie'),(26,6,'En la película \"Orgullo y prejuicio,\" ¿quién es el autor de la novela en la que se basa la película?','Jane Austen','Emily Brontë','Charlotte Brontë ','Charles Dickens'),(27,6,'En \"Moulin Rouge!\", ¿cuál es la canción principal interpretada por Ewan McGregor y Nicole Kidman?','Your Song','La La Land','A Whole New World','Cant Help Falling in Love'),(28,6,'En \"500 días con ella,\" ¿cuál es la ocupación de Tom, interpretado por Joseph Gordon-Levitt? ','Escritor gráfico','Arquitecto','Abogado','Diseñador gráfico'),(29,6,'En \"Medianoche en París,\" ¿quién interpreta al personaje principal, Gil Pender?','Owen Wilson','Steve Carell','Ben Stiller','Jason Bateman'),(30,6,'En \"El guardaespaldas,\" ¿quién interpreta a la famosa cantante Rachel Marron?','Whitney Houston ','Beyoncé','Mariah Carey','Angelina Jolie'),(31,6,'En \"Mujer bonita,\" ¿quién interpreta al millonario Edward Lewis?','Richard Gere','Leonardo Di Caprio','Julia Roberts','Hugh Grant'),(32,4,'En la película \"Iron Man,\" ¿qué actor interpreta el papel de Tony Stark / Iron Man','Robert Downey Jr.','Chris Hemsworth','Chris Evans','Mark Ruffalo'),(33,4,'¿Cuál es la primera película de Marvel en la que aparece el personaje de Thor?','The Avengers','Thor','Thor: The Dark World','Guardians of the Galaxy'),(34,4,'¿Quién es el enemigo principal en la película \"Black Panther\"?','Killmonger','Loki','Thanos','Red Skull '),(35,4,'En la película \"Guardians of the Galaxy,\" ¿cuál es el nombre del mapache genéticamente modificado que forma parte del equipo?','Rocket','Drax ','Groot','Star-Lord'),(36,4,'¿Qué personaje de Marvel tiene un martillo encantado llamado Mjolnir?','Thor','Captain America','Iron Man','Hulk'),(37,4,'En \"Avengers: Infinity War,\" ¿cuál es el objetivo principal de Thanos?','Encontrar todas las Gemas del Infinito','Dominar el mundo','Destruir a los Vengadores','Vengar la muerte de su madre'),(38,4,'¿Quién interpreta el papel de Natasha Romanoff / Black Widow en el MCU?','Scarlett Johansson','Jennifer Lawrence','Anne Hathaway','Emily Blunt'),(39,4,'En \"Ant-Man,\" ¿cuál es la capacidad especial del traje de Ant-Man?','Encogerse hasta el tamaño de una hormiga','Volar','Teletransportarse','Controlar el tiempo'),(40,4,'¿Cuál es la última película de Avengers en la que aparece el personaje de Iron Man (Tony Stark)?','Avengers: Endgame','The Avengers','Avengers: Age of Ultron','Avengers: Infinity War'),(41,4,'¿En qué película de Marvel el personaje de Peter Parker / Spider-Man hace su primera aparición en el MCU?','Capitán América: Civil War','Spider-Man: Homecoming','Avengers: Infinity Wa','Spider-Man: Far From Home'),(42,3,'En \"Interestelar,\" ¿qué es el agujero de gusano y cómo se utiliza en la trama?','Un agujero en el espacio-tiempo que permite viajar a otras galaxias','Un dispositivo de viaje en el tiempo','Un dispositivo de viaje en el tiempo','Un arma superpoderosa'),(43,3,'En \"Volver al Futuro,\" ¿qué fuente de energía alimenta la máquina del tiempo de Doc Brown','Plutonio','Gasolina común','Uranio enriquecido','Electricidad solar'),(44,3,'En \"El Efecto Mariposa,\" ¿cuál es el poder especial que el personaje principal, Evan, posee?','Capacidad de viajar en el tiempo','Telequinesis','Premoniciones del futuro','Cambio de forma'),(45,3,'En un episodio de \"Black Mirror\" titulado \"USS Callister,\" ¿cuál es el nombre del personaje interpretado por Jesse Plemons y cuál es su papel en la trama?','El capitán Daly, un programador de videojuegos','Capitán Smith, un explorador espacial','Teniente Johnson, un científico','Doctor Harrison, un médico'),(46,3,'En \"Stranger Things,\" ¿cuál es el nombre del lugar donde ocurren los experimentos secretos del Gobierno y donde Eleven adquiere sus poderes?','Laboratorio Hawkins','Laboratorio Upside Down','Laboratorio Demogorgon','Laboratorio Starcourt'),(47,3,'En \"Dark,\" ¿cuál es el nombre de la máquina que se utiliza para viajar en el tiempo y cuál es su origen?','Máquina de Tannhaus, inventada por un relojero','Máquina Temporalis, un artefacto mágico','Cronomáquina, de origen extraterrestre','Portal de Wormhole, construido por científicos del futuro'),(48,3,'En \"Doctor Who,\" ¿cuál es el nombre de la raza alienígena que el Doctor enfrenta con mayor frecuencia y cuál es su objetivo en relación con la Tierra?','Los Daleks, que buscan conquistar la Tierra','Los Cybermen, que buscan destruir la Tierra','Los Sontarans, que buscan aliarse con la Tierra','Los Silurians, que buscan explorar la Tierra'),(49,3,'En \"The Umbrella Academy,\" ¿cuál es el poder de Klaus Hargreeves?','Comunicación con los muertos','Telekinesis para mover objetos','Control del fuego','Invisibilidad'),(50,3,'En \"The 100,\" ¿cuál es el nombre de la estación espacial en la que vivían los últimos supervivientes de la humanidad antes de regresar a la Tierra?','Estación Arca','Estación Orión','Estación Pionera','Estación Géminis'),(51,3,'En \"Bird Box,\" ¿por qué los personajes deben mantener los ojos vendados mientras están al aire libre?','Para evitar el efecto de una misteriosa y letal fuerza sobrenatural','Para ocultarse de extraterrestres invasores','Para protegerse de criaturas sobrenaturales','Para evitar ser capturados por un culto violento'),(52,3,'En \"El hoyo,\" ¿cuál es el nombre del protagonista y cómo intenta sobrevivir en el extraño sistema de la prisión?','Iván, racionando su comida y formando alianzas','John Smith, luchando contra otros prisioneros','Jack, tratando de escapar de la prisión','Michael, negociando con los guardias'),(53,3,'En \"Lucifer,\" ¿cuál es la ocupación original de Lucifer Morningstar antes de retirarse al mundo humano?','Músico','Abogado','Policia','Médico'),(54,5,'¿En qué serie un  niño llamado Finn y su perro Jake exploran el mundo de Ooo?','Hora de Aventura','Ben 10','El Increíble Mundo de Gumball','Steveven Universe'),(55,5,'¿En qué serie el personaje principal vive en una piña debajo del mar?','Bob Esponja','Arenita Mejillas','Patricio Estrella','Calamardo tentáculos '),(56,5,'En \"Ben 10\", ¿cuál es el dispositivo que le permite a Ben Tennyson transformarse en diferentes alienígenas?','Omnitrix','Super Reloj','Extraterminal','Alienator'),(57,5,'¿Cuál es la serie animada que se centra alrededor de dos hermanos que viajan a través de un extraño bosque con el fin de encontrar su camino a casa?','Más allá del jardín','Un Show Mas','Gravity Falls','El Mundo de Greg'),(58,5,'En \"Las Tortugas Ninja\", ¿cuál es el nombre del maestro sensei de las tortugas?','Splinter','Donatello','Shredder','Leonardo'),(59,5,'En Scooby Doo ¿Quién es el líder del grupo?','Fred','Scooby','Daphne','Vilma'),(60,5,'En \"Kick Buttowski: Medio doble de riesgo\", ¿cuál es el sueño de Kick?','Ser el mejor skater','Ser el mejor futbolista','Ser el mejor ciclista','Ser el mejor acróbata'),(61,5,'En \"Los Padrinos Mágicos\", ¿cuál es el nombre de la niñera de Timmy Turner?','Trixie','Wanda','Vicky','Stacy'),(62,5,'En \"Phineas y Ferb\", ¿cuál es el nombre del científico loco que siempre intenta atrapar a Phineas y Ferb?','Dr Heinz Doofenshmirtz','Mayor Monograma','Buford','Jeremy'),(63,5,'En \"El Show de Tom y Jerry\", ¿qué tipo de animal es Tom?','Gato','Perro','Canario','Ratón'),(64,2,'¿Cuál es la película argentina de comedia más premiada?','Esperando la carroza (1985)','Relatos salvajes (2014)','El secreto de sus ojos (2009)','Nueve reinas (2000)'),(65,2,'¿Quién es el director de la película \"Esperando la carroza\"?','Alejandro Doria','Carlos Sorín','Juan José Campanella','Damián Szifrón'),(66,2,'¿Cuál es la película argentina de comedia más taquillera?','Relatos salvajes (2014)','El secreto de sus ojos (2009)','Esperando la carroza (1985)','El robo del siglo (2020)'),(67,2,'¿Quiénes son los protagonistas de la película \"El secreto de sus ojos\"?','Ricardo Darín y Soledad Villamil','Guillermo Francella y Julieta Díaz','Luis Brandoni y Norma Aleandro','Pablo Rago y Javier Godino'),(68,2,'¿Quién es el director de la película \"Relatos salvajes\"?','Damián Szifrón','Damián Szifrón','Alejandro Doria','Lucrecia Martel'),(69,2,'¿Cuál es el actor/actriz argentino/a más premiado/a en la historia de los premios Óscar?','Norma Aleandro','Ricardo Darín','Luis Brandoni','Alberto Olmedo'),(70,2,'¿Cuál es el nombre del personaje que interpreta Ricardo Darín en \"9 reinas\"?','Marcos','Juan','El alcohólico','Gastón'),(71,2,'¿Cuál es el nombre del pueblo donde se desarrolla la historia de \"La odisea de los giles\"?','Indio Rico','La Plata','Buenos Aires','Rawson'),(72,2,'¿Cuál es el nombre del banco que fue robado en \"El robo del siglo\"?','Banco Río','Banco Galicia','Banco Central de la República Argentina','Banco de la Nación Argentina'),(73,2,'¿Cuánto dinero robaron la banda del Banco Río?','15 millones de dólares',' 25 millones de dólares','20 millones de dólares','30 millones de dólares');
/*!40000 ALTER TABLE `preguntas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `contraseña` varchar(20) NOT NULL,
  `puntos` int DEFAULT '0',
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'usuario_prueba','prueba@example.com','contraseña_prueba',0),(2,'flor15','pereyraramosflorencia@gmail.com','1234',0),(3,'prueba2','prueba2@gmail.com','12345',0),(4,'prueba3','hola@gmai.com','12345',0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-04 17:58:46
