/* eslint-disable react/prop-types */
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

import classNames from 'classnames'

import './QuantityField.css'

function QuantityField({ quantity, setQuantity, plusButton }) {
	const handleTypeChangeQuantity = (e) => {
		setQuantity(parseInt(e.target.value))
		if (e.target.value === '') {
			setQuantity(parseInt(1))
		}
	}

	const handleClickChangeQuantity = (type) => {
		if (type === 'increase') {
			setQuantity((currQuantity) => currQuantity + 1)
		} else if (type === 'decrease' && quantity > 1 && !plusButton) {
			setQuantity((currQuantity) => currQuantity - 1)
		} else if (plusButton && quantity >= 1) {
			setQuantity((currQuantity) => currQuantity - 1)
		}
	}

	const quantityClasses = classNames('quantity-container', { plusButton })

	return (
		<div className={quantityClasses}>
			{plusButton ? (
				<div className='flex items-center gap-2'>
					<span
						className='bg-main-black text-secondary px-1 leading-none text-lg cursor-pointer hover:opacity-80 active:opacity-100 select-none'
						onClick={() => handleClickChangeQuantity('decrease')}
					>
						-
					</span>
					<span>x {quantity}</span>
					<span
						className='bg-main-black text-secondary px-1 leading-none text-lg cursor-pointer hover:opacity-80 active:opacity-100 select-none'
						onClick={() => handleClickChangeQuantity('increase')}
					>
						+
					</span>
				</div>
			) : (
				<>
					<input
						value={quantity}
						className='quantity-input'
						type='number'
						min='1'
						onChange={handleTypeChangeQuantity}
					/>
					<div className='quantity-btn'>
						<ChevronUpIcon
							className='absolute top-[2px] right-1'
							onClick={() => handleClickChangeQuantity('increase')}
						/>
						<ChevronDownIcon
							className='absolute bottom-[2px] right-1'
							onClick={() => handleClickChangeQuantity('decrease')}
						/>
					</div>
				</>
			)}
		</div>
	)
}

export default QuantityField
