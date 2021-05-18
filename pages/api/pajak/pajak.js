// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from ".prisma/client"

const prisma = new PrismaClient();

export default async (req, res) => {
    try {
        const createMany = await prisma.pajak.createMany({
            data: [
                {
                    nama: "Kevin Prawira",
                    presentasaAktif: 20,
                    akunPajakPenjualan: "Penjualan 1",
                    akunPajakPembelian: "Pembelian 1"
                },
                {
                    nama: "John Smith",
                    presentasaAktif: 30,
                    akunPajakPenjualan: "Penjualan 2",
                    akunPajakPembelian: "Pembelian 2"
                }
            ],
            skipDuplicates: true,
        })

        res.status(200).json({ message: 'success!', data: createMany })
    } catch (error) {
        res.status(400).json({ data: 'error', error })
        console.log(error)
    }
}
