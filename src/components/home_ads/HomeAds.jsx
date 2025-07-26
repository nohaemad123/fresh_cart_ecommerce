import image1 from "../../assets/healthy-vegetables-wooden-table.jpg";
import image2 from "../../assets/Dairy-Products.jpeg";

export default function HomeAds() {
  return (
    <>
      <div className="bg-mainColor py-10">
        <div className="container">
          <div className="grid grid-cols-1 space-y-5 lg:grid-cols-2 lg:space-y-0 gap-x-10">
            <div
              style={{
                backgroundImage: `url('${image1}')`,
                backgroundSize: "cover",
                width: "100%",
                backgroundPosition: "center center",
              }}
              className="rounded-md"
            >
              <div className="overlay rounded-md bg-gradient-to-r from-primary-600/80 to-primary-600/30 p-8 ">
                <div className="container flex flex-col space-y-4 text-white">
                  <h2 className="text-2xl font-bold">Organic vegetables</h2>
                  <p className="text-lg">
                    Get up to 30% off on organic vegetables
                  </p>
                  <button className="btn max-w-40 bg-white border border-transparent text-primary-600 rounded-lg py-2 px-3 hover:bg-transparent hover:border-white hover:text-white transition-all duration-500">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url('${image2}')`,
                backgroundSize: "cover",
                width: "100%",
                backgroundPosition: "center center",
              }}
              className="rounded-md"
            >
              <div className="overlay rounded-md bg-gradient-to-r from-primary-600/80 to-primary-600/30 p-8 ">
                <div className="container flex flex-col space-y-4 text-white">
                  <h2 className="text-2xl font-bold">Fresh dairy products</h2>
                  <p className="text-lg">
                    Buy 2 and get 1 free on all dairy products{" "}
                  </p>
                  <button className="btn max-w-40 bg-white border border-transparent text-primary-600 rounded-lg py-2 px-3 hover:bg-transparent hover:border-white hover:text-white transition-all duration-500">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
