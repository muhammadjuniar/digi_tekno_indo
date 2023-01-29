import { DriveFolderUploadOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./new.scss";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, storage, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const jabatans = [
  {
    label: "Pilih Jabatan",
    value: "def",
  },
  {
    label: "Manager",
    value: "Manager",
  },
];

const pangkats = [
  {
    label: "Pilih Pangkat",
    value: "def",
  },
  {
    label: "Pranata R",
    value: "Pranata R",
  },
];

const golongans = [
  {
    label: "Pilih Golongan",
    value: "def",
  },
  {
    label: "III d",
    value: "III d",
  },
];

function New({ inputs, title }) {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [percentage, setPercentage] = useState(null);
  const [jabatan, setJabatan] = useState("def");
  const [pangkat, setPangkat] = useState("def");
  const [golongan, setGolongan] = useState("def");

  const navigate = useNavigate();

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPercentage(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({
      ...data,
      [id]: value,
      jabatan: jabatan,
      pangkat: pangkat,
      gol: golongan,
    });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res =
        // await createUserWithEmailAndPassword(
        //   auth,
        //   data.email,
        //   data.password
        // );
        await addDoc(collection(db, "pegawai"), {
          ...data,
          timeStamp: serverTimestamp(),
        });
    } catch (err) {
      console.log(err);
    }
    navigate(-1);
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          {/* <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div> */}
          <div className="right">
            <form onSubmit={handleAdd}>
              <div className="formInput">
                <label>Jabatan</label>
                <select
                  value={jabatan}
                  onChange={(e) => setJabatan(e.target.value)}
                >
                  {jabatans.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <div className="formInput">
                <label>Pangkat</label>
                <select
                  value={pangkat}
                  onChange={(e) => setPangkat(e.target.value)}
                >
                  {pangkats.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <div className="formInput">
                <label>Gol</label>
                <select
                  value={golongan}
                  onChange={(e) => setGolongan(e.target.value)}
                >
                  {golongans.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              {/* <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div> */}
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
                </div>
              ))}
              <button
                disabled={percentage !== null && percentage < 100}
                type="submit"
              >
                Simpan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
