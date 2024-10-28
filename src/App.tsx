import Button from './components/button/Button';
import Add from './icons/button/Add';

function App() {
  return (
    <div className="App">
      <h1>Buttons example usage</h1>
      <h2>Active</h2>
      <Button>Primary solid</Button>
      <Button variant="outline" size="lg" colorType="info">Info</Button>
      <Button variant="text" size="lg" colorType="primary">Text</Button>
      <h2>Disabled buttons</h2>
      <Button disabled>Primary solid</Button>
      <Button variant="outline" size="lg" colorType="primary" disabled>Info</Button>
      <Button variant="text" size="lg" colorType="primary" disabled>Text</Button>
      <h2>With icons</h2>
      <Button leftIcon={<Add/>} rightIcon={<Add />} onClick={()=>{alert("Button pressed")}}>Button with action</Button>
      <Button leftIcon={<Add/>} rightIcon={<Add />} variant={"text"} colorType={"info"}>Primary outline</Button>
      <Button leftIcon={<Add/>} rightIcon={<Add />} variant={"outline"} colorType="primary" width='500px'>Override width</Button>
      <h2>Loading buttons</h2>
      <Button leftIcon={<Add/>} rightIcon={<Add />} loading>Primary solid</Button>
      <Button leftIcon={<Add/>} rightIcon={<Add />} loading variant="outline">Outline</Button>
      <Button rightIcon={<Add />} size="sm" loading>Primary solid</Button>
      <Button leftIcon={<Add/>} rightIcon={<Add />} size="sm" variant='text' colorType='info' loading>Info text</Button>
    </div>
  );
}

export default App;
