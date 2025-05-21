import styles from '@/app/components/common/footer/Footer.module.scss'
import { useRouter } from 'next/router'

const navItems = [
  {
    icon: 'home',
    link: '/'
  },
  {
    icon: 'explore',
    link: '/explore'
  },
  {
    icon: 'place',
    link: '/place'
  },
  {
    icon: 'person_outline',
    link: '/profile'
  }


]

const Footer = () => {
  const { push, pathname } = useRouter();
  console.log(styles, 'styles')
  return (
    <footer className={styles.footer}>
      <nav>
        {navItems.map(item =>
          <button className={pathname === item.link ? styles.active : null} onClick={() => push(item.link)} key={item.icon}>
            <span className='material-icons-outlined'>{item.icon}</span>
          </button>)}
      </nav>
    </footer>
  )
}

export default Footer