import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.item}>
      <div>
        <h1 className={styles.title}>Better Design for your digital products.</h1>

        <p className={styles.desc}>Turning your Idea into Reality. We bring together the teams from the global tech industry.</p>

        <Button url="/portfolio" text="See Our Work"></Button>
        </div>
      </div>

      <div className={styles.item}>

        <Image src={Hero}  alt='' className={styles.img}></Image>

      </div>
      
    </div>
  )
}
