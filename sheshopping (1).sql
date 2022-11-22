-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2022 at 10:40 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sheshopping`
--

-- --------------------------------------------------------

--
-- Table structure for table `addimage`
--

CREATE TABLE `addimage` (
  `id` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `addimage`
--

INSERT INTO `addimage` (`id`, `pid`, `image`, `created_at`, `updated_at`) VALUES
(20, 21, '166842017821.jpg', '2022-11-14 10:02:58', NULL),
(21, 22, '166842033331.jpg', '2022-11-14 10:05:33', NULL),
(22, 23, '166842315651.jpg', '2022-11-14 10:52:36', NULL),
(23, 23, '166842316352.jpg', '2022-11-14 10:52:43', NULL),
(24, 29, '1668425529111.jpeg', '2022-11-14 11:32:09', NULL),
(25, 29, '1668425535112.jpeg', '2022-11-14 11:32:15', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `addresh` text NOT NULL,
  `city` varchar(255) NOT NULL,
  `zipcode` varchar(255) NOT NULL,
  `primaryadd` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `uid`, `addresh`, `city`, `zipcode`, `primaryadd`, `created_at`, `updated_at`) VALUES
(11, 14, 'gopinath soc,mota varaccha', 'surat', '394101', NULL, '2022-11-16 11:38:07', NULL),
(12, 14, 'gopinath soc,mota varaccha', 'surat', '394101', NULL, '2022-11-16 11:43:24', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `bill`
--

CREATE TABLE `bill` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `cardname` varchar(50) NOT NULL,
  `cardno` text NOT NULL,
  `cvv` varchar(50) NOT NULL,
  `expiry_month` varchar(50) NOT NULL,
  `expiry_year` varchar(50) NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `payment_status` varchar(50) NOT NULL,
  `charge_id` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bill`
--

INSERT INTO `bill` (`id`, `order_id`, `cardname`, `cardno`, `cvv`, `expiry_month`, `expiry_year`, `payment_method`, `payment_status`, `charge_id`, `created_at`, `updated_at`) VALUES
(1, 116, 'visa', '4242 4242 4242 4242', '911', '12', '2025', 'card', 'requires_payment_method', 'pi_3L5OPMSIapFG83Tj0jd6auGj', '2022-05-31 06:18:22', NULL),
(2, 117, 'visa', '4242 4242 4242 4242', '911', '11', '2026', 'card', 'requires_payment_method', 'pi_3L5OTnSIapFG83Tj00Rrb0d7', '2022-05-31 06:22:57', NULL),
(3, 118, 'visa', '4242 4242 4242 4242', '911', '12', '2025', 'card', 'requires_payment_method', 'pi_3L5PCKSIapFG83Tj0P4lLalK', '2022-05-31 07:08:58', NULL),
(4, 119, 'rupay', '4242 4242 4242 4242', '911', '12', '2025', 'card', 'requires_payment_method', 'pi_3L5PERSIapFG83Tj1NsAtutJ', '2022-05-31 07:11:10', NULL),
(5, 120, 'visa', '4242 4242 4242 4242', '911', '12', '2053', 'card', 'requires_payment_method', 'pi_3L5QZeSIapFG83Tj0lNSeaRu', '2022-05-31 08:37:09', NULL),
(6, 121, 'visa', '4242 4242 4242 4242', '911', '10', '2053', 'card', 'requires_payment_method', 'pi_3L5Qu6SIapFG83Tj0boVLmeA', '2022-05-31 08:58:16', NULL),
(7, 122, 'visa', '4242 4242 4242 4242', '911', '12', '2025', 'card', 'requires_payment_method', 'pi_3L5Qx6SIapFG83Tj1sYJrns4', '2022-05-31 09:01:22', NULL),
(8, 124, 'visa', '4242 4242 4242 4242', '911', '12', '2025', 'card', 'requires_payment_method', 'pi_3L5R23SIapFG83Tj14DkjH6n', '2022-05-31 09:06:30', NULL),
(9, 127, 'visa', '4242 4242 4242 4242', '911', '12', '2025', 'card', 'requires_payment_method', 'pi_3L5R4JSIapFG83Tj0wrhKaaN', '2022-05-31 09:08:50', NULL),
(10, 128, 'visa', '4242 4242 4242 4242', '222', '12', '2025', 'card', 'requires_payment_method', 'pi_3L6SVpSIapFG83Tj1eDnjB7z', '2022-06-03 04:53:26', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `carttbl`
--

CREATE TABLE `carttbl` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `pid` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `pro_quality` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `carttbl`
--

INSERT INTO `carttbl` (`id`, `uid`, `pid`, `price`, `pro_quality`, `address`, `status`, `created_at`, `updated_at`) VALUES
(65, 9, '2,', 4000, '2,', 'gopinath soc, mota varachha,surat,394101', 'pending', '2022-05-24 11:53:00', NULL),
(66, 9, '2,', 4000, '2,', 'rrrrrrrrrrrr , rrrrrrr , 394101', 'pending', '2022-05-24 11:53:24', NULL),
(67, 9, '2,', 4000, '2,', 'rrrrrrrrrrrr , rrrrrrr , 394101', 'pending', '2022-05-24 11:58:57', NULL),
(68, 9, '2,', 4000, '2,', 'rrrrrrrrrrrr,rrrrrrr,394101', 'pending', '2022-05-24 11:59:15', NULL),
(69, 9, '6,2,', 8000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-24 12:01:34', NULL),
(70, 9, '6,2,', 8000, '1,', 'shreedhar,ahemdabad,394102', 'pending', '2022-05-24 12:02:51', NULL),
(71, 9, '6,2,', 8000, '1,', 'shreedhar,ahemdabad,394102', 'pending', '2022-05-24 12:08:26', NULL),
(72, 9, '6,2,', 8000, '1,', 'shreedhar,ahemdabad,394102', 'pending', '2022-05-24 12:08:56', NULL),
(74, 9, '6,2,', 8000, '1,', 'b-48gopinath soc, mota varachha,surat,394101', 'pending', '2022-05-24 12:15:18', NULL),
(76, 9, '6,2,', 8000, '1,', 'b-48gopinath soc, mota varachha,surat,394101', 'pending', '2022-05-24 12:15:22', NULL),
(79, 9, '6,2,', 8000, '1,', 'aaaaaaaa,aaaaaa,394101', 'pending', '2022-05-24 12:44:18', NULL),
(80, 9, '2,', 2000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-24 12:52:03', NULL),
(81, 9, '6,2,', 8000, '1,', 'gopinath soc, mota varachha,surat,394101', 'pending', '2022-05-24 12:55:18', NULL),
(82, 9, '13,', 5000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-25 03:52:24', NULL),
(83, 9, '13,', 5000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-25 03:52:26', NULL),
(84, 9, '13,', 5000, '1,', 'aaaaaaaa,aaaaaa,394101', 'pending', '2022-05-25 03:54:05', NULL),
(85, 9, '13,', 5000, '1,', 'gopinath soc, mota varachha,surat,394101', 'pending', '2022-05-25 03:57:21', NULL),
(86, 9, '13,', 5000, '1,', 'gopinath soc, mota varachha,surat,394101', 'pending', '2022-05-25 03:57:24', NULL),
(87, 9, '13,', 5000, '1,', 'b-48gopinath soc, mota varachha , surataa , 394102', 'pending', '2022-05-25 03:58:05', NULL),
(88, 9, '13,', 5000, '1,', 'b-48gopinath soc, mota varachha , surataa , 394102', 'pending', '2022-05-25 03:59:00', NULL),
(89, 9, '13,', 5000, '1,', 'b-48gopinath soc, mota varachha , surataa , 394102', 'pending', '2022-05-25 03:59:03', NULL),
(90, 9, '13,', 5000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-25 04:00:28', NULL),
(91, 9, '13,', 5000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-25 04:00:53', NULL),
(92, 9, '13,', 5000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-25 04:01:12', NULL),
(93, 9, '13,', 5000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-25 04:01:33', NULL),
(94, 9, '13,', 5000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-25 04:02:23', NULL),
(95, 9, '13,', 5000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-25 04:02:29', NULL),
(96, 9, '2,', 2000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-25 04:13:15', NULL),
(97, 9, '2,', 2000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-25 04:48:41', NULL),
(98, 9, '2,', 2000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-25 04:50:09', NULL),
(99, 9, '2,', 4000, '2,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-25 09:29:54', NULL),
(100, 9, '2,', 2000, '1,', 'shreedhar,ahemdabad,394102', 'pending', '2022-05-25 09:55:10', NULL),
(101, 9, '2,', 2000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-25 11:00:16', NULL),
(102, 9, '2,', 2000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-25 11:18:36', NULL),
(103, 9, '2,', 2000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-25 11:45:33', NULL),
(104, 9, '2,', 2000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-25 12:02:05', NULL),
(105, 9, '2,', 2000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-25 12:04:56', NULL),
(106, 9, '2,', 2000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-25 12:05:57', NULL),
(107, 9, '2,', 2000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-25 12:06:48', NULL),
(108, 9, '2,', 2000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-26 03:59:11', NULL),
(109, 13, '13,', 5000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-26 04:11:00', NULL),
(110, 13, '13,', 5000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-26 04:17:48', NULL),
(111, 13, '13,', 5000, '1,', 'shreedhar,ahemdabad,394102', 'pending', '2022-05-26 04:18:14', NULL),
(112, 13, '2,', 2000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-26 04:27:20', NULL),
(113, 9, '2,', 2000, '1,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-26 09:17:40', NULL),
(114, 9, '2,', 4000, '2,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-31 06:17:23', NULL),
(115, 9, '2,', 4000, '2,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-31 06:17:47', NULL),
(116, 9, '2,', 4000, '2,', 'bbbbbbbb,bbbbbbbb,323266', 'pending', '2022-05-31 06:18:21', NULL),
(117, 9, '3,', 2000, '1,', 'radhekrisna soc,mota varaccha,surat , surat , 394101', 'pending', '2022-05-31 06:22:55', NULL),
(118, 9, '6,', 4000, '1,', 'radhekrisna soc,mota varaccha,surat,surat,394101', 'pending', '2022-05-31 07:08:56', NULL),
(119, 9, '2,', 2000, '1,', 'radhekrisna soc,mota varaccha,surat,surat,394101', 'pending', '2022-05-31 07:11:08', NULL),
(120, 9, '17,', 10000, '1,', 'radhekrisna soc,mota varaccha,surat,surat,394101', 'pending', '2022-05-31 08:37:06', NULL),
(121, 9, '14,', 54444, '1,', 'radhekrisna soc,mota varaccha,surat,surat,394101', 'pending', '2022-05-31 08:58:15', NULL),
(122, 9, '15,', 4000, '1,', 'gopinathgbt soc, mota varachha,surat,394101', 'pending', '2022-05-31 09:01:21', NULL),
(123, 9, '15,', 4000, '1,', 'gopinathgbt soc, mota varachha,surat,394101', 'pending', '2022-05-31 09:05:59', NULL),
(124, 9, '15,', 4000, '1,', 'radhekrisna soc,mota varaccha,surat,surat,394101', 'pending', '2022-05-31 09:06:28', NULL),
(125, 9, '15,', 4000, '1,', 'radhekrisna soc,mota varaccha,surat,surat,394101', 'pending', '2022-05-31 09:06:59', NULL),
(126, 9, '15,', 4000, '1,', 'radhekrisna soc,mota varaccha,surat,surat,394101', 'pending', '2022-05-31 09:08:26', NULL),
(127, 9, '15,', 4000, '1,', 'radhekrisna soc,mota varaccha,surat,surat,394101', 'pending', '2022-05-31 09:08:49', NULL),
(128, 9, '2,', 4000, '2,', 'radhekrisna soc,mota varaccha,surat,surat,394101', 'pending', '2022-06-03 04:53:23', NULL),
(129, 14, '24,', 1000, '1,', 'gopinath soc,mota varaccha , surat , 394101', 'pending', '2022-11-16 11:38:07', NULL),
(130, 14, '24,', 1000, '1,', 'gopinath soc,mota varaccha , surat , 394101', 'pending', '2022-11-16 11:43:25', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phoneno` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `fname`, `email`, `phoneno`, `message`, `created_at`, `updated_at`) VALUES
(1, 'zsdfdg', 'sharddha@gmail.com', '8496523698', 'HELLO', '2022-05-18 22:49:09', '2022-05-18 22:49:09');

-- --------------------------------------------------------

--
-- Table structure for table `districts`
--

CREATE TABLE `districts` (
  `id` int(8) NOT NULL DEFAULT 0,
  `state_id` int(8) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `districts`
--

INSERT INTO `districts` (`id`, `state_id`, `name`) VALUES
(1, 1, 'North Andaman'),
(2, 1, 'South Andaman'),
(3, 1, 'Nicobar'),
(4, 2, 'Adilabad'),
(5, 2, 'Anantapur'),
(6, 2, 'Chittoor'),
(7, 2, 'East Godavari'),
(8, 2, 'Guntur'),
(9, 2, 'Hyderabad'),
(10, 2, 'Karimnagar'),
(11, 2, 'Khammam'),
(12, 2, 'Krishna'),
(13, 2, 'Kurnool'),
(14, 2, 'Mahbubnagar'),
(15, 2, 'Medak'),
(16, 2, 'Nalgonda'),
(17, 2, 'Nizamabad'),
(18, 2, 'Prakasam'),
(19, 2, 'Ranga Reddy'),
(20, 2, 'Srikakulam'),
(21, 2, 'Sri Potti Sri Ramulu Nellore'),
(22, 2, 'Vishakhapatnam'),
(23, 2, 'Vizianagaram'),
(24, 2, 'Warangal'),
(25, 2, 'West Godavari'),
(26, 2, 'Cudappah'),
(27, 3, 'Anjaw'),
(28, 3, 'Changlang'),
(29, 3, 'East Siang'),
(30, 3, 'East Kameng'),
(31, 3, 'Kurung Kumey'),
(32, 3, 'Lohit'),
(33, 3, 'Lower Dibang Valley'),
(34, 3, 'Lower Subansiri'),
(35, 3, 'Papum Pare'),
(36, 3, 'Tawang'),
(37, 3, 'Tirap'),
(38, 3, 'Dibang Valley'),
(39, 3, 'Upper Siang'),
(40, 3, 'Upper Subansiri'),
(41, 3, 'West Kameng'),
(42, 3, 'West Siang'),
(43, 4, 'Baksa'),
(44, 4, 'Barpeta'),
(45, 4, 'Bongaigaon'),
(46, 4, 'Cachar'),
(47, 4, 'Chirang'),
(48, 4, 'Darrang'),
(49, 4, 'Dhemaji'),
(50, 4, 'Dima Hasao'),
(51, 4, 'Dhubri'),
(52, 4, 'Dibrugarh'),
(53, 4, 'Goalpara'),
(54, 4, 'Golaghat'),
(55, 4, 'Hailakandi'),
(56, 4, 'Jorhat'),
(57, 4, 'Kamrup'),
(58, 4, 'Kamrup Metropolitan'),
(59, 4, 'Karbi Anglong'),
(60, 4, 'Karimganj'),
(61, 4, 'Kokrajhar'),
(62, 4, 'Lakhimpur'),
(63, 4, 'Morigaon'),
(64, 4, 'Nagaon'),
(65, 4, 'Nalbari'),
(66, 4, 'Sivasagar'),
(67, 4, 'Sonitpur'),
(68, 4, 'Tinsukia'),
(69, 4, 'Udalguri'),
(70, 5, 'Araria'),
(71, 5, 'Arwal'),
(72, 5, 'Aurangabad'),
(73, 5, 'Banka'),
(74, 5, 'Begusarai'),
(75, 5, 'Bhagalpur'),
(76, 5, 'Bhojpur'),
(77, 5, 'Buxar'),
(78, 5, 'Darbhanga'),
(79, 5, 'East Champaran'),
(80, 5, 'Gaya'),
(81, 5, 'Gopalganj'),
(82, 5, 'Jamui'),
(83, 5, 'Jehanabad'),
(84, 5, 'Kaimur'),
(85, 5, 'Katihar'),
(86, 5, 'Khagaria'),
(87, 5, 'Kishanganj'),
(88, 5, 'Lakhisarai'),
(89, 5, 'Madhepura'),
(90, 5, 'Madhubani'),
(91, 5, 'Munger'),
(92, 5, 'Muzaffarpur'),
(93, 5, 'Nalanda'),
(94, 5, 'Nawada'),
(95, 5, 'Patna'),
(96, 5, 'Purnia'),
(97, 5, 'Rohtas'),
(98, 5, 'Saharsa'),
(99, 5, 'Samastipur'),
(100, 5, 'Saran'),
(101, 5, 'Sheikhpura'),
(102, 5, 'Sheohar'),
(103, 5, 'Sitamarhi'),
(104, 5, 'Siwan'),
(105, 5, 'Supaul'),
(106, 6, 'Chandigarh'),
(107, 7, 'Bastar'),
(108, 7, 'Bijapur'),
(109, 7, 'Bilaspur'),
(110, 7, 'Dantewada'),
(111, 7, 'Dhamtari'),
(112, 7, 'Durg'),
(113, 7, 'Jashpur'),
(114, 7, 'Janjgir-Champa'),
(115, 7, 'Korba'),
(116, 7, 'Koriya'),
(117, 7, 'Kanker'),
(118, 7, 'Kabirdham (formerly Kawardha)'),
(119, 7, 'Mahasamund'),
(120, 7, 'Narayanpur'),
(121, 7, 'Raigarh'),
(122, 7, 'Rajnandgaon'),
(123, 7, 'Raipur'),
(124, 7, 'Surguja'),
(125, 8, 'Dadra and Nagar Haveli'),
(126, 9, 'Daman'),
(127, 9, 'Diu'),
(128, 10, 'Central Delhi'),
(129, 10, 'East Delhi'),
(130, 10, 'New Delhi'),
(131, 10, 'North Delhi'),
(132, 10, 'North East Delhi'),
(133, 10, 'North West Delhi'),
(134, 10, 'South Delhi'),
(135, 10, 'South West Delhi'),
(136, 10, 'West Delhi'),
(137, 11, 'North Goa'),
(138, 11, 'South Goa'),
(139, 12, 'Ahmedabad'),
(140, 12, 'Amreli district'),
(141, 12, 'Anand'),
(142, 12, 'Banaskantha'),
(143, 12, 'Bharuch'),
(144, 12, 'Bhavnagar'),
(145, 12, 'Dahod'),
(146, 12, 'The Dangs'),
(147, 12, 'Gandhinagar'),
(148, 12, 'Jamnagar'),
(149, 12, 'Junagadh'),
(150, 12, 'Kutch'),
(151, 12, 'Kheda'),
(152, 12, 'Mehsana'),
(153, 12, 'Narmada'),
(154, 12, 'Navsari'),
(155, 12, 'Patan'),
(156, 12, 'Panchmahal'),
(157, 12, 'Porbandar'),
(158, 12, 'Rajkot'),
(159, 12, 'Sabarkantha'),
(160, 12, 'Surendranagar'),
(161, 12, 'Surat'),
(162, 12, 'Tapi'),
(163, 12, 'Vadodara'),
(164, 12, 'Valsad'),
(165, 13, 'Ambala'),
(166, 13, 'Bhiwani'),
(167, 13, 'Faridabad'),
(168, 13, 'Fatehabad'),
(169, 13, 'Gurgaon'),
(170, 13, 'Hissar'),
(171, 13, 'Jhajjar'),
(172, 13, 'Jind'),
(173, 13, 'Karnal'),
(174, 13, 'Kaithal'),
(175, 13, 'Kurukshetra'),
(176, 13, 'Mahendragarh'),
(177, 13, 'Mewat'),
(178, 13, 'Palwal'),
(179, 13, 'Panchkula'),
(180, 13, 'Panipat'),
(181, 13, 'Rewari'),
(182, 13, 'Rohtak'),
(183, 13, 'Sirsa'),
(184, 13, 'Sonipat'),
(185, 13, 'Yamuna Nagar'),
(186, 14, 'Bilaspur'),
(187, 14, 'Chamba'),
(188, 14, 'Hamirpur'),
(189, 14, 'Kangra'),
(190, 14, 'Kinnaur'),
(191, 14, 'Kullu'),
(192, 14, 'Lahaul and Spiti'),
(193, 14, 'Mandi'),
(194, 14, 'Shimla'),
(195, 14, 'Sirmaur'),
(196, 14, 'Solan'),
(197, 14, 'Una'),
(198, 15, 'Anantnag'),
(199, 15, 'Badgam'),
(200, 15, 'Bandipora'),
(201, 15, 'Baramulla'),
(202, 15, 'Doda'),
(203, 15, 'Ganderbal'),
(204, 15, 'Jammu'),
(205, 15, 'Kargil'),
(206, 15, 'Kathua'),
(207, 15, 'Kishtwar'),
(208, 15, 'Kupwara'),
(209, 15, 'Kulgam'),
(210, 15, 'Leh'),
(211, 15, 'Poonch'),
(212, 15, 'Pulwama'),
(213, 15, 'Rajouri'),
(214, 15, 'Ramban'),
(215, 15, 'Reasi'),
(216, 15, 'Samba'),
(217, 15, 'Shopian'),
(218, 15, 'Srinagar'),
(219, 15, 'Udhampur'),
(220, 16, 'Bokaro'),
(221, 16, 'Chatra'),
(222, 16, 'Deoghar'),
(223, 16, 'Dhanbad'),
(224, 16, 'Dumka'),
(225, 16, 'East Singhbhum'),
(226, 16, 'Garhwa'),
(227, 16, 'Giridih'),
(228, 16, 'Godda'),
(229, 16, 'Gumla'),
(230, 16, 'Hazaribag'),
(231, 16, 'Jamtara'),
(232, 16, 'Khunti'),
(233, 16, 'Koderma'),
(234, 16, 'Latehar'),
(235, 16, 'Lohardaga'),
(236, 16, 'Pakur'),
(237, 16, 'Palamu'),
(238, 16, 'Ramgarh'),
(239, 16, 'Ranchi'),
(240, 16, 'Sahibganj'),
(241, 16, 'Seraikela Kharsawan'),
(242, 16, 'Simdega'),
(243, 16, 'West Singhbhum'),
(244, 17, 'Bagalkot'),
(245, 17, 'Bangalore Rural'),
(246, 17, 'Bangalore Urban'),
(247, 17, 'Belgaum'),
(248, 17, 'Bellary'),
(249, 17, 'Bidar'),
(250, 17, 'Bijapur'),
(251, 17, 'Chamarajnagar'),
(252, 17, 'Chikkamagaluru'),
(253, 17, 'Chikkaballapur'),
(254, 17, 'Chitradurga'),
(255, 17, 'Davanagere'),
(256, 17, 'Dharwad'),
(257, 17, 'Dakshina Kannada'),
(258, 17, 'Gadag'),
(259, 17, 'Gulbarga'),
(260, 17, 'Hassan'),
(261, 17, 'Haveri district'),
(262, 17, 'Kodagu'),
(263, 17, 'Kolar'),
(264, 17, 'Koppal'),
(265, 17, 'Mandya'),
(266, 17, 'Mysore'),
(267, 17, 'Raichur'),
(268, 17, 'Shimoga'),
(269, 17, 'Tumkur'),
(270, 17, 'Udupi'),
(271, 17, 'Uttara Kannada'),
(272, 17, 'Ramanagara'),
(273, 17, 'Yadgir'),
(274, 18, 'Alappuzha'),
(275, 18, 'Ernakulam'),
(276, 18, 'Idukki'),
(277, 18, 'Kannur'),
(278, 18, 'Kasaragod'),
(279, 18, 'Kollam'),
(280, 18, 'Kottayam'),
(281, 18, 'Kozhikode'),
(282, 18, 'Malappuram'),
(283, 18, 'Palakkad'),
(284, 18, 'Pathanamthitta'),
(285, 18, 'Thrissur'),
(286, 18, 'Thiruvananthapuram'),
(287, 18, 'Wayanad'),
(288, 19, 'Lakshadweep'),
(289, 20, 'Agar'),
(290, 20, 'Alirajpur'),
(291, 20, 'Anuppur'),
(292, 20, 'Ashok Nagar'),
(293, 20, 'Balaghat'),
(294, 20, 'Barwani'),
(295, 20, 'Betul'),
(296, 20, 'Bhind'),
(297, 20, 'Bhopal'),
(298, 20, 'Burhanpur'),
(299, 20, 'Chhatarpur'),
(300, 20, 'Chhindwara'),
(301, 20, 'Damoh'),
(302, 20, 'Datia'),
(303, 20, 'Dewas'),
(304, 20, 'Dhar'),
(305, 20, 'Dindori'),
(306, 20, 'Guna'),
(307, 20, 'Gwalior'),
(308, 20, 'Harda'),
(309, 20, 'Hoshangabad'),
(310, 20, 'Indore'),
(311, 20, 'Jabalpur'),
(312, 20, 'Jhabua'),
(313, 20, 'Katni'),
(314, 20, 'Khandwa (East Nimar)'),
(315, 20, 'Khargone (West Nimar)'),
(316, 20, 'Mandla'),
(317, 20, 'Mandsaur'),
(318, 20, 'Morena'),
(319, 20, 'Narsinghpur'),
(320, 20, 'Neemuch'),
(321, 20, 'Panna'),
(322, 20, 'Raisen'),
(323, 20, 'Rajgarh'),
(324, 20, 'Ratlam'),
(325, 20, 'Rewa'),
(326, 20, 'Sagar'),
(327, 20, 'Satna'),
(328, 20, 'Sehore'),
(329, 20, 'Seoni'),
(330, 20, 'Shahdol'),
(331, 20, 'Shajapur'),
(332, 20, 'Sheopur'),
(333, 20, 'Shivpuri'),
(334, 20, 'Sidhi'),
(335, 20, 'Singrauli'),
(336, 20, 'Tikamgarh'),
(337, 20, 'Ujjain'),
(338, 20, 'Umaria'),
(339, 20, 'Vidisha'),
(340, 21, 'Ahmednagar'),
(341, 21, 'Akola'),
(342, 21, 'Amravati'),
(343, 21, 'Aurangabad'),
(344, 21, 'Beed'),
(345, 21, 'Bhandara'),
(346, 21, 'Buldhana'),
(347, 21, 'Chandrapur'),
(348, 21, 'Dhule'),
(349, 21, 'Gadchiroli'),
(350, 21, 'Gondia'),
(351, 21, 'Hingoli'),
(352, 21, 'Jalgaon'),
(353, 21, 'Jalna'),
(354, 21, 'Kolhapur'),
(355, 21, 'Latur'),
(356, 21, 'Mumbai City'),
(357, 21, 'Mumbai suburban'),
(358, 21, 'Nanded'),
(359, 21, 'Nandurbar'),
(360, 21, 'Nagpur'),
(361, 21, 'Nashik'),
(362, 21, 'Osmanabad'),
(363, 21, 'Parbhani'),
(364, 21, 'Pune'),
(365, 21, 'Raigad'),
(366, 21, 'Ratnagiri'),
(367, 21, 'Sangli'),
(368, 21, 'Satara'),
(369, 21, 'Sindhudurg'),
(370, 21, 'Solapur'),
(371, 21, 'Thane'),
(372, 21, 'Wardha'),
(373, 21, 'Washim'),
(374, 21, 'Yavatmal'),
(375, 22, 'Bishnupur'),
(376, 22, 'Churachandpur'),
(377, 22, 'Chandel'),
(378, 22, 'Imphal East'),
(379, 22, 'Senapati'),
(380, 22, 'Tamenglong'),
(381, 22, 'Thoubal'),
(382, 22, 'Ukhrul'),
(383, 22, 'Imphal West'),
(384, 23, 'East Garo Hills'),
(385, 23, 'East Khasi Hills'),
(386, 23, 'Jaintia Hills'),
(387, 23, 'Ri Bhoi'),
(388, 23, 'South Garo Hills'),
(389, 23, 'West Garo Hills'),
(390, 23, 'West Khasi Hills'),
(391, 24, 'Aizawl'),
(392, 24, 'Champhai'),
(393, 24, 'Kolasib'),
(394, 24, 'Lawngtlai'),
(395, 24, 'Lunglei'),
(396, 24, 'Mamit'),
(397, 24, 'Saiha'),
(398, 24, 'Serchhip'),
(399, 25, 'Dimapur'),
(400, 25, 'Kiphire'),
(401, 25, 'Kohima'),
(402, 25, 'Longleng'),
(403, 25, 'Mokokchung'),
(404, 25, 'Mon'),
(405, 25, 'Peren'),
(406, 25, 'Phek'),
(407, 25, 'Tuensang'),
(408, 25, 'Wokha'),
(409, 25, 'Zunheboto'),
(410, 26, 'Angul'),
(411, 26, 'Boudh (Bauda)'),
(412, 26, 'Bhadrak'),
(413, 26, 'Balangir'),
(414, 26, 'Bargarh (Baragarh)'),
(415, 26, 'Balasore'),
(416, 26, 'Cuttack'),
(417, 26, 'Debagarh (Deogarh)'),
(418, 26, 'Dhenkanal'),
(419, 26, 'Ganjam'),
(420, 26, 'Gajapati'),
(421, 26, 'Jharsuguda'),
(422, 26, 'Jajpur'),
(423, 26, 'Jagatsinghpur'),
(424, 26, 'Khordha'),
(425, 26, 'Kendujhar (Keonjhar)'),
(426, 26, 'Kalahandi'),
(427, 26, 'Kandhamal'),
(428, 26, 'Koraput'),
(429, 26, 'Kendrapara'),
(430, 26, 'Malkangiri'),
(431, 26, 'Mayurbhanj'),
(432, 26, 'Nabarangpur'),
(433, 26, 'Nuapada'),
(434, 26, 'Nayagarh'),
(435, 26, 'Puri'),
(436, 26, 'Rayagada'),
(437, 26, 'Sambalpur'),
(438, 26, 'Subarnapur (Sonepur)'),
(439, 26, 'Sundergarh'),
(440, 27, 'Karaikal'),
(441, 27, 'Mahe'),
(442, 27, 'Pondicherry'),
(443, 27, 'Yanam'),
(444, 28, 'Amritsar'),
(445, 28, 'Barnala'),
(446, 28, 'Bathinda'),
(447, 28, 'Firozpur'),
(448, 28, 'Faridkot'),
(449, 28, 'Fatehgarh Sahib'),
(450, 28, 'Fazilka[6]'),
(451, 28, 'Gurdaspur'),
(452, 28, 'Hoshiarpur'),
(453, 28, 'Jalandhar'),
(454, 28, 'Kapurthala'),
(455, 28, 'Ludhiana'),
(456, 28, 'Mansa'),
(457, 28, 'Moga'),
(458, 28, 'Sri Muktsar Sahib'),
(459, 28, 'Pathankot'),
(460, 28, 'Patiala'),
(461, 28, 'Rupnagar'),
(462, 28, 'Ajitgarh (Mohali)'),
(463, 28, 'Sangrur'),
(464, 28, 'Shahid Bhagat Singh Nagar'),
(465, 28, 'Tarn Taran'),
(466, 29, 'Ajmer'),
(467, 29, 'Alwar'),
(468, 29, 'Bikaner'),
(469, 29, 'Barmer'),
(470, 29, 'Banswara'),
(471, 29, 'Bharatpur'),
(472, 29, 'Baran'),
(473, 29, 'Bundi'),
(474, 29, 'Bhilwara'),
(475, 29, 'Churu'),
(476, 29, 'Chittorgarh'),
(477, 29, 'Dausa'),
(478, 29, 'Dholpur'),
(479, 29, 'Dungapur'),
(480, 29, 'Ganganagar'),
(481, 29, 'Hanumangarh'),
(482, 29, 'Jhunjhunu'),
(483, 29, 'Jalore'),
(484, 29, 'Jodhpur'),
(485, 29, 'Jaipur'),
(486, 29, 'Jaisalmer'),
(487, 29, 'Jhalawar'),
(488, 29, 'Karauli'),
(489, 29, 'Kota'),
(490, 29, 'Nagaur'),
(491, 29, 'Pali'),
(492, 29, 'Pratapgarh'),
(493, 29, 'Rajsamand'),
(494, 29, 'Sikar'),
(495, 29, 'Sawai Madhopur'),
(496, 29, 'Sirohi'),
(497, 29, 'Tonk'),
(498, 29, 'Udaipur'),
(499, 30, 'East Sikkim'),
(500, 30, 'North Sikkim'),
(501, 30, 'South Sikkim'),
(502, 30, 'West Sikkim'),
(503, 31, 'Ariyalur'),
(504, 31, 'Chennai'),
(505, 31, 'Coimbatore'),
(506, 31, 'Cuddalore'),
(507, 31, 'Dharmapuri'),
(508, 31, 'Dindigul'),
(509, 31, 'Erode'),
(510, 31, 'Kanchipuram'),
(511, 31, 'Kanyakumari'),
(512, 31, 'Karur'),
(513, 31, 'Krishnagiri'),
(514, 31, 'Madurai'),
(515, 31, 'Nagapattinam'),
(516, 31, 'Nilgiris'),
(517, 31, 'Namakkal'),
(518, 31, 'Perambalur'),
(519, 31, 'Pudukkottai'),
(520, 31, 'Ramanathapuram'),
(521, 31, 'Salem'),
(522, 31, 'Sivaganga'),
(523, 31, 'Tirupur'),
(524, 31, 'Tiruchirappalli'),
(525, 31, 'Theni'),
(526, 31, 'Tirunelveli'),
(527, 31, 'Thanjavur'),
(528, 31, 'Thoothukudi'),
(529, 31, 'Tiruvallur'),
(530, 31, 'Tiruvarur'),
(531, 31, 'Tiruvannamalai'),
(532, 31, 'Vellore'),
(533, 31, 'Viluppuram'),
(534, 31, 'Virudhunagar'),
(535, 32, 'Dhalai'),
(536, 32, 'North Tripura'),
(537, 32, 'South Tripura'),
(538, 32, 'Khowai[7]'),
(539, 32, 'West Tripura'),
(540, 33, 'Agra'),
(541, 33, 'Aligarh'),
(542, 33, 'Allahabad'),
(543, 33, 'Ambedkar Nagar'),
(544, 33, 'Auraiya'),
(545, 33, 'Azamgarh'),
(546, 33, 'Bagpat'),
(547, 33, 'Bahraich'),
(548, 33, 'Ballia'),
(549, 33, 'Balrampur'),
(550, 33, 'Banda'),
(551, 33, 'Barabanki'),
(552, 33, 'Bareilly'),
(553, 33, 'Basti'),
(554, 33, 'Bijnor'),
(555, 33, 'Budaun'),
(556, 33, 'Bulandshahr'),
(557, 33, 'Chandauli'),
(558, 33, 'Chhatrapati Shahuji Maharaj Nagar[8]'),
(559, 33, 'Chitrakoot'),
(560, 33, 'Deoria'),
(561, 33, 'Etah'),
(562, 33, 'Etawah'),
(563, 33, 'Faizabad'),
(564, 33, 'Farrukhabad'),
(565, 33, 'Fatehpur'),
(566, 33, 'Firozabad'),
(567, 33, 'Gautam Buddh Nagar'),
(568, 33, 'Ghaziabad'),
(569, 33, 'Ghazipur'),
(570, 33, 'Gonda'),
(571, 33, 'Gorakhpur'),
(572, 33, 'Hamirpur'),
(573, 33, 'Hardoi'),
(574, 33, 'Hathras'),
(575, 33, 'Jalaun'),
(576, 33, 'Jaunpur district'),
(577, 33, 'Jhansi'),
(578, 33, 'Jyotiba Phule Nagar'),
(579, 33, 'Kannauj'),
(580, 33, 'Kanpur'),
(581, 33, 'Kanshi Ram Nagar'),
(582, 33, 'Kaushambi'),
(583, 33, 'Kushinagar'),
(584, 33, 'Lakhimpur Kheri'),
(585, 33, 'Lalitpur'),
(586, 33, 'Lucknow'),
(587, 33, 'Maharajganj'),
(588, 33, 'Mahoba'),
(589, 33, 'Mainpuri'),
(590, 33, 'Mathura'),
(591, 33, 'Mau'),
(592, 33, 'Meerut'),
(593, 33, 'Mirzapur'),
(594, 33, 'Moradabad'),
(595, 33, 'Muzaffarnagar'),
(596, 33, 'Panchsheel Nagar district (Hapur)'),
(597, 33, 'Pilibhit'),
(598, 33, 'Pratapgarh'),
(599, 33, 'Raebareli'),
(600, 33, 'Ramabai Nagar (Kanpur Dehat)'),
(601, 33, 'Rampur'),
(602, 33, 'Saharanpur'),
(603, 33, 'Sant Kabir Nagar'),
(604, 33, 'Sant Ravidas Nagar'),
(605, 33, 'Shahjahanpur'),
(606, 33, 'Shamli[9]'),
(607, 33, 'Shravasti'),
(608, 33, 'Siddharthnagar'),
(609, 33, 'Sitapur'),
(610, 33, 'Sonbhadra'),
(611, 33, 'Sultanpur'),
(612, 33, 'Unnao'),
(613, 33, 'Varanasi'),
(614, 34, 'Almora'),
(615, 34, 'Bageshwar'),
(616, 34, 'Chamoli'),
(617, 34, 'Champawat'),
(618, 34, 'Dehradun'),
(619, 34, 'Haridwar'),
(620, 34, 'Nainital'),
(621, 34, 'Pauri Garhwal'),
(622, 34, 'Pithoragarh'),
(623, 34, 'Rudraprayag'),
(624, 34, 'Tehri Garhwal'),
(625, 34, 'Udham Singh Nagar'),
(626, 34, 'Uttarkashi'),
(627, 35, 'Bankura'),
(628, 35, 'Bardhaman'),
(629, 35, 'Birbhum'),
(630, 35, 'Cooch Behar'),
(631, 35, 'Dakshin Dinajpur'),
(632, 35, 'Darjeeling'),
(633, 35, 'Hooghly'),
(634, 35, 'Howrah'),
(635, 35, 'Jalpaiguri'),
(636, 35, 'Kolkata'),
(637, 35, 'Maldah'),
(638, 35, 'Murshidabad'),
(639, 35, 'Nadia'),
(640, 35, 'North 24 Parganas'),
(641, 35, 'Paschim Medinipur'),
(642, 35, 'Purba Medinipur'),
(643, 35, 'Purulia'),
(644, 35, 'South 24 Parganas'),
(645, 35, 'Uttar Dinajpur');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `email`, `password`, `created_at`, `updated_at`) VALUES
(3, 'abc@gmail.com', '2001', '2022-08-22 05:29:48', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rating`
--

CREATE TABLE `rating` (
  `id` int(11) NOT NULL,
  `proid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `rating` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` text NOT NULL,
  `password` varchar(255) NOT NULL,
  `mobileno` varchar(255) NOT NULL,
  `stat` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `remember_token` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `name`, `email`, `password`, `mobileno`, `stat`, `city`, `type`, `remember_token`, `created_at`, `updated_at`) VALUES
(14, 'sharddha', 'sharddhagarsondiya365@gmail.com', '1234', '8478968521', '2', '6', 'user', '509924', '2022-11-14 09:37:33', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ret`
--

CREATE TABLE `ret` (
  `id` int(11) NOT NULL,
  `rating` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ret`
--

INSERT INTO `ret` (`id`, `rating`, `created_at`, `updated_at`) VALUES
(1, 'two', '2022-09-16 06:34:38', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE `states` (
  `id` int(8) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `states`
--

INSERT INTO `states` (`id`, `name`) VALUES
(1, 'Andaman and Nicobar (AN)'),
(2, 'Andhra Pradesh (AP)'),
(3, 'Arunachal Pradesh (AR)'),
(4, 'Assam (AS)'),
(5, 'Bihar (BR)'),
(6, 'Chandigarh (CH)'),
(7, 'Chhattisgarh (CG)'),
(8, 'Dadra and Nagar Haveli (DN)'),
(9, 'Daman and Diu (DD)'),
(10, 'Delhi (DL)'),
(11, 'Goa (GA)'),
(12, 'Gujarat (GJ)'),
(13, 'Haryana (HR)'),
(14, 'Himachal Pradesh (HP)'),
(15, 'Jammu and Kashmir (JK)'),
(16, 'Jharkhand (JH)'),
(17, 'Karnataka (KA)'),
(18, 'Kerala (KL)'),
(19, 'Lakshdweep (LD)'),
(20, 'Madhya Pradesh (MP)'),
(21, 'Maharashtra (MH)'),
(22, 'Manipur (MN)'),
(23, 'Meghalaya (ML)'),
(24, 'Mizoram (MZ)'),
(25, 'Nagaland (NL)'),
(26, 'Odisha (OD)'),
(27, 'Puducherry (PY)'),
(28, 'Punjab (PB)'),
(29, 'Rajasthan (RJ)'),
(30, 'Sikkim (SK)'),
(31, 'Tamil Nadu (TN)'),
(32, 'Tripura (TR)'),
(33, 'Uttar Pradesh (UP)'),
(34, 'Uttarakhand (UK)'),
(35, 'West Bengal (WB)');

-- --------------------------------------------------------

--
-- Table structure for table `tblcatagory`
--

CREATE TABLE `tblcatagory` (
  `id` int(11) NOT NULL,
  `tblname` varchar(255) NOT NULL,
  `tblimg` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblcatagory`
--

INSERT INTO `tblcatagory` (`id`, `tblname`, `tblimg`, `date`, `created_at`, `updated_at`) VALUES
(12, 'choli', '1668419826.jpg', '2022-11-14', '2022-11-14 04:27:06', '2022-11-14 04:27:06'),
(13, 'sarres', '1668420078.jpg', '2022-11-14', '2022-11-14 04:31:18', '2022-11-14 04:31:18');

-- --------------------------------------------------------

--
-- Table structure for table `tblproduct`
--

CREATE TABLE `tblproduct` (
  `id` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `tblproductitle` varchar(255) NOT NULL,
  `tblproductprice` varchar(255) NOT NULL,
  `tblproductcode` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `discripation` text NOT NULL,
  `tblproductimage` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblproduct`
--

INSERT INTO `tblproduct` (`id`, `cid`, `tblproductitle`, `tblproductprice`, `tblproductcode`, `color`, `discripation`, `tblproductimage`, `created_at`, `updated_at`) VALUES
(21, 13, 'cotton', '2000', '304250', 'blue', '<p>blue color</p>', '1668420126.jpg', '2022-11-14 04:32:06', '2022-11-14 04:32:06'),
(22, 13, 'cotton', '2000', '304250', 'light green', '<p>grren</p>', '1668420268.jpg', '2022-11-14 04:34:28', '2022-11-14 04:34:28'),
(23, 12, 'rangoli silk', '2000', '304252', 'blue', '<p>diamond slik choli</p>', '1668423132.jpg', '2022-11-14 05:22:12', '2022-11-14 05:22:12'),
(24, 13, 'mix colour', '1000', '304260', 'multi', '<p><span style=\"color: rgb(102, 102, 102); font-family: Poppins; text-align: center; background-color: rgb(234, 234, 234);\">Multi color Pure Georgette Party wear Saree</span><br></p>', '1668424967.jpg', '2022-11-14 05:52:47', '2022-11-14 05:52:47'),
(25, 13, 'silk cotton', '1500', '304251', 'yellow', '<p><span style=\"color: rgb(102, 102, 102); font-family: Poppins; text-align: center; background-color: rgb(234, 234, 234);\">Multi Color Rangoli silk party wear saree</span><br></p>', '1668425035.jpg', '2022-11-14 05:53:55', '2022-11-14 05:53:55'),
(26, 13, 'Vichitra Silk', '3000', '304253', 'purpule', '<p><span style=\"color: rgb(102, 102, 102); font-family: Poppins; text-align: center; background-color: rgb(234, 234, 234);\">Wine Color Kajal Vichitra Silk Saree</span><br></p>', '1668425111.jpg', '2022-11-14 05:55:12', '2022-11-14 05:55:12'),
(27, 13, 'Designer Saree', '2500', '304254', 'baby pink', '<p><span style=\"color: rgb(102, 102, 102); font-family: Poppins; text-align: center; background-color: rgb(234, 234, 234);\">Baby Pink Color Swarovski Georgette Designer Saree</span><br></p>', '1668425245.jpg', '2022-11-14 05:57:25', '2022-11-14 05:57:25'),
(28, 13, 'DOUBLE SEQUANCE WORK SAREE', '4500', '304255', 'light purple', '<p><span style=\"color: rgb(102, 102, 102); font-family: Poppins; text-align: center; background-color: rgb(234, 234, 234);\">NEW PARTY WEAR BEUTIQUE STYLE HAVE A DOUBLE SEQUANCE WORK SAREE</span><br></p>', '1668425376.jpg', '2022-11-14 05:59:36', '2022-11-14 05:59:36'),
(29, 13, 'organza', '3300', '304256', 'light sky', '<p><span style=\"color: rgb(102, 102, 102); font-family: Poppins; text-align: center; background-color: rgb(234, 234, 234);\">Light Mint Sky Color Organza Silk Designer Saree</span><br></p>', '1668425468.jpeg', '2022-11-14 06:01:08', '2022-11-14 06:01:08'),
(30, 13, 'organza', '4500', '304256', 'pink', '<p><span style=\"color: rgb(102, 102, 102); font-family: Poppins; text-align: center; background-color: rgb(234, 234, 234);\">White Color Organza Silk Karishma kapoor partywear Saree</span><br></p>', '1668425614.jpg', '2022-11-14 06:03:34', '2022-11-14 06:03:34');

-- --------------------------------------------------------

--
-- Table structure for table `timer`
--

CREATE TABLE `timer` (
  `id` int(11) NOT NULL,
  `day` varchar(255) NOT NULL,
  `hour` varchar(255) NOT NULL,
  `minute` varchar(255) NOT NULL,
  `second` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `timer`
--

INSERT INTO `timer` (`id`, `day`, `hour`, `minute`, `second`, `created_at`, `updated_at`) VALUES
(1, '2', '24', '2', '5', '2022-11-15 01:55:45', '2022-11-15 01:55:45');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addimage`
--
ALTER TABLE `addimage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pid` (`pid`);

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`),
  ADD KEY `uid` (`uid`);

--
-- Indexes for table `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `carttbl`
--
ALTER TABLE `carttbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `districts`
--
ALTER TABLE `districts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`id`),
  ADD KEY `proid` (`proid`),
  ADD KEY `userid` (`userid`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ret`
--
ALTER TABLE `ret`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblcatagory`
--
ALTER TABLE `tblcatagory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblproduct`
--
ALTER TABLE `tblproduct`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cid` (`cid`);

--
-- Indexes for table `timer`
--
ALTER TABLE `timer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addimage`
--
ALTER TABLE `addimage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `bill`
--
ALTER TABLE `bill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `carttbl`
--
ALTER TABLE `carttbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=131;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `rating`
--
ALTER TABLE `rating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `ret`
--
ALTER TABLE `ret`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `states`
--
ALTER TABLE `states`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `tblcatagory`
--
ALTER TABLE `tblcatagory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tblproduct`
--
ALTER TABLE `tblproduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `timer`
--
ALTER TABLE `timer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `addimage`
--
ALTER TABLE `addimage`
  ADD CONSTRAINT `pid` FOREIGN KEY (`pid`) REFERENCES `tblproduct` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `registration` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `bill`
--
ALTER TABLE `bill`
  ADD CONSTRAINT `bill_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `carttbl` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `rating`
--
ALTER TABLE `rating`
  ADD CONSTRAINT `proid` FOREIGN KEY (`proid`) REFERENCES `tblproduct` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `registration` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tblproduct`
--
ALTER TABLE `tblproduct`
  ADD CONSTRAINT `cid` FOREIGN KEY (`cid`) REFERENCES `tblcatagory` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
