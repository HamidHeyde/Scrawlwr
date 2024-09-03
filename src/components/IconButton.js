import { styled } from '@mui/system'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

const iconMapper = {
  add: AddIcon,
  remove: RemoveIcon
}

const actionIcons = {
  color: '#343A40',
  backgroundColor: '#F4F6F8',
  borderRadius: '5px',
  fontSize: '30px',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '#E5E8FD',
    color: '#253CF2'
  }
}

export const IconButton = ({ icon, onClick }) => {
  const TheIconButton = styled(iconMapper[icon])(actionIcons)

  return <TheIconButton onClick={onClick} />
}
