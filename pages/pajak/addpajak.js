import React from 'react';
import Layout from '../../components/Layout';

export default function addpajak () {
	return (
		<Layout>
			<div>
				<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-1">
					<h1 class="text-4xl font-mono mb-7">Pajak</h1>
					<div class="-mx-3 md:flex mb-6">
						<div class="md:w-1/2 px-3 mb-6 md:mb-0">
							<label
								class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
								for="grid-first-name"
							>
								First Name
							</label>
							<input
								class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
								id="grid-first-name"
								type="text"
								placeholder="Jane"
							/>
							<p class="text-red-500 text-xs italic">Please fill out this field.</p>
						</div>
						<div class="md:w-1/2 px-3">
							<label
								class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
								for="grid-last-name"
							>
								Persentase Aktif
							</label>
							<input
								class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
								id="grid-last-name"
								type="text"
								placeholder="Doe"
							/>
						</div>
					</div>

					<div class="-mx-3 md:flex mb-6">
						<div class="md:w-1/2 px-3 mb-6 md:mb-0">
							<label
								class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
								for="grid-first-name"
							>
								Akun Pajak Penjualan
							</label>
							<select
								class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
								id="grid-state"
							>
								<option>Penjualan 1</option>
								<option>Penjualan 2</option>
								<option>Penjualan 3</option>
							</select>
							<p class="text-red-500 text-xs italic mt-3">Please fill out this field.</p>
						</div>
						<div class="md:w-1/2 px-3">
							<label
								class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
								for="grid-last-name"
							>
								Akun Pajak Pembelian
							</label>
							<select
								class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
								id="grid-state"
							>
								<option>Pembelian 1</option>
								<option>Pembelian 2</option>
								<option>Pembelian 3</option>
							</select>
						</div>
					</div>
					<div class="card bg-white py-3 px-5 rounded-xl flex flex-col mb-5">
						<div class="w-full py-1">
							<div class="inline-block mr-2 mt-2">
								<button
									type="button"
									class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg flex items-center"
								>
									<svg
										class="w-4 h-4 mr-2"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
										/>
									</svg>
									Batal
								</button>
							</div>
							<div class="inline-block mr-2 mt-2">
								<button
									type="button"
									class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg flex items-center"
								>
									<svg
										class="w-4 h-4 mr-2"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
										/>
									</svg>
									Simpan
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
