import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faRotate, faXmark } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react'
import { useModal } from 'react-hooks-use-modal'

export default function Home() {

  const [deg, setDeg] = useState(0);
  const [modalType, setModalType] = useState('');
  const onClick = (_: React.MouseEvent<HTMLButtonElement>) => setDeg(deg + 180);
  const [Modal, open, close] = useModal('modal', {
    preventScroll: false,
    focusTrapOptions: {
      clickOutsideDeactivates: true,
    },
  });
  const openQrCode = (_: React.MouseEvent<HTMLImageElement>) => {
    setModalType('QR');
    open();
  }
  const end = (_: React.TransitionEvent<HTMLButtonElement>) => setDeg(deg % 360 === 0 ? 0 : deg);

  return (
    <>
      <Head>
        <title>KATO83</title>
        <meta name="description" content="KATO83's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
          <Image src={'/mainvisual.svg'} alt="" width={1820} height={1080} className={styles.mainVisual__bgImage} />
          <div className={`${styles.nameCard} ${deg === 180 ? styles.rotate : ''}`} style={{ transform: `rotate(${deg}deg)`, transition: deg === 0 ? 'none' : undefined }}>
            <h1 className={styles.nameCard__heading}>
              <ruby>加藤<rt lang='en'>Kato</rt></ruby><ruby className={styles.nameCard__lastName}>友樹<rt lang='en'>Yuki</rt></ruby>
            </h1>
            <div className={styles.nameCard__meta}>
              <div className={styles.nameCard__qr}>
                <Image src={'/qr.svg'} alt="QRコード" width={123} height={123} onClick={openQrCode} />
              </div>
              <div><FontAwesomeIcon title='Blog' icon={faGlobe} style={{ width: '1.25rem' }} />
                {' '}<a href="https://www.pu10g.com" target='_blank' rel='noopener'>www.pu10g.com</a>
              </div>
              <div><FontAwesomeIcon title='GitHub' icon={faGithub} style={{ width: '1.25rem' }} />
                {' '}<a href="https://github.com/kato83" target='_blank' rel='noopener'>@kato83</a></div>
              <div><FontAwesomeIcon title='Twitter' icon={faTwitter} style={{ width: '1.25rem' }} />
                {' '}<a href="https://twitter.com/http_kato83" target='_blank' rel='noopener'>@http_kato83</a></div>
            </div>
          </div>
          <button onClick={onClick} onTransitionEnd={end} className={styles.nameCardRotate} style={{ transform: `rotate(${deg}deg)`, transition: deg === 0 ? 'none' : undefined }}><FontAwesomeIcon title='名刺を回転する' icon={faRotate} style={{ width: '1.5rem' }} /></button>
        </section>
        <section className={styles.section}>
          <Modal>
            <div className={styles.modal}>
              {modalType === 'QR' ? <div style={{ transform: `rotate(${deg}deg)`, transition: deg === 0 ? 'none' : undefined }}>
                <div style={{ marginBottom: '1rem', textAlign: 'right' }}>
                  <button className={styles.modal__close} onClick={close} aria-label='CLOSE'><FontAwesomeIcon title='CLOSE' icon={faXmark} style={{ width: '1.25rem' }} /></button>
                </div>
                <Image src={'qr.svg'} alt="QRコード" width={123} height={123} className={styles.modalQrImage} />
              </div>
                : <></>}
            </div>
          </Modal>
          <h1 className={styles.heading}>About</h1>
          <p>東京電子専門学校 ウェブ・メディア科卒業の後、2018年度より株式会社キノトロープでアシスタントバックエンドエンジニアとして新卒入社。</p>
          <p>現在は SE 及びバックエンド開発をメインとしていますが、社内リソースに応じて適宜フロントエンドの業務や AWS 上での環境構築も行っています。</p>
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
          <div className={styles.card}>
            <div className={styles.card__item}><div className={styles.card__image}><Image src='/asset/java.webp' alt='java' width={250} height={404} /></div><div className={styles.card__text}><h3>Java <small>(☆☆☆)</small></h3></div></div>
            <div className={styles.card__item}><div className={styles.card__image}><Image src='/asset/scala.webp' alt='scala' width={250} height={404} /></div><div className={styles.card__text}><h3>Scala <small>(☆)</small></h3></div></div>
            <div className={styles.card__item}><div className={styles.card__image}><Image src='/asset/php.webp' alt='php' width={250} height={404} /></div><div className={styles.card__text}><h3>PHP <small>(☆☆☆)</small></h3></div></div>
            <div className={styles.card__item}><div className={styles.card__image}><Image src='/asset/mysql.webp' alt='mysql' width={250} height={404} /></div><div className={styles.card__text}><h3>MySQL <small>(☆☆☆)</small></h3></div></div>
            <div className={styles.card__item}><div className={styles.card__image}><Image src='/asset/docker.webp' alt='docker' width={250} height={404} /></div><div className={styles.card__text}><h3>Docker <small>(☆☆)</small></h3></div></div>
            <div className={styles.card__item}><div className={styles.card__image}><Image src='/asset/spring.webp' alt='spring boot' width={250} height={404} /></div><div className={styles.card__text}><h3>Spring Boot <small>(☆☆☆)</small></h3></div></div>
            <div className={styles.card__item}><div className={styles.card__image}><Image src='/asset/drupal.webp' alt='drupal' width={250} height={404} /></div><div className={styles.card__text}><h3>Drupal <small>(☆☆☆)</small></h3></div></div>
            <div className={styles.card__item}><div className={styles.card__image}><Image src='/asset/laravel.webp' alt='laravel' width={250} height={404} /></div><div className={styles.card__text}><h3>Laravel <small>(☆)</small></h3></div></div>
            <div className={styles.card__item}><div className={styles.card__image}><Image src='/asset/linux.webp' alt='linux' width={250} height={404} /></div><div className={styles.card__text}><h3>Linux <small>(☆☆)</small></h3></div></div>
          </div>
          {/* RHEL, Ubuntu, etc. */}
          <h2>Frontend</h2>
          <div className={styles.card}>
            <div className={styles.card__item}><div className={styles.card__image}><Image src='/asset/typescript.webp' alt='typescript' width={250} height={404} /></div><div className={styles.card__text}><h3>TypeScript <small>(☆☆☆)</small></h3></div></div>
            <div className={styles.card__item}><div className={styles.card__image}><Image src='/asset/javascript.webp' alt='javascript' width={250} height={404} /></div><div className={styles.card__text}><h3>JavaScript <small>(☆☆☆)</small></h3></div></div>
            <div className={styles.card__item}><div className={styles.card__image}><Image src='/asset/html5.webp' alt='html5 & css' width={250} height={404} /></div><div className={styles.card__text}><h3>HTML & CSS <small>(☆☆)</small></h3></div></div>
            <div className={styles.card__item}><div className={styles.card__image}><Image src='/asset/react.webp' alt='react' width={250} height={404} /></div><div className={styles.card__text}><h3>React <small>(☆☆☆)</small></h3></div></div>
            <div className={styles.card__item}><div className={styles.card__image}><Image src='/asset/vue.webp' alt='vue' width={250} height={404} /></div><div className={styles.card__text}><h3>Vue.js <small>(☆☆)</small></h3></div></div>
            <div className={styles.card__item}><div className={styles.card__image}><Image src='/asset/sass.webp' alt='sass' width={250} height={404} /></div><div className={styles.card__text}><h3>Sass <small>(☆)</small></h3></div></div>
            <div className={styles.card__item}><div className={styles.card__image}><Image src='/asset/webpack.webp' alt='webpack' width={250} height={404} /></div><div className={styles.card__text}><h3>webpack <small>(☆☆)</small></h3></div></div>
            <div className={styles.card__item}><div className={styles.card__image}><Image src='/asset/jquery.webp' alt='jquery' width={250} height={404} /></div><div className={styles.card__text}><h3>jQuery <small>(☆)</small></h3></div></div>
            <div className={styles.card__item}><div className={styles.card__image}><Image src='/asset/pug.webp' alt='pug' width={250} height={404} /></div><div className={styles.card__text}><h3>Pug <small>(☆☆)</small></h3></div></div>
          </div>
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
      <div id='modal'></div>
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
