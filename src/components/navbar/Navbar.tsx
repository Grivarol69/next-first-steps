import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "@/components"

const navItems = [
  { path: '/about', text: 'About'},
  { path: '/pricing', text: 'Princing'},
  { path: '/contact', text: 'Contact'},
]

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 h-20">
        <Link href={'/'} className="flex items-center">
          <HomeIcon className="mr-2"/>
          <span>Home</span>
        </Link>

        <div className="flex flex-1"></div>

        {
          navItems.map(navItem => (
            <ActiveLink
              key={navItem.path}
              path={navItem.path}
              text={navItem.text}
            />

          ))
        }
        
    </nav>
  )
}

