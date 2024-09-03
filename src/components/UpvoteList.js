import { styled } from '@mui/system'
import { UpvoteSelectionModes } from './UpvoteSelectionModes'
import { useUpvoteContext } from '../context/UpvoteContext'
import { IconButton } from './IconButton'
import { UpvoteButton } from './UpvoteButton'
import { upVoteModes } from '../constants/upvoteConstants'

export const UpvoteList = ({ listIndex }) => {
  const { upVoteData, setUpVoteData } = useUpvoteContext()
  const { mode, data } = upVoteData[listIndex]
  const [SINGLE,] = upVoteModes

  const toggleUpVote = (listIndex, upvoteIndex) => {
    let newData = [...data]
    const newValue = !newData[upvoteIndex]

    mode === SINGLE
      ? (newData[upvoteIndex] = newValue)
      : (newData = newData.map((item) => newValue))

    setUpVoteData(
      upVoteData.map((upVote, i) =>
        i === listIndex ? { ...upVote, data: [...newData] } : upVote
      )
    )
  }

  const addUpVote = (listIndex) => {
    const newData = mode=== SINGLE 
      ? [...data, false]
      : [...data, data[data.length-1]]

    setUpVoteData(
      upVoteData.map((upVote, i) =>
        i === listIndex ? { ...upVote, data: [...newData] } : upVote
      )
    )
  }

  const removeUpVote = (listIndex) => {
    const newData = [...data]
    newData.pop()

    newData.length
      ? setUpVoteData(
          upVoteData.map((upVote, i) =>
            i === listIndex ? { ...upVote, data: [...newData] } : upVote
          )
        )
      : setUpVoteData(upVoteData.filter((upVote, i) => i !== listIndex))
  }

  return (
    <UpvoteListWrapper>
      <UpvoteSelectionModes listIndex={listIndex} />
      <div className="upvoteListItems">
        {data.map((active, upvoteIndex) => (
          <UpvoteButton
            key={`${listIndex}_upvote_${upvoteIndex}`}
            active={active}
            onClick={() => toggleUpVote(listIndex, upvoteIndex)}
          />
        ))}
      </div>
      <IconButton icon="add" onClick={() => addUpVote(listIndex)} />
      <IconButton icon="remove" onClick={() => removeUpVote(listIndex)} />
    </UpvoteListWrapper>
  )
}

const UpvoteListWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  gap: '10px',
  padding: '15px',
  borderBottom: '1px solid #e9e9e9',
  '@media (max-width:550px)': {
    flexDirection: 'column'
  },
  '& .upvoteListItems': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    padding: '15px',
    border: '2px solid #e9e9e9',
    borderRadius: '15px'
  }
})
