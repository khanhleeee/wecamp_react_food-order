import { useEffect, useState } from 'react'
import QuantityField from '../../components/QuantityField/QuantityField'

/* eslint-disable react/prop-types */
function OrderCard({ item, setOrderList }) {
	const [quantity, setQuantity] = useState(item.quantity)

	useEffect(() => {
		if (quantity === 0) {
			setOrderList((currOrder) =>
				currOrder.filter((order) => order.id !== item.id)
			)
		} else {
			setOrderList((currOrder) => {
				const index = currOrder.findIndex((order) => order.id === item.id)
				currOrder[index].quantity = quantity

				return [...currOrder]
			})
		}
	}, [quantity])

	const pricesFormatter = new Intl.NumberFormat('vn-VN', {
		style: 'currency',
		currency: 'VND',
		currencyDisplay: 'symbol',
	})

	return (
		<div
			key={item.id}
			className='flex justify-between border-b border-main-black/20 py-2'
		>
			<div className='flex'>
				<img
					className='h-[64px] rounded-full shadow-md'
					src={item.img}
					alt=''
				/>
				<span className='flex items-center ml-2 font-[500]'>
					{item.name}
				</span>
			</div>

			<div className='flex flex-col items-center gap-1'>
				<span className='font-[500] text-primary'>
					{pricesFormatter.format(item.price)}
				</span>
				<QuantityField
					plusButton
					quantity={quantity}
					setQuantity={setQuantity}
				/>
			</div>
		</div>
	)
}

export default OrderCard
