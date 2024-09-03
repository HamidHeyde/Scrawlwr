import { styled } from '@mui/system'
import { UpvoteApplication } from './components/UpvoteApplication'
import { UpvoteContextProvider } from './context/UpvoteContext'


const App = () => {
  return (
    <UpvoteContextProvider>
      <AppWrapper>
        <div className="headerWrapper">Scrawlr Technical assessment</div>
        <UpvoteApplication />
      </AppWrapper>
    </UpvoteContextProvider>
  )
}

export default App

const AppWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100wv',
  '& .headerWrapper': {
    width: '100%',
    height: '100px',
    color: '#253CF2',
    fontSize: '20px',
    fontWeight: '500',
    backgroundColor: '#E5E8FD',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
