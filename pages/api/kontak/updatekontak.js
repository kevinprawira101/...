// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from ".prisma/client"

const prisma = new PrismaClient();

export default async (req, res) => {

    try {
        const updatekontak = await prisma.kontak.update({
            where: {
                id: parseInt(req.body.id)
            },
            data:
            {
                nama_panggilan: req.body.nama_panggilan,
				gelar: req.body.gelar,
				nama_awalkontak: req.body.nama_awalkontak,
				nama_awalkontak1: req.body.nama_awalkontak1,
				nama_awalkontak2: req.body.nama_awalkontak2,
				no_hp: req.body.no_hp,
				kartu_identitas: req.body.kartu_identitas,
				no_id: req.body.no_id,
				email: req.body.email,
				nama_perusahaan: req.body.nama_perusahaan,
				no_telp: req.body.no_telp,
				no_fax: req.body.no_fax,
				no_npwp: req.body.no_npwp,
				alamat_pembayaran: req.body.alamat_pembayaran,
				alamat_pengiriman: req.body.alamat_pengiriman,
				nama_bank: req.body.nama_bank,
				kantor_cabang: req.body.kantor_cabang,
				pemegang_akunbank: req.body.pemegang_akunbank,
				no_rek: req.body.no_rek,
                akunHutang: parseInt(req.body.akunHutang),
				KategoriID: parseInt(req.body.akunPiutang),
				pembayaran_utama: req.body.pembayaran_utama,
            }
        })
        res.status(201).json({ message: 'success!', data: updatekontak })
    } catch (error) {
        res.status(400).json({ data: 'error', error })
        console.log(error)
    }
}
