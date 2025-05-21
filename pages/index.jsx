import Head from "next/head";
import styles from '../assets/styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Next</title>
                <meta name="desc" content="next app"/>
                <line rel='icon' href="fav.ico"/>
            </Head>
            <span className="material-icons">pie_chart</span>
        </div>
    )
}
