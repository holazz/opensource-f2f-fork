import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const episodeDirectory = join(process.cwd(), 'episodes')

export function getEpisodeSlugs() {
  return fs.readdirSync(episodeDirectory)
}

export function getEpisodeBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(episodeDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const items = { ...data, id: realSlug, slug: realSlug, content }
  return items
}

export function getAllEpisodes() {
  const slugs = getEpisodeSlugs()
  const episodes = slugs.map(slug => getEpisodeBySlug(slug))
  return JSON.stringify(episodes)
}
