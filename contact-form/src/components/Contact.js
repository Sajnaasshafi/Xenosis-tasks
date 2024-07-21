// import React, { useState } from "react";

// export default function Contact() { 

//     const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);

//     // Here you can add form submission logic, e.g., sending data to a server

//     // Reset form data
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       message: "",
//     });

//     // Clear the success message after 5 seconds
//     setTimeout(() => setIsSubmitted(false), 5000);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({ ...prevState, [name]: value }));
//   };





// 	return ( 
// 		<div className="py-2 px-4 mx-auto max-w-screen-md"> 
// 			<h2 className="mb-4 text-4xl font-extrabold 
// 						text-center text-gray-900"> 
// 				Contact Us 
// 			</h2> 
// 			<p className="mb-4 font-light text-left 
// 						text-gray-500 sm:text-xl"> 
// 				Have any Query? Want to send Message? 
// 				Need Any Help? Let us know. 
// 			</p> 
// 			<form action="#"> 
// 				<div className="flex flex-row"> 
// 					<div className="w-1/2 pr-2 "> 
// 						<label for="firstName"
// 							className="block my-2 text-left 
// 										text-sm font-medium text-gray-900"> 
// 							First Name 
// 						</label> 
// 						<input type="text"
// 							className="shadow-sm bg-gray-50 border 
// 										border-gray-300 text-gray-900 
// 										text-sm rounded-lg block w-full p-2.5"
// 							placeholder="Enter First Name"
//                             value={formData.firstName}
//                             onChange={handleChange}
// 							required/> 
// 					</div> 
// 					<div className="w-1/2 pl-2"> 
// 						<label for="firstName"
// 							className="block my-2 text-left text-sm 
// 										font-medium text-gray-900"> 
// 							Last Name 
// 						</label> 
// 						<input type="text"
// 							className="shadow-sm bg-gray-50 border 
// 										border-gray-300 text-gray-900 
// 										text-sm rounded-lg block w-full p-2.5"
// 							placeholder="Enter Last Name"
//                             value={formData.lastName}
//                             onChange={handleChange}/> 
// 					</div> 
// 				</div> 
// 				<div> 
// 					<label for="email"
// 						className="block my-2 text-left text-sm 
// 									font-medium text-gray-900"> 
// 						Your email 
// 					</label> 
// 					<input type="email"
// 						className="shadow-sm bg-gray-50 border 
// 									border-gray-300 text-gray-900 
// 									text-sm rounded-lg block w-full p-2.5"
// 						placeholder="abc@geeksforgeeks.org"
//                         value={formData.email}
//                         onChange={handleChange}
// 						required /> 
// 				</div> 
// 				<div > 
// 					<label for="message"
// 						className="block my-2 text-left 
// 									text-sm font-medium text-gray-900 "> 
// 						Your message 
// 					</label> 
// 					<textarea rows="6"
// 							className="block p-2.5 w-full text-sm 
// 										text-gray-900 bg-gray-50 rounded-lg 
// 										shadow-sm border border-gray-300 "
// 							placeholder="Query/Suggestion..."
//                             value={formData.message}
//                             onChange={handleChange}/> 
// 				</div> 
// 				<button type="submit"
// 						className="mt-2 p-2 float-right text-white 
// 								rounded-lg border-green-600 
// 								bg-green-600 hover:scale-105"> 
// 					Send message 
// 				</button> 
// 			</form> 
// 		</div> 
// 	) 
// }


import React, { useState } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Here you can add form submission logic, e.g., sending data to a server

    // Reset form data
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });

    // Clear the success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="py-2 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl font-extrabold text-center text-gray-900">
        Contact Us
      </h2>
      <p className="mb-4 font-light text-left text-gray-500 sm:text-xl">
        Have any Query? Want to send Message? Need Any Help? Let us know.
      </p>
      {isSubmitted && (
        <div className="mb-4 text-center text-green-600 font-bold">
          Your message has been sent successfully!
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row">
          <div className="w-1/2 pr-2">
            <label
              htmlFor="firstName"
              className="block my-2 text-left text-sm font-medium text-gray-900"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter First Name"
              required
            />
          </div>
          <div className="w-1/2 pl-2">
            <label
              htmlFor="lastName"
              className="block my-2 text-left text-sm font-medium text-gray-900"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter Last Name"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block my-2 text-left text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="abc@geeksforgeeks.org"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block my-2 text-left text-sm font-medium text-gray-900"
          >
            Your message
          </label>
          <textarea
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
            placeholder="Query/Suggestion..."
          />
        </div>
        <button
          type="submit"
          className="mt-2 p-2 float-right text-white rounded-lg border-green-600 bg-green-600 hover:scale-105"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
