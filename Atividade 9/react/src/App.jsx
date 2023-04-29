import './App.css'
import ButtonFatec from './components/ButtonFatec'
import CaixaDeTexto from './components/CaixaDeTexto'

function App() 
{
  return (
    <>
      <p>
        Entre em contato com a Fatec
      </p>
      <hr />

      <CaixaDeTexto type="text" placeholder="Nome" />
      <br />

      <CaixaDeTexto type="text" placeholder="E-mail" />
      <br />

      <CaixaDeTexto type="text" placeholder="Telefone" />
      <br />

      <hr />
      <ButtonFatec type="button" />

    </>
  )
}

export default App
