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
          <a className='navbar-brand page-scroll'>
            Monet Me This
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a> Artist's history </a>
            </li>
            <li>
              <a> Artist's painting generator </a>
            </li>
            <li>
              <a> Choose artist </a>
            </li>
            <li>
              <a> Language</a>
            </li>
            <li>
              <a> GitHub </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
