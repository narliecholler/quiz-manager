import HeaderWrapper from './style'
import Menu from '@/components/Menu'
import Items from '@/types/MenuItems'

const Header = ({ items }: Items) => {
  return (
    <HeaderWrapper>
      <span>Website Template</span>
      <Menu items={items} />
    </HeaderWrapper>
  )
}

export default Header