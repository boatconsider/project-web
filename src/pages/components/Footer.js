import { RiComputerLine } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-cyan-200 to-blue-600 w-full h-[250px] max-[650px]:h-[220px]">
      <div className=" flex flex-col justify-center items-center ">
        <div className="flex flex-col items-center cursor-pointer text-blue-500 text-2xl font-xl mt-2">
          <RiComputerLine />
          <h1 className="pt-1">HardWare</h1>
          <div className="flex justify-center items-center flex-row">
            <div className="flex flex-row pt-5">
              <div className="flex flex-col">
               
                 
                  <div className="flex flex-col pl-2 text-[#fff] justify-center items-center ">
                  <div className="text-[#fff] text-xl pl-5 text-center max-[650px]:text-xs   max-[650px]:p-0 max-[650px]:mr-2 ">
                    <h1 className="max-[650px]:text-lg" >โปรโมชั่นออนไลน์</h1>
                    <h1>เข้าสู่ระบบสำหรับช้อปออนไลน์</h1>
                    <h1>วิธีการสั่งซื้อ</h1>
                    <h1>วิธีการชำระเงิน</h1>
                    <h1>วิธีการจัดส่ง</h1>
                    </div>
                  </div>
                </div>
              </div>
        
              <div className="text-[#fff] text-xl mt-4 pl-5 text-center max-[650px]:text-xs max-[650px]:p-0 max-[650px]:mt-5">
                <h1 className="max-[650px]:text-lg" >บริการช่วยเหลือ</h1>
                <h1>เงื่อนไขการรับประกัน</h1>
                <h1>ตรวจสอบการรับประกัน</h1>
                <h1>เช็คสถานะงานบริการ</h1>
                <h1>คำถามที่พบบ่อย</h1>
              </div>
              <div className="text-[#fff] text-xl pl-5 mt-4 text-center max-[650px]:text-xs max-[650px]:p-0 max-[650px]:mt-5">
                <h1 className="max-[650px]:text-lg" >ติดต่อเรา</h1>
                <h1>เกี่ยวกับเรา</h1>
                <h1>นักลงทุนสัมพันธ์</h1>
                <h1>สมัครงาน</h1>
                <h1>ที่ตั้งสำนักงานใหญ่</h1>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}
