import Head from 'next/head'
import Link from 'next/link'
import { Montserrat } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import footer from '../styles/Footer.module.scss';
import React from 'react'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return <>
    <Head>
      <title>KATO83</title>
      <meta name="description" content="Kato83's portfolio site" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <div className={`${montserrat.className} ${styles.mainVisual}`}>
        <img className={styles.mainVisualImage}
          src="https://avatars.githubusercontent.com/u/24907348?s=72"
          width="72"
          height="72"
          alt="portfolio profile image" />
        <span className={styles.mainVisualText}>KATO83</span>
      </div>
      <ul className={styles.nav}>
        <li className={`${styles.navItem} ${montserrat.className}`}>About</li>
        <li className={`${styles.navItem} ${montserrat.className}`}>Skils</li>
        <li className={`${styles.navItem} ${montserrat.className}`}>Works</li>
        <li className={`${styles.navItem} ${montserrat.className}`}>Link</li>
      </ul>
      <section className={styles.section}>
        <h1 className={`${montserrat.className} ${styles.heading}`}>About</h1>
        <p className={styles.aboutParagraph}>都内専門学校 Web 科卒業の後、2018年度より株式会社キノトロープでアシスタントバックエンドエンジニアとして新卒入社。</p>
        <p className={styles.aboutParagraph}>現在はバックエンドエンジニア兼 SE として従事。</p>
        <p className={styles.aboutParagraph}>社内リソースに応じて適宜フロントエンドの業務や AWS 上での環境構築も行っています。</p>
        <hr className={styles.horizontalLine} />
        <dl className={styles.definition}>
          <dt>生まれ</dt>
          <dd>1997年09月生まれ（{getAge()}歳）</dd>
          <dt>出身</dt>
          <dd>埼玉県</dd>
          <dt>在住</dt>
          <dd>東京都</dd>
          <dt>好きなこと</dt>
          <dd>プログラミング, 読書, 自宅サーバー管理, etc.</dd>
        </dl>
      </section>
      <section className={styles.section}>
        <h1 className={`${montserrat.className} ${styles.heading}`}>Skils</h1>
        <p>Java, PHP, TypeScript, JavaScript, MySQL, Docker, Spring Boot, Drupal 8-, React, Vue, Linux (Ubuntu, RHEL, etc.), HTML, CSS, SCSS, webpack, jQuery, Pug, AWS</p>
        <p>設計, 要件定義, 非機能要件, etc.</p>
      </section>
      <section>
        <h1 className={`${montserrat.className} ${styles.heading}`}>Works</h1>
      </section>
      <section>
        <h1 className={`${montserrat.className} ${styles.heading}`}>Link</h1>
        <ul>
          <li><a href="https://github.com/kato83" rel="noopener" target="_blank">GitHub</a></li>
          <li><a href="https://twitter.com/http_kato83" rel="noopener" target="_blank">Twitter</a></li>
          <li><a href="https://www.pu10g.com" rel="noopener" target="_blank">Blog</a></li>
        </ul>
      </section>
    </main>
    <Footer />
  </>
}

type FooterProps = React.ComponentProps<'footer'>;
export function Footer({ className = '', ...props }: FooterProps) {
  return <>
    <footer {...props}
      className={`${className} ${footer.footer} ${montserrat.className}`.trim()}>
      <small>&copy;2022- KATO83.</small>
    </footer>
  </>
}

/**
 * 年齢計算
 * @returns 年齢
 */
function getAge() {
  const today = new Date()
  const birth = { year: 1997, month: 9 }
  const thisYearsBirth = new Date(today.getFullYear(), birth.month)
  const age = today.getFullYear() - birth.year - (today < thisYearsBirth ? -1 : 0)
  return age;
}
