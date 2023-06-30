-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: royalmagic
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `royalmagic`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `royalmagic` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `royalmagic`;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `admin_id` int NOT NULL,
  `admin_name` varchar(50) NOT NULL,
  `admin_pass` varchar(50) NOT NULL,
  `login_status` varchar(50) DEFAULT NULL,
  `private_key` varchar(100) DEFAULT NULL,
  `user_type` varchar(20) DEFAULT NULL,
  `login_otp` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`admin_id`),
  UNIQUE KEY `admin_id` (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'admin@royalmagic.live','123456','yes','gakjdhgoaihgeuiasih234ikujh5','ADMIN','132545');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deposit`
--

DROP TABLE IF EXISTS `deposit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deposit` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `investor` varchar(200) DEFAULT NULL,
  `amount` varchar(50) NOT NULL DEFAULT '0.00',
  `transaction_id` varchar(200) DEFAULT NULL,
  `block_timestamp` varchar(50) DEFAULT NULL,
  `block_number` varchar(50) NOT NULL,
  `paid_status` int NOT NULL DEFAULT '0',
  `pay_transaction_id` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `transaction_id` (`transaction_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deposit`
--

LOCK TABLES `deposit` WRITE;
/*!40000 ALTER TABLE `deposit` DISABLE KEYS */;
/*!40000 ALTER TABLE `deposit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventblock`
--

DROP TABLE IF EXISTS `eventblock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventblock` (
  `record_no` int NOT NULL,
  `latest_block` varchar(50) NOT NULL,
  `swapBlock` varchar(20) DEFAULT NULL,
  `swapEvent1` varchar(20) DEFAULT NULL,
  `depositEvent` varchar(20) DEFAULT NULL,
  `withdrawEvent` varchar(20) DEFAULT NULL,
  `sellEvent` varchar(20) DEFAULT NULL,
  UNIQUE KEY `record_no` (`record_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventblock`
--

LOCK TABLES `eventblock` WRITE;
/*!40000 ALTER TABLE `eventblock` DISABLE KEYS */;
/*!40000 ALTER TABLE `eventblock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `memberpayment`
--

DROP TABLE IF EXISTS `memberpayment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `memberpayment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `investor` varchar(250) DEFAULT NULL,
  `netAmt` varchar(50) DEFAULT NULL,
  `Withid` bigint DEFAULT NULL,
  `block_number` varchar(50) NOT NULL,
  `block_timestamp` varchar(50) NOT NULL,
  `transaction_id` varchar(150) NOT NULL,
  `checked` int NOT NULL DEFAULT '0',
  `is_exist` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `memberpayment`
--

LOCK TABLES `memberpayment` WRITE;
/*!40000 ALTER TABLE `memberpayment` DISABLE KEYS */;
/*!40000 ALTER TABLE `memberpayment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `news_id` int NOT NULL AUTO_INCREMENT,
  `news_details` text NOT NULL,
  `news_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`news_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `NetQty` double(36,8) NOT NULL DEFAULT '0.00000000',
  `block_number` varchar(50) NOT NULL,
  `block_timestamp` varchar(50) NOT NULL,
  `transaction_id` varchar(150) NOT NULL,
  `checked` int NOT NULL DEFAULT '0',
  `is_exist` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `investor` varchar(200) DEFAULT NULL,
  `investment` double(36,8) DEFAULT '0.00000000',
  `referral` varchar(200) DEFAULT NULL,
  `transaction_id` varchar(200) DEFAULT NULL,
  `block_timestamp` varchar(200) DEFAULT NULL,
  `investmentToken` double(36,8) NOT NULL DEFAULT '0.00000000',
  `isreg` int NOT NULL DEFAULT '0',
  `block_number` varchar(50) DEFAULT NULL,
  `investmentBusd` double(36,8) NOT NULL DEFAULT '0.00000000',
  PRIMARY KEY (`id`),
  UNIQUE KEY `transaction_id` (`transaction_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration`
--

LOCK TABLES `registration` WRITE;
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reinvestment`
--

DROP TABLE IF EXISTS `reinvestment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reinvestment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `investorId` varchar(50) DEFAULT NULL,
  `investment` varchar(50) DEFAULT NULL,
  `investor` varchar(250) DEFAULT NULL,
  `gusdToken` varchar(50) DEFAULT NULL,
  `xpicToken` varchar(50) DEFAULT NULL,
  `xpicPToken` varchar(50) DEFAULT NULL,
  `invetToken` varchar(50) DEFAULT NULL,
  `block_timestamp` varchar(50) DEFAULT NULL,
  `transaction_id` varchar(200) DEFAULT NULL,
  `block_number` varchar(50) DEFAULT NULL,
  `isexist` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reinvestment`
--

LOCK TABLES `reinvestment` WRITE;
/*!40000 ALTER TABLE `reinvestment` DISABLE KEYS */;
/*!40000 ALTER TABLE `reinvestment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_addkyc`
--

DROP TABLE IF EXISTS `tbl_addkyc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_addkyc` (
  `record_no` bigint NOT NULL AUTO_INCREMENT,
  `member_user_id` varchar(30) DEFAULT NULL,
  `member_selfie` varchar(200) DEFAULT NULL,
  `front_image` varchar(200) DEFAULT NULL,
  `back_image` varchar(200) DEFAULT NULL,
  `kyc_date` datetime NOT NULL,
  PRIMARY KEY (`record_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_addkyc`
--

LOCK TABLES `tbl_addkyc` WRITE;
/*!40000 ALTER TABLE `tbl_addkyc` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_addkyc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_admin_payment`
--

DROP TABLE IF EXISTS `tbl_admin_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_admin_payment` (
  `record_no` bigint NOT NULL AUTO_INCREMENT,
  `member_user_id` varchar(50) DEFAULT NULL,
  `reg_date` date DEFAULT NULL,
  `payment_amt` int NOT NULL DEFAULT '0',
  `payment_type` varchar(100) DEFAULT NULL,
  `checked` int NOT NULL DEFAULT '0',
  `status` int NOT NULL DEFAULT '0',
  `hash_code` varchar(200) DEFAULT NULL,
  `matrix_status` int NOT NULL DEFAULT '0',
  `coin_type` varchar(10) DEFAULT NULL,
  `fund_value` int NOT NULL DEFAULT '0',
  `coin_rate` decimal(18,2) NOT NULL DEFAULT '0.00',
  `approved_date` datetime DEFAULT NULL,
  PRIMARY KEY (`record_no`),
  UNIQUE KEY `hash_code` (`hash_code`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_admin_payment`
--

LOCK TABLES `tbl_admin_payment` WRITE;
/*!40000 ALTER TABLE `tbl_admin_payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_admin_payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_adminchangewallet`
--

DROP TABLE IF EXISTS `tbl_adminchangewallet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_adminchangewallet` (
  `srNo` int NOT NULL AUTO_INCREMENT,
  `walletAddress` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Amount` double(18,8) NOT NULL DEFAULT '0.00000000',
  `Status` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`srNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_adminchangewallet`
--

LOCK TABLES `tbl_adminchangewallet` WRITE;
/*!40000 ALTER TABLE `tbl_adminchangewallet` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_adminchangewallet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_deposit`
--

DROP TABLE IF EXISTS `tbl_deposit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_deposit` (
  `record_no` bigint NOT NULL AUTO_INCREMENT,
  `member_user_id` varchar(20) DEFAULT NULL,
  `member_name` varchar(150) DEFAULT NULL,
  `sys_date` datetime DEFAULT NULL,
  `investment` decimal(18,2) NOT NULL DEFAULT '0.00',
  `transaction_id` varchar(250) DEFAULT NULL,
  `walletAddress` varchar(100) DEFAULT NULL,
  `checked` int NOT NULL DEFAULT '0',
  `status` int NOT NULL DEFAULT '0',
  `deposit_type` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`record_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_deposit`
--

LOCK TABLES `tbl_deposit` WRITE;
/*!40000 ALTER TABLE `tbl_deposit` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_deposit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_level_amt`
--

DROP TABLE IF EXISTS `tbl_level_amt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_level_amt` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `level_name` int NOT NULL,
  `type` varchar(50) NOT NULL,
  `level_values` decimal(18,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`record_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_level_amt`
--

LOCK TABLES `tbl_level_amt` WRITE;
/*!40000 ALTER TABLE `tbl_level_amt` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_level_amt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_member_income_dtails`
--

DROP TABLE IF EXISTS `tbl_member_income_dtails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_member_income_dtails` (
  `income_id` bigint NOT NULL AUTO_INCREMENT,
  `member_user_id` varchar(50) DEFAULT NULL,
  `member_name` varchar(255) DEFAULT NULL,
  `calculate_date` date DEFAULT NULL,
  `income_amt` double(18,2) NOT NULL DEFAULT '0.00',
  `income_level` int NOT NULL DEFAULT '0',
  `income_type` varchar(250) DEFAULT NULL,
  `status` int NOT NULL DEFAULT '0',
  `b_type` varchar(50) DEFAULT NULL,
  `income_member_id` varchar(50) DEFAULT NULL,
  `net_amt` double(18,2) NOT NULL DEFAULT '0.00',
  `magic_pool` double(18,2) NOT NULL DEFAULT '0.00',
  `royal_pool` double(18,2) NOT NULL DEFAULT '0.00',
  `re_entry` double(18,2) NOT NULL DEFAULT '0.00',
  `hash_code` varchar(100) DEFAULT NULL,
  `investment_amt` double(18,2) NOT NULL DEFAULT '0.00',
  `invest_type` varchar(50) DEFAULT NULL,
  `income_per` decimal(18,2) NOT NULL DEFAULT '0.00',
  `rewarName` varchar(100) DEFAULT NULL,
  `curentRank` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`income_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_member_income_dtails`
--

LOCK TABLES `tbl_member_income_dtails` WRITE;
/*!40000 ALTER TABLE `tbl_member_income_dtails` DISABLE KEYS */;
INSERT INTO `tbl_member_income_dtails` VALUES (1,'6873419',' USER2','2023-06-27',5.00,0,'DIRECT BONUS',1,'DIRECT BONUS',NULL,0.00,0.00,0.00,0.00,NULL,0.00,NULL,0.00,NULL,NULL),(6,'6873419',' YOGESH PAWAR','2023-06-27',5.00,0,'DIRECT BONUS',1,'DIRECT BONUS',NULL,0.00,0.00,0.00,0.00,NULL,0.00,NULL,0.00,NULL,NULL),(7,'6873419',' 84849 455','2023-06-28',5.00,0,'DIRECT BONUS',1,'DIRECT BONUS',NULL,0.00,0.00,0.00,0.00,NULL,0.00,NULL,0.00,NULL,NULL),(8,'6873419',' S1 S1','2023-06-28',5.00,0,'DIRECT BONUS',1,'DIRECT BONUS',NULL,0.00,0.00,0.00,0.00,NULL,0.00,NULL,0.00,NULL,NULL),(9,'6873419',' S2 S2','2023-06-28',5.00,0,'DIRECT BONUS',1,'DIRECT BONUS',NULL,0.00,0.00,0.00,0.00,NULL,0.00,NULL,0.00,NULL,NULL),(10,'6873419',' IAM FLAIR','2023-06-28',5.00,0,'DIRECT BONUS',1,'DIRECT BONUS',NULL,0.00,0.00,0.00,0.00,NULL,0.00,NULL,0.00,NULL,NULL),(11,'6873419',' S3 S3','2023-06-28',5.00,0,'DIRECT BONUS',1,'DIRECT BONUS',NULL,0.00,0.00,0.00,0.00,NULL,0.00,NULL,0.00,NULL,NULL),(12,'6873419',' S3 S3','2023-06-28',5.00,0,'DIRECT BONUS',1,'DIRECT BONUS',NULL,0.00,0.00,0.00,0.00,NULL,0.00,NULL,0.00,NULL,NULL),(13,'6873419',' SH4 SH4','2023-06-28',5.00,0,'DIRECT BONUS',1,'DIRECT BONUS',NULL,0.00,0.00,0.00,0.00,NULL,0.00,NULL,0.00,NULL,NULL),(14,'6873419',' SH5 SH5','2023-06-28',5.00,0,'DIRECT BONUS',1,'DIRECT BONUS',NULL,0.00,0.00,0.00,0.00,NULL,0.00,NULL,0.00,NULL,NULL),(15,'6873419',' R5 5','2023-06-28',5.00,0,'DIRECT BONUS',1,'DIRECT BONUS',NULL,0.00,0.00,0.00,0.00,NULL,0.00,NULL,0.00,NULL,NULL),(16,'6873419',' ABCD ASDF','2023-06-28',5.00,0,'DIRECT BONUS',1,'DIRECT BONUS',NULL,0.00,0.00,0.00,0.00,NULL,0.00,NULL,0.00,NULL,NULL),(17,'6873419',' ABCCC ASF','2023-06-28',5.00,0,'DIRECT BONUS',1,'DIRECT BONUS',NULL,0.00,0.00,0.00,0.00,NULL,0.00,NULL,0.00,NULL,NULL),(18,'9607722',' FT XAINI','2023-06-28',5.00,0,'DIRECT BONUS',1,'DIRECT BONUS',NULL,0.00,0.00,0.00,0.00,NULL,0.00,NULL,0.00,NULL,NULL);
/*!40000 ALTER TABLE `tbl_member_income_dtails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_memberreg`
--

DROP TABLE IF EXISTS `tbl_memberreg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_memberreg` (
  `member_id` int NOT NULL AUTO_INCREMENT,
  `member_user_id` varchar(50) NOT NULL,
  `member_name` varchar(100) DEFAULT NULL,
  `sponcer_id` varchar(100) DEFAULT NULL,
  `sponcer_name` varchar(250) NOT NULL,
  `wallet_address` varchar(255) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `promoter_id` varchar(50) DEFAULT NULL,
  `promoter_name` varchar(250) DEFAULT NULL,
  `contact` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `status` int DEFAULT '0',
  `registration_date` datetime DEFAULT NULL,
  `member_status` int NOT NULL DEFAULT '0',
  `kyc_status` int NOT NULL DEFAULT '0',
  `topup_amount` double(36,2) NOT NULL DEFAULT '0.00',
  `direct_member` int NOT NULL DEFAULT '0',
  `direct_income` double(18,2) NOT NULL DEFAULT '0.00',
  `wallet_amount` double(36,2) NOT NULL DEFAULT '0.00',
  `checked` int NOT NULL DEFAULT '0',
  `withdrawal_amt` double(36,2) DEFAULT '0.00',
  `block_status` int NOT NULL DEFAULT '0',
  `current_investment` double(36,2) NOT NULL DEFAULT '0.00',
  `direct_business` double(36,2) NOT NULL DEFAULT '0.00',
  `total_earning` double(36,2) NOT NULL DEFAULT '0.00',
  `level` int NOT NULL DEFAULT '0',
  `magic_pool` double(18,2) NOT NULL DEFAULT '0.00',
  `royal_pool` double(18,2) NOT NULL DEFAULT '0.00',
  `net_income` double(18,2) NOT NULL DEFAULT '0.00',
  `net_amount` double(18,2) NOT NULL DEFAULT '0.00',
  `isblock` int NOT NULL DEFAULT '0',
  `team_business` double(36,2) NOT NULL DEFAULT '0.00',
  `expiry_date` date DEFAULT NULL,
  `team_member` int NOT NULL DEFAULT '0',
  `activation_date` datetime DEFAULT NULL,
  `profile_image` varchar(200) DEFAULT NULL,
  `front_image` varchar(200) DEFAULT NULL,
  `back_image` varchar(200) DEFAULT NULL,
  `member_dob` varchar(50) DEFAULT NULL,
  `address` varchar(256) DEFAULT NULL,
  `pincod` int NOT NULL DEFAULT '0',
  `gender` varchar(6) DEFAULT NULL,
  `country_code` int NOT NULL DEFAULT '0',
  `state` varchar(100) DEFAULT NULL,
  `city` text,
  `calTeamStatus` int NOT NULL DEFAULT '0',
  `updateWallet` int NOT NULL DEFAULT '0',
  `OTP` int DEFAULT NULL,
  `OTP_Expiry` date DEFAULT NULL,
  PRIMARY KEY (`member_id`),
  UNIQUE KEY `member_user_id` (`member_user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=52 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_memberreg`
--

LOCK TABLES `tbl_memberreg` WRITE;
/*!40000 ALTER TABLE `tbl_memberreg` DISABLE KEYS */;
INSERT INTO `tbl_memberreg` VALUES (48,'9607722','ABCD ASDF','6873419','X PIC','asdss','$2b$10$4oTi0TWJzy4FNxSxqbA90.OXaH2B0G0LKFBRVHhZA4hX4tP/5ItOa',NULL,NULL,'1231231230','aaa@gmail.com',1,'2023-06-28 12:44:55',1,0,30.00,1,5.00,5.00,1,0.00,0,0.00,15.00,0.00,0,0.00,0.00,0.00,0.00,0,15.00,NULL,1,'2023-06-28 12:46:50',NULL,NULL,NULL,NULL,NULL,0,NULL,0,NULL,NULL,1,0,NULL,NULL),(49,'8077811','ABCCC ASF','6873419','X PIC','asfheonndn','$2b$10$5IiEyYihVOCFYdibuvv6zumBIB/.PFmUGro5U1t5SDNc2Uk1wuuV.',NULL,NULL,'1234561230','ab@gmail.com',1,'2023-06-28 12:50:33',1,0,15.00,0,0.00,0.00,1,0.00,0,0.00,0.00,0.00,0,0.00,0.00,0.00,0.00,0,0.00,NULL,0,'2023-06-28 12:52:10',NULL,NULL,NULL,NULL,NULL,0,NULL,0,NULL,NULL,1,0,NULL,NULL),(50,'7212494','ASLDF ASLF','8077811','ABCCC ASF',NULL,'$2b$10$OeBCKY8PU5vS4mBD0d0Ll.IdJQ6SsONS1BF6d2YBHxr2JjuuHpkGW',NULL,NULL,'7979414165','abcr@gamil.com',0,'2023-06-28 12:53:44',0,0,0.00,0,0.00,0.00,0,0.00,0,0.00,0.00,0.00,0,0.00,0.00,0.00,0.00,0,0.00,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,0,NULL,NULL,0,0,NULL,NULL),(51,'8015981','FT XAINI','9607722','ABCD ASDF','123456789','$2b$10$NJmk.R89Wo2vJjMkZACbFOF/c8KK/2GyXq9WJgC4C23VgqzNTQaOa',NULL,NULL,'7433939407','sushilx1137@gmail.com',1,'2023-06-28 13:25:26',1,0,15.00,0,0.00,0.00,1,0.00,0,0.00,0.00,0.00,0,0.00,0.00,0.00,0.00,0,0.00,NULL,0,'2023-06-28 13:26:10',NULL,NULL,NULL,NULL,NULL,0,NULL,0,NULL,NULL,1,0,NULL,NULL),(1,'6873419','X PIC','4789213','company',NULL,'$2b$10$MT1bdZmVAeKpjOchWfFAlOMrSEYvImgfTvyPz.SmzH8oFRLmEOcym','4789213','company','9956111847','mds286751@gmail.com',1,'2022-11-29 09:11:01',0,2,0.00,2,10.00,10.00,0,0.00,0,0.00,30.00,0.00,0,0.00,0.00,0.00,0.00,0,60.00,NULL,3,NULL,'cqb29dnl3u75h864sekzwrvymfta1xgj.jpeg','kjv3f8htamzlwe9g62c1xqd7ryb4snu5.jpeg','6fxrw2u71ekmlt5as8vyjdcbn4g3z9qh.jpeg','09/07/1995','allahabad',211019,'Male',91,'Uttar Prades','Alld',1,0,NULL,NULL);
/*!40000 ALTER TABLE `tbl_memberreg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_plan`
--

DROP TABLE IF EXISTS `tbl_plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_plan` (
  `sl_no` int NOT NULL AUTO_INCREMENT,
  `plan_amt` int NOT NULL DEFAULT '0',
  `roi_per` decimal(18,2) NOT NULL DEFAULT '0.00',
  `total_return` int NOT NULL DEFAULT '0',
  `packageName` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`sl_no`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_plan`
--

LOCK TABLES `tbl_plan` WRITE;
/*!40000 ALTER TABLE `tbl_plan` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_plan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_reinvest`
--

DROP TABLE IF EXISTS `tbl_reinvest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_reinvest` (
  `record_no` bigint NOT NULL AUTO_INCREMENT,
  `member_user_id` varchar(50) NOT NULL,
  `walletAddress` varchar(50) DEFAULT NULL,
  `invest_package` int DEFAULT '0',
  `hash_code` varchar(250) NOT NULL,
  `tr_date` datetime NOT NULL,
  `invest_type` varchar(100) DEFAULT NULL,
  `gusdAmt` double(18,2) NOT NULL DEFAULT '0.00',
  `xpicAmt` decimal(18,2) NOT NULL DEFAULT '0.00',
  `xpicLive` decimal(18,2) NOT NULL DEFAULT '0.00',
  `xPicPlusAmt` double(36,8) NOT NULL DEFAULT '0.00000000',
  `status` int NOT NULL DEFAULT '0',
  `payment_status` int NOT NULL DEFAULT '0',
  `checked` int NOT NULL DEFAULT '0',
  `level` int NOT NULL DEFAULT '0',
  `cal_team` int NOT NULL DEFAULT '0',
  `packageName` varchar(20) DEFAULT NULL,
  `monthlyCal` int NOT NULL DEFAULT '0',
  `nftStatus` int NOT NULL DEFAULT '0',
  `nftToken` varchar(100) DEFAULT NULL,
  `autostackStatus` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`record_no`),
  UNIQUE KEY `hash_code` (`hash_code`)
) ENGINE=MyISAM AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_reinvest`
--

LOCK TABLES `tbl_reinvest` WRITE;
/*!40000 ALTER TABLE `tbl_reinvest` DISABLE KEYS */;
INSERT INTO `tbl_reinvest` VALUES (1,'6873419','TQgQXdaFauywR3DejeBjohinLetfQQjreD',15,'f5ert6wer65fsdrty76erteasdfg46ert6985969639696ghfj','2023-06-27 18:35:14','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(16,'3277301','ajshjffohiowheivnkasnk',15,'knekviwjekajweiwjrvkjtibj tijojyojsojkza bjkt','2023-06-28 12:43:04','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(14,'9633218','Sggccsggf',15,'Zfdgffh','2023-06-28 12:22:58','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(15,'2777315','St ho hj',15,'Zfghjj','2023-06-28 12:36:53','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(13,'6873419','TQgQXdaFauywR3DejeBjohinLetfQQjreD',15,'f99ce97d3c8bb7e1bdcc67c9247e2c8e9f9b0da66f95919638d58e158db00514','2023-06-28 12:12:40','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(9,'6873419','Stick dhoop di',15,'Division','2023-06-27 23:59:36','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(10,'6873419','1234',15,'1234','2023-06-28 11:27:52','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(11,'6873412','12341234',15,'12341234','2023-06-28 11:30:06','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(12,'6873412','asdf',15,'sdafsdfwqer','2023-06-28 11:36:49','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(17,'3459321','Fddff',15,'Fgghh','2023-06-28 12:48:09','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(18,'8368520','Dgjjjj',15,'Vhjj','2023-06-28 12:50:33','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(19,'1086638','Gshhsh',15,'Bsjsh','2023-06-28 12:55:44','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(20,'7882486','Dghjj',15,'Xghuu','2023-06-28 13:00:16','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(21,'6270693','Jdidj',15,'Hrhrhrhhr','2023-06-28 13:18:57','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(22,'9062181','R',15,'T','2023-06-28 13:20:45','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(23,'5694589','Rr',15,'Tt','2023-06-28 13:22:20','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(24,'1371309','R',15,'Ti','2023-06-28 13:24:05','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(25,'2070832','R6',15,'T6','2023-06-28 13:25:46','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(26,'4116168','R5',15,'T5','2023-06-28 13:27:30','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(27,'7122366','R66',15,'T66','2023-06-28 13:31:28','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(28,'5386562','R66',15,'T660','2023-06-28 13:32:43','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(29,'9378076','T6666',15,'R77767','2023-06-28 13:34:59','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(30,'2854376','Ttt',15,'Rrr','2023-06-28 13:36:21','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(31,'8691914','Tt',15,'T8','2023-06-28 13:41:19','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(32,'5079554','Yu',15,'I l','2023-06-28 13:42:43','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(33,'2760846','Hs',15,'Ud','2023-06-28 13:43:43','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(34,'7945945','Uu',15,'Tt0','2023-06-28 13:45:04','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(35,'9566197','4tu',15,'Ytt','2023-06-28 13:46:17','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(36,'9607722','12341234',15,'13241234','2023-06-28 12:46:26','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(37,'8077811','asfheonndn',15,'lkjfasffsd','2023-06-28 12:51:49','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(38,'9607722','asdss',15,'gdhthett','2023-06-28 13:08:12','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0),(39,'8015981','123456789',15,'gbsbhgrwsb hsrw','2023-06-28 13:25:47','REGISTRATION',15.00,0.00,0.00,0.00000000,1,0,1,0,1,NULL,0,0,NULL,0);
/*!40000 ALTER TABLE `tbl_reinvest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_setting`
--

DROP TABLE IF EXISTS `tbl_setting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_setting` (
  `title_name` varchar(250) NOT NULL,
  `company_name` varchar(250) NOT NULL,
  `rec_id` int NOT NULL AUTO_INCREMENT,
  `fromAddress` varchar(50) DEFAULT NULL,
  `wprivateKey` varchar(200) DEFAULT NULL,
  `block_timestamp` varchar(50) DEFAULT NULL,
  `lastreward_paid` date DEFAULT NULL,
  `tokeRate` decimal(18,4) NOT NULL DEFAULT '0.0000',
  PRIMARY KEY (`rec_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_setting`
--

LOCK TABLES `tbl_setting` WRITE;
/*!40000 ALTER TABLE `tbl_setting` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_setting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_ticket`
--

DROP TABLE IF EXISTS `tbl_ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_ticket` (
  `t_id` int NOT NULL AUTO_INCREMENT,
  `t_description` text NOT NULL,
  `t_post_reply` text NOT NULL,
  `t_date` datetime DEFAULT NULL,
  `t_status` int NOT NULL DEFAULT '0',
  `member_user_id` varchar(20) DEFAULT NULL,
  `t_reply_date` datetime DEFAULT NULL,
  `checked` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`t_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_ticket`
--

LOCK TABLES `tbl_ticket` WRITE;
/*!40000 ALTER TABLE `tbl_ticket` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_withdraw`
--

DROP TABLE IF EXISTS `tbl_withdraw`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_withdraw` (
  `record_no` bigint NOT NULL AUTO_INCREMENT,
  `member_user_id` varchar(15) DEFAULT NULL,
  `member_name` varchar(200) DEFAULT NULL,
  `with_amt` double(18,2) NOT NULL DEFAULT '0.00',
  `with_date` datetime DEFAULT NULL,
  `net_amt` double(18,2) NOT NULL DEFAULT '0.00',
  `with_referrance` varchar(50) NOT NULL,
  `paid_status` int NOT NULL DEFAULT '0',
  `transaction_id` varchar(150) DEFAULT NULL,
  `with_type` varchar(50) DEFAULT NULL,
  `isverified` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`record_no`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_withdraw`
--

LOCK TABLES `tbl_withdraw` WRITE;
/*!40000 ALTER TABLE `tbl_withdraw` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_withdraw` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'royalmagic'
--

--
-- Dumping routines for database 'royalmagic'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-28 13:46:25
