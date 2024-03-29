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
CREATE TABLE `KategoriKontak` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,

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
CREATE TABLE `Kontak` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_panggilan` VARCHAR(191) NOT NULL,
    `gelar` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `nomor_hp` VARCHAR(191) NOT NULL,
    `tipe_identitas` VARCHAR(191) NOT NULL,
    `nomor_identitas` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `info_lain` VARCHAR(191) NOT NULL,
    `nama_perusahaan` VARCHAR(191) NOT NULL,
    `nomor_telepon` VARCHAR(191) NOT NULL,
    `nomor_fax` VARCHAR(191) NOT NULL,
    `nomor_npwp` VARCHAR(191) NOT NULL,
    `alamat_pembayaran` VARCHAR(191) NOT NULL,
    `alamat_pengiriman` VARCHAR(191) NOT NULL,
    `nama_bank` VARCHAR(191) NOT NULL,
    `kantor_cabang_bank` VARCHAR(191) NOT NULL,
    `pemegang_akun_bank` VARCHAR(191) NOT NULL,
    `nomor_rekening` VARCHAR(191) NOT NULL,
    `akun_piutang` INTEGER NOT NULL,
    `akun_hutang` INTEGER NOT NULL,
    `syarat_pembayaran_utama` VARCHAR(191) NOT NULL,

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
    `akunPenjual` INTEGER NOT NULL,
    `akunPembeli` INTEGER NOT NULL,

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
ALTER TABLE `Kontak` ADD FOREIGN KEY (`akun_piutang`) REFERENCES `Akun`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Kontak` ADD FOREIGN KEY (`akun_hutang`) REFERENCES `Akun`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produk` ADD FOREIGN KEY (`kategoriId`) REFERENCES `KategoriProduk`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pajak` ADD FOREIGN KEY (`akunPenjual`) REFERENCES `Akun`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pajak` ADD FOREIGN KEY (`akunPembeli`) REFERENCES `Akun`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
