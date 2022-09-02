import Link from 'next/link'
import { format } from 'date-fns'
import styles from '../styles/episode-item.module.css'
import EpisodeMeta from './EpisodeMeta'

interface Props {
  info: any
}

const EpisodeItem = ({ info }: Props) => {
  return (
    <div
      min-w-300px
      max-w-480px
      flex="~ col gap-2 1"
      items-center
      px-6
      py-4
      className={styles['episode-item']}
    >
      <div flex="~" justify-between w-full font-mono>
        <span>{info.id}</span>
        <span flex="~ gap-1" items-center>
          <div i-carbon-calendar />
          {format(new Date(info.date), 'yyyy-MM-dd')}
        </span>
      </div>

      <Link as={`/episode/${info.slug}`} href="/episode/[slug]">
        <h2
          text="20px center"
          font-500
          cursor-pointer
          dangerouslySetInnerHTML={{ __html: info.title }}
        ></h2>
      </Link>

      <EpisodeMeta info={info} />

      <span font-400 text-15px line-clamp-5>
        {info.description}
      </span>
    </div>
  )
}

export default EpisodeItem
