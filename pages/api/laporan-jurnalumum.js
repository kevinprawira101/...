export default (req, res) => {
    let table = [
        {
            "akun": "1-0012",
            "deskripsi": "Cash",
            "debit": 2000,
            "kredit": 5000
        },
        {
            "akun": "1-0013",
            "deskripsi": "Bank Account",
            "debit": 10000,
            "kredit": 15000
        },
        {
            "akun": "1-0015",
            "deskripsi": "Accumalted Depreciation",
            "debit": 2000,
            "kredit": 10000
        },
    ]
    res.status(200).json(table)
}