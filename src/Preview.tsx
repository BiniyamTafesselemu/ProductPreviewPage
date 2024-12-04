import productdesktop from './assets/productdesktop.jpg'; 
import iconCart from './assets/iconCart.svg' 
import productmobile from './assets/productmobile.jpg'; 

const Preview = () => {  
    return (  
        <div className="flex flex-col min-h-screen justify-center items-center bg-custom-cream">  
            <div className="w-full max-w-[800px] rounded-2xl bg-white flex flex-col sm:flex-row p-0">  
                <div className="w-full sm:w-1/2 h-full bg-gradient-to-t from-custom-blue via-custom-blue-light to-custom-blue-light flex items-center relative">  
                    <img   
                        src={productdesktop}   
                        alt="perfume"   
                        className="hidden sm:block w-full h-full object-cover rounded-l-2xl" // Show on larger screens  
                    /> 
                    <img   
                        src={productmobile}   
                        alt="perfume"   
                        className="block sm:hidden w-full h-full object-cover rounded-t-2xl" // Show on smaller screens  
                    /> 
                </div>  
                <div className="w-full sm:w-1/2 rounded-3xl flex flex-col items-center justify-start py-5 sm:py-10"> 
                    <div className="flex flex-col w-full px-5 sm:px-10">
                        <h1 className="text-2xl font-montserrat text-gray-500">PERFUME</h1>
                        <h1 className="text-4xl sm:text-5xl font-bold mt-4 font-fraunces">Gabrielle <br /> Essence Eau <br /> De Parfum</h1>
                        <p className="mt-6 font-montserrat">
                            A floral, solar and voluptuous<br/>
                            interpretation composed by<br/>
                            Olivier PolgePerfumer-Creator<br/>
                            for the House of CHANEL
                        </p>
                        <div className="flex flex-row mt-8 items-center">
                            <h1 className="text-green-400 text-4xl sm:text-5xl font-bold">$149.99</h1>
                            <p className="line-through ml-4 text-gray-400">$169.99</p>
                        </div>
                        <div className="flex flex-row bg-cyan w-full mt-8 h-12 rounded-2xl items-center justify-center hover:bg-darkblue transition-colors">
                            <img className="w-5 h-5" src={iconCart} alt="cart"/>
                            <button className="ml-2 text-white font-bold">Add to cart</button>
                        </div>
                    </div> 
                </div>    
            </div>  
        </div>  
    );  
}  

export default Preview;
