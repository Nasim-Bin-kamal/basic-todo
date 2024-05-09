import { useState } from "react";

const ShortForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      password,
    };
    // console.log(data);

    // by axios and react hook form

    // axios
    //   .post(
    //     "https://two-wheels-zone-website-server-site.vercel.app/products",
    //     data
    //   )
    //   .then((res) => {
    //     if (res?.data?.insertedId) {
    //       successNotify();
    //       reset();
    //     }
    //   });

    //---------by async await

    try {
      await axios.post("https://api.example.com/data", data);
      console.log("Item added successfully");
      fetchData(); // Refresh data after adding
    } catch (error) {
      console.error("Error adding data:", error);
    }

    //   const deleteData = async (id) => {
    //     try {
    //       await axios.delete(`https://api.example.com/data/${id}`);
    //       console.log('Item deleted successfully');
    //       fetchData(); // Refresh data after deletion
    //     } catch (error) {
    //       console.error('Error deleting data:', error);
    //     }
    //   };
  };
  return (
    <div className="p-4 shadow-lg bg-white rounded-md ">
      <form onSubmit={submit}>
        <div className="pb-2 flex flex-col justify-center items-start">
          <label htmlFor="name">First Name :</label>
          <input
            className="border-2 p-1 rounded-sm"
            type="text"
            name="name"
            id="id1"
            onBlur={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="pb-2 flex flex-col justify-center items-start">
          <label htmlFor="name">Last Name :</label>
          <input
            className="border-2 p-1 rounded-sm"
            type="text"
            name="name"
            id="id2"
            onBlur={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="pb-2 flex flex-col justify-center items-start">
          <label htmlFor="name">Email :</label>
          <input
            className="border-2 p-1 rounded-sm"
            type="email"
            name="name"
            id="id3"
            onBlur={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="pb-2 flex flex-col justify-center items-start">
          <label htmlFor="name">Password :</label>
          <input
            className="border-2 p-1 rounded-sm"
            type="password"
            name="name"
            id="id4"
            onBlur={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="p-2 bg-purple-500 my-2 text-white" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShortForm;
