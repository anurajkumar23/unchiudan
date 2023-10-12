import FormNews from "./FormNews";
import SidebarAdmin from "./SidebarAdmin";




const AdminPage = ({userData}) => {

  return (
    <div className="flex  ">
      <div className="mt-[7%] flex">
      <SidebarAdmin />
      <FormNews />
    </div>
    </div>
  );
};

export default AdminPage;
