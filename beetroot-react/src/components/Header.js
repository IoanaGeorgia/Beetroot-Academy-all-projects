import logo from './logo.svg'
function Header(){
    return (
    <header>
      <img src={ logo } />
      <div class="header__links">
        <a href="">Services</a>
        <a href="">About</a>
        <a href="">Contact </a>
      </div>
    </header>)
}
export default Header;