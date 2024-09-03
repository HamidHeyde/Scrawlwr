import { styled } from '@mui/system'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const upVoteIcon = (active) => ({
  color: active ? '#253CF2' : '#343A40',
  backgroundColor: active ? '#E5E8FD' : '#F4F6F8',
  borderRadius: '5px',
  fontSize: '30px',
  padding: '5px',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '#E5E8FD',
    color: '#253CF2'
  }
})

export const UpvoteButton = ({ active, onClick }) => {
  const TheUpvoteButton = styled(ArrowUpwardIcon)(upVoteIcon(active))

  return <TheUpvoteButton onClick={onClick} />
}
