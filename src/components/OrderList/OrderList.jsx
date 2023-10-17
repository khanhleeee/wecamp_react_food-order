import { useContext, useMemo } from 'react'

import { OrderContext } from '../../context/OrderProvider'
import OrderCard from './OrderCard'

function OrderList() {
	const { orderList, setOrderList } = useContext(OrderContext)

	const pricesFormatter = new Intl.NumberFormat('vn-VN', {
		style: 'currency',
		currency: 'VND',
		currencyDisplay: 'symbol',
	})

	const totalPrice = useMemo(() => {
		return orderList?.reduce(
			(total, item) => total + item.quantity * item.price,
			0
		)
	}, [orderList])

	return (
		<div className='flex flex-col gap-4 py-4 mt-4'>
			{orderList.length ? (
				<>
					{orderList.map((item) => (
						<OrderCard
							key={item.id}
							item={item}
							setOrderList={setOrderList}
						/>
					))}{' '}
				</>
			) : (
				<div className='flex flex-col items-center justify-center border-b border-main-black/50'>
					<p>Your order is empty</p>
				</div>
			)}
			<div className='w-full flex justify-between py-2 px-1'>
				<p className='text-lg font-[500]'>Total: </p>
				<p className='text-lg font-[500] text-primary'>
					{pricesFormatter.format(totalPrice)}
				</p>
			</div>
			<button
				className='bg-main-black text-secondary rounded-md py-2 hover:opacity-90 active:opacity-100 transition-opacity'
				onClick={() => alert(pricesFormatter.format(totalPrice))}
			>
				Checkout
			</button>
		</div>
	)
}

export default OrderList
