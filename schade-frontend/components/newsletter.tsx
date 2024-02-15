const Newsletter = () => {
    return(
        <div className="bg-neutral-900 drop-shadow-xl py-10 md:py-20">
            <h4 className="py-0 mb-5 text-white text-center lg:text-4xl font-semibold md:py-1 md:text-3xl">
                Subscribe to our newsletter
            </h4>
            <div className="flex justify-center pt-2">
                <input type="email" placeholder="Enter your email address" className="w-1/5 rounded-lg border-black py-2 px-1 text-black caret-black outline-none transition-all"/>
                <button className="flex items-center justify-center bg-white rounded-lg outline-none transition-all duration-700 hover:-translate-y-1 ml-3 sm:px-1 sm:p-0 md:px-3 md:p-1 lg:px-5 lg:p-0">
                    <span className="text-center font-semibold text-sm tracking-wider md:text-xs lg:text-sm">
                        Subscribe
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Newsletter;