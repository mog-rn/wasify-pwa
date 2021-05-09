const Header = () => {
    return (
        <>
{/* Section 1 */}
<section className="w-full px-6 pb-12 antialiased bg-white">
  <div className="mx-auto max-w-7xl">
    <nav className="relative z-50 h-24 select-none" x-data="{ showMenu: false }">
      <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2">
        <div className="flex items-center justify-start w-1/4 h-full pr-4">
          <a href="#_" className="inline-block py-4 md:py-0">
            <span className="p-1 text-xl font-black leading-none text-gray-900"><span>tails</span><span className="text-red-600">.</span></span>
          </a>
        </div>
        <div className="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex" :class="{'flex fixed': showMenu, 'hidden': !showMenu }">
          <div className="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
            <a href="#_" className="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden">tails<span className="text-red-600">.</span></a>
            <div className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
              <a href="#_" className="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-red-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">Home</a>
              <a href="#_" className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-red-600 lg:mx-3 md:text-center">Features</a>
              <a href="#_" className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-red-600 lg:mx-3 md:text-center">Blog</a>
              <a href="#_" className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-red-600 lg:mx-3 md:text-center">Contact</a>
              <a href="#_" className="absolute top-0 left-0 hidden py-2 mt-6 ml-10 mr-2 text-gray-600 lg:inline-block md:mt-0 md:ml-2 lg:mx-3 md:relative">
                <svg className="inline w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </a>
            </div>
            <div className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
              <a href="#" className="w-full px-6 py-2 mr-0 text-gray-700 md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto">Sign In</a>
              <a href="#_" className="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-red-600 md:px-3 md:w-auto lg:px-5 hover:bg-red-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-red-600 rounded-2xl">Sign Up</a>
            </div>
          </div>
        </div>
        <div @click="showMenu = !showMenu" className="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100">
          <svg className="w-6 h-6 text-gray-700" x-show="!showMenu" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor" x-cloak>
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg className="w-6 h-6 text-gray-700" x-show="showMenu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x-cloak>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
    </nav>
    {/* Main Hero Content */}
    <div className="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
      <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl"><span className="inline md:block">Start Crafting Your</span> <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-red-500 md:inline-block">Next Great Idea</span></h1>
      <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">Simplifying the creation of landing pages, blog pages, application pages and so much more!</div>
      <div className="flex flex-col items-center mt-12 text-center">
        <span className="relative inline-flex w-full md:w-auto">
          <a href="#_" type="button" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-red-600 border border-transparent md:w-auto hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 rounded-2xl">
            Purchase Now
          </a>
          <span className="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full">only $15/mo</span>
        </span>
        <a href="#" className="mt-3 text-sm text-red-600">Learn More</a>
      </div>
    </div>
    {/* End Main Hero Content */}
  </div>
</section>
{/* AlpineJS Library */}
</>
    )
}