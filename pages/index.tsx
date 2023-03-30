import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Menu from '../components/Menu';
import Section from '../components/Section';
import content from '../content.json';

export default function Home() {
  return (
    <div className={styles.portfolio}>
      <Head>
        <title>{content.title}</title>
        <link rel="icon" href="/favicon.ico" />
        {Object.keys(content.meta).map((key, _) => {
          return <meta name={key} content={content.meta[key]} />;
        })}
      </Head>

      <aside>
        <Menu {...content.menu} />
      </aside>

      <main>
        {content.sections.map((section, _) => {
          return <Section key={section.anchor} {...section} />;
        })}
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            background-color: #141627;
            color: #d9d9d9;
        }
      `}</style>
    </div>
  )
}
