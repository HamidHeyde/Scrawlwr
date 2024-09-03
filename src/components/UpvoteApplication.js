import { styled } from '@mui/system'
import { UpvoteList } from './UpvoteList'
import { useUpvoteContext } from '../context/UpvoteContext'

export const UpvoteApplication = () => {
  const { upVoteData, setUpVoteData } = useUpvoteContext()

  const addUpvoteList = () => {
    setUpVoteData([...upVoteData, { mode: 'Single', data: [false] }])
  }

  return (
    <UpvoteWrapper>
      <button className="addListButton" onClick={addUpvoteList}>
        Add Upvote List
      </button>
      <div className="upvoteListsWrapper">
        {upVoteData.map((_, listIndex) => (
          <UpvoteList key={`upVoteList_${listIndex}`} listIndex={listIndex} />
        ))}
      </div>
    </UpvoteWrapper>
  )
}

const UpvoteWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '35px',
  gap: '20px',
  '& .addListButton': {
    width: '100%',
    height: '40px',
    backgroundColor: '#E5E8FD',
    color: '#253CF2',
    border: 'none',
    borderRadius: '5px',
    fontSize: '15px',
    fontWeight: '500',
    '&:hover': {
      cursor: 'pointer'
    },
    '&:active': {
      color: '#343A40',
      backgroundColor: '#F4F6F8'
    }
  },
  '& .upvoteListsWrapper': {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '15px'
  }
})
