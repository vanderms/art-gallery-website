import { Link } from 'remix';

export default function ButtonLink({ to }: { to: '/' | '/location' }) {
  const textContent = {
    '/location': 'OUR LOCATION',
    '/': 'BACK TO HOME',
  }[to];

  const className = {
    '/location': 'rt-button-link',
    '/': 'rt-button-link reverse',
  }[to];

  const arrow = {
    '/location': 'right',
    '/': 'left',
  }[to];

  return (
    <Link to={to} className={className}>
      <span className="text">{textContent}</span>
      <span className="pattern">
        <img
          src={`/assets/icon-arrow-${arrow}.svg`}
          alt=""
          className="arrow-pattern"
        />
      </span>
    </Link>
  );
}
