CREATE DATABASE  IF NOT EXISTS `mydb` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mydb`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `boletos`
--

DROP TABLE IF EXISTS `boletos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boletos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codigoBarras` varchar(255) NOT NULL,
  `codigoPdf` varchar(255) NOT NULL,
  `vencimento` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boletos`
--

LOCK TABLES `boletos` WRITE;
/*!40000 ALTER TABLE `boletos` DISABLE KEYS */;
INSERT INTO `boletos` VALUES (1,'12390.00005 00000.00006 00000.000007 8 56760000015075','https://www.africau.edu/images/default/sample.pdf','31/12/2022'),(2,'12390.00005 00000.00006 00000.000007 8 56760000015075','https://www.africau.edu/images/default/sample.pdf','31/12/2022'),(3,'12390.00005 00000.00006 00000.000007 8 56760000015075','https://www.africau.edu/images/default/sample.pdf','31/12/2022'),(4,'12390.00005 00000.00006 00000.000007 8 56760000015075','https://www.africau.edu/images/default/sample.pdf','31/12/2022'),(5,'12390.00005 00000.00006 00000.000007 8 56760000015075','https://www.africau.edu/images/default/sample.pdf','31/12/2022'),(6,'12390.00005 00000.00006 00000.000007 8 56760000015075','https://www.africau.edu/images/default/sample.pdf','31/12/2022'),(7,'12390.00005 00000.00006 00000.000007 8 56760000015075','https://www.africau.edu/images/default/sample.pdf','31/12/2022'),(8,'12390.00005 00000.00006 00000.000007 8 56760000015075','https://www.africau.edu/images/default/sample.pdf','31/12/2022'),(9,'12390.00005 00000.00006 00000.000007 8 56760000015075','https://www.africau.edu/images/default/sample.pdf','31/12/2022'),(10,'12390.00005 00000.00006 00000.000007 8 56760000015075','https://www.africau.edu/images/default/sample.pdf','31/12/2022'),(11,'12390.00005 00000.00006 00000.000007 8 56760000015075','https://www.africau.edu/images/default/sample.pdf','31/12/2022'),(12,'12390.00005 00000.00006 00000.000007 8 56760000015075','https://www.africau.edu/images/default/sample.pdf','31/12/2022'),(13,'12390.00005 00000.00006 00000.000007 8 56760000015075','https://www.africau.edu/images/default/sample.pdf','31/12/2022'),(14,'12390.00005 00000.00006 00000.000007 8 56760000015075','https://www.africau.edu/images/default/sample.pdf','31/12/2022'),(15,'12390.00005 00000.00006 00000.000007 8 56760000015075','https://www.africau.edu/images/default/sample.pdf','31/12/2022'),(16,'12390.00005 00000.00006 00000.000007 8 56760000015075','https://www.africau.edu/images/default/sample.pdf','31/12/2022');
/*!40000 ALTER TABLE `boletos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cartoes`
--

DROP TABLE IF EXISTS `cartoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cartoes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `numero` varchar(255) NOT NULL,
  `validade` varchar(255) NOT NULL,
  `cvv` varchar(255) NOT NULL,
  `nomeImpresso` varchar(255) NOT NULL,
  `cpf` char(255) NOT NULL,
  `usuarioId` int NOT NULL,
  PRIMARY KEY (`id`,`usuarioId`),
  KEY `fk_Cartão_Usuário1_idx` (`usuarioId`),
  CONSTRAINT `fk_Cartão_Usuário1` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartoes`
--

LOCK TABLES `cartoes` WRITE;
/*!40000 ALTER TABLE `cartoes` DISABLE KEYS */;
INSERT INTO `cartoes` VALUES (1,'123412341234','1212','123','Leandro','12312312312',3),(2,'1','1','1','1','1',3),(3,'123412341234','1212','123','Leandro Furtado','12312312312',3),(4,'1121.2121.2121.2121','11/22','123','Leandro Furtado','123.123.123-12',3),(5,'','','','','',3);
/*!40000 ALTER TABLE `cartoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compras` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuarioId` int NOT NULL,
  `freteId` int NOT NULL,
  `enderecoId` int NOT NULL,
  `boletoId` int DEFAULT NULL,
  `pixId` int DEFAULT NULL,
  `cartaoId` int DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `numeroParcela` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Compra_Usuário1_idx` (`usuarioId`),
  KEY `fk_Compra_Frete1_idx` (`freteId`),
  KEY `fk_Compra_Endereço1_idx` (`enderecoId`),
  KEY `fk_Compra_Boleto1_idx` (`boletoId`),
  KEY `fk_Compra_Pix1_idx` (`pixId`),
  KEY `fk_Compra_Cartao1_idx` (`cartaoId`),
  CONSTRAINT `fk_Compra_Boleto1` FOREIGN KEY (`boletoId`) REFERENCES `boletos` (`id`),
  CONSTRAINT `fk_Compra_Cartao1` FOREIGN KEY (`cartaoId`) REFERENCES `cartoes` (`id`),
  CONSTRAINT `fk_Compra_Endereço1` FOREIGN KEY (`enderecoId`) REFERENCES `enderecos` (`id`),
  CONSTRAINT `fk_Compra_Frete1` FOREIGN KEY (`freteId`) REFERENCES `fretes` (`id`),
  CONSTRAINT `fk_Compra_Pix1` FOREIGN KEY (`pixId`) REFERENCES `pix` (`id`),
  CONSTRAINT `fk_Compra_Usuário1` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

LOCK TABLES `compras` WRITE;
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
INSERT INTO `compras` VALUES (1,3,1,2,NULL,14,NULL,'Compra finalizada com sucesso',NULL),(2,3,1,2,14,NULL,NULL,'Compra finalizada com sucesso',NULL),(3,3,2,2,NULL,15,NULL,'Compra finalizada com sucesso',NULL),(4,3,2,2,15,NULL,NULL,'Compra finalizada com sucesso',NULL),(5,3,1,2,NULL,NULL,1,'Compra finalizada com sucesso',2),(6,3,2,2,NULL,NULL,1,'Compra finalizada com sucesso',1),(7,3,1,2,NULL,NULL,1,'Compra finalizada com sucesso',2),(8,3,2,2,NULL,NULL,2,'Compra finalizada com sucesso',NULL),(9,3,1,1,NULL,NULL,3,'Compra finalizada com sucesso',NULL),(10,3,1,1,NULL,NULL,3,'Compra finalizada com sucesso',1),(11,3,1,1,NULL,16,NULL,'Compra finalizada com sucesso',NULL),(12,3,1,1,NULL,17,NULL,'Compra finalizada com sucesso',NULL),(13,3,1,1,NULL,17,NULL,'Compra finalizada com sucesso',NULL),(14,3,1,1,NULL,17,NULL,'Compra finalizada com sucesso',NULL),(15,3,1,1,NULL,17,NULL,'Compra finalizada com sucesso',NULL),(16,3,1,1,NULL,18,NULL,'Compra finalizada com sucesso',NULL),(17,3,1,1,NULL,19,NULL,'Compra finalizada com sucesso',NULL),(18,3,1,1,NULL,19,NULL,'Compra finalizada com sucesso',NULL),(19,3,1,1,NULL,19,NULL,'Compra finalizada com sucesso',NULL),(20,3,1,1,NULL,19,NULL,'Compra finalizada com sucesso',NULL),(21,3,1,1,NULL,19,NULL,'Compra finalizada com sucesso',NULL),(22,3,1,1,NULL,19,NULL,'Compra finalizada com sucesso',NULL),(23,3,1,1,NULL,19,NULL,'Compra finalizada com sucesso',NULL),(24,3,1,1,NULL,19,NULL,'Compra finalizada com sucesso',NULL),(25,3,1,1,NULL,19,NULL,'Compra finalizada com sucesso',NULL),(26,3,1,1,NULL,19,NULL,'Compra finalizada com sucesso',NULL),(27,3,1,1,NULL,19,NULL,'Compra finalizada com sucesso',NULL),(28,3,1,1,NULL,19,NULL,'Compra finalizada com sucesso',NULL),(29,3,1,1,NULL,19,NULL,'Compra finalizada com sucesso',NULL),(30,3,1,1,NULL,19,NULL,'Compra finalizada com sucesso',NULL),(31,3,1,1,NULL,19,NULL,'Compra finalizada com sucesso',NULL),(32,3,1,1,NULL,19,NULL,'Compra finalizada com sucesso',NULL),(33,3,1,1,NULL,19,NULL,'Compra finalizada com sucesso',NULL),(34,3,2,1,16,NULL,NULL,'Compra finalizada com sucesso',NULL),(35,3,2,1,NULL,NULL,NULL,'Compra finalizada com sucesso',NULL),(36,3,1,1,NULL,20,NULL,'Compra finalizada com sucesso',NULL),(37,3,1,1,NULL,21,NULL,'Compra finalizada com sucesso',NULL),(38,3,1,1,NULL,NULL,4,'Compra finalizada com sucesso',NULL),(39,3,1,1,NULL,NULL,4,'Compra finalizada com sucesso',NULL),(40,3,1,1,NULL,NULL,4,'Compra finalizada com sucesso',NULL),(41,3,1,1,NULL,NULL,4,'Compra finalizada com sucesso',NULL),(42,3,1,1,NULL,NULL,4,'Compra finalizada com sucesso',NULL),(43,3,1,1,NULL,NULL,4,'Compra finalizada com sucesso',NULL),(44,3,1,1,NULL,22,NULL,'Compra finalizada com sucesso',NULL),(45,3,1,1,NULL,NULL,5,'Compra finalizada com sucesso',NULL);
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enderecos`
--

DROP TABLE IF EXISTS `enderecos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enderecos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cep` varchar(255) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `rua` varchar(255) NOT NULL,
  `bairro` varchar(255) NOT NULL,
  `complemento` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `numero` varchar(255) NOT NULL,
  `usuarioId` int NOT NULL,
  PRIMARY KEY (`id`,`usuarioId`),
  KEY `fk_Endereço_Usuários_idx` (`usuarioId`),
  CONSTRAINT `fk_Endereço_Usuários` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enderecos`
--

LOCK TABLES `enderecos` WRITE;
/*!40000 ALTER TABLE `enderecos` DISABLE KEYS */;
INSERT INTO `enderecos` VALUES (1,'09271-450','Santo André','Rua Campeche','Parque Erasmo Assunção','apto 2','São Paulo - SP','149',3),(2,'09181580','Santo André','Rua Otávio Marques','Parque Erasmo Assunção','Apto 2','São Paulo - SP','486',3),(3,'09181580','Santo André','Rua Otávio Marques','Parque Erasmo Assunção','apto 2','São Paulo - SP','486',3),(4,'09181580','Santo André','Rua Otávio Marques','Parque Erasmo Assunção','Apto 2','São Paulo - SP','486',3),(5,'12345-123','Cidade','Rua','Bairro','Complemento','São Paulo - SP','123',3),(6,'321321-321','Cidade Exemplo','Rua Exemplo','Bairro Exemplo','ap 1','São Paulo - SP','123',3),(7,'54321-123','Cidade','Rua','bairro','','São Paulo - SP','2',3),(8,'09271-450','Santo André','Campeche','Parque Erasmo Assunção','Apto 2','São Paulo - SP','149',3);
/*!40000 ALTER TABLE `enderecos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fretes`
--

DROP TABLE IF EXISTS `fretes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fretes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `empresa` varchar(255) NOT NULL,
  `prazo` varchar(255) NOT NULL,
  `valor` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fretes`
--

LOCK TABLES `fretes` WRITE;
/*!40000 ALTER TABLE `fretes` DISABLE KEYS */;
INSERT INTO `fretes` VALUES (1,'Loggi','2 dias úteis',10),(2,'Sedex','1 dia útil',6),(3,'Jadlog','3 dias úteis',13);
/*!40000 ALTER TABLE `fretes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pix`
--

DROP TABLE IF EXISTS `pix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pix` (
  `id` int NOT NULL AUTO_INCREMENT,
  `qrCode` varchar(255) NOT NULL,
  `vencimento` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pix`
--

LOCK TABLES `pix` WRITE;
/*!40000 ALTER TABLE `pix` DISABLE KEYS */;
INSERT INTO `pix` VALUES (1,'123124124123','31/12/2022'),(2,'123124124123','31/12/2022'),(3,'123124124123','31/12/2022'),(4,'123124124123','31/12/2022'),(5,'123124124123','31/12/2022'),(6,'123124124123','31/12/2022'),(7,'123124124123','31/12/2022'),(8,'123124124123','31/12/2022'),(9,'123124124123','31/12/2022'),(10,'123124124123','31/12/2022'),(11,'123124124123','31/12/2022'),(12,'123124124123','31/12/2022'),(13,'123124124123','31/12/2022'),(14,'123124124123','31/12/2022'),(15,'123124124123','31/12/2022'),(16,'123124124123','31/12/2022'),(17,'123124124123','31/12/2022'),(18,'123124124123','31/12/2022'),(19,'123124124123','31/12/2022'),(20,'123124124123','31/12/2022'),(21,'123124124123','31/12/2022'),(22,'123124124123','31/12/2022');
/*!40000 ALTER TABLE `pix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `imagem1` varchar(45) NOT NULL,
  `imagem2` varchar(45) DEFAULT NULL,
  `imagem3` varchar(45) DEFAULT NULL,
  `nome` varchar(45) NOT NULL,
  `preco` int NOT NULL,
  `cores` json NOT NULL,
  `genero` varchar(10) NOT NULL,
  `categoria` varchar(15) NOT NULL,
  `tamanhos` json NOT NULL,
  `status` varchar(15) DEFAULT NULL,
  `descricao` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'produto teste','','','teste',249,'{\"cores\": [\"preto\", \"branco\", \"azul\"]}','homem','homem','{\"tamanhos\": [\"P\", \"PP\", \"M\", \"G\", \"GG\"]}','diaDia','');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos_compras`
--

DROP TABLE IF EXISTS `produtos_compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos_compras` (
  `produtoId` int NOT NULL,
  `compraId` int NOT NULL,
  `cor` varchar(45) NOT NULL,
  `tamanho` varchar(45) NOT NULL,
  `quantidade` int NOT NULL,
  PRIMARY KEY (`produtoId`,`compraId`),
  KEY `fk_Produto_has_Compra_Compra1_idx` (`compraId`),
  KEY `fk_Produto_has_Compra_Produto1_idx` (`produtoId`),
  CONSTRAINT `fk_Produto_has_Compra_Compra1` FOREIGN KEY (`compraId`) REFERENCES `compras` (`id`),
  CONSTRAINT `fk_Produto_has_Compra_Produto1` FOREIGN KEY (`produtoId`) REFERENCES `produtos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos_compras`
--

LOCK TABLES `produtos_compras` WRITE;
/*!40000 ALTER TABLE `produtos_compras` DISABLE KEYS */;
/*!40000 ALTER TABLE `produtos_compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `sobrenome` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `cpf` char(11) DEFAULT NULL,
  `telefone` varchar(45) DEFAULT NULL,
  `dataNascimento` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `documento_UNIQUE` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'LEANDRO','FURTADO','le_furtado@outlook.com.br','123',NULL,NULL,NULL),(3,'Leandro','Furtado','teste@email.com','$2b$10$yZ1mbL.VgCX5WLbifkmvke3HsBhBZ3upea.GV8AV4a7ikwZH2j0Fa','12312312312','11971815551','1993-04-22'),(4,'Andressa','Paranhos','andressaparanhos1@hotmail.com','$2b$10$vHCEr3K4CuECXSfBxJxXF.5uAVvG8zEA3/g6PvZUNT4QAWhWlDEIW',NULL,NULL,NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'mydb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-18 22:40:00
