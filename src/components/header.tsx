import Link from "next/link";
import Logo from '@/assets/logo.png'
import Image from "next/image";

import styles from './header.module.css';
import HeaderBackground from "./header-background";

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
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>

  )
}