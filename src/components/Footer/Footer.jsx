
function Footer() {
    return (
        <footer className="text-white bg-[#2c3e50] ">
            <div className="flex flex-col md:flex-row justify-center py-14 container mx-auto px-5  ">
                <div className="leading-10 text-center py-10 md:w-1/3">
                    <h1 className="text-3xl font-semibold">LOCATION</h1>
                    <p>2215 John Daniel Drive <br /> Clark, MO 65243</p>
                </div>
                <div className="text-center py-10 md:w-1/3">
                    <h1 className="text-3xl font-semibold">AROUND THE WEB</h1>
                    <div className="space-x-2 mt-3 ">
                        <i className="fa-brands fa-facebook p-3 text-1xl border border-white transition-colors duration-500 rounded-full hover:bg-[#1abc9c]"></i>
                        <i className="fa-brands fa-twitter p-3 text-1xl  border border-white transition-colors duration-500 rounded-full hover:bg-[#1abc9c]"></i>
                        <i className="fa-brands fa-instagram p-3 text-1xl border border-white transition-colors duration-500 rounded-full hover:bg-[#1abc9c]"></i>
                        <i className="fa-brands fa-youtube p-3 text-1xl  border border-white transition-colors duration-500 rounded-full hover:bg-[#1abc9c]"></i>
                    </div>
                </div>
                <div className="text-center py-10 md:w-1/3">
                    <h1 className="text-3xl font-semibold pb-2">ABOUT FREELANCE</h1>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
            <div className="bg-[#1a252f] text-white text-center p-5"><p>Copyright © Your Website 2024</p></div>
        </footer>
    )
}

export default Footer
