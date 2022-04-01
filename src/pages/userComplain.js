import React from 'react'
import OffCanvasUser from './component/OffCanvasUser';
import cssModule from './component/userComplain.module.css'
import Admin from "./component/images/admin1.png";
import Header from './component/header'

export default function userComplain() {
	return (
		<div className={cssModule.UserComplain}>
			<Header />
				<div className={cssModule.mainContainer}>
					<div className={cssModule.container}>
						<div className={cssModule.leftSide}>
							<OffCanvasUser />
						</div>
						<div className={cssModule.auCompRight}>
							<div className={cssModule.flxRow}>
								<div className={cssModule.bubbleRight}>
									Hello Admin, I Need Your Help
								</div>
							</div>
						<div className={cssModule.flxRow}>
						<img className='mr20' src={Admin} alt='icon' />
							<div className={cssModule.bubbleLeft}>
								Yes, Is there anything I can help
							</div>
						</div>
						<input className='mt20 ml20' type='text' placeholder='Send Message' />
					</div>
				</div>
			</div>
		</div>
	)
}
