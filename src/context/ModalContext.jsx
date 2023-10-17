/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const ModalContext = createContext(null)

function ModalProvider({ children }) {
	const [isShowModal, setIsShowModal] = useState(false)

	return (
		<ModalContext.Provider value={{ isShowModal, setIsShowModal }}>
			{children}
		</ModalContext.Provider>
	)
}

export default ModalProvider
