-- CreateTable
CREATE TABLE `Menu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `menu_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `roleType` VARCHAR(50) NOT NULL,
    `roleDesc` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(20) NOT NULL,
    `lastName` VARCHAR(20) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(20) NOT NULL,
    `roleId` INTEGER NOT NULL,
    `loggedIn` BOOLEAN NOT NULL DEFAULT false,
UNIQUE INDEX `User.email_unique`(`email`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoleAccess` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `roleId` INTEGER NOT NULL,
    `menuId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kategori` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipeAkun` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Akun` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_akun` VARCHAR(191) NOT NULL,
    `tipeId` INTEGER NOT NULL,
    `nama_akun` VARCHAR(191) NOT NULL,
    `kategoriId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Saldo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `debit` INTEGER NOT NULL,
    `kredit` INTEGER NOT NULL,
    `akunId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `KategoriProduk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `jumlah` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `kode_sku` VARCHAR(191) NOT NULL,
    `kategoriId` INTEGER NOT NULL,
    `unit` INTEGER NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `harga_beli_satuan` INTEGER NOT NULL,
    `akun_pembelian1` INTEGER NOT NULL,
    `pajak_beli` VARCHAR(191) NOT NULL,
    `harga_jual_satuan` INTEGER NOT NULL,
    `akun_pembelian2` INTEGER NOT NULL,
    `pajak_jual` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pajak` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `presentasaAktif` INTEGER NOT NULL,
    `akunPajakPenjualan` VARCHAR(191) NOT NULL,
    `akunPajakPembelian` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kontak` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_panggilan` VARCHAR(191) NOT NULL,
    `gelar` VARCHAR(191) NOT NULL,
    `nama_awalkontak` VARCHAR(191) NOT NULL,
    `nama_awalkontak1` VARCHAR(191) NOT NULL,
    `nama_awalkontak2` VARCHAR(191) NOT NULL,
    `no_hp` VARCHAR(191) NOT NULL,
    `kartu_identitas` VARCHAR(191) NOT NULL,
    `no_id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `nama_perusahaan` VARCHAR(191) NOT NULL,
    `no_telp` VARCHAR(191) NOT NULL,
    `no_fax` VARCHAR(191) NOT NULL,
    `no_npwp` VARCHAR(191) NOT NULL,
    `alamat_pembayaran` VARCHAR(191) NOT NULL,
    `alamat_pengiriman` VARCHAR(191) NOT NULL,
    `nama_bank` VARCHAR(191) NOT NULL,
    `kantor_cabang` VARCHAR(191) NOT NULL,
    `pemegang_akunbank` VARCHAR(191) NOT NULL,
    `no_rek` VARCHAR(191) NOT NULL,
    `KategoriID` INTEGER NOT NULL,
    `akunHutang` INTEGER NOT NULL,
    `pembayaran_utama` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoleAccess` ADD FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoleAccess` ADD FOREIGN KEY (`menuId`) REFERENCES `Menu`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Akun` ADD FOREIGN KEY (`tipeId`) REFERENCES `TipeAkun`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Akun` ADD FOREIGN KEY (`kategoriId`) REFERENCES `Kategori`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Saldo` ADD FOREIGN KEY (`akunId`) REFERENCES `Akun`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produk` ADD FOREIGN KEY (`kategoriId`) REFERENCES `KategoriProduk`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Kontak` ADD FOREIGN KEY (`KategoriID`) REFERENCES `Kategori`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
