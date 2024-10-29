import styles from './index.module.css';

type Props = {
  name: string;
};

export default function NoMarginInComponentGoodItem({ name }: Props) {
  return <div className={styles.card}>{name}</div>;
}
