import React from 'react'
import Layout from '../../components/layout'
import Link from 'next/link';
import { Button, Table, DropdownButton , Dropdown } from 'react-bootstrap';

const laporanlabarugi = () => {
    return (
        <Layout>
       	<div variant="container">
               <div></div>
				<h4 class="mb-8 mt-5">
                   Laba Rugi
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
                  <tbody>
						<tr>
                            <td>Pendapatan dari Penjualan</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Rp. XXX</td>
						</tr>

						<tr>
                            <td>Harga Pokok Penjualan</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Rp. XXX</td>
						</tr>

						<tr>
							<td>
								<div class="text-md font-medium text-gray-900">Total Laba Kotor</div>
							</td>
							<td>
								<div class="text-md text-gray-900" />
							</td>
                            <td></td>
                            <td></td>
							<td>
								<div class="text-md font-medium text-gray-900"></div>
							</td>
							<td>
								<div class="text-md font-medium text-gray-900">Rp. 0.00</div>
							</td>
						</tr>
					</tbody>
				</Table>

                <Table class="table">                        
                  <tbody>
						<tr>
                            <td>Beban Operasional</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Rp xxx</td>
                            <td></td>
                            <td></td>
						</tr>

						<tr>
                            <td>Name</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Rp. XXX</td>
                            <td></td>
                            
						</tr>

						<tr>
							<td>
								<div class="text-md font-medium text-gray-900">Pendapatan Bersih Operasional</div>
							</td>
							<td>
								<div class="text-md text-gray-900" />
							</td>
                            <td></td>
                            <td></td>
                            <td></td>
							<td>
								<div class="text-md font-medium text-gray-900"></div>
							</td>
							<td>
								<div class="text-md font-medium text-gray-900">Rp. 0.00</div>
							</td>
						</tr>
					</tbody>
				</Table>
                
               

                      <Table class="table">                        
                  <tbody>
						<tr>
                            <td>Pendapatan lainnya</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Rp. XXX</td>
						</tr>

						<tr>
                            <td>Bebab lainnya</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Rp. XXX</td>
						</tr>

						<tr>
							<td>
								<div class="text-md font-medium text-gray-900">Pendapatan Bersih Sebelum Pajak</div>
							</td>
							<td>
								<div class="text-md text-gray-900" />
							</td>
                            <td></td>
                            <td></td>
							<td>
								<div class="text-md font-medium text-gray-900"></div>
							</td>
							<td>
								<div class="text-md font-medium text-gray-900">Rp. 0.00</div>
							</td>
						</tr>
					</tbody>
				</Table>
                <Table class="table">                        
                  <tbody>
						<tr>
                            <td>Beban Pajak</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Rp. XXX</td>
						</tr>

						<tr>
							<td>
								<div class="text-md font-medium text-gray-900">Pendapatan Bersih Sesudah Pajak</div>
							</td>
							<td>
								<div class="text-md text-gray-900" />
							</td>
                            <td></td>
                            <td></td>
							<td>
								<div class="text-md font-medium text-gray-900"></div>
							</td>
							<td>
								<div class="text-md font-medium text-gray-900">Rp. 0.00</div>
							</td>
						</tr>
					</tbody>
				</Table>
                

                     
                
		</div>
        </Layout>	
    )
}

export default laporanlabarugi
