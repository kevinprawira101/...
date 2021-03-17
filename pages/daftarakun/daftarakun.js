import React from 'react';
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';

export default function DaftarAkun () {
	return (
		<div variant="container">
			<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
				<div>
					<div class="flex">
						<h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Daftar Akun</h2>
						<div />
					</div>
					<div class="flex flex-row-reverse">
						<DropdownButton variant="primary ml-2" id="dropdown-basic-button" title="Dropdown button">
							<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
						</DropdownButton>
						<Button>Primary</Button>
					</div>
				</div>

				<table class="mt-4 min-w-full divide-y divide-gray-200">
					<thead class="bg-gray-50">
						<tr>
							<th
								scope="col"
								class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Kode Akun
							</th>
							<th
								scope="col"
								class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Nama Akun
							</th>
							<th
								scope="col"
								class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Kateogori AKun
							</th>
							<th
								scope="col"
								class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Saldo (dalam IDR)
							</th>
						</tr>
					</thead>
					<tbody class="bg-white divide-y divide-gray-200">
						<tr>
							<td class="px-6 py-4 whitespace-nowrap">
								<div class="flex items-center">
									<div>
										<div class="text-sm font-medium text-gray-900">002</div>
										<div class="text-sm text-gray-500">Bank Central Asia</div>
									</div>
								</div>
							</td>
							<td class="px-6 py-4 whitespace-nowrap">
								<div class="text-sm text-gray-900">John Smith</div>
								<div class="text-sm text-gray-500">Ceo</div>
							</td>
							<td class="px-6 py-4 whitespace-nowrap">
								<div class="text-sm text-gray-900">-</div>
							</td>
							<td class="px-6 py-4 whitespace-nowrap font-medium">
								<div class="text-sm text-gray-900">Rp. 0</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
