import UnderConstruction from '../../assets/images/under-construction.svg'

function Home() {
  return (
    <div className="App" style={{display : 'flex', flexDirection: 'column'}}>
      <h1 style={{ textAlign: 'center', marginBottom: '32px', color: '#FF6060' }} >Site under construction</h1>
      <img src={UnderConstruction} style={{alignSelf : 'center', width:'80%'}} alt='site under construction'></img>
    </div>
  );
}

export default Home;
