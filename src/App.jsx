import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import DisplayCounter from './components/DiplayCounter';
import Controls from './components/Controls';
import { useSelector } from 'react-redux';
import PrivacyMessage from './components/privacyMessage';

function App() {
  const isPrivacy = useSelector(store => store.privacy)
  
  return (
    <>  
      <div className="px-4 py-5 my-5 text-center custom-wrapper">
      <Header />
        <div className="col-lg-6 mx-auto">
        {!isPrivacy ? <DisplayCounter /> : <PrivacyMessage />}
          <Controls />
        </div>
      </div>
    </>
  )
}

export default App
