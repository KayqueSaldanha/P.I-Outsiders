-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `sobrenome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `cpf` CHAR(11) NULL,
  `telefone` VARCHAR(45) NULL,
  `dataNascimento` DATE NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `documento_UNIQUE` (`cpf` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`produtos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `imagem1` VARCHAR(45) NOT NULL,
  `imagem2` VARCHAR(45) NULL,
  `imagem3` VARCHAR(45) NULL,
  `nome` VARCHAR(45) NOT NULL,
  `preco` INT NOT NULL,
  `cores` JSON NOT NULL,
  `genero` VARCHAR(10) NOT NULL,
  `categoria` VARCHAR(15) NOT NULL,
  `tamanhos` JSON NOT NULL,
  `status` VARCHAR(15) NULL,
  `descricao` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `imagem_UNIQUE` (`imagem1` ASC) VISIBLE,
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC) VISIBLE,
  UNIQUE INDEX `imagem2_UNIQUE` (`imagem2` ASC) VISIBLE,
  UNIQUE INDEX `imagem3_UNIQUE` (`imagem3` ASC) VISIBLE,
  UNIQUE INDEX `status_UNIQUE` (`status` ASC) VISIBLE,
  UNIQUE INDEX `descricao_UNIQUE` (`descricao` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`enderecos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`enderecos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cep` VARCHAR(45) NOT NULL,
  `cidade` VARCHAR(45) NOT NULL,
  `rua` VARCHAR(45) NOT NULL,
  `bairro` VARCHAR(45) NOT NULL,
  `complemento` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `usuarioId` INT NOT NULL,
  PRIMARY KEY (`id`, `usuarioId`),
  INDEX `fk_Endereço_Usuários_idx` (`usuarioId` ASC) VISIBLE,
  CONSTRAINT `fk_Endereço_Usuários`
    FOREIGN KEY (`usuarioId`)
    REFERENCES `mydb`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`fretes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`fretes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `empresa` VARCHAR(45) NOT NULL,
  `prazo` DATETIME NOT NULL,
  `valor` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`boletos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`boletos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `codigoBarras` VARCHAR(45) NOT NULL,
  `codigoPdf` VARCHAR(45) NOT NULL,
  `vencimento` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pix`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pix` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `qrCode` VARCHAR(30) NOT NULL,
  `vencimento` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`cartoes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cartoes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `numero` VARCHAR(45) NOT NULL,
  `validade` DATETIME NOT NULL,
  `cvv` VARCHAR(45) NOT NULL,
  `nomeImpresso` VARCHAR(45) NULL,
  `cpf` CHAR(11) NULL,
  `usuarioId` INT NOT NULL,
  PRIMARY KEY (`id`, `usuarioId`),
  INDEX `fk_Cartão_Usuário1_idx` (`usuarioId` ASC) VISIBLE,
  CONSTRAINT `fk_Cartão_Usuário1`
    FOREIGN KEY (`usuarioId`)
    REFERENCES `mydb`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`compras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`compras` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuarioId` INT NOT NULL,
  `freteId` INT NOT NULL,
  `enderecoId` INT NOT NULL,
  `boletoId` INT NOT NULL,
  `pixId` INT NOT NULL,
  `cartaoId` INT NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `numeroParcela` INT NULL,
  PRIMARY KEY (`id`, `usuarioId`, `freteId`, `enderecoId`, `boletoId`, `pixId`, `cartaoId`),
  INDEX `fk_Compra_Usuário1_idx` (`usuarioId` ASC) VISIBLE,
  INDEX `fk_Compra_Frete1_idx` (`freteId` ASC) VISIBLE,
  INDEX `fk_Compra_Endereço1_idx` (`enderecoId` ASC) VISIBLE,
  INDEX `fk_Compra_Boleto1_idx` (`boletoId` ASC) VISIBLE,
  INDEX `fk_Compra_Pix1_idx` (`pixId` ASC) VISIBLE,
  INDEX `fk_Compra_Cartao1_idx` (`cartaoId` ASC) VISIBLE,
  CONSTRAINT `fk_Compra_Usuário1`
    FOREIGN KEY (`usuarioId`)
    REFERENCES `mydb`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Compra_Frete1`
    FOREIGN KEY (`freteId`)
    REFERENCES `mydb`.`fretes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Compra_Endereço1`
    FOREIGN KEY (`enderecoId`)
    REFERENCES `mydb`.`enderecos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Compra_Boleto1`
    FOREIGN KEY (`boletoId`)
    REFERENCES `mydb`.`boletos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Compra_Pix1`
    FOREIGN KEY (`pixId`)
    REFERENCES `mydb`.`pix` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Compra_Cartao1`
    FOREIGN KEY (`cartaoId`)
    REFERENCES `mydb`.`cartoes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Usuários_has_Produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Usuários_has_Produtos` (
  `usuarioId` INT NOT NULL,
  `produtoId` INT NOT NULL,
  PRIMARY KEY (`usuarioId`, `produtoId`),
  INDEX `fk_Usuários_has_Produtos_Produtos1_idx` (`produtoId` ASC) VISIBLE,
  INDEX `fk_Usuários_has_Produtos_Usuários1_idx` (`usuarioId` ASC) VISIBLE,
  CONSTRAINT `fk_Usuários_has_Produtos_Usuários1`
    FOREIGN KEY (`usuarioId`)
    REFERENCES `mydb`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuários_has_Produtos_Produtos1`
    FOREIGN KEY (`produtoId`)
    REFERENCES `mydb`.`produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`produtos_compras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`produtos_compras` (
  `produtoId` INT NOT NULL,
  `compraId` INT NOT NULL,
  `cor` VARCHAR(45) NOT NULL,
  `tamanho` VARCHAR(45) NOT NULL,
  `quantidade` INT NOT NULL,
  PRIMARY KEY (`produtoId`, `compraId`),
  INDEX `fk_Produto_has_Compra_Compra1_idx` (`compraId` ASC) VISIBLE,
  INDEX `fk_Produto_has_Compra_Produto1_idx` (`produtoId` ASC) VISIBLE,
  CONSTRAINT `fk_Produto_has_Compra_Produto1`
    FOREIGN KEY (`produtoId`)
    REFERENCES `mydb`.`produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Produto_has_Compra_Compra1`
    FOREIGN KEY (`compraId`)
    REFERENCES `mydb`.`compras` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
