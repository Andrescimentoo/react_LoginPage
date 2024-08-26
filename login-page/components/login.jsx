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
            <button>Entrar</button>
      </form>
    </div>
  )
}
 export default Login