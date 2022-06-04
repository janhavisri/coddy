//import { Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import app_config from "../../config";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import "../../stylesheets/browseplatform.css";
import Update from "./update";

const ManagePlatform = () => {
  const url = app_config.api_url;

  const [platformData, setPlatformData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});

  const fetchData = () => {
    fetch(url + 'platform/getall')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPlatformData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = (id) => {
    fetch(url + "platform/delete/" + id, { method: "DELETE" })
    .then((res) => {
      console.log(res.status);
      fetchData();
    });
  };

  const updateData = (form) => {
    setShowForm(true);
    setFormData(form);
  };

  const displayUpdateForm = () => {
    if (showForm) {
      return 
     <Update formdata={formData}></Update>;
    }
  };

  const displayPlatforms = () => {
    if (!loading) {
      return platformData.map((platform) => (
        <tr>
          <td>{platform.title}</td>
          <td>{platform.description}</td>
          <td>
            <button
              onClick={(e) => deleteData(platform._id)}
              className="btn btn-danger"
            >
              {/* <i class="fa fa-trash" aria-hidden="true"></i> */}
              < DeleteForeverIcon color="dark" />
            </button>
          </td>
          <td>
            <button className="btn btn-primary" onClick={updateData}>
              {/* <i class="fas fa-pen"></i> */}
              < EditIcon color="dark" />
            </button>
          </td>
        </tr>
      ));
    }
  };

  return (
     <div>
      <h1 className="text-center">Manage Your Platform</h1>
      <hr />

      <table className="table table-light  ">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{displayPlatforms()}</tbody>
      </table>
      <div className="mt-5">{displayUpdateForm()}</div>
     </div>
  );
};

export default ManagePlatform;