import React from 'react'
import Layout from '../../components/layout'
import Link from 'next/link';
import { Button, Table, DropdownButton , Dropdown } from 'react-bootstrap';

const laporantrialbalance = () => {
    return (
        <Layout>
        <div variant="container">
            <div></div>
             <h4 class="mb-8 mt-5">
                Trial Balance
                 </h4>
                 <div class="flex flex-row-reverse">
                         <DropdownButton variant="primary ml-2" id="dropdown-basic-button" title="Export">
                             <Dropdown.Item>
                                 <Link href="#">
                                     <a>PDF</a>
                                 </Link>
                             </Dropdown.Item>
                             <Dropdown.Item href="#/action-2">XLS</Dropdown.Item>
                             <Dropdown.Item href="#/action-2">CSV</Dropdown.Item>
                         </DropdownButton>
                     </div>

             <Table class="table mt-4">
                 <thead>
                     <tr>
                       <th colspan="3">Daftar Akun</th>
                       <th colspan="3" classnName="text-center">Neraca Saldo (Sebelum Penyesuaian)</th>
                       <th colspan="3" classnName="text-center">Penyesuaian Saldo</th>
                       <th colspan="3" classnName="text-center">Neraca Saldo (Sesudah Penyesuaian)</th>
                     </tr>
                 </thead>

                 <tbody>
                     <tr>
                            <td></td> 
                            <td></td> 
                            <td></td>
                            <td>Debit</td> 
                            <td>Kredit</td> 
                            <td></td>
                            <td>Debit</td> 
                            <td>Kredit</td> 
                            <td></td>
                            <td>Debit</td> 
                            <td>Kredit</td> 
                            <td></td>

                     </tr>
                </tbody>

                <tbody>
                     <tr>
                         <td colspan="12">
                            <div class="text-md font-medium text-gray-900">Kategori Akun</div>
                         </td>
                     </tr>

                     <tr>
                            <td>1-003</td> 
                            <td></td> 
                            <td></td>
                            <td>Rp, 0.00</td> 
                            <td>Rp, 0.00</td> 
                            <td></td>
                            <td></td> 
                            <td></td> 
                            <td></td>
                            <td>Rp, 0.00</td> 
                            <td></td> 
                            <td></td>
                     </tr>

                     <tr>
                            <td>1-003</td> 
                            <td></td> 
                            <td></td>
                            <td>Rp, 0.00</td> 
                            <td>Rp, 0.00</td> 
                            <td></td>
                            <td></td> 
                            <td></td> 
                            <td></td>
                            <td>Rp, 0.00</td> 
                            <td></td> 
                            <td></td>

                     </tr>

                 </tbody>

                 <tbody>
                     <tr>
                         <td colspan="12">
                            <div class="text-md font-medium text-gray-900">Kategori Akun</div>
                         </td>
                     </tr>

                     <tr>
                            <td>1-003</td> 
                            <td></td> 
                            <td></td>
                            <td>Rp, 0.00</td> 
                            <td>Rp, 0.00</td> 
                            <td></td>
                            <td></td> 
                            <td></td> 
                            <td></td>
                            <td>Rp, 0.00</td> 
                            <td></td> 
                            <td></td>
                     </tr>

                     <tr>
                            <td>1-003</td> 
                            <td></td> 
                            <td></td>
                            <td>Rp, 0.00</td> 
                            <td>Rp, 0.00</td> 
                            <td></td>
                            <td></td> 
                            <td></td> 
                            <td></td>
                            <td>Rp, 0.00</td> 
                            <td></td> 
                            <td></td>
                     </tr>

                     <tr>
                         <td colspan="12"></td>
                    </tr>

                    <tr>
                            <td>
                                 <div class="text-md font-medium text-gray-900">Total</div>
                            </td> 
                            <td></td> 
                            <td></td>
                            <td>XXX</td> 
                            <td>XXX</td> 
                            <td></td>
                            <td>XXX</td> 
                            <td>XXX</td> 
                            <td></td>
                            <td>XXX</td> 
                            <td>XXX</td> 
                            <td></td>
                     </tr>


                 </tbody>











             </Table>
         </div>
     </Layout>
    )
}

export default laporantrialbalance
