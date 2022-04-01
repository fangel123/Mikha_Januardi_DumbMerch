import React from 'react'
import OffCanvasAdmin from './component/OffCanvasAdmin';
import cssModule from './component/adminComplain.module.css'
import chatAdmin from "./component/images/chat1.png";
import Header from './component/header'

export default function complain() {
  return (
    <div className={cssModule.AdminComplain}>
      <Header />
      <div className={cssModule.mainContainer}>
        <div className={cssModule.container}>
          <div className={cssModule.leftSide}>
              <OffCanvasAdmin/>
          </div>
          <div className={cssModule.rightSide}>
            <img src={chatAdmin} alt=''/>
            <input type="text" placeholder='Send Message' />
          </div>
        </div>
      </div>
    </div>
  )
}
