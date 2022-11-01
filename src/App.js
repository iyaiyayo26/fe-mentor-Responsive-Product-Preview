import "./App.css";

function App() {
  return (
    <>
      <div className=" my-60 mx-10 rounded-lg overflow-hidden bg-white md:flex">
        {/* min 100px - max: 639px */}
        <div className="min-[100px]:block max-[767px]:block md:hidden">
          <img src="./assets/image-product-mobile.jpg" alt="parfum" className="w-auto" />
        </div>
        <div className="min-[100px]:hidden max-[767px]:hidden md:block md:flex w-1/2">
          <img src="./assets/image-product-desktop.jpg" alt="parfum" />
        </div>
        <div className="mx-10 my-5 w-1/2 xl:py-5 lg:py-6">
          <h4 className="uppercase font-montserrat tracking-1 text-dark-grayish-blue text-sm sm:text-base xl:text-xl">perfume</h4>
          <h1 className="font-fraunces text-5xl my-3 lg:mr-20 xl:text-8xl xl:mb-10 lg:mb-5">Gabrielle Essence Eau De Parfum</h1>
          <p className="font-montserrat text-dark-grayish-blue text-sm sm:text-base text-left mb-5 xl:text-xl xl:mb-10 md:text-lg md:mt-5">
            A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL
          </p>
          <div className="flex flex-row mb-4 lg:mb-8 md:mb-8">
            <h2 className=" font-fraunces text-3xl sm:text-4xl text-dark-cyan xl:text-5xl">$149.99</h2>
            <h5 className="ml-8 text-dark-grayish-blue text-sm sm:text-base line-through xl:text-xl">$169.99</h5>
          </div>
          <div className="flex flex-row items-center ">
            <img src="./assets/icon-cart.svg" alt="shopping cart" className="absolute ml-24 sm:ml-40 md:ml-20 lg:ml-16 xl:w-5 xl:ml-28 ml-10" />
            <button className="bg-dark-cyan px-10 py-2 rounded-lg container font-montserrat text-white text-sm md:text-base lg:max-w-xs xl:max-w-sm xl:py-5 xl:text-lg lg:py-3 md:py-3">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
