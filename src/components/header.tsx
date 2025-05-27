import Link from "next/link";
import Logo from '@/assets/logo.png'
import Image from "next/image";

import styles from './header.module.css';
import HeaderBackground from "./header-background";
import NavLink from "./nav-link";

export default function MainHeader () {

  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href='/'>
          <Image src={Logo.src} alt='Logo - a plate with food in it - Go to Home' width={100} height={100} />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">
                Browse Meals
              </NavLink>
            </li>
            <li>
              <NavLink href="/community" >
                Foodies Community
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>

  )
}