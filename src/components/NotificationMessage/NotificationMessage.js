import s from './NotificationMessage.module.css';

export default function NotificationMessage({ text }) {
  return <p className={s.text}>{text}</p>;
}

NotificationMessage.defaultProps = {
  text: 'No feedback given',
};
