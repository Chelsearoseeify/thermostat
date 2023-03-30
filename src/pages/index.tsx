import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Thermostat</title>
				<meta name='description' content='Thermostat design' />
			</Head>
			<main className={styles.main}>
				<div className={styles.halo} />
				<div className={styles.button_edge} />
				<div className={styles.button_top}>21</div>
				<div className={styles.button_light} />
			</main>
		</>
	);
}
