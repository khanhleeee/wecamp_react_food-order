import { useContext, useEffect, useRef, useState } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

import { ModalContext } from '../../context/ModalContext'
import { OrderContext } from '../../context/OrderProvider'

function Header() {
	const { setIsShowModal } = useContext(ModalContext)
	const { itemCount } = useContext(OrderContext)

	const cartRef = useRef(null)

	useEffect(() => {
		setTimeout(() => {
			cartRef.current.classList.add('animate-bump')
		}, 0)

		return () => {
			cartRef.current.classList.remove('animate-bump')
		}
	}, [itemCount])

	return (
		<header id='header' className='bg-main-black text-secondary'>
			<div className='container flex items-center justify-between p-4'>
				<h1 className='text-4xl'>
					Coffee<span className='text-primary'>Shop</span>
				</h1>
				<div
					className='cart-container'
					onClick={() => setIsShowModal(true)}
				>
					<p>My Order</p>
					<div ref={cartRef} className='cart'>
						<ShoppingBagIcon />
						<span className='cart-badge'>{itemCount}</span>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
