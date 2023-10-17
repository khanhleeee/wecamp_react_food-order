import { ChevronRightIcon } from '@heroicons/react/24/outline'

import Header from '../components/Header/Header'
import MenuList from '../components/MenuList/MenuList'

import WhiteCoffe from '../assets/products/cf1.jpg'
import Expresso from '../assets/products/cf2.webp'
import Cappuccino from '../assets/products/cf3.webp'
import Americano from '../assets/products/cf4.webp'
import Latte from '../assets/products/cf5.webp'
import ColdBrew from '../assets/products/cf6.webp'
import Modal from '../components/Modal/Modal'
import ModalProvider from '../context/ModalContext'

const ITEM_LIST = [
	{
		id: 1,
		name: 'White coffee',
		price: 40000,
		img: WhiteCoffe,
	},
	{
		id: 2,
		name: 'Expresso',
		price: 45000,
		img: Expresso,
	},
	{
		id: 3,
		name: 'Cappuccino',
		price: 55000,
		img: Cappuccino,
	},
	{
		id: 4,
		name: 'Americano',
		price: 45000,
		img: Americano,
	},
	{
		id: 5,
		name: 'Latte',
		price: 55000,
		img: Latte,
	},
	{
		id: 6,
		name: 'Milk cold brew',
		price: 49000,
		img: ColdBrew,
	},
]

function Home() {
	return (
		<>
			<ModalProvider>
				<Header />
				<Modal />
			</ModalProvider>
			<section className='container py-28'>
				<div className='flex gap-2 pl-12 mb-4 text-gray-600'>
					<span className='flex items-center gap-1'>
						Home <ChevronRightIcon class='h-4 w-4' />
					</span>
					<span className='flex items-center gap-1'>
						Menu <ChevronRightIcon class='h-4 w-4' />
					</span>
					<span className='text-primary font-[500]'>Coffee</span>
				</div>
				<MenuList items={ITEM_LIST} />
			</section>
		</>
	)
}

export default Home
