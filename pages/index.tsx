import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faRotate } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react'

export default function Home() {

  const [deg, setDeg] = useState(0);
  const onClick = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setDeg(deg === 0 ? 180 : 0);

  return (
    <>
      <Head>
        <title>KATO83</title>
        <meta name="description" content="KATO83's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
        {/* OGP */}
        <meta property="og:url" content="https://portfolio.pu10g.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="KATO83" />
        <meta property="og:description" content="KATO83's portfolio" />
        <meta property="og:site_name" content="KATO83" />
        <meta property="og:image" content="https://portfolio.pu10g.com/icon.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@http_kato83" />
        <meta name="twitter:creator" content="@http_kato83" />
      </Head>
      <main>
        <section className={styles.mainVisual}>
          <Image src={'mainvisual.svg'} alt="" width={1820} height={1080} className={styles.mainVisual__bgImage} />
          <div className={`${styles.nameCard} ${deg === 180 ? styles.rotate : ''}`} style={{ transform: `rotate(${deg}deg)` }}>
            <h1 className={styles.nameCard__heading}>
              <ruby className={styles.nameCard__firstName}>加藤<rt lang='en'>Kato</rt></ruby><ruby className={styles.nameCard__lastName}>友樹<rt lang='en'>Yuki</rt></ruby>
            </h1>
            <div className={styles.nameCard__meta}>
              <div className={styles.nameCard__qr}>
                <Image src={'qr.svg'} alt="QRコード" width={123} height={123} />
              </div>
              <div className={styles.nameCard__blog}><FontAwesomeIcon title='Blog' icon={faGlobe} style={{ width: '1.25rem' }} />
                {' '}<a href="https://www.pu10g.com" target='_blank' rel='noopener'>www.pu10g.com</a>
              </div>
              <div className={styles.nameCard__github}><FontAwesomeIcon title='GitHub' icon={faGithub} style={{ width: '1.25rem' }} />
                {' '}<a href="https://github.com/kato83" target='_blank' rel='noopener'>@kato83</a></div>
              <div className={styles.nameCard__twitter}><FontAwesomeIcon title='Twitter' icon={faTwitter} style={{ width: '1.25rem' }} />
                {' '}<a href="https://twitter.com/http_kato83" target='_blank' rel='noopener'>@http_kato83</a></div>
            </div>
          </div>
          <button onClick={onClick} className={styles.nameCardRotate} data-is-rotate={deg === 180 ? 'true' : 'false'}><FontAwesomeIcon title='名刺を回転する' icon={faRotate} style={{ width: '1.5rem' }} /></button>
        </section>
        <section className={styles.section}>
          <h1 className={styles.heading}>About</h1>
          <p className={styles.aboutParagraph}>東京電子専門学校 ウェブ・メディア科卒業の後、2018年度より株式会社キノトロープでアシスタントバックエンドエンジニアとして新卒入社。</p>
          <p className={styles.aboutParagraph}>現在は SE 及びバックエンド開発をメインとしていますが、社内リソースに応じて適宜フロントエンドの業務や AWS 上での環境構築も行っています。</p>
          <dl className={styles.definition}>
            <div className={styles.definition__item}>
              <dt><div>生まれ</div></dt>
              <dd>1997年09月生まれ（{getAge()}歳）</dd>
            </div>
            <div className={styles.definition__item}>
              <dt><div>出身</div></dt>
              <dd>埼玉県</dd>
            </div>
            <div className={styles.definition__item}>
              <dt><div>在住</div></dt>
              <dd>東京都</dd>
            </div>
            <div className={styles.definition__item}>
              <dt><div>好きなこと</div></dt>
              <dd>プログラミング, 読書, 自宅サーバー管理, etc.</dd>
            </div>
          </dl>
        </section>
        <section className={styles.section}>
          <h1 className={styles.heading}>Skils</h1>
          <h2>Backend</h2>
          <p>Java, Scala, PHP, MySQL<br />
            Docker, Spring Boot, Drupal 8-, Laravel, Linux (RHEL, Ubuntu, etc.)</p>
          <h2>Frontend</h2>
          <p>TypeScript, JavaScript, HTML, CSS<br />
            React, Vue, SCSS, webpack, jQuery, Pug</p>
          <h2>Other</h2>
          <p>設計, 要件定義, 非機能要件, AWS (EC2, ELB, RDS, S3, Dynamo DB, CloudSearch), etc.</p>
        </section>
        <section className={styles.section}>
          <h1 className={styles.heading}>Works</h1>
          <ul>
            <li>
              <h2>複数案件での大規模サイトの構築、改修</h2>
              <p>数々の数千～数万ページ単位の CMS を用いた大規模サイト制作に、バックエンドメイン開発担当として携わりました。</p>
            </li>
            <li>
              <h2>スクラッチのシステムの開発、改修</h2>
              <p>ログイン認証や外部システム連携などを必要とするイントラサイトや PIM 等のシステムを開発に携わりました。</p>
            </li>
            <li>
              <h2>各種ライブラリを用いた API サーバーの開発及びコンポーネント開発</h2>
              <p>Spring Boot や Laravel を用いた API サーバーの開発及び React や Vue.js を用いた API コンポーネントの作成を行いました。</p>
            </li>
            <li>
              <h2>内製ツールのリプレースを実施</h2>
              <p>約20年弱使用し続けてきたクライアントにパッケージの一部として納品するシステムのリプレースを提案及び実装を行いました。</p>
              <p>結果として、システムの描画速度の改善、業務効率化、属人化の解消の他多くのメリットを生み出すことができました。</p>
            </li>
            <li>
              <h2>Linux を用いた開発、本番環境構築及びメンテナンス</h2>
              <p>Amazon Linux 2 や RHEL 9 を用いた開発及び本番環境の構築及び各種ミドルウェアのアップデート等の保守メンテナンス等に携わりました。</p>
            </li>
          </ul>
        </section>
      </main>
      <footer className={styles.footer}>
        <small>&copy; 2023, KATO83 All rights reserved.</small>
      </footer>
    </>
  )
}


/**
 * 年齢計算
 * @returns 年齢
 */
const getAge = () => {
  const birthday = { year: 1997, month: 9, date: 3 }
  const today = new Date()
  const thisYearsBirthday = new Date(today.getFullYear(), birthday.month - 1, birthday.date)
  return today.getFullYear() - birthday.year + (today < thisYearsBirthday ? -1 : 0)
}
