import React,{ useEffect, useState } from "react";
import MiniCalendar from "components/calendar/MiniCalendar";
import { MdAccountTree, MdPersonAdd, MdWallet} from "react-icons/md";
import { columnsDataComplex } from "./variables/columnsData";
import Widget from "components/widget/Widget";
import ComplexTable from "views/admin/default/components/ComplexTable";
import TaskCard from "views/admin/default/components/TaskCard";

const username = localStorage.getItem("username")
const Dashboard = () => {
  const [dataUser, setDataUser] = useState(null);
  const fetchUserData = async () => {
    const loginData = {
      username: username,
    };
    try {
      const response = await fetch("/api/get-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "SebaraKey2024",
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      setDataUser(data); // Menyimpan data pengguna ke state
    } catch (error) {
      console.log(error);
    }
  };
  function Rupiah(angka) {
    const number = parseFloat(angka).toFixed(0);
    const formattedNumber = number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `Rp ${formattedNumber}`;
  }
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div >
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdAccountTree className="h-7 w-7" />}
          title={"Jaringan Kiri"}
          subtitle={dataUser ? dataUser.count_left : "Loading..."}
        />
        <Widget
          icon={<MdAccountTree className="h-6 w-6" />}
          title={"Jaringan Kanan"}
          subtitle={dataUser ? dataUser.count_right : "Loading..."}
        />
        <Widget
          icon={<MdPersonAdd className="h-7 w-7" />}
          title={"Sponsoring"}
          subtitle={dataUser ? dataUser.sponsoring : "Loading..."}
        />
        <Widget
          icon={<MdWallet className="h-6 w-6" />}
          title={"Sisa Bonus"}
          subtitle={dataUser ? Rupiah(dataUser.sisa_bonus) : "Loading..."}
        />
        <Widget
          icon={<MdWallet className="h-7 w-7" />}
          title={"Pencairan Bonus"}
          subtitle={dataUser ? Rupiah(dataUser.jml_wd) : "Loading..."}
        />
        <Widget
          icon={<MdWallet className="h-6 w-6" />}
          title={"Total Bonus"}
          subtitle={dataUser ? Rupiah(dataUser.jml_bonus) : "Loading..."}
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={""}
        />

        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
