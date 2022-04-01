/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import './form.css';
import mouse from './images/mouse.png'
import { useNavigate } from 'react-router-dom';


export default function detail_page() {
  const navigate = useNavigate();

  const handleNavigateToProfile = () => {
      navigate("/profile");
  };
  return (
    <div className='detail-content'>
      <div className="detail-left">
        <img src={mouse} alt="" />
      </div>
      <div className='detail-right'>
        <h1>
          Mouse
        </h1>
        <h6>
          Stock : 600
        </h6>
        <ul>
          <li>
            Wireless Mouse
          </li>
          <li>
            Konektivitas wireless 2.4 GHz
          </li>
          <li>
            Jarak wireless hingga 10 m
          </li>
          <li>
            Plug and Play
          </li>
          <li>
            Baterai tahan hingga 12 bulan
          </li>
        </ul>
        <p>
        Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.
        </p>
        <h5>
          Rp.500.000
        </h5>
        <button onClick={handleNavigateToProfile} className='btn btn-danger'>Buy</button>
      </div>
    </div>
  )
}
