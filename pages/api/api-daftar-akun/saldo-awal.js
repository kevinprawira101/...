export default (req, res) => {
    let table = [
        {
            "kodeAset": "1-10001",
            "namaAset": "Cash",
            "debit": 3500000,
            "kredit": 4000000,
        },
        {
            "kodeAset": "1-10002",
            "namaAset": "Bank Account",
            "debit": 1200000,
            "kredit": 3000000,
        },
        {
            "kodeAset": "1-10751",
            "namaAset": "Accumulated Depreciation - Building",
            "debit": 500000,
            "kredit": 8900000,
        },
    ]
    res.status(200).json(table)
}