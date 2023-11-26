import Dashboard from "./Dashboard";
import Sidebars from "./Sidebar";
import './Admin.css';

function AdminPage() {
    return (
        <div className="rowss">

            <div className="sidebar">
                <Sidebars />
            </div>

            <div className='home'>
                <h1>Latest Transactions</h1>
                <Dashboard />
            </div>


        </div>
    );
}
export default AdminPage;

