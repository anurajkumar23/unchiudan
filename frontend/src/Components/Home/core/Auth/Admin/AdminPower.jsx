import CurrentAffairsForm from "./FormCurrentAffairs";
import FormNews from "./FormNews";
import SidebarAdmin from "./SidebarAdmin";




const AdminPage = ({userData}) => {

  return (
    <div className="flex  ">
      <div className="mt-[7%] flex">
      <SidebarAdmin />
      <FormNews />
      <CurrentAffairsForm/>
    </div>
    </div>
  );
};

export default AdminPage;
