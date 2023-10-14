import CurrentAffairsForm from "./FormCurrentAffairs";
import FormNews from "./FormNews";
import SidebarAdmin from "./SidebarAdmin";
import FormPdf from "./FormPDF";





const AdminPage = ({userData}) => {

  return (
    <div className="flex  ">
      <div className="mt-[7%] flex">
      <SidebarAdmin />
      <FormNews />
      <CurrentAffairsForm/>
      <FormPdf/>
    </div>
    </div>
  );
};

export default AdminPage;
