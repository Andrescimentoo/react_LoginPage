//[PASSO 1] Vamos simular uma requisiçao para simular o login do user
//para isso vamos usar o import state
//o  state ele vai ser resposnavel por guardar todas as informaçoes que forem armazenadas nos inputs email e password 

//[PASSO 2] Vamos criar entao duas variaveis,uma que vai consultar o valor e a outra que vai alterar o valor!
//vamos criar uma funçao para envio do formulario
//depois de criar a funcao temos que conectar ela ao formulario pra isso usamos a propriedade onSubmit que vai receber nossa funcao 

//[PASSO 3] Na funcao temos q usar um callback "event" para travar o recarregamento da pagina ao enviar o form 
//depois essa funcao vai receber o methodo preventDefault assim travamos o recarregamento automatico
//assim monitoramos os dados quye passarao pelo nosso formulario

import { FaUser,FaLock } from "react-icons/fa"
import { useState } from "react" // importaçao resposanvel por manipular os estados dos elementos
import "./login.css"

 const Login = () => {
  
  const[username,setUsername] = useState ("") //username le,setUsername altera
  const[password,setPassword] = useState("")// password le, setUsername altera
 
  const enviarForm = (event) => { //se enviarmos sem o parametro "event" ao clicar em enviar a pagina sempre vai recarregar
     event.preventDefault()
      
     alert("enviando Dados : " + username + " - " + password)
  } 
 

  return (
    <div class="App">
      <form onSubmit={enviarForm}>
        <div className="container">
            <h1>Login</h1>
            
            <div class = "input-field">
                <input type="email" placeholder='insira seu gmail'
                  onChange={(e)=> setUsername(e.target.value)} //nessa linha peguei o evento de digitar
                />
                <FaUser class="icons"/>
            </div>
            <div class="input-field">
                <input type="password" placeholder='insira sua senha'
                  onChange={(e)=> setPassword(e.target.value)}
                />
                <FaLock class="icons"/>
            </div>
            <div className="recal-forget">
               <label> 
                  <input type= 'checkbox'/> 
                   lembre de mim  
               </label>
               
               <a href="#"> Esqueceu a senha?</a>
                                  
           </div>
          
           <button>Entrar</button>
          
           <div className="signup-link">
            <p>
              Nao tem conta? <a href="#">Registrar</a>
           </p>
           </div>
            
            
        </div> 
      </form>
    </div>
  )
}
 export default Login