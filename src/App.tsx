import UnderConstruction from './assets/images/underConstruction.svg'

function App() {
  return (
    <div className="App" style={{display : 'flex', flexDirection: 'column'}}>
      <h1 style={{ textAlign: 'center', marginBottom: '32px' }} >Site under construction</h1>
      <img src={UnderConstruction} style={{alignSelf : 'center'}} alt='site under construction'></img>
    </div>
  );
}

export default App;
