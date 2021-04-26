// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from ".prisma/client"

const prisma = new PrismaClient();

export default async (req, res) => {

    // console.log(req);
    try {
        const createMany = await prisma.akun.createMany({
            data: [
                {
                    kode_akun: "1-10001",
                    tipe_akun: "Kas",
                    // nama_akun: req.body.nama_akun,
                    nama_akun: "Kas Besar (BCA 5255369137)",
                    kategori_akun: "Kas & Bank",
                },
                {
                    kode_akun: "1-10002",
                    tipe_akun: "Kas",
                    nama_akun: "Kas Kecil",
                    kategori_akun: "Kas & Bank",
                },
                {
                    kode_akun: "1-10003",
                    tipe_akun: "Kas",
                    nama_akun: "Kas USD",
                    kategori_akun: "Kas & Bank",
                },

                {
                    kode_akun: "1-10004",
                    tipe_akun: "Bank",
                    nama_akun: "Bank (BCA 7570325889) IDR",
                    kategori_akun: "Kas & Bank",
                },
                {
                    kode_akun: "1-10005",
                    tipe_akun: "Bank",
                    nama_akun: "Bank (BCA 7570392225) USD",
                    kategori_akun: "Kas & Bank",
                },
                {
                    kode_akun: "1-10006",
                    tipe_akun: "Bank",
                    nama_akun: "Bank (Mandiri 118.000.392226.6) GIRO IDR",
                    kategori_akun: "Kas & Bank",
                },
                {
                    kode_akun: "1-10007",
                    tipe_akun: "Bank",
                    nama_akun: "Bank (Mandiri 118.000.392225.8) GIRO USD",
                    kategori_akun: "Kas & Bank",
                },
                {
                    kode_akun: "1-10008",
                    tipe_akun: "Bank",
                    nama_akun: "Bank (Mandiri 118.000.392228.2) TABUNGAN IDR",
                    kategori_akun: "Kas & Bank",
                },
                {
                    kode_akun: "1-10009",
                    tipe_akun: "Bank",
                    nama_akun: "Bank (Mandiri 118.000.392227.4) TABUNGAN USD",
                    kategori_akun: "Kas & Bank",
                },
                {
                    kode_akun: "1-10010",
                    tipe_akun: "Bank",
                    nama_akun: "Bank (BNI 0257569337) IDR",
                    kategori_akun: "Kas & Bank",
                },
                {
                    kode_akun: "1-10011",
                    tipe_akun: "Bank",
                    nama_akun: "Bank (BTN 00014.01.30.0018261) GIRO IDR",
                    kategori_akun: "Kas & Bank",
                },
                {
                    kode_akun: "1-10012",
                    tipe_akun: "Bank",
                    nama_akun: "Bank (Syariah Mandiri 7101183868) GIRO IDR",
                    kategori_akun: "Kas & Bank",
                },
                {
                    kode_akun: "1-10013",
                    tipe_akun: "Bank",
                    nama_akun: "Bank (BJB Syariah 0080102004334) GIRO IDR",
                    kategori_akun: "Kas & Bank",
                },
                {
                    kode_akun: "1-10014",
                    tipe_akun: "Bank",
                    nama_akun: "Bank (Permata 702215889) GIRO IDR",
                    kategori_akun: "Kas & Bank",
                },
                {
                    kode_akun: "1-10015",
                    tipe_akun: "Bank",
                    nama_akun: "Bank (Mega 10300011001169) GIRO IDR",
                    kategori_akun: "Kas & Bank",
                },
                {
                    kode_akun: "1-10016",
                    tipe_akun: "Bank",
                    nama_akun: "Bank (BRI 037901000926300) GIRO IDR",
                    kategori_akun: "Kas & Bank",
                },
                {
                    kode_akun: "1-10017",
                    tipe_akun: "Bank",
                    nama_akun: "Bank (Syariah Bukopin 8802607106) GIRO IDR",
                    kategori_akun: "Kas & Bank",
                },

                {
                    kode_akun: "1-10018",
                    tipe_akun: "Ayat Silang",
                    nama_akun: "Ayat Silang Kas/Bank",
                    kategori_akun: "Kas & Bank",
                },
                {
                    kode_akun: "1-10019",
                    tipe_akun: "Bank",
                    nama_akun: "Ayat Silang Bank/Bank",
                    kategori_akun: "Kas & Bank",
                },

                {
                    kode_akun: "1-10101",
                    tipe_akun: "Piutang Usaha",
                    nama_akun: "Piutang PT. Bank Mandiri",
                    kategori_akun: "Akun Piutang",
                },
                {
                    kode_akun: "1-10102",
                    tipe_akun: "Piutang Usaha",
                    nama_akun: "Piutang PT. Rintis Sejahtera",
                    kategori_akun: "Akun Piutang",
                },
                {
                    kode_akun: "1-10103",
                    tipe_akun: "Piutang Usaha",
                    nama_akun: "Piutang The Royal Bank of Scotland",
                    kategori_akun: "Akun Piutang",
                },
                {
                    kode_akun: "1-10104",
                    tipe_akun: "Piutang Usaha",
                    nama_akun: "Piutang PT. Multimedia Global Starindo",
                    kategori_akun: "Akun Piutang",
                },
                {
                    kode_akun: "1-10105",
                    tipe_akun: "Piutang Usaha",
                    nama_akun: "Piutang PT. Bank Tabungan Negara",
                    kategori_akun: "Akun Piutang",
                },
                {
                    kode_akun: "1-10106",
                    tipe_akun: "Piutang Usaha",
                    nama_akun: "Piutang PT. Bank Negara Indonesia (Persero)",
                    kategori_akun: "Akun Piutang",
                },
                {
                    kode_akun: "1-10107",
                    tipe_akun: "Piutang Usaha",
                    nama_akun: "Piutang PT. Blue Power Technology",
                    kategori_akun: "Akun Piutang",
                },
                {
                    kode_akun: "1-10108",
                    tipe_akun: "Piutang Usaha",
                    nama_akun: "Piutang PT. Bank Syariah Mandiri",
                    kategori_akun: "Akun Piutang",
                },
                {
                    kode_akun: "1-10109",
                    tipe_akun: "Piutang Usaha",
                    nama_akun: "Piutang PT. Bank Permata",
                    kategori_akun: "Akun Piutang",
                },
                {
                    kode_akun: "1-10110",
                    tipe_akun: "Piutang Usaha",
                    nama_akun: "Piutang PT. BJB Syariah",
                    kategori_akun: "Akun Piutang",
                },
                {
                    kode_akun: "1-10111",
                    tipe_akun: "Piutang Usaha",
                    nama_akun: "Piutang PT. Bank Mega Tbk",
                    kategori_akun: "Akun Piutang",
                },

                {
                    kode_akun: "1-10301",
                    tipe_akun: "Piutang Karyawan & Lain Lain",
                    nama_akun: "Piutang Budi",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10302",
                    tipe_akun: "Piutang Karyawan & Lain Lain",
                    nama_akun: "Piutang Rekan Pak Roeddy, Ibu Dewi Sriyanti",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10303",
                    tipe_akun: "Piutang Karyawan & Lain Lain",
                    nama_akun: "Piutang Reka Pak Roeddy, Malika Silviani",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10304",
                    tipe_akun: "Piutang Karyawan & Lain Lain",
                    nama_akun: "Piutang Pak Roeddy, Kontraktor Anang",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10305",
                    tipe_akun: "Piutang Karyawan & Lain Lain",
                    nama_akun: "Piutang Dani",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10306",
                    tipe_akun: "Piutang Karyawan & Lain Lain",
                    nama_akun: "Piutang Yayasan",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10307",
                    tipe_akun: "Piutang Karyawan & Lain Lain",
                    nama_akun: "Piutang Frans",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10308",
                    tipe_akun: "Piutang Karyawan & Lain Lain",
                    nama_akun: "Piutang Hendra",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10309",
                    tipe_akun: "Piutang Karyawan & Lain Lain",
                    nama_akun: "Piutang Lifetech",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10310",
                    tipe_akun: "Piutang Karyawan & Lain Lain",
                    nama_akun: "Piutang Zegen",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10311",
                    tipe_akun: "Piutang Karyawan & Lain Lain",
                    nama_akun: "Piutang Henry",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10312",
                    tipe_akun: "Piutang Karyawan & Lain Lain",
                    nama_akun: "Piutang Sigit",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10313",
                    tipe_akun: "Piutang Karyawan & Lain Lain",
                    nama_akun: "Piutang Tarenjit",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },

                {
                    kode_akun: "1-10314",
                    tipe_akun: "Piutang Direksi",
                    nama_akun: "Piutang Bp. Roeddy Kasim",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10315",
                    tipe_akun: "Piutang Direksi",
                    nama_akun: "Piutang Lainnya (UM PPh 21)",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },

                {
                    kode_akun: "1-10401",
                    tipe_akun: "Pembayaran Dimuka",
                    nama_akun: "Uang Muka Pembelian",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10402",
                    tipe_akun: "Pembayaran Dimuka",
                    nama_akun: "Sewa Dibayat dimuka",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10403",
                    tipe_akun: "Pembayaran Dimuka",
                    nama_akun: "Asuransi dibayar dimuka",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10404",
                    tipe_akun: "Pembayaran Dimuka",
                    nama_akun: "Uang Muka Pekerjaan Jasa",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10405",
                    tipe_akun: "Pembayaran Dimuka",
                    nama_akun: "Uang Muka Lainnya",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10406",
                    tipe_akun: "Pembayaran Dimuka",
                    nama_akun: "Uang Muka Pembelian - PT. Indo Internet",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10407",
                    tipe_akun: "Pembayaran Dimuka",
                    nama_akun: "Uang Muka Pembelian - PT. Synnex Metrodata Indonesia",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10408",
                    tipe_akun: "Pembayaran Dimuka",
                    nama_akun: "Uang Muka Pembelian - PT. ESQ",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10409",
                    tipe_akun: "Pembayaran Dimuka",
                    nama_akun: "Uang Muka Pembelian - PT. BPC",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10410",
                    tipe_akun: "Pembayaran Dimuka",
                    nama_akun: "Uang Muka Pembelian - PT. Eka Mas Republik",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },

                {
                    kode_akun: "1-10501",
                    tipe_akun: "Uang Muka Pajak",
                    nama_akun: "UM PPh 22",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10502",
                    tipe_akun: "Uang Muka Pajak",
                    nama_akun: "UM PPh 23",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10503",
                    tipe_akun: "Uang Muka Pajak",
                    nama_akun: "UM PPh 25",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10504",
                    tipe_akun: "Uang Muka Pajak",
                    nama_akun: "PPN Masukan",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10505",
                    tipe_akun: "Uang Muka Pajak",
                    nama_akun: "SPM PPN Jika LB",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },
                {
                    kode_akun: "1-10506",
                    tipe_akun: "Uang Muka Pajak",
                    nama_akun: "PPN Masukan - Belum Terealisasi",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },

                {
                    kode_akun: "1-10507",
                    tipe_akun: "Beban Dibayar Dimuka Lain-Lain",
                    nama_akun: "Beban dibayar dimuka",
                    kategori_akun: "Aktiva Lancar Lainnya",
                },

                {
                    kode_akun: "1-10601",
                    tipe_akun: "Aktiva Tetap",
                    nama_akun: "Tanah",
                    kategori_akun: "Aktiva Tetap",
                },

                {
                    kode_akun: "1-10602",
                    tipe_akun: "Aktiva Tetap",
                    nama_akun: "Peralatan Kantor",
                    kategori_akun: "Aktiva Tetap",
                },
                {
                    kode_akun: "1-10603",
                    tipe_akun: "Aktiva Tetap",
                    nama_akun: "Kendaraan",
                    kategori_akun: "Aktiva Tetap",
                },
                {
                    kode_akun: "1-10604",
                    tipe_akun: "Aktiva Tetap",
                    nama_akun: "Mesin",
                    kategori_akun: "Aktiva Tetap",
                },
                {
                    kode_akun: "1-10605",
                    tipe_akun: "Aktiva Tetap",
                    nama_akun: "Bangunan",
                    kategori_akun: "Aktiva Tetap",
                },

                {
                    kode_akun: "1-10751",
                    tipe_akun: "Aktiva Tetap",
                    nama_akun: "Akumulasi Peny Peralatan Kantor",
                    kategori_akun: "Depresiasi dan amortasi",
                },
                {
                    kode_akun: "1-10752",
                    tipe_akun: "Aktiva Tetap",
                    nama_akun: "Akumulasi Peny Kendaraan",
                    kategori_akun: "Depresiasi dan amortasi",
                },
                {
                    kode_akun: "1-10753",
                    tipe_akun: "Aktiva Tetap",
                    nama_akun: "Akumulasi Peny Mesin",
                    kategori_akun: "Depresiasi dan amortasi",
                },
                {
                    kode_akun: "1-10754",
                    tipe_akun: "Aktiva Tetap",
                    nama_akun: "Akumulasi Peny Bangunan",
                    kategori_akun: "Depresiasi dan amortasi",
                },
                {
                    kode_akun: "1-10701",
                    tipe_akun: "Aktiva Tetap",
                    nama_akun: "Good Will",
                    kategori_akun: "Aktiva Lainnya",
                },
                {
                    kode_akun: "1-10702",
                    tipe_akun: "Aktiva Tetap",
                    nama_akun: "Bank Garansi",
                    kategori_akun: "Aktiva Lainnya",
                },

                {
                    kode_akun: "2-20101",
                    tipe_akun: "Akun Hutang",
                    nama_akun: "Utang Usaha",
                    kategori_akun: "Akun Hutang",
                },
                {
                    kode_akun: "2-20102",
                    tipe_akun: "Akun Hutang",
                    nama_akun: "Utang Dividen",
                    kategori_akun: "Akun Hutang",
                },
                {
                    kode_akun: "2-20103",
                    tipe_akun: "Akun Hutang",
                    nama_akun: "Utang Dagang Ke Synnex",
                    kategori_akun: "Akun Hutang",
                },
                {
                    kode_akun: "2-20104",
                    tipe_akun: "Akun Hutang",
                    nama_akun: "Utang Dagang Ke SGK",
                    kategori_akun: "Akun Hutang",
                },
                {
                    kode_akun: "2-20105",
                    tipe_akun: "Akun Hutang",
                    nama_akun: "Utang Dagang Ke Solmit",
                    kategori_akun: "Akun Hutang",
                },
                {
                    kode_akun: "2-20106",
                    tipe_akun: "Akun Hutang",
                    nama_akun: "Utang Dagang Ke FirstMedia",
                    kategori_akun: "Akun Hutang",
                },
                {
                    kode_akun: "2-20107",
                    tipe_akun: "Akun Hutang",
                    nama_akun: "Utang Dagang Ke Arthaloka",
                    kategori_akun: "Akun Hutang",
                },
                {
                    kode_akun: "2-20108",
                    tipe_akun: "Akun Hutang",
                    nama_akun: "Utang Dagang Ke Jobstreet",
                    kategori_akun: "Akun Hutang",
                },
                {
                    kode_akun: "2-20109",
                    tipe_akun: "Akun Hutang",
                    nama_akun: "Utang Dagang Ke Oracle",
                    kategori_akun: "Akun Hutang",
                },
                {
                    kode_akun: "2-20110",
                    tipe_akun: "Akun Hutang",
                    nama_akun: "Utang Dagang Ke PSI",
                    kategori_akun: "Akun Hutang",
                },
                {
                    kode_akun: "2-20111",
                    tipe_akun: "Akun Hutang",
                    nama_akun: "Utang Dagang Ke Delta Furindotama",
                    kategori_akun: "Akun Hutang",
                },
                {
                    kode_akun: "2-20112",
                    tipe_akun: "Akun Hutang",
                    nama_akun: "Utang Dagang Ke ESQ",
                    kategori_akun: "Akun Hutang",
                },
                {
                    kode_akun: "2-20113",
                    tipe_akun: "Akun Hutang",
                    nama_akun: "Utang Dagang Ke Wirecard",
                    kategori_akun: "Akun Hutang",
                },
                {
                    kode_akun: "2-20114",
                    tipe_akun: "Akun Hutang",
                    nama_akun: "Utang Dagang Ke BPC",
                    kategori_akun: "Akun Hutang",
                },
                {
                    kode_akun: "2-20115",
                    tipe_akun: "Akun Hutang",
                    nama_akun: "Utang Dagang Ke Damigo",
                    kategori_akun: "Akun Hutang",
                },
                {
                    kode_akun: "2-20116",
                    tipe_akun: "Akun Hutang",
                    nama_akun: "Utang Dagang Ke Metalogic",
                    kategori_akun: "Akun Hutang",
                },
                {
                    kode_akun: "2-20117",
                    tipe_akun: "Akun Hutang",
                    nama_akun: "Utang Dagang Ke Dinamika",
                    kategori_akun: "Akun Hutang",
                },
                {
                    kode_akun: "2-20118",
                    tipe_akun: "Akun Hutang",
                    nama_akun: "Utang Dagang Ke Indonet",
                    kategori_akun: "Akun Hutang",
                },
                {
                    kode_akun: "2-20119",
                    tipe_akun: "Akun Hutang",
                    nama_akun: "Utang Dagang Ke CV Tata Solusindo",
                    kategori_akun: "Akun Hutang",
                },
                {
                    kode_akun: "2-20120",
                    tipe_akun: "Akun Hutang",
                    nama_akun: "Utang Dagang Ke PT. Synnex Indonesia",
                    kategori_akun: "Akun Hutang",
                },
                {
                    kode_akun: "7-70001",
                    tipe_akun: "Pendapatan lain-lain",
                    nama_akun: "Pendapatan Bunga Bank Jasa Giro",
                    kategori_akun: "pendapatan lainnya",

                },
                {
                    kode_akun: "7-70002",
                    tipe_akun: "Pendapatan lain-lain",
                    nama_akun: "Pendapatan Bunga Bank Jasa Deposito",
                    kategori_akun: "pendapatan lainnya",

                },
                {
                    kode_akun: "7-70003",
                    tipe_akun: "Pendapatan lain-lain",
                    nama_akun: "Pendapatan Penjualan Barang",
                    kategori_akun: "pendapatan lainnya",

                },
                {
                    kode_akun: "7-70004",
                    tipe_akun: "Pendapatan lain-lain",
                    nama_akun: "Pendapatan Bunga Bank",
                    kategori_akun: "pendapatan lainnya",

                },
                {
                    kode_akun: "7-70005",
                    tipe_akun: "Pendapatan lain-lain",
                    nama_akun: "Pendapatan Lain-Lain",
                    kategori_akun: "pendapatan lainnya",

                },
                {
                    kode_akun: "7-70006",
                    tipe_akun: "Pendapatan lain-lain",
                    nama_akun: "Pendapatan (Beban) Penghapusan Piutang dan/atau Hutang Dagang",
                    kategori_akun: "pendapatan lainnya",

                },
                {
                    kode_akun: "7-70006",
                    tipe_akun: "Pendapatan lain-lain",
                    nama_akun: "Pendapatan (Beban) Penghapusan Piutang dan/atau Hutang Dagang",
                    kategori_akun: "pendapatan lainnya",

                },
                {
                    kode_akun: "8-80001",
                    tipe_akun: "Beban lain-lain",
                    nama_akun: "Biaya Bunga Bank Atas Pinjaman",
                    kategori_akun: "beban lainnya",

                },
                {
                    kode_akun: "8-80002",
                    tipe_akun: "Beban lain-lain",
                    nama_akun: "Biaya Pajak Bunga Bank",
                    kategori_akun: "beban lainnya",

                },
                {
                    kode_akun: "8-80003",
                    tipe_akun: "Beban lain-lain",
                    nama_akun: "Beban (Laba) Selisih Kurs",
                    kategori_akun: "beban lainnya",

                },
                {
                    kode_akun: "8-80101",
                    tipe_akun: "Beban lain-lain",
                    nama_akun: "Biaya Taksiran Pajak Penghasilan",
                    kategori_akun: "beban lainnya",

                },
                {
                    kode_akun: "8-80102",
                    tipe_akun: "Beban lain-lain",
                    nama_akun: "Pendapatan/Biaya Pajak Yang Ditangguhkan",
                    kategori_akun: "beban lainnya",

                },
                {
                    kode_akun: "8-80103",
                    tipe_akun: "Beban lain-lain",
                    nama_akun: "Beban Adm. Bank",
                    kategori_akun: "beban lainnya",

                },
                {
                    kode_akun: "8-80199",
                    tipe_akun: "Beban lain-lain",
                    nama_akun: "Beban Lainnya",
                    kategori_akun: "beban lainnya",

                },
                {
                    kode_akun: "8-80999",
                    tipe_akun: "Beban lain-lain",
                    nama_akun: "Beban (Laba) Selisih Pembulatan",
                    kategori_akun: "beban lainnya",

                },
                {
                    kode_akun: "2-20501",
                    tipe_akun: "Utang pemegang saham",
                    nama_akun: "Utang Bp Roeddy Kasim",
                    kategori_akun: "Kewajiban Lancar Lainya",

                },
                {
                    kode_akun: "3-30001",
                    tipe_akun: "Modal saham",
                    nama_akun: "Modal Bpk Roeddy Kasim",
                    kategori_akun: "ekuitas",

                },
                {
                    kode_akun: "3-30002",
                    tipe_akun: "Modal saham",
                    nama_akun: "Modal Ny Tjung Kim Ha",
                    kategori_akun: "ekuitas",

                },
                {
                    kode_akun: "3-30003",
                    tipe_akun: "Modal saham",
                    nama_akun: "Modal Nn Lie Jan Pung",
                    kategori_akun: "ekuitas",

                },
                {
                    kode_akun: "3-30101",
                    tipe_akun: "Laba ditahan",
                    nama_akun: "Laba/Rugi ditahan",
                    kategori_akun: "ekuitas",

                },
                {
                    kode_akun: "3-30102",
                    tipe_akun: "Laba ditahan",
                    nama_akun: "Dividen",
                    kategori_akun: "ekuitas",

                },
                {
                    kode_akun: "3-30103",
                    tipe_akun: "Laba ditahan",
                    nama_akun: "Laba/Rugi Tahun ditahan",
                    kategori_akun: "ekuitas",

                },
                {
                    kode_akun: "4-40001",
                    tipe_akun: "Penjualan",
                    nama_akun: "Pendapatan Jasa",
                    kategori_akun: "pendapatan",

                },
                {
                    kode_akun: "4-40002",
                    tipe_akun: "Penjualan",
                    nama_akun: "Pendapatan Penjualan Software",
                    kategori_akun: "pendapatan",

                },
                {
                    kode_akun: "4-40003",
                    tipe_akun: "Penjualan",
                    nama_akun: "Pendapatan Penjualan Barang",
                    kategori_akun: "pendapatan",

                },
                {
                    kode_akun: "4-40004",
                    tipe_akun: "Penjualan",
                    nama_akun: "Potongan Penjualan",
                    kategori_akun: "pendapatan",

                },
                {
                    kode_akun: "4-40005",
                    tipe_akun: "Penjualan",
                    nama_akun: "Retur Penjualan",
                    kategori_akun: "pendapatan",

                },
                {
                    kode_akun: "5-50001",
                    tipe_akun: "Beban HPP",
                    nama_akun: "Pembelian Lisence",
                    kategori_akun: "harga pokok penjualan",

                },
                {
                    kode_akun: "5-50002",
                    tipe_akun: "Beban HPP",
                    nama_akun: "Pembelian Perangkat Komputer",
                    kategori_akun: "harga pokok penjualan",

                },
                {
                    kode_akun: "5-50003",
                    tipe_akun: "Beban HPP",
                    nama_akun: "Pendapatan Penjualan Barang",
                    kategori_akun: "harga pokok penjualan",

                },
                {
                    kode_akun: "5-50004",
                    tipe_akun: "Beban HPP",
                    nama_akun: "Potongan Pembelian",
                    kategori_akun: "harga pokok penjualan",

                },
                {
                    kode_akun: "5-50005",
                    tipe_akun: "Beban HPP",
                    nama_akun: "HPP software",
                    kategori_akun: "harga pokok penjualan",

                },
                {
                    kode_akun: "5-50006",
                    tipe_akun: "Beban HPP",
                    nama_akun: "Pemakaian Jasa",
                    kategori_akun: "harga pokok penjualan",

                },
                {
                    kode_akun: "5-50099",
                    tipe_akun: "Beban HPP",
                    nama_akun: "HPP software",
                    kategori_akun: "harga pokok penjualan",

                },
                {
                    kode_akun: "2-20301",
                    tipe_akun: "Utang Pajak",
                    nama_akun: "Utang PPh pasal 4 ayat 2",
                    kategori_akun: "kewajiban lancar lainnya",

                },
                {
                    kode_akun: "2-20302",
                    tipe_akun: "Utang Pajak",
                    nama_akun: "Utang PPh pasal 21",
                    kategori_akun: "kewajiban lancar lainnya",

                },
                {
                    kode_akun: "2-20303",
                    tipe_akun: "Utang Pajak",
                    nama_akun: "Utang PPh pasal 22",
                    kategori_akun: "kewajiban lancar lainnya",

                },
                {
                    kode_akun: "2-20304",
                    tipe_akun: "Utang Pajak",
                    nama_akun: "Utang PPh pasal 23",
                    kategori_akun: "kewajiban lancar lainnya",

                },
                {
                    kode_akun: "2-20305",
                    tipe_akun: "Utang Pajak",
                    nama_akun: "Utang PPh pasal 25/29",
                    kategori_akun: "kewajiban lancar lainnya",

                },
                {
                    kode_akun: "2-20306",
                    tipe_akun: "Utang Pajak",
                    nama_akun: "Utang PPh pasal 26",
                    kategori_akun: "kewajiban lancar lainnya",

                },
                {
                    kode_akun: "2-20307",
                    tipe_akun: "Utang Pajak",
                    nama_akun: "Utang PPN keluaran",
                    kategori_akun: "kewajiban lancar lainnya",

                },
                {
                    kode_akun: "2-20308",
                    tipe_akun: "Utang Pajak",
                    nama_akun: "SPM PPN",
                    kategori_akun: "kewajiban lancar lainnya",

                },
                {
                    kode_akun: "2-20309",
                    tipe_akun: "Utang Pajak",
                    nama_akun: "Utang PPh pasal 29",
                    kategori_akun: "kewajiban lancar lainnya",

                },
                {
                    kode_akun: "2-20310",
                    tipe_akun: "Utang Pajak",
                    nama_akun: "Utang PPN masuk LN",
                    kategori_akun: "kewajiban lancar lainnya",

                },
                {
                    kode_akun: "2-20401",
                    tipe_akun: "Utang lain-lain",
                    nama_akun: "Utang Pinjaman",
                    kategori_akun: "kewajiban lancar lainnya",

                },
                {
                    kode_akun: "2-20402",
                    tipe_akun: "Utang lain-lain",
                    nama_akun: "Utang Gaji",
                    kategori_akun: "kewajiban lancar lainnya",

                },
                {
                    kode_akun: "2-20403",
                    tipe_akun: "Utang lain-lain",
                    nama_akun: "Utang YMD",
                    kategori_akun: "kewajiban lancar lainnya",

                },
                {
                    kode_akun: "2-20404",
                    tipe_akun: "Utang lain-lain",
                    nama_akun: "Utang Biaya",
                    kategori_akun: "kewajiban lancar lainnya",

                },
                {
                    kode_akun: "2-20405",
                    tipe_akun: "Utang lain-lain",
                    nama_akun: "Utang Bangunan Permanen",
                    kategori_akun: "kewajiban lancar lainnya",

                },
                {
                    kode_akun: "2-20406",
                    tipe_akun: "Utang lain-lain",
                    nama_akun: "Utang BPJS",
                    kategori_akun: "kewajiban lancar lainnya",

                },
                {
                    kode_akun: "2-20407",
                    tipe_akun: "Utang lain-lain",
                    nama_akun: "Utang Yayasan",
                    kategori_akun: "kewajiban lancar lainnya",

                },
                {
                    kode_akun: "6-60001",
                    tipe_akun: "Beban Penjualan",
                    nama_akun: "Beban Iklan",
                    kategori_akun: "beban",

                },
                {
                    kode_akun: "6-60002",
                    tipe_akun: "Beban Penjualan",
                    nama_akun: "Beban Komisi Penjualan",
                    kategori_akun: "beban",

                },
                {
                    kode_akun: "6-60003",
                    tipe_akun: "Beban Penjualan",
                    nama_akun: "Beban Hadiah",
                    kategori_akun: "beban",

                },
                {
                    kode_akun: "6-60004",
                    tipe_akun: "Beban Penjualan",
                    nama_akun: "Beban Penjualan Lainnya",
                    kategori_akun: "beban",

                },
                {
                    kode_akun: "6-60101",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Pemeliharan Bangunan & Prasarana Jasa",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60102",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Pemeliharan Bangunan & Prasarana Material",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60103",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Perbaikan & Perawatan Perabot Jasa",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60104",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Perbaikan & Perawatan Perabot Material",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60105",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "By Pemeliharaan Kend,A.Berat,Mesin-Pihak3 Jasa",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60106",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "By Pemeliharaan Kend,A.Berat,Mesin-Pihak3 Material",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60107",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Oli & Pelumas",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60108",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Pemakaian Sparepart Kend & A.Berat",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60109",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Gaji",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60110",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Tunjangan Lainnya",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60111",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya JAMSOSTEK (BPJS)",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60112",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Iuran Pensiun",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60113",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Pengobatan",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60114",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Jasa Internet",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60115",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya THR, Bonus, Liburan, dan Cuti ",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60116",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Dana Pensiun Past Service Liab.",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60117",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Pengobatan di Luar",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60118",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Keamanan",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60119",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Jasa Pengelolaan Tenaga Kerja",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60120",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "By Penggantian Pengelolaan Tenaga Kerja",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60121",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Seragam & Perlengkapan Kerja",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60122",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Pesangon",
                    kategori_akun: "Beban",

                },
                {
                    kode_akun: "6-60123",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Tunjangan Perumahan",
                    kategori_akun: "Beban",

                },
                {
                    kode_akun: "6-60124",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Air",
                    kategori_akun: "Beban",

                },
                {
                    kode_akun: "6-60125",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Listrik",
                    kategori_akun: "Beban",

                },
                {
                    kode_akun: "6-60126",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Gas",
                    kategori_akun: "Beban",

                },
                {
                    kode_akun: "6-60127",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Asuransi",
                    kategori_akun: "Beban",

                },
                {
                    kode_akun: "6-60128",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Asuransi Pengangkutan",
                    kategori_akun: "Beban",

                },
                {
                    kode_akun: "6-60124",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Air",
                    kategori_akun: "Beban",

                },
                {
                    kode_akun: "6-60125",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Listrik",
                    kategori_akun: "Beban",

                },
                {
                    kode_akun: "6-60126",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Gas",
                    kategori_akun: "Beban",

                },
                {
                    kode_akun: "6-60127",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Asuransi",
                    kategori_akun: "Beban",

                },
                {
                    kode_akun: "6-60128",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Asuransi Pengangkutan",
                    kategori_akun: "Beban",

                },
                {
                    kode_akun: "6-60124",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Air",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60125",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Listrik",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60126",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Gas",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60127",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Asuransi",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60128",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Asuransi Pengangkutan",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60129",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Sewa Bangunan",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60130",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Jasa Pergudangan",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60131",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Sewa Peralatan",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60132",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Sewa Lahan",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60133",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Jasa Kurir / Forwarder",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60134",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Jasa Pelayaran",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60135",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Pajak Bumi dan Bangunan",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60136",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Pajak Kendaraan Bermotor",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60137",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Perizinan Pemerintah",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60138",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Izin Tenaga Kerja",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60132",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Sewa Lahan",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60133",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Jasa Kurir / Forwarder",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60134",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Jasa Pelayaran",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60135",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Pajak Bumi dan Bangunan",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60136",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Pajak Kendaraan Bermotor",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60137",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Perizinan Pemerintah",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60138",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Izin Tenaga Kerja",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60139",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Transportasi Lokal",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60140",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Perjalanan Dalam Negeri",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60141",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Perjalanan Luar Negeri",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60142",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Bahan Bakar",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60143",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Mess",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60144",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Jamuan / Representasi",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60145",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Olahraga Dan Permainan",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60146",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Olahraga Dan Permainan",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60147",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Sumbangan Sosial",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60148",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Makanan dan Minuman",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60149",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Perayaan dan Upacara",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60150",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Perlengkapan Kantor",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60151",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Perlengkapan Fotocopy",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60152",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Komunikasi",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60153",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Organisasi Professional Internasional",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60154",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Orgaanisasi Professional Nasional",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60155",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Pelatihan External Pihak ke-3",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60156",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Kursus Umum",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60157",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Pelatihan Internal Kantor",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60158",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Beasiswa",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60159",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Pencarian Tenaga Kerja",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60160",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Langgganan Buku, Jurnal, Koran,dan Lainnya",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60161",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Konferensi Lokal",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60162",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Konferensi di Luar Negeri",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60163",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Konferensi Internal",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60164",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Jasa Profesional",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60165",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Jasa Notaris / Hukum",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60166",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Perjalanan/Penggantian untuk Jasa Notaris/Hukum",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60167",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Jasa Audit",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60168",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Jasa Konsultan",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60169",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Perjalanan/ Penggantian untuk Konsultan",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60170",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Jasa Management",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60171",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Beban Penyusutan Investaris Kantor",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60172",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Beban Penyusutan Kendaraan",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60173",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Beban Penyusutan Mesin",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60174",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Beban Penyusutan Bangunan",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60175",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Beban Amortisasi Penyusutan",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60176",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Administrasi Bank",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60177",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Dokumentasi",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60178",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Umum dan Administrasi",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60179",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Bebabn PPh 4 Ayat 2",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60180",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Beban PPh 21",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60181",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Beban PPh 23",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60182",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Beban PPh 25",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60183",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Beban PPh 26",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60184",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Beban Denda Pajak",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60185",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Materai",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60186",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Dividen",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60187",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Tender",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60188",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Asosiasi",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60189",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya KTA dan KADIN",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60190",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Entertain",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60191",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Parkir",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60192",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Beban PPh Tax Amnesty",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60193",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Beban PPN",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60194",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Beban Penghapusan Piutang Tak Tertagih",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60195",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Komisi",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60196",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Jasa Pelayaran",
                    kategori_akun: "Beban",
                },
                {
                    kode_akun: "6-60197",
                    tipe_akun: "Beban Administrasi dan Umum",
                    nama_akun: "Biaya Pajak Bumi dan Bangunan",
                    kategori_akun: "Beban",
                },
            ],
            skipDuplicates: true,
        })

        res.status(200).json({ message: 'success!', data: createMany })
    } catch (error) {
        res.status(400).json({ kode_akun: 'error', error })
    }
}
