import CardItem from './components/CardItem'

import './App.css'

const Cardlist = [
  {
    id: 1,
    title: 'Data Science',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'Iot developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
  },
  
]

const App = () => (
  <div className="container">
    <div className="containertwo">
      <h1 className="head">Learn 4.0 Technologies</h1>
      <p className="para">
        Get trained by alumini of IIts and top companies like
        Amazon,Microsoft,Intel,Nvidia,QualcomM,etc.Learn drirectly from
        professionals.
      </p>

      <ul className="card-list">
        {Cardlist.map(eachcard => (
          <CardItem cardDetails={eachcard} key={eachcard.id} />
        ))}
      </ul>
    </div>
  </div>
)

export default App
