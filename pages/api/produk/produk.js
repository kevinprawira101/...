import { PrismaClient } from ".prisma/client"
const prisma = new PrismaClient();

export default async (req, res) => {

    try {
        const createMany = await prisma.produk.createMany({
            data: [
                {
                    image: req.body.file_upload,
                    nama: req.body.nama,
                    kode_sku: req.body.kode_sku,
                    kategoriId: parseInt(req.body.kategori_akun),
                    unit: parseInt(req.body.unit),
                    deskripsi: req.body.deskripsi,

                    harga_beli_satuan: parseInt(req.body.hbs),
                    akun_pembelian1: parseInt(req.body.akun_pembelian1),
                    pajak_beli: req.body.pajak_beli,

                    harga_jual_satuan: parseInt(req.body.hjs),
                    akun_pembelian2: parseInt(req.body.akun_pembelian2),
                    pajak_jual: req.body.pajak_jual
                },
            ],
            skipDuplicates: true,
        })

        res.status(200).json({ message: 'success!', data: createMany })
    } catch (error) {
        res.status(400).json({ kode_akun: 'error', error })
        console.log(error)
    }
}
