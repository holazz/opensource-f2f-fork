import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/assets/logo.png'
import styles from '../styles/header.module.css'

// eslint-disable-next-line react/display-name
const Logo = React.forwardRef(({ onClick, href }: any, ref: any) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image src={logo} width={100} height={100} />
    </a>
  )
})

const Header = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document === 'undefined') return false
    return document.documentElement.classList.contains('dark')
  })

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [isDark])

  const toggleDark = () => {
    setIsDark(!isDark)
    localStorage.setItem('theme', isDark ? 'light' : 'dark')
  }
  return (
    <header
      className={`${styles.header} relative`}
      flex="~ row"
      h-240px
      w-full
      justify-center
    >
      <div flex="~ col gap-16px" justify-center items-center>
        <Link href="/">
          <Logo />
        </Link>
        <span>开源面对面，连接热爱开源的你！</span>
      </div>
      <div
        className="absolute"
        cursor-pointer
        right-5
        top-5
        i="dark:carbon-moon carbon-sun"
        text="black 2xl"
        onClick={toggleDark}
      />
    </header>
  )
}

export default Header
