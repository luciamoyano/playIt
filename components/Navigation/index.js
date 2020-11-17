import Link from "next/link";

export default function Navigation({ naviTabs, currentPage }) {
  return (
    <nav>
      <Link href="/musica">
        <a>Musica</a>
      </Link>
      <Link href="/podcasts">
        <a>Podcasts</a>
      </Link>
      <div>
        <ul>
          {naviTabs &&
            naviTabs.map((tab, key) => {
              return (
                <li key={key}>
                  <Link href={`/${currentPage}/${tab}`}>
                    <a>{tab}</a>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </nav>
  );
}
