/* eslint-disable react/prop-types */
import Card from './Card'

function MenuList({ items }) {
	return (
		<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-10'>
			{items.map((item) => (
				<Card key={item.id} item={item} />
			))}
		</div>
	)
}

export default MenuList
