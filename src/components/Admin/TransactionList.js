import Dashboard from "./Dashboard";
import Sidebars from "./Sidebar";
import './Admin.css';

function TransactionList() {
    return (
        <div className="rowss">

            <div className="sidebar">
                <Sidebars />
            </div>

            <div className='home'>
                <h1>List Transactions</h1>
                <Dashboard />
            </div>


        </div>
    );
}
export default TransactionList;

