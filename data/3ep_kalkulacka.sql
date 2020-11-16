-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Počítač: localhost:3306
-- Vytvořeno: Úte 03. lis 2020, 14:27
-- Verze serveru: 10.1.41-MariaDB-0+deb9u1
-- Verze PHP: 7.3.10-1+0~20191008.45+debian9~1.gbp365209

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáze: `ucit_senkyr`
--

-- --------------------------------------------------------

--
-- Struktura tabulky `3ep_kalkulacka`
--

CREATE TABLE `3ep_kalkulacka` (
  `id` int(11) NOT NULL,
  `cislice` int(11) NOT NULL,
  `pocet` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

--
-- Vypisuji data pro tabulku `3ep_kalkulacka`
--

INSERT INTO `3ep_kalkulacka` (`id`, `cislice`, `pocet`) VALUES
(1, 0, 0),
(2, 1, 0),
(3, 2, 0),
(4, 3, 0),
(5, 4, 0),
(6, 5, 0),
(7, 6, 0),
(8, 7, 0),
(9, 8, 0),
(10, 9, 0);

--
-- Klíče pro exportované tabulky
--

--
-- Klíče pro tabulku `3ep_kalkulacka`
--
ALTER TABLE `3ep_kalkulacka`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cislice` (`cislice`);

--
-- AUTO_INCREMENT pro tabulky
--

--
-- AUTO_INCREMENT pro tabulku `3ep_kalkulacka`
--
ALTER TABLE `3ep_kalkulacka`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
