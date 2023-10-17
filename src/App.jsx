import Home from './pages/Home'

import OrderProvider from './context/OrderProvider'

function App() {
	return (
		<OrderProvider>
			<Home />
		</OrderProvider>
	)
}

export default App
