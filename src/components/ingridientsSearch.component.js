
 const IngredientsSearch = () => {
    
    return(
        <div>
            <header id="header" style={{ backgroundColor:'black' }} >
                  { // <img src="logo.png" alt="nike logo" id="header-img" /> 
                  }
                    <nav id="nav-bar"  >
                        <ul id="nav-list">
                        <li id="link2"><a class="nav-link" href="/">Home</a></li>
                        <li id="link1"><a class="nav-link" href="/login">Admin</a></li>
                        <li id="link3"><a class="nav-link" href="/recipeslist">recipes</a></li>
                        </ul>
                    </nav>
            </header>
            <h1 style={{paddingTop: '50px'}}>404</h1>
            <h1>under construction</h1>
            <footer id="page-footer">
                    <p>This is a beta project</p>
                    <p>Copyright 2021 </p>
                    <a href="https://github.com/medamineamara/tebsi-frontend" 
                        class="nav-link" target="blank">
                       github repository
                       </a>
                    
            </footer>
        </div>
    );
}

export default IngredientsSearch;