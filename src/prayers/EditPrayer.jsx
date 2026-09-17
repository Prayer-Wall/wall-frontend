import { useParams, useNavigate } from "react-router";
import { useAuth } from "../auth/AuthContext";
import { useEffect, useState } from "react";
import { deletePrayer, editPrayer, getPrayerById } from "../api/prayers";
import "./prayer.css";

const EditPrayer = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const [error, setError] = useState();
  const [prayer, setPrayer] = useState();
  const [prayerImg, setPrayerImg] = useState();
  const navigate = useNavigate();

  const getPrayer = async () => {
    const currentPrayer = await getPrayerById(token, id);
    setPrayerImg(currentPrayer.image);
    setPrayer(currentPrayer.prayer);
  };

  useEffect(() => {
    getPrayer();
  }, []);

  const tryEditPrayer = async (formData) => {
    try {
      setError(null);
      const formImage = formData.get("img");
        if (formImage.name === "" || formImage.type === "image/jpeg" || formImage.type === "image/png") {
          await editPrayer(token, formData, id);
          setPrayer("")
          navigate("/wall")
        } else {
          throw new Error("Image must be a JPEG or PNG file");
        }
    } catch (e) {
      setError(e.message);
    }
  };

  const tryDeletePrayer = async () => {
   try {
      setError(null);
      await deletePrayer(token, id);
      navigate("/wall")
   } catch (e) {
      setError(e.message)
   }
  }

  if (!prayer) return <p>Loading...</p>;

  return (
    <section id="edit-pg">
      <h1>Edit Prayer</h1>
      <form class="prayer-form" action={tryEditPrayer} encType="multipart/form-data">
        <label className="image-upload">
          <img id="edit-img" src={`http://localhost:3000/api/images/${prayerImg}`} alt="" />
          Change image (Optional)
          <input type="file" name="img"/>
        </label>
        <textarea
          name="prayer"
          value={prayer}
          onChange={(e) => setPrayer(e.target.value)}
          required
        />
        <button id="prayer-form-add">Save</button>
        {error && <p className="error">{error}</p>}
      </form>
      <p className="delete" onClick={() => tryDeletePrayer()}>Delete</p>
    </section>
  );
};

export default EditPrayer;
