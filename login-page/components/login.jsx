import React from 'react'

 const Login = () => {
  return (
    <div class="container">
      <form>
            <h1>Acesse o sistema</h1>
            <div class = "email">
                <input type="email" placeholder='insira seu gmail' />
            </div>
            <div class="pass">
                <input type="password" placeholder='insira sua senha'/>
            </div>
      </form>
    </div>
  )
}
 export default Login