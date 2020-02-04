-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 28 Jan 2020 pada 04.25
-- Versi server: 10.4.6-MariaDB
-- Versi PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin_tbl`
--

CREATE TABLE `admin_tbl` (
  `id_admin` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(60) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `admin_level` varchar(20) NOT NULL,
  `datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `admin_tbl`
--

INSERT INTO `admin_tbl` (`id_admin`, `username`, `password`, `name`, `address`, `admin_level`, `datetime`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'Aries Dimas Yudhistira', 'jl. warakas 4 GG q7 no. 32', 'Super Admin', '2014-03-30 15:27:07');

-- --------------------------------------------------------

--
-- Struktur dari tabel `brand_tbl`
--

CREATE TABLE `brand_tbl` (
  `id_brand` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `tanggal` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `brand_tbl`
--

INSERT INTO `brand_tbl` (`id_brand`, `brand`, `tanggal`) VALUES
('1', 'Nike', '0000-00-00'),
('1', 'Nike', '0000-00-00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kategori`
--

CREATE TABLE `kategori` (
  `id_kategori` int(25) NOT NULL,
  `kategori` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `product_tbl`
--

CREATE TABLE `product_tbl` (
  `id_product` int(11) NOT NULL,
  `name_product` varchar(250) NOT NULL,
  `kategori` text NOT NULL,
  `slug` varchar(300) NOT NULL,
  `gambar_product` varchar(250) NOT NULL,
  `price_normal` int(11) NOT NULL,
  `price_discount` int(11) NOT NULL,
  `createdate` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `product_tbl`
--

INSERT INTO `product_tbl` (`id_product`, `name_product`, `kategori`, `slug`, `gambar_product`, `price_normal`, `price_discount`, `createdate`) VALUES
(1, 'Hinata', 'LGK\r\n', '', 'item-01.jpg', 7480000, 0, '17-01-2018'),
(2, 'Sakura', 'KK', '', 'item-02.jpg', 1760000, 0, '17-01-2018'),
(3, 'Naruto', 'ZZ', '', 'item-03.jpg', 970000, 0, '17-01-2018'),
(4, 'Sasuke', 'NN', '', 'item-04.jpg', 1320000, 0, '17-01-2018'),
(5, 'Itachi', 'BB', '', 'item-05.jpg', 899000, 0, '17-01-2018'),
(6, 'Kakashi', 'CC', '', 'item-06.jpg', 1315000, 0, '17/01/2018'),
(7, 'Jiraiya', 'DWS', '', 'prod-1.jpg', 13500000, 0, '17/1/2018'),
(8, 'Hasirama', 'NUM', '', 'prod-4.jpg', 3500000, 0, '17/01/2018'),
(9, 'baju', '2', 'jjj', 'photo2.png', 2000000, 10000, ''),
(10, 'baju', '2', 'jjj', 'photo2.png', 2000000, 10000, ''),
(11, 'baju', '2', 'npm', 'photo2.png', 2000000, 10000, ''),
(12, 'nike', '4', 'nnm', 'photo3.jpg', 2147483647, 2147483647, ''),
(13, 'jhdj', 'knhjckm', 'ifjsk', 'avatar5.png', 298, 8747487, '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_tbl`
--

CREATE TABLE `user_tbl` (
  `id_user` varchar(100) NOT NULL,
  `nama` text NOT NULL,
  `alamat` varchar(100) NOT NULL,
  `jenis_kelamin` text NOT NULL,
  `no_hp` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `user_tbl`
--

INSERT INTO `user_tbl` (`id_user`, `nama`, `alamat`, `jenis_kelamin`, `no_hp`) VALUES
('', 'telolet', 'jl. lwkong', 'wkwkw', '09456789'),
('', 'isjksm', 'ijdisj', 'jfoimd', '09876543'),
('', 'www', '', '', ''),
('', 'hshsh', 'ajjaja', 'jajajja', '09876543'),
('', 'babibu', 'jl. entog', 'ganda', '087654'),
('', 'cacing', 'cicak', 'ganda', '0987');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin_tbl`
--
ALTER TABLE `admin_tbl`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indeks untuk tabel `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id_kategori`);

--
-- Indeks untuk tabel `product_tbl`
--
ALTER TABLE `product_tbl`
  ADD PRIMARY KEY (`id_product`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin_tbl`
--
ALTER TABLE `admin_tbl`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id_kategori` int(25) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `product_tbl`
--
ALTER TABLE `product_tbl`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
