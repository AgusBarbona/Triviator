CREATE DATABASE  IF NOT EXISTS `triviator` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `triviator`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: triviator
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
  `url_imagen` varchar(255) DEFAULT NULL,
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
INSERT INTO `preguntas` VALUES (1,1,'En la película de Disney \"El Rey León\", ¿qué personaje es conocido como el consejero real del rey Mufasa y el futuro rey Simba?','https://s1.eestatic.com/2023/08/21/el-cultural/blogs/entreclasicos/788431497_235501226_1706x960.jpg','Rafiki','Timón','Scar','Zazu'),(2,1,'¿Qué personaje ayuda a Aladdín a entrar en la Cueva de las Maravillas?','https://tecolotito.elsiglodetorreon.com.mx/cdn-cgi/image/format=auto,width=1024/i/2022/11/1619197.jpeg','Abu','Jasmine','El Genio','Iago'),(3,1,'En la película de Disney “La Bella y la Bestia: ”¿Cómo se llama el objeto encantado que representa a Lumière en su forma humana?','https://wp.es.aleteia.org/wp-content/uploads/sites/7/2016/11/web-beauty-beast-walt-disney-pictures.jpg','Candelabro','Reloj','Tetera','Piano'),(4,1,'¿Cuál es el nombre de la sirenita?','https://estaticos-cdn.prensaiberica.es/clip/b82a9c49-d1cc-40d8-832f-76b4f90ff350_source-aspect-ratio_default_0.jpg','Ariel','Bella','Aurora','Jasmine'),(5,1,'¿Cuál es el nombre de la madrastra de Blancanieves?','https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2021/11/30/61a6030fdea34.jpeg','Reina Grimhilde','Maléfica','Úrsula','Reina de Corazones'),(6,1,'¿Cómo se llama el hada madrina de Cenicienta?','https://i0.wp.com/www.homosensual.com/wp-content/uploads/2020/04/Hada-madrina-Cenicienta.jpg?fit=1200%2C675&ssl=1','Flora','Fauna','Merryweather','Campanita'),(7,1,'¿Qué personaje se hace pasar por un hombre para unirse al ejército en lugar de su padre?','https://img.zonared.com/images/noticias/portada/53000/53734-h.jpg','Mulán','Mushu','Shang','Yao'),(8,1,'¿Cuál es el nombre del hombre inglés con el que Pocahontas se enamora?','https://hips.hearstapps.com/hmg-prod/images/pocahontas-1558626708.jpg','John Smith','Thomas','John Rolfe','John Ratcliffe'),(9,1,'¿Quién es el capitán del barco pirata en \"Peter Pan\"?','https://cinefilosoficial.com/wp-content/uploads/2020/07/jude-law-capitan-garfio-peter-pan-live-action-960x560.jpg','Capitán Garfio','Smee','Sr. Smee','Tinker Bell'),(10,1,'En la película de Disney “El Libro de la Selva ”¿Cómo se llama el oso que ayuda a Mowgli a sobrevivir en la selva?','https://as01.epimg.net/epik/imagenes/2018/07/19/portada/1532009598_275960_1532010154_noticia_normal.jpg','Baloo','Bagheera','Shere Khan','Kaa'),(11,1,'¿Qué animal acompaña a Dumbo en su aventura?','https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/noticias-cine/dumbo-fecha-de-estreno-y-primera-imagen-del-remake-de-disney/135806533-1-esl-ES/Dumbo-Fecha-de-estreno-y-primera-imagen-del-remake-de-Disney.jpg','Ratón','Cerdito','Canguro','Cigüeña'),(12,1,'¿Cómo se llama el personaje principal, el jorobado de Notre Dame?','https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/04/15160808/jorobao.jpg','Quasimodo','Phoebus','Esmeralda','Frollo'),(13,1,'¿Cómo se llama el camaleón que acompaña a Rapunzel en “Enredados”?','https://lanetaneta.com/wp-content/uploads/2022/04/Enredados-como-Rapunzel-encontro-a-Pascal-explicacion-de-la-historia.jpg','Pascal','Maximus','Flynn','Fidel'),(14,1,'¿Qué poderes especiales tiene Elsa en \"Frozen\"?','https://okdiario.com/img/2019/12/02/elsa-frozen-655x368.jpg','Control del hielo','Control del fuego','Control de la mente','Control de los animales'),(15,1,'¿Cuál es el nombre de la protagonista de \"Valiente\"?','https://evoluciongeek.com/wp-content/uploads/2022/06/brave-01.jpg','Mérida','Moana','Rapunzel','Ariel'),(16,1,'¿Cuál es el nombre de la villana obsesionada con los dálmatas en “101 dálmatas”?','https://cdn.milenio.com/uploads/media/2021/02/17/cruella-de-vil-disney.jpg','Cruella de Vil','Maléfica','Úrsula','Scar'),(17,1,'¿Qué personaje siempre está apresurado en \"Alicia en el País de las Maravillas\"?','https://cdn.eldestapeweb.com/eldestape/072021/1627329294122/Alicia-en-el-pa%C3%ADs-de-las-maravillas.jpg','El Conejo Blanco','El Gato de Cheshire','La Oruga Azul','El Sombrerero Loco'),(18,1,'¿Cómo se llama el personaje principal que es transformado en una llama en \"Las locuras del emperador\"?','https://i0.wp.com/monitorsur.com/wp-content/uploads/Laslocurasdelemperador.jpg','Kuzco','Kronk','Yzma','Pacha'),(19,1,'¿Cuál es el nombre real de Mr. Increíble, el padre de la familia de superhéroes en \"Los Increíbles\"?','https://storage.lacapitalmdp.com/2018/04/los-increibles.jpg','Robert «Bob» Parr','John Smith','Jack Johnson','David Clark'),(20,1,'¿Cuál es el nombre del asustador estrella de la compañía \"Monsters, Inc.\"?','https://www.publimetro.cl/resizer/6cfXrna12IYZFW7ENNiBkXJ4vZo=/arc-photo-metroworldnews/arc2-prod/public/4TKDTGS6O5AZJG7JBR6YLSZA4A.jpg','James P. Sullivan (Sulley)','Mike Wazowski','Randall Boggs','Celia Mae'),(21,6,'En la película \"Primer amor\", ¿cuál de las siguientes afirmaciones es verdadera sobre la trama?','https://r3.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fs2.abcstatics.com%2Fmedia%2Fpeliculas%2F000%2F029%2F364%2Fmi-primer-amor-2.jpg','Los protagonistas experimentan un amor puro a pesar de los desafíos de la enfermedad','La película se desarrolla en París','Los personajes principales son un astronauta y un extraterrestre','La historia se centra en una guerra en un mundo de fantasía'),(22,6,'En la película \"Titanic,\" ¿cuál de las siguientes afirmaciones es verdadera sobre la trama? ','https://r3.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fs2.abcstatics.com%2Fmedia%2Fpeliculas%2F000%2F029%2F364%2Fmi-primer-amor-2.jpg','Los protagonistas, Jack y Rose, provienen de diferentes clases sociales','La película se desarrolla en un transatlántico llamado Britannic','Los personajes principales son un detective y un criminal','La historia se centra en un viaje espacial en el futuro'),(23,6,'En la película \"10 cosas que odio de ti,\" ¿qué personaje interpreta Heath Ledger?','https://tvazteca.brightspotcdn.com/0b/c4/6f4e9fdf4116b2c83eb70a539024/10-cosas-que-odio-de-ti.png','Patrick Verona','Cameron James','Joey Donner','Michael Eckman'),(24,6,'En la película \"La La Land,\" ¿qué profesión tiene el personaje interpretado por Ryan Gosling?','https://media.revistavanityfair.es/photos/60e8599ee3e0ae04802deaa8/master/w_1600%2Cc_limit/17278.jpeg','Músico de jazz','Chef','Piloto','Arquitecto'),(25,6,'En la película \"Notting Hill,\" ¿qué personaje interpreta Julia Roberts?','https://es.web.img3.acsta.net/r_1280_720/medias/nmedia/18/64/69/65/18841017.jpg','Anna Scott','William Thacker','Spike','Bernie'),(26,6,'En la película \"Orgullo y prejuicio,\" ¿quién es el autor de la novela en la que se basa la película?','https://pics.filmaffinity.com/Orgullo_y_prejuicio-246314246-large.jpg','Jane Austen','Emily Brontë','Charlotte Brontë ','Charles Dickens'),(27,6,'En \"Moulin Rouge!\", ¿cuál es la canción principal interpretada por Ewan McGregor y Nicole Kidman?','https://media.gq.com.mx/photos/609c277efe7c1331bb81197d/master/w_1600%2Cc_limit/Moulin%2520Rouge%2520-%2520GQ%25204.jpg','Your Song','La La Land','A Whole New World','Cant Help Falling in Love'),(28,6,'En \"500 días con ella,\" ¿cuál es la ocupación de Tom, interpretado por Joseph Gordon-Levitt? ','https://www.metro951.com/wp-content/uploads/2019/02/500-dias-con-summer.png','Escritor gráfico','Arquitecto','Abogado','Diseñador gráfico'),(29,6,'En \"Medianoche en París,\" ¿quién interpreta al personaje principal, Gil Pender?','https://www.cinemaparapromedios.com.mx/wp-content/uploads/2019/12/MV5BMTAwMTAzODM5NDFeQTJeQWpwZ15BbWU3MDE0MTk0MjU@._V1_SY1000_CR0015001000_AL_.jpg','Owen Wilson','Steve Carell','Ben Stiller','Jason Bateman'),(30,6,'En \"El guardaespaldas,\" ¿quién interpreta a la famosa cantante Rachel Marron?','https://cloudfront-us-east-1.images.arcpublishing.com/infobae/TBHASBMGGBENPH3VO7E5K3R7GM.jpg','Whitney Houston ','Beyoncé','Mariah Carey','Angelina Jolie'),(31,6,'En \"Mujer bonita,\" ¿quién interpreta al millonario Edward Lewis?','https://media.lacapital.com.ar/p/1061eb428f78e9f9787b57335954a31b/adjuntos/204/imagenes/008/679/0008679472/642x0/smart/mujer_bonitajpg.jpg','Richard Gere','Leonardo Di Caprio','Julia Roberts','Hugh Grant'),(32,4,'En la película \"Iron Man,\" ¿qué actor interpreta el papel de Tony Stark / Iron Man','https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/MSNBC/Components/Photo/_new/100506-ironman2-hmed.jpg','Robert Downey Jr.','Chris Hemsworth','Chris Evans','Mark Ruffalo'),(33,4,'¿Cuál es la primera película de Marvel en la que aparece el personaje de Thor?','https://img2.rtve.es/i/?w=1600&i=1585840423850.jpg','The Avengers','Thor','Thor: The Dark World','Guardians of the Galaxy'),(34,4,'¿Quién es el enemigo principal en la película \"Black Panther\"?','https://ichef.bbci.co.uk/images/ic/1024x576/p05xwzr1.jpg','Killmonger','Loki','Thanos','Red Skull '),(35,4,'En la película \"Guardians of the Galaxy,\" ¿cuál es el nombre del mapache genéticamente modificado que forma parte del equipo?','https://cdn.milenio.com/uploads/media/2023/05/04/guardianes-de-la-galaxia-vol-1.jpg','Rocket','Drax ','Groot','Star-Lord'),(36,4,'¿Qué personaje de Marvel tiene un martillo encantado llamado Mjolnir?','https://i.blogs.es/94f9a8/infinity-war/1366_2000.jpeg','Thor','Captain America','Iron Man','Hulk'),(37,4,'En \"Avengers: Infinity War,\" ¿cuál es el objetivo principal de Thanos?','https://i.blogs.es/4e23f7/thanos-vengadores-infinity-war-critica-spoilers/1366_2000.jpg','Encontrar todas las Gemas del Infinito','Dominar el mundo','Destruir a los Vengadores','Vengar la muerte de su madre'),(38,4,'¿Quién interpreta el papel de Natasha Romanoff / Black Widow en el MCU?','https://hips.hearstapps.com/hmg-prod/images/black-widow-natasha-romanoff-scarlett-johansson-1625818133.jpg','Scarlett Johansson','Jennifer Lawrence','Anne Hathaway','Emily Blunt'),(39,4,'En \"Ant-Man,\" ¿cuál es la capacidad especial del traje de Ant-Man?','https://estudiarfisica.files.wordpress.com/2015/08/ant-man1.jpg','Encogerse hasta el tamaño de una hormiga','Volar','Teletransportarse','Controlar el tiempo'),(40,4,'¿Cuál es la última película de Avengers en la que aparece el personaje de Iron Man (Tony Stark)?','https://lumiere-a.akamaihd.net/v1/images/iron_man_marvel_d9ce0209.jpeg','Avengers: Endgame','The Avengers','Avengers: Age of Ultron','Avengers: Infinity War'),(41,4,'¿En qué película de Marvel el personaje de Peter Parker / Spider-Man hace su primera aparición en el MCU?','https://indiehoy.com/wp-content/uploads/2021/08/spider-man.jpg','Capitán América: Civil War','Spider-Man: Homecoming','Avengers: Infinity Wa','Spider-Man: Far From Home'),(42,3,'En \"Interestelar,\" ¿qué es el agujero de gusano y cómo se utiliza en la trama?','https://static1.squarespace.com/static/6058f3b0dbb27b03bbd36be9/6058f3f6dbb27b03bbd37503/6058f3f6dbb27b03bbd37530/1614892162972/interstellar.png','Un agujero en el espacio-tiempo que permite viajar a otras galaxias','Un dispositivo de viaje en el tiempo','Un dispositivo de viaje en el tiempo','Un arma superpoderosa'),(43,3,'En \"Volver al Futuro,\" ¿qué fuente de energía alimenta la máquina del tiempo de Doc Brown','https://tn.com.ar/resizer/3EWO6FYKfAu0D6tV5DuhLcsgEGM=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/XT3WB5S6KXGB6ESL2Y7DDJZQAE.jpg','Plutonio','Gasolina común','Uranio enriquecido','Electricidad solar'),(44,3,'En \"El Efecto Mariposa,\" ¿cuál es el poder especial que el personaje principal, Evan, posee?','https://elcomercio.pe/resizer/oF5O7ey6UVoOjQ8RL8-CpZswo-U=/620x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/KE7DBXQVFJDRFFYMJS6RQYNVA4.jpg','Capacidad de viajar en el tiempo','Telequinesis','Premoniciones del futuro','Cambio de forma'),(45,3,'En un episodio de \"Black Mirror\" titulado \"USS Callister,\" ¿cuál es el nombre del personaje interpretado por Jesse Plemons y cuál es su papel en la trama?','https://trekmovie.com/wp-content/uploads/2018/09/usscallisterhomage-head.jpg','El capitán Daly, un programador de videojuegos','Capitán Smith, un explorador espacial','Teniente Johnson, un científico','Doctor Harrison, un médico'),(46,3,'En \"Stranger Things,\" ¿cuál es el nombre del lugar donde ocurren los experimentos secretos del Gobierno y donde Eleven adquiere sus poderes?','https://www.mundodeportivo.com/alfabeta/hero/2023/10/1366_2000-1.1696579017.0905.jpg','Laboratorio Hawkins','Laboratorio Upside Down','Laboratorio Demogorgon','Laboratorio Starcourt'),(47,3,'En \"Dark,\" ¿cuál es el nombre de la máquina que se utiliza para viajar en el tiempo y cuál es su origen?','https://media.revistagq.com/photos/5efd9d044786c513db97aafb/master/pass/dark-final-explicado.jpg','Máquina de Tannhaus, inventada por un relojero','Máquina Temporalis, un artefacto mágico','Cronomáquina, de origen extraterrestre','Portal de Wormhole, construido por científicos del futuro'),(48,3,'En \"Doctor Who,\" ¿cuál es el nombre de la raza alienígena que el Doctor enfrenta con mayor frecuencia y cuál es su objetivo en relación con la Tierra?','https://www.infobae.com/new-resizer/xKZWvtrQodmPFAJ75rk6BA5eKLI=/1024x512/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/DSIZHRICWNDUDL4Z54GS5GHQHY.jpg','Los Daleks, que buscan conquistar la Tierra','Los Cybermen, que buscan destruir la Tierra','Los Sontarans, que buscan aliarse con la Tierra','Los Silurians, que buscan explorar la Tierra'),(49,3,'En \"The Umbrella Academy,\" ¿cuál es el poder de Klaus Hargreeves?','https://www.clarin.com/2020/08/02/S4GvJmCZq_1200x0__1.jpg','Comunicación con los muertos','Telekinesis para mover objetos','Control del fuego','Invisibilidad'),(50,3,'En \"The 100,\" ¿cuál es el nombre de la estación espacial en la que vivían los últimos supervivientes de la humanidad antes de regresar a la Tierra?','https://assets1.ignimgs.com/2015/03/11/the100season21280jpg-57aa79_160w.jpg','Estación Arca','Estación Orión','Estación Pionera','Estación Géminis'),(51,3,'En \"Bird Box,\" ¿por qué los personajes deben mantener los ojos vendados mientras están al aire libre?','https://elcomercio.pe/resizer/nxgO0DcUdjG5_MGyxWI6Am0w5pE=/980x528/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/IVB7F6DZBZCKRAKF4HRA6VB2IE.jpg','Para evitar el efecto de una misteriosa y letal fuerza sobrenatural','Para ocultarse de extraterrestres invasores','Para protegerse de criaturas sobrenaturales','Para evitar ser capturados por un culto violento'),(52,3,'En \"El hoyo,\" ¿cuál es el nombre del protagonista y cómo intenta sobrevivir en el extraño sistema de la prisión?','https://www.laizquierdadiario.com/IMG/arton157246.jpg','Iván, racionando su comida y formando alianzas','John Smith, luchando contra otros prisioneros','Jack, tratando de escapar de la prisión','Michael, negociando con los guardias'),(53,3,'En \"Lucifer,\" ¿cuál es la ocupación original de Lucifer Morningstar antes de retirarse al mundo humano?','https://media.lmneuquen.com/p/9d36e0646ad3fe4b96ef7e56ebc87741/adjuntos/195/imagenes/005/434/0005434977/luciferjpg.jpg','Músico','Abogado','Policia','Médico'),(54,5,'¿En qué serie un  niño llamado Finn y su perro Jake exploran el mundo de Ooo?','https://amanecemetropolis.net/wp-content/uploads/2015/07/finn-and-jake-wallpaper.jpg','Hora de Aventura','Ben 10','El Increíble Mundo de Gumball','Steveven Universe'),(55,5,'¿En qué serie el personaje principal vive en una piña debajo del mar?','https://live.staticflickr.com/3222/3046853748_97e2411252_z.jpg','Bob Esponja','Arenita Mejillas','Patricio Estrella','Calamardo tentáculos '),(56,5,'En \"Ben 10\", ¿cuál es el dispositivo que le permite a Ben Tennyson transformarse en diferentes alienígenas?','https://www.abc.es/media/series/000/001/943/ben-10-2.jpg','Omnitrix','Super Reloj','Extraterminal','Alienator'),(57,5,'¿Cuál es la serie animada que se centra alrededor de dos hermanos que viajan a través de un extraño bosque con el fin de encontrar su camino a casa?','https://hips.hearstapps.com/hmg-prod/images/otgw-portada-1666794680.jpg','Más allá del jardín','Un Show Mas','Gravity Falls','El Mundo de Greg'),(58,5,'En \"Las Tortugas Ninja\", ¿cuál es el nombre del maestro sensei de las tortugas?','https://s1.eestatic.com/2023/08/23/cultura/series/788931468_235542392_1706x960.jpg','Splinter','Donatello','Shredder','Leonardo'),(59,5,'En Scooby Doo ¿Quién es el líder del grupo?','https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/03/scooby%20doo.jpg','Fred','Scooby','Daphne','Vilma'),(60,5,'En \"Kick Buttowski: Medio doble de riesgo\", ¿cuál es el sueño de Kick?','https://i.pinimg.com/474x/69/0e/7c/690e7c8c73a678204ef2d92cf6f21234.jpg','Ser el mejor skater','Ser el mejor futbolista','Ser el mejor ciclista','Ser el mejor acróbata'),(61,5,'En \"Los Padrinos Mágicos\", ¿cuál es el nombre de la niñera de Timmy Turner?','https://www.publimetro.com.ar/resizer/Zt_1l49FS7F2rPNhC4xSDx4zFQQ=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/IHPXBINOKFDDPDNXJUA7DI3XFU.jpg','Trixie','Wanda','Vicky','Stacy'),(62,5,'En \"Phineas y Ferb\", ¿cuál es el nombre del científico loco que siempre intenta atrapar a Phineas y Ferb?','https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fs3.abcstatics.com%2Fmedia%2Fseries%2F000%2F002%2F389%2Fphineas-y-ferb-2.jpg','Dr Heinz Doofenshmirtz','Mayor Monograma','Buford','Jeremy'),(63,5,'En \"El Show de Tom y Jerry\", ¿qué tipo de animal es Tom?','https://www.radioestacion.com.ar/wp-content/uploads/2020/02/looney-tunes-tom-jerry.jpg','Gato','Perro','Canario','Ratón'),(64,2,'¿Cuál es la película argentina de comedia más premiada?','https://indiehoy.com/wp-content/uploads/2021/07/esperando-la-carroza.jpg','Esperando la carroza (1985)','Relatos salvajes (2014)','El secreto de sus ojos (2009)','Nueve reinas (2000)'),(65,2,'¿Quién es el director de la película \"Esperando la carroza\"?','https://noticias.dac.org.ar/wp-content/uploads/2018/01/doria-1.jpg','Alejandro Doria','Carlos Sorín','Juan José Campanella','Damián Szifrón'),(66,2,'¿Cuál es la película argentina de comedia más taquillera?','https://www.clarin.com/img/2015/01/16/Bkz7AlzCmx_1256x620.jpg','Relatos salvajes (2014)','El secreto de sus ojos (2009)','Esperando la carroza (1985)','El robo del siglo (2020)'),(67,2,'¿Quiénes son los protagonistas de la película \"El secreto de sus ojos\"?','https://cdn.culturagenial.com/es/imagenes/pelicula-el-secreto-de-sus-ojos-de-juan-jose-campanella-og.jpg','Ricardo Darín y Soledad Villamil','Guillermo Francella y Julieta Díaz','Luis Brandoni y Norma Aleandro','Pablo Rago y Javier Godino'),(68,2,'¿Quién es el director de la película \"Relatos salvajes\"?','https://www.clarin.com/img/2023/04/29/uv9Q3E6Ml_720x0__1.jpg','Damián Szifrón','Damián Szifrón','Alejandro Doria','Lucrecia Martel'),(69,2,'¿Cuál es el actor/actriz argentino/a más premiado/a en la historia de los premios Óscar?','https://cdn.zeebiz.com/sites/default/files/2023/03/12/231414-12.jpg','Norma Aleandro','Ricardo Darín','Luis Brandoni','Alberto Olmedo'),(70,2,'¿Cuál es el nombre del personaje que interpreta Ricardo Darín en \"9 reinas\"?','https://viapais.com.ar/resizer/tmAonDLkFns5w50zEC1sdMnmyu8=/1023x575/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/ZZW2FT43B5C4RHTLJ2ZJ4SGMIU.png','Marcos','Juan','El alcohólico','Gastón'),(71,2,'¿Cuál es el nombre del pueblo donde se desarrolla la historia de \"La odisea de los giles\"?','https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/04/17150239/La-odisea-de-los-giles.jpg','Indio Rico','La Plata','Buenos Aires','Rawson'),(72,2,'¿Cuál es el nombre del banco que fue robado en \"El robo del siglo\"?','https://haciendocine.com.ar/wp-content/uploads/2020/07/el-robo-del-siglo.jpg','Banco Río','Banco Galicia','Banco Central de la República Argentina','Banco de la Nación Argentina'),(73,2,'¿Cuánto dinero robaron la banda del Banco Río?','https://gpsaudiovisual.com/wp-content/uploads/2020/01/MG_3530-scaled.jpg','15 millones de dólares',' 25 millones de dólares','20 millones de dólares','30 millones de dólares');
/*!40000 ALTER TABLE `preguntas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `points` int DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (9,'usuario_prueba','prueba@example.com','contraseña_prueba',0,NULL),(10,'flor15','pereyraramosflorencia@gmail.com','1234',0,NULL),(11,'prueba2','prueba2@gmail.com','12345',0,NULL),(12,'prueba3','hola@gmai.com','12345',0,NULL),(13,'hola2','hola2@gmail.com','12345',0,NULL),(14,'hola21','hola21@gmail.com','12345',NULL,NULL),(15,'usuario_prueba2','pereyraramosflorenciacamila2@gmail.com','1234',NULL,NULL),(16,'gato','gato@gmail.com','12345',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'usuario_prueba','prueba@example.com','contraseña_prueba');
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

-- Dump completed on 2023-12-12 23:46:24
