import sources from '../utils/sources';

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={className}>
      <h3>Sorgenti</h3>

      <ul className="flex flex-col gap-1">
        {sources.map((source) => (
          <li className="underline" id={source.link}>
            <a href={source.link} rel="noopener noreferrer">
              {source.title}
            </a>
          </li>
        ))}
      </ul>

      <p>
        Sito fatto da{' '}
        <a href="https://github.com/Zekumoru" rel="noopener noreferrer">
          Zekumoru
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
