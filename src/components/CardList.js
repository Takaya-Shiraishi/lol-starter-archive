import React from 'react';
import styles from './CardList.module.css';

const Card = ({ title, imageUrl}) => (
  <div className={styles.card}>
    <img src={'/lol-starter-archive/'+imageUrl} alt={title} />
    <h3>{title}</h3>
  </div>
);

const CardList = ({ cards }) => (
  <div className={styles.cardList}>
    {cards.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
);

export default CardList;
