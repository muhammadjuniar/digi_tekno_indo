import React, { useEffect, useState } from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

function Single() {
  const [data, setData] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      // let list = [];
      // try {
      //   const querySnapshot = await getDoc(doc(db, "users", id));
      //   querySnapshot.forEach((doc) => {
      //     list.push({ id: doc.id, ...doc.data() });
      //   });
      //   setData(list);
      //   console.log(list)
      // } catch (err) {
      //   console.log(err);
      // }
      const docRef = doc(db, "pegawai", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        console.log(id);
        setData(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                className="itemImg"
                src="https://icon-library.com/images/default-user-icon/default-user-icon-20.jpg"
                alt=""
              />
              <div className="details">
                <h1 className="itemTitle">{data.nama}</h1>
                <div className="detailItem">
                  <span className="itemKey">Nip:</span>
                  <span className="itemValue">{data.nip ? data.nip : "-"}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Jabatan:</span>
                  <span className="itemValue">{data.jabatan ? data.jabatan : "-"}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Pangkat:</span>
                  <span className="itemValue">{data.pangkat ? data.pangkat : "-"}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Golongan:</span>
                  <span className="itemValue">{data.gol ? data.gol : "-"}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Kontak:</span>
                  <span className="itemValue">{data.phone ? data.phone : "-"}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Nama Bank:</span>
                  <span className="itemValue">{data.nama_bank ? data.nama_bank : "-"}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">No. Rekening:</span>
                  <span className="itemValue">{data.no_rek ? data.no_rek : "-"}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Nama Rekening:</span>
                  <span className="itemValue">{data.nama_rek ? data.nama_rek : "-"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
