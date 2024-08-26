import { FaUser,FaLock } from "react-icons/fa"

 const Login = () => {
  return (
    <div class="container">
      <form>
            <h1>Acesse o sistema</h1>
            <div class = "email">
                <input type="email" placeholder='insira seu gmail' />
                <FaUser class="icons"/>
            </div>
            <div class="pass">
                <input type="password" placeholder='insira sua senha'/>
                <FaLock class="icon"/>
            </div>
            <div className="recal-forget">
               <label>
                  <input type= 'checkbox'/>
                  lembre de mim
               </label>
               
               <a href="#">Esqueceu a senha? </a>
                                  
           </div>
           <div className="signup-link">
            <p>
              Nao tem conta?<a href="#">Registrar</a>
           </p>
           </div>
            
            <button>Entrar</button>
      </form>
    </div>
  )
}
 export default Login