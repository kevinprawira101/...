export default (req, res) => {
    let table = [
        {
            "akun": "John",
            "deskripsi": "Jurnal John",
            "debit": 2000,
            "kredit": 5000
        },
        {
            "akun": "Ann",
            "deskripsi": "Jurnal Ann",
            "debit": 8000,
            "kredit": 2000
        }
    ]
    res.status(200).json(table)
}