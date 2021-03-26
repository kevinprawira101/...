import React from 'react';
import Link from 'next/link';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Divider from '@material-ui/core/Divider';
import {Row, Col} from 'react-bootstrap'

export default function SidebarSetting() {
    return (
        <div>
			<span class="ml-2 text-lg tracking-wide truncate">Perusahaan</span> <br/>
            <span class="ml-2 text-lg tracking-wide truncate">Penjualan</span> <br/>
            <span class="ml-4 text-lg tracking-wide truncate text-gray-500"><ArrowRightIcon fontSize="small"/> Format Pengaturan</span> <br/>
            <span class="ml-4 text-lg tracking-wide truncate text-gray-500"><ArrowRightIcon fontSize="small"/> Pengingat Faktur</span> <br/>
            <span class="ml-2 text-lg tracking-wide truncate">Pembelian</span> <br/>
            <span class="ml-2 text-lg tracking-wide truncate">Produk dan Jasa</span> <br/>
            <span class="ml-2 text-lg tracking-wide truncate">Template</span> <br/>
            <span class="ml-4 text-lg tracking-wide truncate text-gray-500"><ArrowRightIcon fontSize="small"/>Faktur Penjualan</span> <br/>
            <span class="ml-4 text-lg tracking-wide truncate text-gray-500"><ArrowRightIcon fontSize="small"/>Penawaran Penjualan</span> <br/>
            <span class="ml-4 text-lg tracking-wide truncate text-gray-500"><ArrowRightIcon fontSize="small"/>Pemesanan Penjualan</span> <br/>
            <span class="ml-4 text-lg tracking-wide truncate text-gray-500"><ArrowRightIcon fontSize="small"/>Pemesanan Pembelian</span> <br/>
            <span class="ml-2 text-lg tracking-wide truncate">Pemetaan Akun</span> <br/>
            <span class="ml-2 text-lg tracking-wide truncate">Pengaturan Pengguna</span> <br/>

            
		</div>
    )
}
