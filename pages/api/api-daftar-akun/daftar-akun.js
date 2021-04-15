export default (req, res) => {
    let table = [
        {
            "kode": "002",
            "kodeAkun": "Bank Central Asia",
            "namaAkun": "Roseanne Park",
            "kategoriAkun": "Debit",
            "saldo": 7800000
        },
        {
            "kode": "011",
            "kodeAkun": "Mandiri",
            "namaAkun": "Lisa Manoban",
            "kategoriAkun": "Debit",
            "saldo": 5000000
        }
    ]
    res.status(200).json(table)
}