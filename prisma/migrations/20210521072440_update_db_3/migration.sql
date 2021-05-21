-- DropForeignKey
ALTER TABLE `produk` DROP FOREIGN KEY `produk_ibfk_1`;

-- CreateTable
CREATE TABLE `KategoriProduk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `jumlah` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Produk` ADD FOREIGN KEY (`kategoriId`) REFERENCES `KategoriProduk`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
