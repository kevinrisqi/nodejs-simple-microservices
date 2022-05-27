-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 27 Bulan Mei 2022 pada 18.22
-- Versi server: 8.0.29-0ubuntu0.20.04.3
-- Versi PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_service_hp`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `kerusakan`
--

CREATE TABLE `kerusakan` (
  `id` int NOT NULL,
  `jenis_kerusakan` varchar(50) NOT NULL,
  `lama_pengerjaan` int NOT NULL,
  `harga` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `kerusakan`
--

INSERT INTO `kerusakan` (`id`, `jenis_kerusakan`, `lama_pengerjaan`, `harga`) VALUES
(1, 'Mati total', 120, 300000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `orders`
--

CREATE TABLE `orders` (
  `id` int NOT NULL,
  `nama` varchar(50) NOT NULL,
  `alamat` text NOT NULL,
  `email` varchar(30) NOT NULL,
  `nomer_hp` varchar(20) NOT NULL,
  `brand_hp` varchar(20) NOT NULL,
  `keluhan` varchar(50) NOT NULL,
  `platform` varchar(20) DEFAULT NULL,
  `antrian` int DEFAULT '0',
  `id_kerusakan` int DEFAULT NULL,
  `id_teknisi` int DEFAULT NULL,
  `status` varchar(30) DEFAULT NULL,
  `serviceAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `orders`
--

INSERT INTO `orders` (`id`, `nama`, `alamat`, `email`, `nomer_hp`, `brand_hp`, `keluhan`, `platform`, `antrian`, `id_kerusakan`, `id_teknisi`, `status`, `serviceAt`) VALUES
(24, 'Dono', 'Jl Melati', 'dono@gmail.com', '089768868689', 'Iphone 5', 'Tidak nyala', 'IOS', 0, NULL, NULL, NULL, NULL),
(25, 'Dino', 'Jl Melati', 'dino@gmail.com', '0827885487', 'Samsung', 'Baterai Boros', 'Android', 0, NULL, NULL, NULL, NULL),
(26, 'Dani', 'Jl Melati', 'dani@gmail.com', '0827885487', 'Iphone 8 plus', 'Baterai Boros', 'IOS', 0, NULL, NULL, NULL, NULL),
(27, 'Dina', 'Jl Melati', 'dina@gmail.com', '0827885487', 'Iphone 6', 'Baterai Boros', 'IOS', 0, NULL, NULL, NULL, NULL),
(28, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Oppo', 'Baterai Boros', 'Android', 0, NULL, NULL, NULL, NULL),
(29, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Oppo', 'Baterai Boros', 'Android', 0, NULL, NULL, NULL, '2022-04-05 16:09:05'),
(42, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Oppo', 'Baterai Boros', 'Android', 1, NULL, 1, 'Sedang dikerjakan', '2022-04-05 16:50:57'),
(43, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Iphone', 'Baterai Boros', 'IOS', 2, NULL, 5, 'Sedang dikerjakan', '2022-04-05 16:51:25'),
(44, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Samsung', 'Baterai Boros', 'Android', 3, NULL, 1, 'Sedang dikerjakan', '2022-04-05 16:51:50'),
(45, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Samsung', 'Baterai Boros', 'Android', 4, NULL, 1, 'Sedang dikerjakan', '2022-04-05 16:51:52'),
(46, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Samsung', 'Baterai Boros', NULL, 0, NULL, NULL, NULL, NULL),
(47, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Samsung', 'Baterai Boros', 'Android', 1, NULL, 4, 'Sedang dikerjakan', '2022-04-05 17:28:54'),
(48, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Samsung', 'Baterai Boros', 'Android', 2, NULL, 4, 'Sedang dikerjakan', '2022-04-05 17:29:23'),
(49, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Samsung', 'Baterai Boros', 'Android', 3, NULL, 4, 'Sedang dikerjakan', '2022-04-05 17:29:40'),
(50, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Samsung', 'Baterai Boros', 'Android', 4, NULL, 7, 'Sedang dikerjakan', '2022-04-05 17:29:41'),
(51, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Samsung', 'Baterai Boros', 'Android', 5, NULL, 7, 'Sedang dikerjakan', '2022-04-05 17:30:12'),
(52, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Samsung', 'Baterai Boros', 'Android', 6, NULL, 7, 'Sedang dikerjakan', '2022-04-05 17:30:13'),
(53, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Samsung', 'Baterai Boros', NULL, 0, NULL, NULL, NULL, NULL),
(54, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Samsung', 'Baterai Boros', NULL, 0, NULL, NULL, NULL, NULL),
(55, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Samsung', 'Baterai Boros', NULL, 0, NULL, NULL, NULL, NULL),
(56, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Samsung', 'Baterai Boros', NULL, 0, NULL, NULL, NULL, NULL),
(57, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Samsung', 'Baterai Boros', NULL, 0, NULL, NULL, NULL, NULL),
(58, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Samsung', 'Baterai Boros', NULL, 0, NULL, NULL, NULL, NULL),
(59, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Samsung', 'Baterai Boros', NULL, 0, NULL, NULL, NULL, NULL),
(60, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Samsung', 'Baterai Boros', NULL, 0, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `teknisi`
--

CREATE TABLE `teknisi` (
  `id` int NOT NULL,
  `nama` varchar(50) NOT NULL,
  `spesialis` varchar(30) NOT NULL,
  `platform` varchar(20) NOT NULL,
  `jumlah_antrian` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `teknisi`
--

INSERT INTO `teknisi` (`id`, `nama`, `spesialis`, `platform`, `jumlah_antrian`) VALUES
(1, 'Gunawan', 'Samsung', 'Android', 3),
(4, 'Bobby', 'Xiaomi', 'Android', 3),
(5, 'John', 'Iphone', 'IOS', 1),
(6, 'Roger', 'IPAD', 'IOS', 0),
(7, 'Satrio', 'Oppo', 'Android', 3);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `nama` varchar(30) NOT NULL,
  `alamat` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `nomer_hp` varchar(15) NOT NULL,
  `brand_hp` varchar(20) NOT NULL,
  `keluhan` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `nama`, `alamat`, `email`, `nomer_hp`, `brand_hp`, `keluhan`) VALUES
(1, 'Deni', 'Jl Jambu', 'deni@gmail.com', '0878983498', 'Samsung', 'Layar Pecah'),
(4, 'Dani', 'Jl Kenanga', 'dani@gmail.com', '087893489344', 'Xiaomi', 'Tidak nyala'),
(5, 'Lala', 'Jl Anggrek', 'lala@gmail.com', '081849383484', 'iphone 7', 'Tidak nyala'),
(6, 'Lili', 'Jl Bougenville', 'lili@gmail.com', '0828484848309', 'ipad', 'Touchscreen tidak bisa'),
(7, 'Dono', 'Jl Melati', 'dono@gmail.com', '089768868689', 'Xiaomi', 'Tidak nyala');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `kerusakan`
--
ALTER TABLE `kerusakan`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `teknisi`
--
ALTER TABLE `teknisi`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `kerusakan`
--
ALTER TABLE `kerusakan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT untuk tabel `teknisi`
--
ALTER TABLE `teknisi`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
