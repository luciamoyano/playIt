import Link from 'next/link';

export default function Navigation({naviTabs, currentPage}) {
    console.log(naviTabs)
    return (
    <nav>
        <Link href="/dashboard/musica">
          <a>Musica</a>
        </Link>
        <Link href="/dashboard/podcasts">
          <a>Podcasts</a>
        </Link>
        <div>
        {naviTabs && naviTabs.map((tab,key)=> {
            return (
                <Link href={`/dashboard/${currentPage}/${tab}`} key={key}>
                    <a>{tab}</a>
                </Link>
            )
        })}
        </div>
    </nav>
    )
}