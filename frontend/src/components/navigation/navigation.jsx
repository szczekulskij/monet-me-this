export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Monet Me This
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                Artist's history
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Artist's painting generator
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Choose artist
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Language
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
