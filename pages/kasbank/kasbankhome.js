import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import Link from 'next/link';
import { Button, Table, DropdownButton, Dropdown } from 'react-bootstrap';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/kasnbank`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default function jurnalentry({ data }) {
    return (
        <Layout>
            <div variant="container">
                <div class="text-md font-medium text-gray-900">
                    <AccountBalanceWalletIcon /> Kas & Bank</div>
                <h4 class="mt-2">
                    Akun Kas
                 </h4>

                <div class="flex flex-row-reverse">

                    <DropdownButton variant="primary ml-2" id="dropdown-basic-button" title="Buat Transaksi">
                        <Dropdown.Item>
                            <Link href="/kasbank/transferuang">
                                <a>Transfer Uang</a>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link href="/kasbank/terimauang">
                                <a>Terima Uang</a>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link href="/kasbank/kirimuang">
                                <a>Kirim Uang</a>
                            </Link>
                        </Dropdown.Item>

                    </DropdownButton>
                </div>


                <Table class="table mt-4">
                    <tbody>
                        <tr>
                            <td>
                                <div class="text-md font-medium text-gray-900">Daftar Akun Kas</div>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Kode Akun</td>
                            <td>Nama Akun</td>
                            <td>Saldo Bank</td>
                            <td>Saldo Jurnal</td>

                        </tr>

                        {data.map((i, index) => (
                            <tr>
                                <td>0 {index + 1}</td>
                                <td>
                                    <Link href="/kasbank/akundetail">
                                        {i.namaakun}
                                    </Link>
                                </td>
                                <td>{i.saldobank}</td>
                                <td>{i.saldojurnal}</td>

                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
        </Layout>
    )
}

