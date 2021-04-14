export default (req, res) => {
    let table = [
        {
            "kodeakun": "01",
            "namaakun": "Ben Simmons",
            "saldobank": 20000,
            "saldojurnal": 50000
        },
        {
            "kodeakun": "02",
            "namaakun": "Stephen Thompson",
            "saldobank": 10000,
            "saldojurnal": 40000
        }
    ]
    res.status(200).json(table)
}