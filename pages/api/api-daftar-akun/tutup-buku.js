export default (req, res) => {
    let table = [
        {
            "periode": "4/14/2021",
            "catatan": "Keuntungan Project",
            "untungRugi": 50000000,
        },
    ]
    res.status(200).json(table)
}