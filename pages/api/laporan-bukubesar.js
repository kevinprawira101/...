import { getWrapperFromVariant } from "@material-ui/pickers/wrappers/Wrapper"

export default (req, res) => {
    let table = [
        {
            "akun": "1-000101",
            "transaksi": "Cash",
            "nomor": 1,
            "debit": 50000,
            "kredit": 40000,
            "saldo": 100000
        },
        {
            "akun": "2-000101",
            "transaksi": "Bank Transfer",
            "nomor": 2,
            "debit": 20000,
            "kredit": 30000,
            "saldo": 50000
        }
    ]
    res.status(200).json(table)
}
