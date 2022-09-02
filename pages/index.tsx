import { useMemo, useState } from 'react'
import EpisodeItem from '../components/EpisodeItem'
import { getAllEpisodes } from '../utils/episode'

interface Props {
  episodes: any
}

export const getStaticProps = async () => {
  const episodes = getAllEpisodes()
  return {
    props: { episodes },
  }
}

const Home = ({ episodes: rawEpisodes }: Props) => {
  const [sort, setSort] = useState<'asc' | 'desc'>('desc')

  const episodes = useMemo(() => {
    return JSON.parse(rawEpisodes).sort((a: any, b: any) => {
      return sort === 'asc'
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime()
    })
  }, [rawEpisodes, sort])

  const sortClass = useMemo(() => {
    return sort === 'asc'
      ? 'i-carbon-sort-descending'
      : 'i-carbon-sort-ascending'
  }, [sort])

  const handleSort = () => {
    setSort(sort => (sort === 'asc' ? 'desc' : 'asc'))
  }

  return (
    <>
      <div flex="~ row gap-2" justify-end items-center px-6 py-2>
        <div className={sortClass} cursor-pointer onClick={handleSort} />
      </div>
      <div flex="~ row wrap" justify-center>
        {episodes.map((episode: any, index: any) => (
          <EpisodeItem key={index} info={episode} />
        ))}
      </div>
    </>
  )
}

export default Home
