import React, { useEffect, useState } from "react";
import "./datatable.scss";

import { DataGrid } from "@mui/x-data-grid";
import { pegawaiCols, userCols, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import { Add, Delete, RemoveRedEye } from "@mui/icons-material";

const Datatable = ({ title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   let list = [];
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //     });
    //     setData(list);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchData();
    const unsub = onSnapshot(
      // collection(db, "users"),
      collection(db, "pegawai"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "https://digi-app.my.id/api/v1/pegawai?page=1&limit=10"
  //     );
  //     const data = await response.json();

  //     setData(data);
  //   };

  //   // Call the function
  //   fetchData();
  // }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "pegawai", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={"/pegawai/" + params.row.id}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">
                <RemoveRedEye />
              </div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              <Delete />
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {title}
        <Link to="/pegawai/new" className="link">
          <Add className="icon" />
          Tambah
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        // columns={userCols.concat(actionColumn)}
        columns={pegawaiCols.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
