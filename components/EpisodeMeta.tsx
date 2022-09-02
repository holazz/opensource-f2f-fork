import Badge from './Badge'
import PersonList from './PersonList'

interface Props {
  info: any
}

const EpisodeMeta = ({ info }: Props) => {
  return (
    <div flex="~ row gap-2">
      {info.hosts?.length && (
        <Badge icon={<div i-carbon-user-speaker />}>
          <PersonList persons={info.hosts} />
        </Badge>
      )}
      {info.guests?.length && (
        <Badge icon={<div i-carbon-user-multiple />}>
          <PersonList persons={info.guests} />
        </Badge>
      )}
    </div>
  )
}

export default EpisodeMeta
