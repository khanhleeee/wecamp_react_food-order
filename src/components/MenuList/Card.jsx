/* eslint-disable react/prop-types */
import { useContext, useState } from 'react'

import { PlusSmallIcon } from '@heroicons/react/24/outline'
import QuantityField from '../QuantityField/QuantityField'

import { OrderContext } from '../../context/OrderProvider'

function Card({ item }) {
	const { addItem } = useContext(OrderContext)

	const { id, img, price, name } = item

	const [quantity, setQuantity] = useState(1)

	const pricesFormatter = new Intl.NumberFormat('vn-VN', {
		style: 'currency',
		currency: 'VND',
		currencyDisplay: 'code',
	})

	return (
		<div
			className='bg-main-black flex p-4 text-secondary rounded-lg'
			key={id}
		>
			<div className='w-[100px] flex items-center mr-4'>
				<img className='w-full rounded-full' src={img} alt='product' />
			</div>
			<div className='flex flex-col flex-1 mt-2'>
				<p className='text-lg text-primary'>{name}</p>
				<span className='price'>{pricesFormatter.format(price)}</span>
				<div className='flex items-center justify-end'>
					<QuantityField quantity={quantity} setQuantity={setQuantity} />
					<button
						className='flex items-center bg-primary p-2 rounded-full cursor-pointer ml-2 hover:bg-[#cd943f] active:bg-[#b9822f] transition-colors duration-100'
						onClick={() => addItem({ ...item, quantity })}
					>
						<PlusSmallIcon className='h-5' />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Card
