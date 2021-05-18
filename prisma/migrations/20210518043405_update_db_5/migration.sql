/*
  Warnings:

  - Added the required column `presentasaAktif` to the `Pajak` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pajak` ADD COLUMN     `presentasaAktif` INTEGER NOT NULL;
