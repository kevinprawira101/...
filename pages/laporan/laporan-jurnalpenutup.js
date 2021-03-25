import React from 'react'
import Layout from '../../components/layout'
import Link from 'next/link';
import { Button, Table, DropdownButton , Dropdown } from 'react-bootstrap';

const laporanjurnalpenutup = () => {
    return (
        <Layout>
        <div variant="container">
            <div></div>
             <h4 class="mb-8 mt-5">
                Jurnal Penutup
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
                 <thead class="thead-light">
                     <tr>
                         <th scope="col">Tanggal</th>
                         <th scope="col">Nama Akun</th>
                         <th></th>
                         <th scope="col">Debit</th>
                         <th scope="col">Kredit</th>
                     </tr>
                 </thead>

                 <tbody>
                     <td>
                          <div class="text-md font-medium text-gray-900">Pendapatan</div>
                     </td>
                     <tr>
                         <td>1-10001</td>
                         <td>Account 1</td>
                         <td></td>
                         <td>Rp. 0,00</td>
                         <td></td>
                     </tr>
                     <tr>
                         <td></td>
                         <td>Account 2</td>
                         <td></td>
                         <td>Rp. 0,00</td>
                         <td>Rp. 0,00</td>
                     </tr>
                     <tr>
                         <td></td>
                         <td class="py-2">Account 3</td>
                         <td></td>
                         <td></td>
                         <td>Rp. 0,00</td>
                     </tr>
                 </tbody>

                 <tbody>
                     <td>
                        <div class="text-md font-medium text-gray-900">Beban</div>
                     </td>
                     <tr>
                         <td>1-10001</td>
                         <td>Account 1</td>
                         <td></td>
                         <td>Rp. 0,00</td>
                         <td></td>
                     </tr>
                     <tr>
                         <td></td>
                         <td>Account 2</td>
                         <td></td>
                         <td>Rp. 0,00</td>
                         <td>Rp. 0,00</td>
                     </tr>
                     <tr>
                         <td></td>
                         <td class="py-2">Account 3</td>
                         <td></td>
                         <td></td>
                         <td>Rp. 0,00</td>
                     </tr>

                
                 </tbody>
                 <tbody>
                     <td>
                        <div class="text-md font-medium text-gray-900">Laba/Rugi</div>
                     </td>
                     <tr>
                         <td>1-10001</td>
                         <td>Account 1</td>
                         <td></td>
                         <td>Rp. 0,00</td>
                         <td></td>
                     </tr>
                     <tr>
                         <td></td>
                         <td>Account 2</td>
                         <td></td>
                         <td>Rp. 0,00</td>
                         <td>Rp. 0,00</td>
                     </tr>
                     <tr>
                         <td></td>
                         <td class="py-2">Account 3</td>
                         <td></td>
                         <td></td>
                         <td>Rp. 0,00</td>
                     </tr>
                 </tbody>

                 <tbody>
                     <td>
                        <div class="text-md font-medium text-gray-900">Prive</div>
                     </td>
                     <tr>
                         <td>1-10001</td>
                         <td>Account 1</td>
                         <td></td>
                         <td>Rp. 0,00</td>
                         <td></td>
                     </tr>
                     <tr>
                         <td></td>
                         <td>Account 2</td>
                         <td></td>
                         <td>Rp. 0,00</td>
                         <td>Rp. 0,00</td>
                     </tr>
                     <tr>
                         <td></td>
                         <td class="py-2">Account 3</td>
                         <td></td>
                         <td></td>
                         <td>Rp. 0,00</td>
                     </tr>
                 </tbody>

                 <tbody>
                    
                     <tr>
                        <td></td>    
                        <td></td>  
                        <td></td>  
                        <td></td>   
                    </tr>
                    
                    <tr>
                         <td></td>
                         <td>
                            <div class="text-md font-medium text-gray-900">Total</div>
                         </td>
                         <td></td>
                         <td>Rp, 0.00</td>
                         <td>Rp. 0,00</td>
                     </tr>

                 </tbody>


             </Table>
         </div>
     </Layout>
    )
}

export default laporanjurnalpenutup
