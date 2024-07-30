import Siderbar from '../Admin/Siderbar'
import HeaderAdmin from '../Admin/HeaderAdmin'

const DashboardAdmin = ({ children }) => {
  return (
    <div>
      <main className="flex w-full ">
        <Siderbar />
        <div className="flex flex-col items-center bg-[#d9d9d9]  basis-full flex-1 px-12">
          <HeaderAdmin />
          {children}
        </div>
      </main>
    </div>
  )
}

export default DashboardAdmin