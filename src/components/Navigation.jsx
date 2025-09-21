import '../styles/Navigation.css'

const Navigation = () => {

  return (
    <div id="container-header">
      <div className="brand-logo">
        <img src="images/Weblogo_Wonderful_Travel.png" alt="WonderfulTravel-logo"/>
      </div>
        <ul>
          <li>
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">GALLERY</a>
            <a href="#">COMMUNITY</a>
            <a href="#">CONTACT US</a>
          </li>
        </ul>
        <div className="bttn-signin">
          <a href="#">Login</a>
        </div>
        <div className="menu-toggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
    </div>
  )
}

export default Navigation
