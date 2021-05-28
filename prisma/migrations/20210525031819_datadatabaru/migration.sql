/*
  Warnings:

  - You are about to drop the `kategorikontak` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nama_awalkontak1` to the `Kontak` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_awalkontak2` to the `Kontak` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `kontak` ADD COLUMN     `nama_awalkontak1` VARCHAR(191) NOT NULL,
    ADD COLUMN     `nama_awalkontak2` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `kategorikontak`;
