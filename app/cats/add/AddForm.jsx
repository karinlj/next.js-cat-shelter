"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import "./AddForm.scss";

const AddForm = () => {
  const router = useRouter();

  const defaultInputValues = {
    id: Math.floor(Math.random() * 10001) + "",
    date: new Date().toJSON().slice(0, 10),
    name: "",
    description: "",
    goOutside: true,
  };
  const [formData, setFormData] = useState(defaultInputValues);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      ...formData,
    };
    const url =
      "https://json-server-vercel-54h43r8i2-karinljs-projects.vercel.app/cats";

    //add item to db
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });

    if (res.status === 201) {
      router.push("/cats");
      router.refresh();
    }
  };

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />{" "}
        </label>

        <label>
          Description:
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={(e) => {
              setFormData({ ...formData, description: e.target.value });
            }}
          ></textarea>
        </label>
        <br />
        <div>
          <label>
            <input
              type="checkbox"
              id="goOutside"
              checked={formData.goOutside}
              onChange={() => {
                setFormData({
                  ...formData,
                  goOutside: !formData.goOutside,
                });
              }}
            />
            <span>Wants to go outside</span>
          </label>
        </div>
      </div>
      <section className="btn-section">
        <button>Add Cat</button>
      </section>
    </form>
  );
};

export default AddForm;
