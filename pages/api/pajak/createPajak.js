import { PrismaClient } from ".prisma/client"
const prisma = new PrismaClient();

export default async (req, res) => {
    try {
        const createPajak = await prisma.pajak.create({
            data:
            {
                nama: req.body.nama,
                presentasaAktif: parseInt(req.body.presentaseAktif),
                akunPajakPenjualan: req.body.akunPajakPenjualan,
                akunPajakPembelian: req.body.akunPajakPembelian
            }
        })

        res.status(200).json({ message: 'success!', data: createPajak })
    } catch (error) {
        res.status(400).json({ data: 'error', error })
        console.log(error)
    }
}
