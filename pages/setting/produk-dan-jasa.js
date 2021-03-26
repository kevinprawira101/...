import React from 'react'
import Layout from '../../components/Layout'
import {Form,Row,Col,InputGroup,FormControl} from 'react-bootstrap'
import SidebarSetting from '../../components/SidebarSetting'
import Divider from '@material-ui/core/Divider';

export default function produkdanjasa() {
    return (
        <Layout>
            <h1>Pengaturan</h1>
            <Row>
                <Col sm="3">
                <SidebarSetting></SidebarSetting>
                </Col>
                <Divider orientation="vertical" flexItem />
                <Col sm="8">
                    <h2>Produk</h2>
                <Row className="mb-2">
                        <Col sm="4">
                            Tampilan Stok Produk
                        </Col>
                        <Col sm="8">
                            
                            <Form.Check aria-label="option 1" />
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col sm="4">
                            Kategori Produk
                        </Col>
                        <Col sm="8">
                            Pengaturan kategori
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col sm="4">
                            Satuan Produk
                        </Col>
                        <Col sm="8">
                            Pengaturan Satuan
                        </Col>
                    </Row>
                    
                    
                </Col>
            </Row>
            <div class="left-0 px-4 py-3 border-t border-gray-200 w-full flex justify-center items-center gap-3">  
                <button onclick="openModal(false)"class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white focus:outline-none">Batal</button>
                <button class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white focus:outline-none">Ubah</button>
            </div>
        </Layout>
    )
}
