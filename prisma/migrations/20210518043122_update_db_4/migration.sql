-- CreateTable
CREATE TABLE `Saldo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `debit` INTEGER NOT NULL,
    `kredit` INTEGER NOT NULL,
    `akunId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pajak` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `akunPajakPenjualan` VARCHAR(191) NOT NULL,
    `akunPajakPembelian` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Saldo` ADD FOREIGN KEY (`akunId`) REFERENCES `Akun`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
