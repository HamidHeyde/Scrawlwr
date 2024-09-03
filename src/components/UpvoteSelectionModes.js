import { styled } from '@mui/system'
import { useUpvoteContext } from '../context/UpvoteContext'
import { upVoteModes } from '../constants/upvoteConstants'

export const UpvoteSelectionModes = ({ listIndex }) => {
  const { upVoteData, setUpVoteData } = useUpvoteContext()
  const { mode } = upVoteData[listIndex]

  const setMode = (index, selectionMode) => {
    setUpVoteData(
      upVoteData.map((upVote, i) =>
        i === index ? { ...upVote, mode: selectionMode } : upVote
      )
    )
  }

  return (
    <ModeWrapper>
      <label className="label selected">Up-votes Selection Modes</label>
      <div className="selectionModes">
        {upVoteModes.map((selectionMode, idx) => (
          <label
            key={`upvoteMode_${mode}_${idx}`}
            className={`label ${mode === selectionMode ? 'selected' : ''}`}
            onClick={() => setMode(listIndex, selectionMode)}
          >
            {selectionMode}
          </label>
        ))}
      </div>
    </ModeWrapper>
  )
}

const ModeWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  marginRight: '20px',
  gap: '3px',
  padding: '10px',
  '& .label': {
    fontSize: '13px',
    fontWeight: '500',
    color: '#343A40',
    backgroundColor: '#F4F6F8',
    width: '100%',
    padding: '5px',
    borderRadius: '5px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#E5E8FD',
      color: '#253CF2'
    }
  },
  '& .selected': {
    backgroundColor: '#E5E8FD',
    color: '#253CF2'
  },
  '& .selectionModes': {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'space-between',
    justifyContent: 'center',
    gap: '10px'
  }
})
