import logo from './logo.svg';
import './App.css'
import Card from './Card';
import './Card.css'


function App() {
  return (
    <div className="container">
      <div className='row'>
        <div className='col-12'>
        <div className='title' >
                <h1>Tic-Tac-Toe</h1>
            </div>
          <Card></Card>
          {/* <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card> */}
        </div>
      </div>
    </div>
  )
}

export default App;