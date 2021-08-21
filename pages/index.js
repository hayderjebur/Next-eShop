import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <ul>
          <li>Priduct1</li>
          <li>Priduct2</li>
          <li>Priduct3</li>
        </ul>
      </div>
    </Layout>
  );
}
