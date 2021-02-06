-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 03, 2019 at 07:21 AM
-- Server version: 5.7.24
-- PHP Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_express_food`
--

-- --------------------------------------------------------

--
-- Table structure for table `biker`
--

DROP TABLE IF EXISTS `biker`;
CREATE TABLE IF NOT EXISTS `biker` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `phone` text NOT NULL,
  `name` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `biker`
--

INSERT INTO `biker` (`ID`, `phone`, `name`) VALUES
(1, '0612314556', 'Alex Smith'),
(2, '0745321456', 'Merriam Webist'),
(3, '0765432167', 'Ian Kiltec'),
(4, '0676567898', 'Paula Caren'),
(5, '0765890987', 'Andrew Gosn'),
(6, '0631246765', 'Christopher Core'),
(7, '0689908746', 'Krirsten Kirk'),
(8, '0731096875', 'Sylvio Belucci'),
(9, '0628394876', 'Boris Vangard'),
(10, '0765698324', 'Maurice Guard');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` text NOT NULL,
  `Phone` text NOT NULL,
  `Address` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`ID`, `Name`, `Phone`, `Address`) VALUES
(1, 'Paul Morse', '0451231789', '7634 SE. Armstrong St. \r\nMuskogee, OK 74403'),
(2, 'Hayden Mcquade', '0487965485', '169 Country St. \r\nWestwood, NJ 07675'),
(3, 'Sol Bauschene', '0475849635', '20 Stonybrook Street \r\nOxnard, CA 93035'),
(4, 'Carol Divan', '+44615724895', '839 East King Drive \r\nCoatesville, PA 19320'),
(5, 'Rod Miller', '0576958575', '7909 North Strawberry Drive \r\nElmhurst, NY 11373'),
(6, 'Catherine Morte', '0487963584', '475 Liberty St. \r\nMonsey, NY 10952'),
(7, 'Derry Vin', '0578965485', '56 S. Manor St. \r\nRandallstown, MD 21133'),
(8, 'Salvador Mueller', '0412321891', '9108 Selby Road \r\nVilla Park, IL 60181'),
(9, 'Radcliffe Smith', '0845761982', '803 East Harvard Rd. \r\nGlen Cove, NY 11542'),
(10, 'Gary Gaystream', '0421326594', '7995 South Westport Street \r\nHanover Park, IL 60133');

-- --------------------------------------------------------

--
-- Table structure for table `desserts`
--

DROP TABLE IF EXISTS `desserts`;
CREATE TABLE IF NOT EXISTS `desserts` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `orderID` int(11) NOT NULL,
  `name` text NOT NULL,
  `date_time` datetime NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `orderID` (`orderID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `desserts`
--

INSERT INTO `desserts` (`ID`, `orderID`, `name`, `date_time`, `description`, `price`) VALUES
(1, 3, 'Icecream', '2019-04-14 12:18:30', 'Several flavors are available:\r\n-> vanilla, lemon, chocolate...\r\nYou can also choose its size (small, medium, large, extra large)', '3.00'),
(2, 1, 'Chocolate cake', '2019-03-31 17:28:21', 'Our chocolate cake is a cake flavored with melted chocolate, cocoa powder, or both.', '5.00'),
(3, 4, 'The chef\'s daily special', '2019-04-30 12:26:32', 'Ask for it if you want to find out what it is. It changes everyday! Prepare to be amazed!', '16.00'),
(4, 5, 'Apple pie', '2019-04-14 11:21:27', 'We like to think we make the best apple pies on the market. Order one and have a taste, we\'d love to have your opinion on the matter.', '8.00'),
(5, 2, 'Icecream', '2019-04-14 12:18:30', 'Several flavors are available:\r\n-> vanilla, lemon, chocolate...\r\nYou can also choose its size (small, medium, large, extra large)', '3.00'),
(6, 6, 'The chef\'s daily special', '2019-04-30 12:26:32', 'Ask for it if you want to find out what it is. It changes everyday! Prepare to be amazed!', '16.00'),
(7, 7, 'Apple pie', '2019-04-14 11:21:27', 'We like to think we make the best apple pies on the market. Order one and have a taste, we\'d love to have your opinion on the matter.', '8.00'),
(8, 8, 'Icecream', '2019-04-14 12:18:30', 'Several flavors are available:\r\n-> vanilla, lemon, chocolate...\r\nYou can also choose its size (small, medium, large, extra large)', '3.00');

-- --------------------------------------------------------

--
-- Table structure for table `main course`
--

DROP TABLE IF EXISTS `main course`;
CREATE TABLE IF NOT EXISTS `main course` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `orderID` int(11) NOT NULL,
  `name` text NOT NULL,
  `date_time` datetime NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `orderID` (`orderID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `main course`
--

INSERT INTO `main course` (`ID`, `orderID`, `name`, `date_time`, `description`, `price`) VALUES
(1, 1, 'pizza', '2019-04-17 09:14:36', 'bxxxdbhhfbddxbjjnxxddbbffjjnffxdkb', '7.00'),
(2, 2, 'spaghetti bolognaise', '2019-04-14 16:15:28', 'vbhhfwjvbxddnnfv;bwwwddnbfwwddvjjn;b;wddffhhb', '11.00'),
(3, 3, 'French Salad', '2019-04-14 11:14:16', 'dghjghjfgkfghk,hghk,vvddhbfdvvhssuhdkkgyyyusvghuisgf', '5.00'),
(4, 4, 'Steak and French fries on the side', '2019-04-14 12:24:17', 'bjgkhsbsssdljjfghsdjjjwdfh', '11.00'),
(5, 6, 'Steak and French fries on the side', '2019-04-14 12:24:17', 'bjgkhsbsssdljjfghsdjjjwdfh', '11.00'),
(6, 5, 'pizza', '2019-04-17 09:14:36', 'bxxxdbhhfbddxbjjnxxddbbffjjnffxdkb', '7.00'),
(7, 7, 'French Salad', '2019-04-14 11:14:16', 'dghjghjfgkfghk,hghk,vvddhbfdvvhssuhdkkgyyyusvghuisgf', '5.00'),
(8, 8, 'Steak and French fries on the side', '2019-04-14 12:24:17', 'bjgkhsbsssdljjfghsdjjjwdfh', '11.00');

-- --------------------------------------------------------

--
-- Table structure for table `order_table`
--

DROP TABLE IF EXISTS `order_table`;
CREATE TABLE IF NOT EXISTS `order_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `BikerID` int(11) NOT NULL,
  `customerID` int(11) NOT NULL,
  `date_time` datetime NOT NULL,
  `status` enum('validated','sent','delivered') NOT NULL,
  `totalPrice` decimal(10,2) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `BikerID` (`BikerID`),
  KEY `customerID` (`customerID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `order_table`
--

INSERT INTO `order_table` (`ID`, `BikerID`, `customerID`, `date_time`, `status`, `totalPrice`) VALUES
(1, 5, 1, '2019-04-30 14:31:20', 'delivered', '12.00'),
(2, 10, 9, '2019-05-01 12:27:29', 'sent', '10.05'),
(3, 4, 2, '2019-04-17 12:42:27', 'sent', '6.50'),
(4, 6, 7, '2019-04-24 15:34:25', 'sent', '15.00'),
(5, 1, 3, '2019-04-30 14:31:20', 'delivered', '7.55'),
(6, 3, 9, '2019-05-01 12:27:29', 'sent', '8.50'),
(7, 7, 5, '2019-04-17 12:42:27', 'sent', '6.50'),
(8, 8, 4, '2019-04-24 15:34:25', 'sent', '9.50'),
(9, 9, 8, '2019-04-25 14:14:45', 'sent', '5.60');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `desserts`
--
ALTER TABLE `desserts`
  ADD CONSTRAINT `desserts_ibfk_1` FOREIGN KEY (`orderID`) REFERENCES `order_table` (`ID`);

--
-- Constraints for table `main course`
--
ALTER TABLE `main course`
  ADD CONSTRAINT `main course_ibfk_1` FOREIGN KEY (`orderID`) REFERENCES `order_table` (`ID`);

--
-- Constraints for table `order_table`
--
ALTER TABLE `order_table`
  ADD CONSTRAINT `order_table_ibfk_1` FOREIGN KEY (`BikerID`) REFERENCES `biker` (`ID`),
  ADD CONSTRAINT `order_table_ibfk_2` FOREIGN KEY (`customerID`) REFERENCES `customer` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
