import './admin.css'
import { FaUserShield, FaRupeeSign } from 'react-icons/fa';
import { LiaFilePdfSolid } from 'react-icons/lia';
import { BsNewspaper } from 'react-icons/bs';





const AdminHome = () => {
    return (
        <section className='adminSection'>
            <div className="adminNav">
                <h1 className='adminHeader'>Admin</h1>
                <div className="menus">
                    <ul>
                        <li>Users</li>
                        <li>Transections</li>
                        <li>Pdfs</li>
                        <li>News</li>
                    </ul>
                </div>
            </div>

            <div className="adminHome">
                <div className="users">
                    <div className="adminLogo"> <FaUserShield/> </div>
                    <div className="cardContent">Total Users (10)</div>
                </div>
                <div className="pdfs">
                    <div className="adminLogo"> <LiaFilePdfSolid/> </div>
                    <div className="cardContent"> Total PDFs (20) </div>
                </div>
                <div className="payments">
                    <div className="adminLogo"> <FaRupeeSign/> </div>
                    <div className="cardContent">Total Money - 500 </div>  
                </div>
                <div className="news">
                    <div className="adminLogo"> <BsNewspaper/> </div>
                    <div className="cardContent">Total News (15)</div> 
                </div>
            </div>
        </section>
    )
}

export default AdminHome
