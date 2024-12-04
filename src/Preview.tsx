import productdesktop from './assets/productdesktop.jpg';  

const Preview = () => {  
    return (  
        <div className="flex flex-col min-h-screen justify-center items-center bg-custom-cream">  
            <div className="w-full max-w-[800px] rounded-2xl bg-white flex flex-row p-0">  
                <div className="w-full sm:w-1/2 h-full bg-gradient-to-t from-custom-blue via-custom-blue-light to-custom-blue-light flex items-center">  
                    <img   
                        src={productdesktop}   
                        alt="perfum"   
                        className="w-full h-full object-cover rounded-l-2xl"   
                    />  
                </div>  
                <div className="w-full sm:w-[400px] rounded-3xl flex flex-col items-center justify-start py-5 sm:py-10"> 
                    
                    <div className="">
                        <h1 className='text-2xl mt-[0px] mr-[250px]'>PERFUME</h1>
                    </div> 
                    {/** Right content goes here */}  
                </div>    
            </div>  
        </div>  
    );  
}  

export default Preview;