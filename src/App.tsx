import Button from './components/button/Button';
import Add from './icons/button/Add';

function App() {
  return (
    <div className="App">
      <Button>Primary solid</Button>
      <Button variant="outline" size="lg" colorType="info">Info</Button>
      <Button variant="text" size="lg" colorType="primary">Text</Button>
      <div className='text-h1'>Holaaaa</div>
      <h1>Holaaa</h1>
      <Button disabled>Primary solid</Button>
      <Button variant="outline" size="lg" colorType="primary" disabled>Info</Button>
      <Button variant="text" size="lg" colorType="primary" disabled>Text</Button>
      <h2>With icons</h2>
      <Button leftIcon={<Add/>} rightIcon={<Add />}>Primary solid</Button>
      <Button leftIcon={<Add/>} rightIcon={<Add />} variant={"text"} colorType={"info"}>Primary outline</Button>
    </div>
  );
}

export default App;
