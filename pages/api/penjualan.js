export default (req, res) => {
    let table = [
        {
            "pelanggan": "John",
            "email": "john@gmail.com",
            "alamatpenagihan":"jl.jend sudirman,jakarta",
            "tgltransaksi":"12-januari-2021",
            "tgljatuhtempo":"13-januari-2021",
            "syaratpembayaran":"lunas",
            "notransaksi":12012021,
            "noreferensipenagihan":1,
            "produk":"buku",
            "deskripsi":"buku kas",
            "kuantitas":1,
            "satuan":"pcs",
            "hargasatuan":8000,
            "diskon":10,
            "pajak":10,
            "pesan":"-",
        },
        {
            "pelanggan": "vin",
            "email": "vin@gmail.com",
            "alamatpenagihan":"jl.diponegoro,jakarta",
            "tgltransaksi":"13-januari-2021",
            "tgljatuhtempo":"14-januari-2021",
            "syaratpembayaran":"lunas",
            "notransaksi":13012021,
            "noreferensipenagihan":2,
            "produk":"buku",
            "deskripsi":"buku kas",
            "kuantitas":1,
            "satuan":"pcs",
            "hargasatuan":7000,
            "diskon":10,
            "pajak":10,
            "pesan":"-",
        }
    ]
    res.status(200).json(table)
}