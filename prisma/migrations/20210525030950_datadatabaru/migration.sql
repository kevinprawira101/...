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
    `nama` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
