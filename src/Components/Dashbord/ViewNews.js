import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewNews = () => {
  // const[News,setNewss]=useState("")
  const [news, setNews] = useState([]);
    const newsUrl = "https://hit-backend.onrender.com/news"

  const deleteNews = (id) => {
    axios
      .delete(`newsUrl/${id}`)
      .then(() => console.log("Deleted successfully"))
      .catch((err) => alert("error" + { err }));
  };

  useEffect(() => {
    axios
      .get(newsUrl)
      .then((res) => {
        setNews(res.data);
      })
      .catch((erro) => console.log("error in fetching the news" + { erro }));
  }, [deleteNews]);

  return (
    <div className="container mt-5 pt-5">
      <table
        class="table table-striped text-center"
        style={{ padding: "200px", borderRadius: "5px" }}
      >
        <thead>
          <tr>
            <th scope="col"> Delet</th>
            {/* <th scope="col">Edit</th> */}
            <th scope="col">News</th>
          </tr>
        </thead>
        <tbody>
          {news?.map((a) => {
            return (
              <tr key={a.id} scope="row">
                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => deleteNews(a.id)}
                  >
                    Delete
                  </button>
                </td>
                {/* <td><button type="button" class="btn btn-info" >Edit</button></td> */}
                <td>{a.News}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewNews;
