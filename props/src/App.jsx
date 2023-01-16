import './App.css'
import Card from './components/Card'

import cat1 from './assets/mr-whiskerson.png'
import cat2 from './assets/fluffykins.png'
import cat3 from './assets/felix.png'
import cat4 from './assets/pumpkin.png'


function App() {
  return (
    <div className="App">
      <Card
        img={cat1}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Card
        img={cat2}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="luff@me.com"
      />
      <Card
        img={cat3}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Card
        img={cat4}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  )
}

export default App
