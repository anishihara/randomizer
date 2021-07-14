import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { pickSelection } from '../services/randomizerService'

export default function Home() {
  const [text, setText] = useState('');
  const [randomizedValues, setRandomizedValues] = useState([]);

  const onChangeTextArea = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setText(value)
    console.log(value);
  }
  const onRandomize = () => {
    const items = text.split('\n');
    const selectedItems = pickSelection({ items, numberOfSelectedItems: 3 });
    console.log(selectedItems)
    setRandomizedValues(selectedItems);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Randomizer</title>
        <meta name="description" content="Pick a random selection from the text." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <textarea type="text" onChange={onChangeTextArea} style={{
          // position: "fixed",
          // left: "10px", top: "0px",
          // bottom: "50px",
          width: "95vw",      /* calc and viewport to the rescue */
          height: "75vh",
          resize: "none",
        }} />
        <button onClick={onRandomize}>Randomize!</button>
        {randomizedValues.length >= 0 &&
          <ul>
          {randomizedValues.map((value,index) => {
            return <li key={index}>{value}</li>
          })
          }
          </ul>
        }
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
