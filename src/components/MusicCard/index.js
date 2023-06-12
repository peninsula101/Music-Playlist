import {
  MusicCardItemBg,
  SongImageCard,
  SongImage,
  NameBgCard,
  SongName,
  AlbumName,
  DurationCard,
  Time,
  DeleteButton,
  DeleteIcon,
} from './styledComponents'

const MusicCard = props => {
  const {eachSong, deleteSongAlbum} = props
  const {id, imageUrl, name, genre, duration} = eachSong

  const onClickDeleteButton = () => deleteSongAlbum(id)

  return (
    <MusicCardItemBg>
      <SongImageCard>
        <SongImage alt="track" src={imageUrl} />
        <NameBgCard>
          <SongName>{name}</SongName>
          <AlbumName>{genre}</AlbumName>
        </NameBgCard>
      </SongImageCard>
      <DurationCard>
        <Time>{duration}</Time>
        <DeleteButton
          data-testid="delete"
          onClick={onClickDeleteButton}
          type="button"
        >
          <DeleteIcon />
        </DeleteButton>
      </DurationCard>
    </MusicCardItemBg>
  )
}

export default MusicCard
