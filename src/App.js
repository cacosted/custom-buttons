import './App.css';
import Button from "./components/Button";
import ButtonList from './components/ButtonList';

export default function App() {
  return ( 
    <section className='App-container'>
      <h1>Buttons</h1>
      <div className='Button-container'>

        <ButtonList>
            <Button />
        </ButtonList>

        <ButtonList>
            <Button title="<Button />"/>
            <Button title="<Button variant=”outline” />" variant="outline"/>
            <Button title="<Button variant=”text” />" variant="text"/>
        </ButtonList>

        <ButtonList>
          <Button title="<Button disableShadow />" disableShadow color="primary"/>
        </ButtonList>

        <ButtonList>
            <Button title="<Button disabled />" disabled/>
            <Button title="<Button disableShadow variant=”text”/>" disabled variant="text"/>
        </ButtonList>

        <ButtonList>
          <Button title="<Button startIcon=”done” />" startIcon="done" color="primary"/>
          <Button title="<Button endIcon=”info” />" endIcon="info" color="primary"/>
        </ButtonList>

        <ButtonList>
          <Button title="<Button size=”sm” />" size="sm" color="primary" />
          <Button title="<Button size=”sm” />" size="md" color="primary"/>
          <Button title="<Button size=”sm” />" size="lg" color="primary"/>
        </ButtonList>

        <ButtonList>
          <Button title="<Button color=”default” />" color="default"/>
          <Button title="<Button color=”primary” />" color="primary"/>
          <Button title="<Button color=”secondary” />" color="secondary"/>
          <Button title="<Button color=”danger” />" color="danger"/>
        </ButtonList>

      </div>
    </section>
  );
}


