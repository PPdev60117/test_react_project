import InfoUser from "@/app/_components/InfoUser"
import DashBoard from "@/app/_components/DashBoard"
import InfoFromOfficer from "@/app/_components/InfoFromOfficer"

export default function Home() {
  return (
    <>
      <div className="grid py-8 px-6 gap-8 md:px-20 lg:px-30">
        <InfoUser/>
        <DashBoard/>
        <InfoFromOfficer/>
      </div>
    </>
  );
}
