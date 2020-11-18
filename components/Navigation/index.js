import Link from "next/link";

export default function Navigation({ naviTabs, currentPage }) {
  return (
    <nav>
      <Link href="/musica/playlists">
        <a>Musica</a>
      </Link>
      <Link href="/podcasts/programas">
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
