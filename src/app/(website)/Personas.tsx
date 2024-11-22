'use client';
import { Icon, Icons, Text } from '@umami/react-zen';
import TextBlock from '@/components/TextBlock';
import LinkButton from '@/components/LinkButton';
import styles from './Personas.module.css';

const items = [
  {
    title: 'Creators',
    description: 'Measure everything you need to help improve your website.',
    image: '/images/creators.jpg',
    url: '/product/creators',
  },
  {
    title: 'Marketers',
    description: 'Easily measure the effectiveness of your campaigns.',
    image: '/images/marketers.jpg',
    url: '/product/marketers',
  },
  {
    title: 'Agencies',
    description: 'Bring value to your clients by delivering insights into their data',
    image: '/images/agencies.jpg',
    url: '/product/agencies',
  },
];

export default function Personas() {
  return (
    <section className={styles.container}>
      <TextBlock align="center" size="lg">
        <h1>Built for you</h1>
      </TextBlock>
      <div className={styles.items}>
        {items.map(({ title, description, image, url }) => {
          return (
            <div key={title} className={styles.card}>
              <div className={styles.image}>
                <img src={image} alt="" />
              </div>
              <TextBlock size="sm" align="center">
                <h1>{title}</h1>
                <p>{description}</p>
              </TextBlock>
              <div className={styles.button}>
                <LinkButton href={url} variant="secondary">
                  <Text>Learn more </Text>
                  <Icon>
                    <Icons.Arrow />
                  </Icon>
                </LinkButton>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
