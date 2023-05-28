import mainPageLogo from './assets/main_page_logo.png'
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import Button from './components/Button'

function App() {

  return (
    <>
      <div style = {{display: 'flex', placeItems: 'center', width: '90vw', justifyContent: 'space-between'}}>
        <div>
          <img src={mainPageLogo} className="logo" alt="Main Page logo" style={{width: '40vw'}} />
        </div>
        <div style = {{width: '32vw', marginRight: '8vw'}}>
          <Heading>순록: 정성을 기록하다.</Heading>
          <Paragraph>어쩌면 많지 않을지도 모른다.<br/>
                    진정한 이름을 위한 단어는.<br/>
                    오직 한 단어일지라도.<br/>
                    그리고 그것이 우리에게 필요한 전부일지라도.<br/>
                    그것이 여기 이 연필 안에 있다.</Paragraph>
          <div style = {{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
            <Paragraph>연필 _ W. S. 머윈</Paragraph>
            <Button>시작하기</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
