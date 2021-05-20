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

-- CreateTable
CREATE TABLE `Saldo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `debit` INTEGER NOT NULL,
    `kredit` INTEGER NOT NULL,
    `akunId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Kontak` ADD FOREIGN KEY (`KategoriID`) REFERENCES `Kategori`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Saldo` ADD FOREIGN KEY (`akunId`) REFERENCES `Akun`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
