-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 01 Jun 2022 pada 17.04
-- Versi server: 8.0.29-0ubuntu0.20.04.3
-- Versi PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `kerusakan`
--

INSERT INTO `kerusakan` (`id`, `jenis_kerusakan`, `lama_pengerjaan`, `harga`) VALUES
(1, 'Mati total', 120, 300000),
(3, 'Bootloop', 90, 250000),
(4, 'Batre Bocor', 60, 100000),
(5, 'Layar Retak', 60, 200000);

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
  `lama_pengerjaan` int DEFAULT '0',
  `id_kerusakan` int DEFAULT NULL,
  `id_teknisi` int DEFAULT NULL,
  `status` varchar(30) DEFAULT NULL,
  `serviceAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `orders`
--

INSERT INTO `orders` (`id`, `nama`, `alamat`, `email`, `nomer_hp`, `brand_hp`, `keluhan`, `platform`, `antrian`, `lama_pengerjaan`, `id_kerusakan`, `id_teknisi`, `status`, `serviceAt`) VALUES
(170, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 1, 90, 3, 1, 'Sedang dikerjakan', '2022-05-29 15:15:41'),
(171, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 2, 180, 3, 1, 'Sedang dikerjakan', '2022-05-29 15:15:42'),
(172, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 3, 360, 3, 1, 'Sedang dikerjakan', '2022-05-29 15:15:43'),
(173, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 1, 90, 3, 4, 'Sedang dikerjakan', '2022-05-29 15:15:44'),
(174, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 2, 180, 3, 4, 'Sedang dikerjakan', '2022-05-29 15:15:45'),
(175, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 3, 360, 3, 4, 'Sedang dikerjakan', '2022-05-29 15:15:46'),
(176, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 1, 90, 3, 7, 'Sedang dikerjakan', '2022-05-29 15:15:47'),
(177, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 2, 180, 3, 7, 'Sedang dikerjakan', '2022-05-29 15:15:48'),
(178, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 3, 360, 3, 7, 'Sedang dikerjakan', '2022-05-29 15:15:49'),
(179, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 10, 0, 3, NULL, 'Menunggu antrian', NULL),
(180, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', NULL, 0, 0, 3, NULL, NULL, NULL),
(181, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 12, 0, 3, NULL, 'Menunggu antrian', NULL),
(182, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 3, 90, 3, 1, 'Sedang dikerjakan', '2022-05-29 16:58:39'),
(183, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 1, 90, 3, 1, 'Sedang dikerjakan', '2022-05-29 17:00:04'),
(184, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 2, 180, 3, 1, 'Sedang dikerjakan', '2022-05-29 17:00:08'),
(185, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 3, 360, 3, 1, 'Sedang dikerjakan', '2022-05-29 17:00:09'),
(186, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 17, 0, 3, NULL, 'Menunggu antrian', NULL),
(187, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 1, 90, 3, 1, 'Sedang dikerjakan', '2022-05-29 17:15:34'),
(188, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 2, 180, 3, 1, 'Sedang dikerjakan', '2022-05-29 17:17:21'),
(189, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 3, 360, 3, 1, 'Sedang dikerjakan', '2022-05-29 17:17:38'),
(190, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 2, 0, 3, NULL, 'Menunggu antrian', NULL),
(191, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 1, 90, 3, 1, 'Sedang dikerjakan', '2022-05-29 18:21:08'),
(192, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 2, 180, 3, 1, 'Sedang dikerjakan', '2022-05-29 18:22:33'),
(193, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 3, 360, 3, 1, 'Sedang dikerjakan', '2022-05-29 18:23:13'),
(194, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 3, 0, 3, NULL, 'Menunggu antrian', NULL),
(195, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', NULL, 0, 0, 3, NULL, NULL, NULL),
(196, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 3, 90, 3, 1, 'Selesai', '2022-05-31 17:50:01'),
(197, 'Lala', 'Jl Mawar', 'lala@gmail.com', '0827885487', 'Huawei', 'Tidak masuk home', 'Android', 3, 180, 3, 1, 'Sedang dikerjakan', '2022-05-31 17:52:54');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `teknisi`
--

INSERT INTO `teknisi` (`id`, `nama`, `spesialis`, `platform`, `jumlah_antrian`) VALUES
(1, 'Gunawan', 'Samsung', 'Android', 3),
(4, 'Bobby', 'Xiaomi', 'Android', 3),
(5, 'John', 'Iphone', 'IOS', 0),
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=198;

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
