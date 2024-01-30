-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2022 at 08:22 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rcc_portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendences`
--

CREATE TABLE `attendences` (
  `a_id` int(11) NOT NULL,
  `student_name` varchar(255) NOT NULL,
  `student_rno` varchar(255) NOT NULL,
  `a_class` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `e_id` int(11) NOT NULL,
  `e_name` varchar(255) NOT NULL,
  `e_organizer` varchar(255) NOT NULL,
  `e_description` text NOT NULL,
  `e_image` varchar(255) NOT NULL,
  `e_status` varchar(255) NOT NULL,
  `e_date` datetime NOT NULL,
  `e_venue` varchar(255) NOT NULL,
  `e_judges` varchar(255) NOT NULL,
  `e_winners` varchar(255) NOT NULL,
  `participants_count` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `mentors`
--

CREATE TABLE `mentors` (
  `m_id` int(11) NOT NULL,
  `m_name` varchar(255) NOT NULL,
  `m_email` varchar(255) NOT NULL,
  `m_number` text NOT NULL,
  `m_department` varchar(255) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mentors`
--

INSERT INTO `mentors` (`m_id`, `m_name`, `m_email`, `m_number`, `m_department`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'ABC', 'abc@gmail.com', '0123456788', 'cse', 1, '2022-04-22 20:35:36', '2022-04-22 20:35:36');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `rollno` varchar(255) NOT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  `email_id` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `course` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `semester` varchar(255) DEFAULT NULL,
  `section` varchar(255) DEFAULT NULL,
  `clan` varchar(255) DEFAULT NULL,
  `m_id` int(11) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL,
  `admin_status` tinyint(4) NOT NULL DEFAULT 0,
  `forget_token` varchar(255) DEFAULT NULL,
  `reset_token` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `rollno`, `phone_no`, `email_id`, `password`, `course`, `department`, `semester`, `section`, `clan`, `m_id`, `is_active`, `admin_status`, `forget_token`, `reset_token`, `created_at`, `updated_at`) VALUES
(1, 'Sanchit', 'Bajaj', '2K19CSUN01108', '8743811303', 'sanchit_bajaj2019@manavrachna.net', '$2b$10$uGGg.vvzrugmrUsbkdf3qe7JhtPA58h98CRp7XL/UoVYwfheNKii6', 'BTECH', 'CSE', '6', 'D', 'Forest Rhinos', 1, 1, 1, NULL, NULL, '2022-04-03 08:47:44', '2022-04-03 08:48:09'),
(2, 'Sanchit', 'Bajaj', '2k19CSUN01101', '8743811303', 'sanchitbajaj02@gmail.com', '$2b$10$dLL5InxCDjHa6KdJuK0h..6rfTsTBlrUR6DKjz1L04wplYCYX7Woy', NULL, NULL, NULL, NULL, NULL, 1, 1, 0, NULL, NULL, '2022-04-04 16:17:33', '2022-04-04 16:17:33'),
(3, 'lauda', 'lassan', '2K20CSUN03020', '123456788', 'johndoe@gmail.com', '$2b$10$aHrLIkuEPJLlIvAHAtzQwut6GOO5T29sOUTs2D0NCu6PPZsk6s09m', NULL, NULL, NULL, NULL, NULL, 1, 1, 0, NULL, NULL, '2022-04-04 16:20:17', '2022-04-04 16:20:17'),
(4, 'a', 's', '123', '123456789', 'johndoe@gmail.com', '$2b$10$ET/Jn/GUw7mHNnfxrbYTd.gU80K5kcrB5rf.4e31y5qPLeuUooS3e', NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, NULL, NULL, '2022-04-05 08:21:05', '2022-04-05 08:21:05'),
(5, 'x', 'l', '4545', '235686', 'athu@gmail.com', '$2b$10$WiHaOK9Tns3Dnu21uofCV.ADUHT8H.8txLxBlnrdUhEqW1c0.Zp86', NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, NULL, NULL, '2022-04-05 08:23:08', '2022-04-05 08:23:08'),
(6, 'Athu', 'S', '12345678912', '123412341234', 'xyz@gmail.com', '$2b$10$u69tv3oE/biFnUp/2MOISeo4g4wunVP0/IJPrF/dR702QNP/6GkwO', NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, NULL, NULL, '2022-04-05 08:32:39', '2022-04-05 08:32:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendences`
--
ALTER TABLE `attendences`
  ADD PRIMARY KEY (`a_id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`e_id`);

--
-- Indexes for table `mentors`
--
ALTER TABLE `mentors`
  ADD PRIMARY KEY (`m_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attendences`
--
ALTER TABLE `attendences`
  MODIFY `a_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `e_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mentors`
--
ALTER TABLE `mentors`
  MODIFY `m_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
