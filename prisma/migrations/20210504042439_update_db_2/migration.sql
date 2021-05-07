/*
  Warnings:

  - You are about to alter the column `akun_pembelian1` on the `produk` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `akun_pembelian2` on the `produk` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `produk` MODIFY `akun_pembelian1` INTEGER NOT NULL,
    MODIFY `akun_pembelian2` INTEGER NOT NULL;
