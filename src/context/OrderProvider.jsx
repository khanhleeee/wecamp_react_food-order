/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'

export const OrderContext = createContext(null)

function OrderProvider({ children }) {
	const [orderList, setOrderList] = useState([])
	const [itemCount, setItemCount] = useState(0)

	useEffect(() => {
		setItemCount(
			orderList.reduce((totalItems, item) => {
				return totalItems + item.quantity
			}, 0)
		)
	}, [orderList])

	const addItem = (item) => {
		const existItemIndex = orderList.findIndex((el) => el.id === item.id)

		if (existItemIndex !== -1) {
			orderList[existItemIndex].quantity =
				orderList[existItemIndex].quantity + item.quantity
			setOrderList([...orderList])
		} else {
			orderList.push(item)
			setOrderList([...orderList])
		}
	}

	const removeItem = (id) => {
		setOrderList(orderList.filter((item) => item.id !== id))
	}

	const value = {
		orderList,
		setOrderList,
		itemCount,
		setItemCount,
		addItem,
		removeItem,
	}

	return (
		<OrderContext.Provider value={value}>{children}</OrderContext.Provider>
	)
}

export default OrderProvider
