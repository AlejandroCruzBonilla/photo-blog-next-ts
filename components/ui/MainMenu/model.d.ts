export interface MenuProps {
  data: {
    title: string
    menuItems: MenuItemProps[]
  }
}

interface MenuItemProps {
  route: string
  text: string
  icon: string
}