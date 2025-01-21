import React, { useEffect, useState } from "react";
import { db } from "./firebase"; // Import Firebase config
import { collection, getDocs } from "firebase/firestore";

function AdminDashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "images"));
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });
        setData(items);
        console.log(items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    // Convert Firebase Timestamp to a JavaScript Date object
    const date = timestamp.toDate();
    return date.toLocaleDateString(); // Or use date.toString() for a full string format
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Admin Dashboard</h1>
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {item.image_base ? (
                  <img
                    src={`data:image/jpeg;base64,${item.image_base}`}
                    alt="Uploaded"
                    width="400"
                    height="500"
                  />
                ) : item.cloudinary ? (
                  <video width="400" height="500" controls>
                    <source src={item.cloudinary} />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <p>No media available</p>
                )}
              </td>
              <td>{formatDate(item.uploaded_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
