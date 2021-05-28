/*
  Warnings:

  - You are about to drop the column `nama_awalkontak1` on the `kontak` table. All the data in the column will be lost.
  - You are about to drop the column `nama_awalkontak2` on the `kontak` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `kontak` DROP COLUMN `nama_awalkontak1`,
    DROP COLUMN `nama_awalkontak2`;

-- CreateTable
CREATE TABLE `KategoriKontak` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_KategoriKontakToKontak` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,
UNIQUE INDEX `_KategoriKontakToKontak_AB_unique`(`A`, `B`),
INDEX `_KategoriKontakToKontak_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_KategoriKontakToKontak` ADD FOREIGN KEY (`A`) REFERENCES `KategoriKontak`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_KategoriKontakToKontak` ADD FOREIGN KEY (`B`) REFERENCES `Kontak`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
