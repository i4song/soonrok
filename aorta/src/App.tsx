import mainPageLogo from './assets/main_page_logo.png'
import { ThemeProvider } from '@mui/material/styles'
import GlobalTheme from './GlobalTheme'
import { Box, Grid, Typography } from '@mui/material'

function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={8}>
        <Grid item sx={{ 
          width: '600px', 
          height: "auto",
          '@media (max-width: 1080px)': {
            width: '500px',
          },
          '@media (max-width: 600px)': {
            width: '400px',
          },
        }}>
          <Box component="img" src={mainPageLogo} alt="Main Page logo" sx={{ objectFit: 'cover', width: '100%', height: '100%'}}/>
        </Grid>
        <Grid item sx={{ 
          width: '480px', 
          height: "auto",
          '@media (max-width: 600px)': {
            width: '400px',
          },
        }}>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1">순록: 정성을 기록하다.</Typography>
              <Typography variant="body1">어쩌면 많지 않을지도 모른다.<br/>
                        진정한 이름을 위한 단어는.<br/>
                        오직 한 단어일지라도.<br/>
                        그리고 그것이 우리에게 필요한 전부일지라도.<br/>
                        그것이 여기 이 연필 안에 있다.</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body1">연필 _ W. S. 머윈</Typography>
            </Grid>
            
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
