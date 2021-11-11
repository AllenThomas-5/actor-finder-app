import React from 'react'

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-white mt-4">
            <section>
            <div className="row mt-2" >
               <p>Top Movie Listing Website &copy; Movies powered by TMDB</p> 
            </div>
        </section>
        <section>
            <div className="row">
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt=""/>
            </div>
        </section>
    </div>
    )
}

export default Footer
