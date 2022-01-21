-- MySQL Workplace_2
-- By Ada Lazuli, 14 Jan 2022
-- For:
--   UMGC DATA 620
--   Dr. Prasanna Menta

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Workplace_2
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Workplace_2` ;

-- -----------------------------------------------------
-- Schema Workplace_2
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Workplace_2` ;
USE `Workplace_2` ;

-- -----------------------------------------------------
-- Table `jobs`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobs` ;

CREATE TABLE IF NOT EXISTS `jobs` (
  `JobID` INT NOT NULL AUTO_INCREMENT,
  `JobTitle` VARCHAR(45) NULL,
  `Education` VARCHAR(45) NULL,
  `Salary` VARCHAR(45) NULL,
  PRIMARY KEY (`JobID`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

INSERT INTO `workplace_2`.`jobs` (`JobTitle`, `Education`, `Salary`) VALUES ('Data Scientist', 'MSBA', '150000');
INSERT INTO `workplace_2`.`jobs` (`JobTitle`, `Education`, `Salary`) VALUES ('Customer Service Rep', 'Any', '60000');
INSERT INTO `workplace_2`.`jobs` (`JobTitle`, `Education`, `Salary`) VALUES ('Warehouse', 'Any', '55000');
INSERT INTO `workplace_2`.`jobs` (`JobTitle`, `Education`, `Salary`) VALUES ('Chief Financial Officer', 'MBA', '140000');


SELECT (10* (COUNT(*) * SUM(salary)) MOD 999) as  checksum from jobs; 