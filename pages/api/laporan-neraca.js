export default (req, res) => {
    let table = [
        {
            "namaAkun": "Brodie - 011",
            "debit": 2000,
        },
        {
            "namaAkun": "Lilia - 013",
            "debit": 5000,
        },
        {
            "namaAkun": "Peka - 017",
            "debit": 7000,
        }

        // {
        //     "namaAkun2": "Oppa - 015",
        //     "debitAsetTetap": 30000,
        // },
        // {
        //     "namaAkun3": "Miko - 113",
        //     "debitLiabilitasPendek": 79000,
        // },
        // {
        //     "namaAkun4": "Calvin - 210",
        //     "debitLiabilitasPanjang": 25000,
        // },
        // {
        //     "namaAkun5": "Jonno - 315",
        //     "debitModal": 210000,
        // },
    ]
    res.status(200).json(table)
}