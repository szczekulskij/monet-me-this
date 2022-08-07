export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  A button
                </a>{' '}
                <div class="row">
                  <div class="column">
                    {/* <img className="profile-photo" src={require("img/about.jpg")} alt={"Carlie Anglemire"}/> */}
                    <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
                  </div>
                  <div class="column">
                    {/* <img className="profile-photo" src={require("img/about.jpg")} alt={"Carlie Anglemire"}/> */}
                    <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

