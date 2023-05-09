import React, { useState, useEffect } from "react";
// TODO delete это кастомное поле для тегов
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import {  db, storage } from '../../configs/firebase';
import { useNavigate, useParams } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  addDoc,
  collection,
  getDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

const initialState = {
  firstName: "",
  lastName: "",
  year: "",
  description: "",
  comments: [],
  likes: []
};

// TODO capitan / partisipant
const categoryOption = [
  "Капитан",
  "Участник",
];

const EditPage = ({ user, setActive }) => {

  // хранит данные формы
  const [form, setForm] = useState(initialState);

  // проверяет прогресс загрузки файла
  const [progress, setProgress] = useState(null);

  // сам путь до файла
  const [file, setFile] = useState(null);

  // TODO unused
  // const { id } = useParams();

  const navigate = useNavigate();

  // распакуем стейт для удобства
  // TODO category!!!!!!!!!!!!!!!!!!!! lost it
  const { firstName, lastName, year, comments, description, likes} = form;

  useEffect(() => {

    // TODO simple an вынести
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      // что это за функция?
      const uploadTask = uploadBytesResumable(storageRef, file);

      // отслеживание статуса загрузки
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setProgress(progress);
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
          // это стандартная функция - тут иде как колбек
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            toast.info("Image upload to firebase successfully");
            setForm((prev) => ({ ...prev, photo: downloadUrl }));
          });
        }
      );
    };

    // TODO for what? если файла етсть то грузи его
    file && uploadFile();
  }, [file]);


  // дли обычных полей
  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // для котегории
  // TODO мб можно обойтись одним???
  const onCategoryChange = (e) => {
    setForm({ ...form, category: e.target.value });
  };

  // отправка формы
  const handleSubmit = async (e) => {

    e.preventDefault();

    // TODO uncommit
    if (firstName && lastName) { // TODO category && tags && title && description && trending
      try
      {
        await addDoc(collection(db, "blogs"), {
          ...form,
          timestamp: serverTimestamp(),

          // TODO clean to made
          // author: user.displayName,
          // userId: user.uid,
        });
        toast.success("Blog created successfully");
      }
      catch (err)
      {
        console.log(err);
        toast.error("Возмозжно вы не заполнили все поля");
      }
    }

    navigate("/list");
  };

  return (
      <>
        <section className="edit py-2">
          <div className="container-fluid mb-4">
            <div className="container">
              <div className="row h-100 justify-content-center align-items-center">
                <div className="col-10 col-md-8 col-lg-6 border border-success  rounded rounded-5">

                  <form className="row blog-form" onSubmit={handleSubmit}>
                    <h1 className="text-center py-3">Добавить нового участника</h1>

                    <div className="col-12 py-3">
                      <input
                          type="text"
                          className="form-control input-text-box"
                          placeholder="firstName"
                          name="firstName"
                          value={firstName}
                          onChange={handleInputChange}
                      />
                    </div>

                    <div className="col-12 py-3">
                      <input
                          type="text"
                          className="form-control input-text-box"
                          placeholder="lastName"
                          name="lastName"
                          value={lastName}
                          onChange={handleInputChange}
                      />
                    </div>

                    <div className="col-12 py-3">
                      <input
                          type="text"
                          className="form-control input-text-box"
                          placeholder="year"
                          name="year"
                          value={year}
                          onChange={handleInputChange}
                      />
                    </div>


                    <div className="col-12 py-3">
                      <select
                          onChange={onCategoryChange}
                          className="form-select"
                      >
                        <option>Выбирите категорию участника</option>
                          <option>Выбирите категорию участника </option>
                          {categoryOption.map((option, index) => (
                              <option value={option || ""} key={index}>
                                  {option}
                              </option>
                          ))}
                      </select>
                    </div>

                    <div className="col-12 py-3">
                                <textarea
                                    className="form-control description-box"
                                    placeholder="Description"
                                    value={description}
                                    name="description"
                                    onChange={handleInputChange}
                                />
                    </div>

                    <div className="mb-3">
                      <input
                          type="file"
                          className="form-control"
                          onChange={(e) => setFile(e.target.files[0])}
                      />
                    </div>

                    <div className="col-12 py-3 text-center">
                      <button
                          className="btn btn-add btn-success"
                          type="submit"
                          disabled={progress !== null && progress < 100}
                      >
                        Отправить
                      </button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default EditPage;
