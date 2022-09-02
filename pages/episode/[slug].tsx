import { useMemo } from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getAllEpisodes, getEpisodeBySlug } from '../../utils/episode'
import EpisodeMeta from '../../components/EpisodeMeta'
import markdownToHtml from '../../utils/markdown-to-html'

interface Props {
  episode: any
}

interface Params {
  params: {
    slug: any
  }
}

export async function getStaticProps({ params }: Params) {
  const episode = getEpisodeBySlug(params.slug)
  const content = await markdownToHtml(episode.content || '')

  return {
    props: {
      episode: JSON.stringify({
        ...episode,
        content,
      }),
    },
  }
}

export async function getStaticPaths() {
  const rawEpisodes = getAllEpisodes()
  const episodes = JSON.parse(rawEpisodes)

  return {
    paths: episodes.map((episode: any) => {
      return {
        params: {
          slug: episode.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default function Post({ episode: rawEpisode }: Props) {
  const episode = useMemo(() => {
    return JSON.parse(rawEpisode)
  }, [rawEpisode])
  const router = useRouter()
  if (!router.isFallback && !episode?.slug)
    return <ErrorPage statusCode={404} />

  return (
    <>
      {episode && (
        <div container mx-auto mt-5>
          <div mb-5>
            <h1 text-center text-2xl font-bold mb-2 v-html="episode.title" />
            <EpisodeMeta info={episode} justify-center />
          </div>
          <div dangerouslySetInnerHTML={{ __html: episode.content }} />
        </div>
      )}
    </>
  )
}
