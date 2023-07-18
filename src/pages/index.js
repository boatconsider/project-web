
import Footer from "./components/Footer";
import Headder from './components/Headder';


export default function Home() {
  

  return (
    <div className="h-[100vh] bg-slate-200">
  <Headder/>
      <div className=" w-full h-[1200px] mt-2  ">
        <div className="grid grid-cols-[800px_minmax(0px,_1fr)] grid-row-[800px_minmax(0px,_1fr)] gap-x-2 gap-y-2 max-[650px]:grid-row-1 max-[650px]:grid-cols-1">
      <div className="w-full bg-[#fff] h-[550px] ">
        <img src="https://cdn.shopify.com/s/files/1/0624/7949/9512/files/graphicscards_1024x1024.jpg?v=1648720902" alt="" className="h-full"/>
      </div>
      <div className="w-full bg-[#fff] h-[550px]">
  <img src="https://www.appdisqus.com/wp-content/uploads/2023/01/pLiv2jeg8Fb7KdjPAyyhCJ-1200-80.jpg.webp" alt="" className="w-full h-full" />
</div>
      </div>
      <div className="  grid grid-cols-[600px_minmax(0px,_1fr)] grid-row-[800px_minmax(0px,_1fr)] gap-x-2 gap-y-2 w-full mt-2 max-[650px]:grid-row-1 max-[650px]:grid-cols-1">
      <div className="w-full bg-[#fff] h-[550px]">
      <img src="https://secure.zortout.com/Home/DisplayProductImage?pid=14687478" alt="" className="h-full w-full"/>
      </div>
      <div className="w-full bg-[#fff] h-[550px]">
      <img src="https://inwfile.com/s-ge/o0fctq.jpg" alt="" className="h-full w-full"/>
      </div>
      </div>    
      </div>

            <Footer/>
 

    </div>
    
  );
}
