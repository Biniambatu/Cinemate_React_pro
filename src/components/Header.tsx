import { useEffect, useRef, useState } from "react";
import { Link, NavLink, json, useNavigate } from "react-router-dom";
import logo from '../assets/google-play-games.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from "react-redux";
export const Header = () => {
  const movieList = useSelector(state => state.MovieReducer.MovieList)

  const activeClass = "text-base block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
  const inActiveClass = "text-baseblock py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  const [hidden, setHidden] =  useState(true)
  const [darkMode, setDarkMode] = useState( JSON.parse(localStorage.getItem("darkMode")) || false);
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if(darkMode){
      document.documentElement.classList.add('dark')
    }
    else{
      document.documentElement.classList.remove('dark')
    } 

  }, [darkMode]);
  const handleSubmit = (event:any) => {
    event.preventDefault()
    const queryTerm = event.target.search.value
    event.target.reset()

    return navigate(`/search?q=${queryTerm}`)
  }


   const [hide, setHide] = useState(false);
    const dropdownRef = useRef(null);
  
    const handleHide = () => {
      setHide(!hide);
    };
  
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setHide(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    
  return (
    <header>
      <nav className="bg-white border-b-2 border-gray-200 dark:bg-gray-900 dark:border-b-1 dark:border-gary-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center mb-2 space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-12" alt="Flowbite Logo"/>
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              Cinemate
            </span>
          </Link>  
          <div id="mobile-nav" className="flex md:order-2"> 
          <button onClick={() => setDarkMode(!darkMode)} data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip" type="button" data-toggle-dark="light" className="flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            { darkMode ? (<svg aria-hidden="true" data-toggle-icon="sun" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>) : (<svg aria-hidden="true" data-toggle-icon="moon" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>) }
          </button>
            <button onClick={()=>setHidden(!hidden)}type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1" >
              <svg className="w-5 h-5"aria-hidden="true"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor"stroke-linecap="round"stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
             </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400"aria-hidden="true"                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" >
                  <path stroke="currentColor"stroke-linecap="round" stroke-linejoin="round" stroke-width="2"d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/> 
                </svg>
                 <span className="sr-only">Search icon</span>
              </div>
              <form onSubmit={handleSubmit}>
                <input type="text"id="search-navbar" name="search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." /> 
              </form>
            </div>

            <div className=" absolute inset-y-1 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                          />
                        </svg>
                      </button>
          
                      <div className="relative ml-3">
                        <div>
                          <button
                            onClick={handleHide}
                            type="button"
                            className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            id="user-menu-button"
                            aria-expanded="false"
                            aria-haspopup="true"
                          >
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </button>
                        </div>
          
                        {hide && (
                          <div
                            ref={dropdownRef}
                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu-button"
                          >
                            <Link
                              to='/profile'
                              className="block px-4 py-2 text-sm text-gray-700"
                              role="menuitem"
                            >
                              Your Profile
                            </Link>
                            <Link
                              to='/settings'
                              className="block px-4 py-2 text-sm text-gray-700"
                              role="menuitem"
                            >
                              Settings
                            </Link>
                            <Link
                              to='/login'
                              className="block px-4 py-2 text-sm text-gray-700"
                              role="menuitem"
                            >
                              Log in
                            </Link>
                          </div>
                        )}
                      </div>
                    </div> 

            <button onClick={()=>setHidden(!hidden)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round"stroke-linejoin="round" stroke-width="2"d="M1 1h15M1 7h15M1 13h15"  /></svg>
            </button>    
          </div>
  
          <div className={`${hidden ? "hidden" : ""}  items-center justify-between  w-full md:flex md:w-auto md:order-1`} id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor"stroke-linecap="round"  stroke-linejoin="round"  stroke-width="2"  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <form onSubmit={handleSubmit}>
                <input type="text"id="search-navbar" name="search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"placeholder="Search..." />
              </form>
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4  font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/home" className={({isActive})=> isActive ? activeClass : inActiveClass }  end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/popular" className={({isActive})=> isActive ? activeClass : inActiveClass }>
                  Popular
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/top" className={({isActive})=> isActive ? activeClass : inActiveClass }>
                 Top Rated
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/upcoming" className={({isActive})=> isActive ? activeClass : inActiveClass }>
                  Up Coming
                </NavLink>
                <li>
                </li>
              </li>
              <NavLink to='/favorite' className={({isActive})=> isActive ? activeClass : inActiveClass } >
                 <span className="cursor-pointer text-xl text-gray-700 dark:text-white">
                   <FavoriteIcon size="30px" className="relative ml-10" />
                   <span className="absolute -top--1 2-right-0 bg-rose-500 text-white text-xs px-1 rounded-full">
                     {movieList.length}
                   </span>
                </span>
              </NavLink>
            </ul>
           
          </div>
          
                  
        </div> 
      </nav>
    </header>
  );
};
