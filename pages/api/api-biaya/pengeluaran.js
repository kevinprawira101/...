export default (req, res) => {
    let table = [
        {
            "tanggal": "4/14/2021",
            "nomor": "001",
            "kategori": "Hutang",
            "penerima": "Jennie Kim",
            "status": "Pending",
            "sisaTagihan": 3500000,
            "total": 10000000,
        },
        {
            "tanggal": "4/14/2021",
            "nomor": "002",
            "kategori": "Hutang",
            "penerima": "Lisa Manoban",
            "status": "Scheduled",
            "sisaTagihan": 5678833,
            "total": 5678833,
        },
        {
            "tanggal": "4/14/2021",
            "nomor": "003",
            "kategori": "Hutang",
            "penerima": "Roseanne Park",
            "status": "Completed",
            "sisaTagihan": 0,
            "total": 18339212,
        },
        {
            "tanggal": "4/14/2021",
            "nomor": "004",
            "kategori": "Hutang",
            "penerima": "Jisoo",
            "status": "Active",
            "sisaTagihan": 0,
            "total": 0,
        },
    ]
    res.status(200).json(table)
}