-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: mariadb
-- Generation Time: Oct 16, 2020 at 09:13 PM
-- Server version: 10.5.5-MariaDB-1:10.5.5+maria~focal
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `TriangualrTest`
--
CREATE DATABASE IF NOT EXISTS `TriangualrTest` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `TriangualrTest`;

-- --------------------------------------------------------

--
-- Table structure for table `Holiday`
--

DROP TABLE IF EXISTS `Holiday`;
CREATE TABLE `Holiday` (
  `holidayId` varchar(20) NOT NULL,
  `holidaySts` varchar(1) DEFAULT 'A',
  `holidayChk` varchar(1) DEFAULT '0',
  `holidayCreated` timestamp NULL DEFAULT current_timestamp(),
  `holidayUpdated` timestamp NULL DEFAULT current_timestamp(),
  `holidayData` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `__CUSTOM__` int(11) DEFAULT NULL,
  `holidayDate` date DEFAULT NULL,
  `holidayDescription` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Holiday`
--

INSERT INTO `Holiday` (`holidayId`, `holidaySts`, `holidayChk`, `holidayCreated`, `holidayUpdated`, `holidayData`, `__CUSTOM__`, `holidayDate`, `holidayDescription`) VALUES
('2020-01-02', 'A', '0', '2020-10-13 10:30:23', '2020-10-13 10:30:23', NULL, NULL, NULL, 'Año  nuevo 7'),
('2020-01-17', 'A', '0', '2020-10-14 11:44:37', '2020-10-14 11:44:37', NULL, NULL, '2020-01-17', 'Prueba de Creación'),
('2020-01-27', 'A', '0', '2020-10-14 21:53:06', '2020-10-14 21:53:06', NULL, NULL, '2020-01-27', 'abcdefghijk'),
('2020-02-01', 'A', '0', '2020-10-13 15:13:16', '2020-10-13 15:13:16', NULL, NULL, '2020-02-01', 'Febrero'),
('2020-03-03', 'A', '0', '2020-10-13 10:31:36', '2020-10-13 10:31:36', NULL, NULL, NULL, 'Karisma Entertein BBBB'),
('2020-03-17', 'A', '0', '2020-10-14 11:47:42', '2020-10-14 11:47:42', NULL, NULL, '2020-03-17', 'Prueba de fecha'),
('2020-07-04', 'A', '0', '2020-10-13 14:30:54', '2020-10-13 14:30:54', NULL, NULL, '2020-07-04', 'Independencia 789'),
('2020-10-04', 'A', '0', '2020-10-14 21:28:59', '2020-10-14 21:28:59', NULL, NULL, '2020-10-04', 'Celebración'),
('2020-10-05', 'A', '0', '2020-10-14 21:29:19', '2020-10-14 21:29:19', NULL, NULL, '2020-10-05', 'OTRA MÁS'),
('2020-10-10', 'A', '0', '2020-10-14 21:30:27', '2020-10-14 21:30:27', NULL, NULL, '2020-10-10', 'wertywertqew'),
('2020-10-14', 'A', '0', '2020-10-14 12:09:13', '2020-10-14 12:09:13', NULL, NULL, '2020-10-14', 'Prueba del picker'),
('2020-10-15', 'A', '1', '2020-10-14 12:13:29', '2020-10-14 12:13:29', NULL, NULL, '2020-10-15', 'otra mas'),
('2020-10-16', 'A', '1', '2020-10-14 21:29:43', '2020-10-14 21:29:43', NULL, NULL, '2020-10-16', 'asdfasdfasd'),
('2020-10-20', 'A', '1', '2020-10-14 21:29:52', '2020-10-14 21:29:52', NULL, NULL, '2020-10-20', 'ertyertyerte'),
('2020-10-22', 'A', '1', '2020-10-14 21:30:03', '2020-10-14 21:30:03', NULL, NULL, '2020-10-22', 'asdfasdfasdfcas'),
('2020-10-23', 'A', '1', '2020-10-14 15:56:21', '2020-10-14 15:56:21', NULL, NULL, '2020-10-23', 'Febrero'),
('2020-10-24', 'A', '1', '2020-10-14 21:31:14', '2020-10-14 21:31:14', NULL, NULL, '2020-10-24', 'LEONARDO '),
('2020-10-27', 'A', '1', '2020-10-14 21:29:35', '2020-10-14 21:29:35', NULL, NULL, '2020-10-27', 'dsfasdfasdf'),
('2020-10-30', 'A', '1', '2020-10-14 21:30:16', '2020-10-14 21:30:16', NULL, NULL, '2020-10-30', 'aertwert'),
('2020-11-01', 'A', '0', '2020-10-15 12:42:32', '2020-10-15 12:42:32', NULL, NULL, '2020-11-01', 'Primero'),
('2020-11-02', 'A', '1', '2020-10-14 21:31:47', '2020-10-14 21:31:47', NULL, NULL, '2020-11-02', 'eqwerqwe'),
('2020-11-03', 'A', '1', '2020-10-14 21:31:54', '2020-10-14 21:31:54', NULL, NULL, '2020-11-03', 'qwerqwerq'),
('2020-11-04', 'A', '1', '2020-10-14 21:32:00', '2020-10-14 21:32:00', NULL, NULL, '2020-11-04', 'qwerqwerq'),
('2020-11-05', 'A', '0', '2020-10-15 12:45:01', '2020-10-15 12:45:01', NULL, NULL, '2020-11-05', 'Tres de nov'),
('2020-11-06', 'A', '1', '2020-10-14 21:32:08', '2020-10-14 21:32:08', NULL, NULL, '2020-11-06', 'qwerqwerqre'),
('2020-11-07', 'A', '0', '2020-10-15 12:45:51', '2020-10-15 12:45:51', NULL, NULL, '2020-11-07', 'SIETE DE NOVEIEMBRE'),
('2020-11-17', 'A', '0', '2020-10-15 12:51:53', '2020-10-15 12:51:53', NULL, NULL, '2020-11-17', 'nov 17 ***************************************************'),
('2020-11-18', 'A', '0', '2020-10-15 15:21:03', '2020-10-15 15:21:03', NULL, NULL, '2020-11-18', 'oiewjhfoáw ejifóiajdw fóijsdfklmasdkl'),
('2020-11-19', 'A', '0', '2020-10-15 15:22:01', '2020-10-15 15:22:01', NULL, NULL, '2020-11-19', 'sfdgsdfg'),
('2020-12-25', 'A', '1', '2020-10-13 07:56:47', '2020-10-13 07:56:47', NULL, NULL, NULL, 'La Navidad 2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Holiday`
--
ALTER TABLE `Holiday`
  ADD PRIMARY KEY (`holidayId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
