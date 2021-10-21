import s from './Section.module.css';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <div className={s.container}>
      {title && <h3 className={s.title}>{title}</h3>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
