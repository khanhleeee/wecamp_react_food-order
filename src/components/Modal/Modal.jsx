/* eslint-disable react/prop-types */
import { useContext, useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ModalContext } from '../../context/ModalContext'
import OrderList from '../OrderList/OrderList'

function Modal() {
	const { isShowModal, setIsShowModal } = useContext(ModalContext)

	const handleClose = () => {
		setIsShowModal(false)
	}

	const handleClickOutside = (e) => {
		e.stopPropagation()
		if (e.target === e.currentTarget) {
			setIsShowModal(false)
		}
	}

	const modalClasses = isShowModal
		? 'group fixed flex items-center justify-center top-0 left-0 w-full h-full bg-main-black/50 z-10 overflow-auto'
		: 'group fixed hidden items-center justify-center top-0 left-0 w-full h-full bg-main-black/50 z-10 overflow-auto'

	return (
		<>
			<div className={modalClasses} onClick={handleClickOutside}>
				<div className='bg-secondary w-[500px] min-h-[200px] px-8 py-6 rounded-xl shadow-lg'>
					<div className='flex justify-between'>
						<h1 className='text-2xl'>Your order</h1>
						<XMarkIcon
							className='h-6 w-6 text-gray-500 hover:text-main-black cursor-pointer transition-colors'
							onClick={handleClose}
						/>
					</div>
					<OrderList />
				</div>
			</div>
		</>
	)
}

export default Modal
