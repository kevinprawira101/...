import React from 'react'
import Layout from '../../components/layout'
import Link from 'next/link';
import { Button, Table, DropdownButton , Dropdown } from 'react-bootstrap';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

const kasbankhome = () => {
    return (
        <Layout>
        <div variant="container">
        <div class="text-md font-medium text-gray-900">
            <AccountBalanceWalletIcon/> Kas & Bank</div>
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

                 <tr>
                        <td>XXXX</td>
                         <td>
                         <Link href="/kasbank/akundetail">
                             XXXX
                             </Link>
                             </td>
                         <td>XXXX</td>
                         <td>XXXX</td>
                        
                 </tr>

                 </tbody>
             </Table>    
     </div>
     </Layout>	
    )
}

export default kasbankhome
