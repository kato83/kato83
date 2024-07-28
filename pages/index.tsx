import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faRotate, faXmark } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react'
import { useModal } from 'react-hooks-use-modal'
import {
  siTypescript,
  siOpenjdk,
  siScala,
  siPhp,
  siMysql,
  siDocker,
  siSpringboot,
  siDrupal,
  siLaravel,
  siLinux,
  siJavascript,
  siHtml5,
  siAngular,
  siReact,
  siVuedotjs,
  siSass,
  siWebpack,
  siJquery,
  siPug,
  siTailwindcss,
} from 'simple-icons';

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
          <Image src={'/mainvisual.webp'} alt="" width={1920} height={1280} className={styles.mainVisual__bgImage} />
          <div className={`${styles.nameCard} ${deg % 360 === 180 ? styles.rotate : ''}`} style={{ transform: `rotate(${deg}deg)`, transition: deg === 0 ? 'none' : undefined }}>
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
          <dl className={styles.definition}>
            <div className={styles.definition__item}>
              <dt><div>出生</div></dt>
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
              <dt><div>趣味</div></dt>
              <dd>写真撮影, プログラミング, 読書, ダーツ, 自宅サーバー管理, etc.</dd>
            </div>
            <div className={styles.definition__item}>
              <dt><div>経歴</div></dt>
              <dd>
                <ul>
                  <li>2016.04-2018.03 東京電子専門学校 ウェブ・メディア科（卒業）</li>
                  <li>2018.04-2023.03 株式会社キノトロープ 開発部</li>
                  <li>2023.07-現在 株式会社セキュアスカイ・テクノロジー</li>
                  <li>2024.04-現在 東京電子専門学校 非常勤講師</li>
                </ul>
              </dd>
            </div>
          </dl>
          <p>東京電子専門学校 ウェブ・メディア科卒業の後、2018年度より株式会社キノトロープでアシスタントバックエンドエンジニアとして新卒入社し、バックエンド開発をメインとしつつ、社内リソースに応じて適宜フロントエンドの業務や AWS 上での環境構築業務を担当。</p>
          <p>2023年度より株式会社セキュアスカイ・テクノロジーへ転職し、サービスプロダクト開発全般の業務を受け持つ。</p>
        </section>
        <section className={styles.section}>
          <h1 className={styles.heading}>Skils</h1>
          <h2>Backend</h2>
          <div className={styles.card}>
            <div className={styles.card__item}><div className={styles.card__tag}>🌟🌟🌟</div>
              <div className={styles.card__image}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={`#${siOpenjdk.hex}`}>
                  <path d={siOpenjdk.path} />
                </svg>
              </div>
              <div className={styles.card__text}><h3>Java</h3></div>
            </div>
            <div className={styles.card__item}><div className={styles.card__tag}>🌟</div>
              <div className={styles.card__image}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={`#${siScala.hex}`}>
                  <path d={siScala.path} />
                </svg>
              </div>
              <div className={styles.card__text}><h3>Scala</h3></div>
            </div>
            <div className={styles.card__item}><div className={styles.card__tag}>🌟🌟🌟</div>
              <div className={styles.card__image}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={`#${siPhp.hex}`}>
                  <path d={siPhp.path} />
                </svg>
              </div>
              <div className={styles.card__text}><h3>PHP</h3></div>
            </div>
            <div className={styles.card__item}><div className={styles.card__tag}>🌟🌟🌟</div>
              <div className={styles.card__image}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={`#${siMysql.hex}`}>
                  <path d={siMysql.path} />
                </svg>
              </div>
              <div className={styles.card__text}><h3>MySQL</h3></div>
            </div>
            <div className={styles.card__item}><div className={styles.card__tag}>🌟🌟</div>
              <div className={styles.card__image}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={`#${siDocker.hex}`}>
                  <path d={siDocker.path} />
                </svg>
              </div>
              <div className={styles.card__text}><h3>Docker</h3></div>
            </div>
            <div className={styles.card__item}><div className={styles.card__tag}>🌟🌟🌟</div>
              <div className={styles.card__image}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={`#${siSpringboot.hex}`}>
                  <path d={siSpringboot.path} />
                </svg>
              </div>
              <div className={styles.card__text}><h3>Spring Boot</h3></div>
            </div>
            <div className={styles.card__item}><div className={styles.card__tag}>🌟🌟🌟</div>
              <div className={styles.card__image}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={`#${siDrupal.hex}`}>
                  <path d={siDrupal.path} />
                </svg>
              </div>
              <div className={styles.card__text}><h3>Drupal</h3></div>
            </div>
            <div className={styles.card__item}><div className={styles.card__tag}>🌟</div>
              <div className={styles.card__image}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={`#${siLaravel.hex}`}>
                  <path d={siLaravel.path} />
                </svg>
              </div>
              <div className={styles.card__text}><h3>Laravel</h3></div>
            </div>
            <div className={styles.card__item}><div className={styles.card__tag}>🌟🌟</div>
              <div className={styles.card__image}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={`#${siLinux.hex}`}>
                  <path d={siLinux.path} />
                </svg>
              </div>
              <div className={styles.card__text}><h3>Linux</h3></div>
            </div>
          </div>
          {/* RHEL, Ubuntu, etc. */}
          <h2>Frontend</h2>
          <div className={styles.card}>
            <div className={styles.card__item}><div className={styles.card__tag}>🌟🌟🌟</div>
              <div className={styles.card__image}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={`#${siTypescript.hex}`}>
                  <path d={siTypescript.path} />
                </svg>
              </div>
              <div className={styles.card__text}><h3>TypeScript</h3></div>
            </div>
            <div className={styles.card__item}><div className={styles.card__tag}>🌟🌟🌟</div>
              <div className={styles.card__image}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={`#${siJavascript.hex}`}>
                  <path d={siJavascript.path} />
                </svg>
              </div>
              <div className={styles.card__text}><h3>JavaScript</h3></div>
            </div>
            <div className={styles.card__item}><div className={styles.card__tag}>🌟🌟🌟</div>
              <div className={styles.card__image}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={`#${siHtml5.hex}`}>
                  <path d={siHtml5.path} />
                </svg>
              </div>
              <div className={styles.card__text}><h3>HTML</h3></div>
            </div>
            <div className={styles.card__item}><div className={styles.card__tag}>🌟🌟🌟</div>
              <div className={styles.card__image}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={`#${siAngular.hex}`}>
                  <path d={siAngular.path} />
                </svg>
              </div>
              <div className={styles.card__text}><h3>Angular</h3></div>
            </div>
            <div className={styles.card__item}><div className={styles.card__tag}>🌟🌟🌟</div>
              <div className={styles.card__image}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={`#${siTailwindcss.hex}`}>
                  <path d={siTailwindcss.path} />
                </svg>
              </div>
              <div className={styles.card__text}><h3>Tailwind CSS</h3></div>
            </div>
            <div className={styles.card__item}><div className={styles.card__tag}>🌟🌟🌟</div>
              <div className={styles.card__image}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={`#${siReact.hex}`}>
                  <path d={siReact.path} />
                </svg>
              </div>
              <div className={styles.card__text}><h3>React</h3></div>
            </div>
            <div className={styles.card__item}><div className={styles.card__tag}>🌟🌟</div>
              <div className={styles.card__image}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={`#${siVuedotjs.hex}`}>
                  <path d={siVuedotjs.path} />
                </svg>
              </div>
              <div className={styles.card__text}><h3>Vue.js</h3></div>
            </div>
            <div className={styles.card__item}><div className={styles.card__tag}>🌟🌟</div>
              <div className={styles.card__image}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={`#${siSass.hex}`}>
                  <path d={siSass.path} />
                </svg>
              </div>
              <div className={styles.card__text}><h3>Sass</h3></div>
            </div>
            <div className={styles.card__item}><div className={styles.card__tag}>🌟🌟</div>
              <div className={styles.card__image}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={`#${siWebpack.hex}`}>
                  <path d={siWebpack.path} />
                </svg>
              </div>
              <div className={styles.card__text}><h3>webpack</h3></div>
            </div>
            <div className={styles.card__item}><div className={styles.card__tag}>🌟</div>
              <div className={styles.card__image}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={`#${siJquery.hex}`}>
                  <path d={siJquery.path} />
                </svg>
              </div>
              <div className={styles.card__text}><h3>jQuery</h3></div>
            </div>
            <div className={styles.card__item}><div className={styles.card__tag}>🌟🌟</div>
              <div className={styles.card__image}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={`#${siPug.hex}`}>
                  <path d={siPug.path} />
                </svg>
              </div>
              <div className={styles.card__text}><h3>Pug</h3></div>
            </div>
          </div>
          <h2>Other</h2>
          <p>設計, 要件定義, 非機能要件, AWS (EC2, ELB, RDS, S3, Dynamo DB, CloudSearch), CI/CD (GitHub Actions, GitLab Runner), etc.</p>
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
            <li>
              <h2>新規サービス立ち上げ</h2>
              <p>新規サービス開発の立ち上げに参画し、開発メンバーの統率をしつつ、ソースレビューを始めとする品質担保の実施。</p>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h1 className={styles.heading}>Contact, Links</h1>
          <div className={styles.card}>
            <a href='https://github.com/kato83' target='_blank' rel='noopener' className={styles.card__item}>
              <div className={styles.card__text}><h3>GitHub</h3></div>
            </a>
            <a href='https://twitter.com/http_kato83' target='_blank' rel='noopener' className={styles.card__item}>
              <div className={styles.card__text}><h3>Twitter</h3></div>
            </a>
            <a href='https://www.pu10g.com' target='_blank' rel='noopener' className={styles.card__item}>
              <div className={styles.card__text}><h3>Blog</h3></div>
            </a>
          </div>

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
