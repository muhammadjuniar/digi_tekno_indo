// Tamporary
export const pegawaiCols = [
  { field: "nama", headerName: "Nama", width: 150 },
  { field: "nip", headerName: "Nip", width: 150 },
  { field: "jabatan", headerName: "Jabatan", width: 180 },
  { field: "pangkat", headerName: "Pangkat", width: 150 },
  { field: "gol", headerName: "Gol", width: 100 },
  { field: "phone", headerName: "Kontak", width: 150 },
];

export const userCols = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 200 },
  { field: "address", headerName: "Adress", width: 200 },
  { field: "phone", headerName: "Phone", width: 100 },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 130,
  //   renderCell: (params) => {
  //     return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
  //   },
  // },
];

export const userRows = [
  {
    id: 1,
    username: "Albret",
    img: "https://icon-library.com/images/default-user-icon/default-user-icon-20.jpg",
    status: "active",
    email: "Albret@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Elza",
    img: "https://icon-library.com/images/default-user-icon/default-user-icon-20.jpg",
    status: "pending",
    email: "Elza@gmail.com",
    age: 38,
  },
  {
    id: 3,
    username: "Abraham Ilham",
    img: "https://icon-library.com/images/default-user-icon/default-user-icon-20.jpg",
    status: "pending",
    email: "Abraham1lham@gmail.com",
    age: 40,
  },
  {
    id: 4,
    username: "Usep Sbastian",
    img: "https://icon-library.com/images/default-user-icon/default-user-icon-20.jpg",
    status: "passive",
    email: "UsepSbastian@gmail.com",
    age: 20,
  },
  {
    id: 5,
    username: "Michael Endang",
    img: "https://icon-library.com/images/default-user-icon/default-user-icon-20.jpg",
    status: "active",
    email: "MichaelEndang@gmail.com",
    age: 33,
  },
  {
    id: 6,
    username: "Abas Obam",
    img: "https://icon-library.com/images/default-user-icon/default-user-icon-20.jpg",
    status: "active",
    email: "AbasObam@gmail.com",
    age: 41,
  },
  {
    id: 7,
    username: "Bram Marana",
    img: "https://icon-library.com/images/default-user-icon/default-user-icon-20.jpg",
    status: "active",
    email: "BramMarana@gmail.com",
    age: 60,
  },
  {
    id: 8,
    username: "Fergus Abrani",
    img: "https://icon-library.com/images/default-user-icon/default-user-icon-20.jpg",
    status: "active",
    email: "FergusAbrani@gmail.com",
    age: 57,
  },
  {
    id: 9,
    username: "Eric",
    img: "https://icon-library.com/images/default-user-icon/default-user-icon-20.jpg",
    status: "active",
    email: "Eric3121C@gmail.com",
    age: 21,
  },
  {
    id: 10,
    username: "Hera Yunita",
    img: "https://icon-library.com/images/default-user-icon/default-user-icon-20.jpg",
    status: "active",
    email: "YunitaHera@gmail.com",
    age: 35,
  },
  {
    id: 11,
    username: "Ciku Yuka",
    img: "https://icon-library.com/images/default-user-icon/default-user-icon-20.jpg",
    status: "passive",
    email: "CikuYuka@gmail.com",
    age: 25,
  },
];
