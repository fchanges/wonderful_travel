import '../styles/Signup.css'

const Signup = () => {

  return (
    <div className="container-signup">
      <div className="header">
        <h2>JOIN WITH US</h2>
        <br/>
      </div>
      <form action="" id="signup">
        <input type="text" placeholder="Nama Depan" />
        <input type="text" placeholder="Nama Belakang (jika ada)" />
        <input type="email" placeholder="Masukan Email" />
        <input type="password" placeholder="Masukan Password Anda" />
        <input type="password" placeholder="Konfirmasi Password Anda" />
        <button type="submit">Signup Now</button>
      </form>
    </div>
  )
}

export default Signup
