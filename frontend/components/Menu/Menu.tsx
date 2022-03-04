import MenuItem from '@/components/MenuItem'
import Items from 'types/MenuItems'

const Menu = ({ items }: Items) => {
  return (
    <nav>
      <ul>
        {items.map((i, index) => (
          <li key={`navItem_${index}`}>
            <MenuItem name={i.name} link={i.link} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu