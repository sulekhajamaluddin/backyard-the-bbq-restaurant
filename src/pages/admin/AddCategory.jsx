//Node Modules
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

//Project Files
import Form from "../../components/admin/forms/AddCategory";

export default function AddCategory() {
  const navigate = useNavigate();
  return (
    <div className="add-category flex-column-center">
      <h1>Add A New Category</h1>
      <div className="button-holder">
        <button onClick={() => navigate(-1)}>
          <FontAwesomeIcon
            className="back-icon"
            icon={solid("circle-arrow-left")}
          />
        </button>
      </div>
      <Form collectionName={"categories"} />
    </div>
  );
}
