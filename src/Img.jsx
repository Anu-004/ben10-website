import axios from "axios";
import { useState, useEffect } from "react";
import "./Ben.jsx";
import "./style.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Img = () => {
  const API = "https://ben10-api-dusky.vercel.app/api/ben";
  const [posts, setPosts] = useState([]);
  const [characterName, setCharacterName] = useState("");
  const [characterDescription, setCharacterDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
    //   const [editPostId, setEditPostId] = useState(null);
    const [editPostId, setEditPostId] = useState(false);


  // Runs only when it mounts
  useEffect(() => {
    getPost();
  }, []);

  // Get method in axios
  const getPost = async () => {
    try {
      const res = await axios.get(API);
      setPosts(res.data);
      console.log("data", res.data);
    } catch (error) {
      console.log("Error while fetching", error);
    }
  };

  // Post method in axios
  const createPost = async () => {
    if (!characterName || !characterDescription || !imageUrl) return;
    try {
      const res = await axios.post(API, {
        characterName,
        characterDescription,
        imageUrl,
      });
      setPosts([...posts, res.data]);
      setCharacterName("");
      setCharacterDescription("");
      setImageUrl("");
    } catch (error) {
      console.log("Error while posting", error);
    }
  };

  const updatePost = async (id) => {
    try {
      const res = await axios.put(`${API}/${id}`, {
        characterName,
        characterDescription,
        imageUrl,
      });
      setPosts(posts.map((post) => (post._id === id ? res.data : post)));
      setCharacterName("");
      setCharacterDescription("");
      setImageUrl("");
      setEditPostId(null);
    } catch (error) {
      console.error("Error while updating", error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.log("Error while deleting", error);
    }
  };

  return (
    <>
      <main style={{paddingLeft: "2.5em",paddingRiht: "2.5em",paddingBottom: "2.5em" }}>
      <section className="section" style={{ fontFamily: "sans-serif",}}>
        <div className="left-sec">
          <h2>Meet Ben 10!</h2>
          <p style={{ textAlign: "justify", fontSize: "1.2rem" }}>
            <strong>Ben 10</strong> is an American animated television series
            created by the group <em> Man of Action</em>
            and produced by <em>Cartoon Network Studios</em>. Debuting in 2005,
            it follows the thrilling adventures of
            <strong> Ben Tennyson</strong>, a young boy who discovers a
            mysterious device called the <em>Omnitrix</em>.
          </p>
          <p>
            The Omnitrix allows Ben to transform into various alien creatures,
            each with unique abilities. With these powers, Ben fights evil and
            protects the world. "It's hero time!" - Ben Tennyson Explore his
            incredible journey and the many aliens he can become!
          </p>
        </div>
        <div className="right-sec">
          <img
            src="../assets/watch.png"
            alt="omnitrix"
            height={"400px"}
            className="rotate-vert-center"
          />
        </div>
      </section>
      <div className="carousel  w-full bg-gradient-to-r from-green-400 to-blue-500 p-10 text-white">
        {/* Slide 1 */}
        <div
          id="slide1"
          className="carousel-item relative w-full flex flex-col items-center"
        >
          <h2 className="text-3xl font-bold mb-4">Origin Story</h2>
          <div className="comic-panel pt-3 pr-3 pl-3 shadow-lg text-black">
            <p className="text-center mt-12">
              During a camping trip, Ben Tennyson stumbles upon a mysterious
              watch-like device called the Omnitrix. This device attaches to his
              wrist, allowing him to transform into various alien heroes.
            </p>
            <img
              src="../assets/one.png"
              alt="Omnitrix"
              className="h-72 w-60 m-0"
            />
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle bg-black text-white">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-black text-white">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          id="slide2"
          className="carousel-item relative w-full flex flex-col items-center"
        >
          <h2 className="text-3xl font-bold mb-4">Alien Transformations</h2>

          <div className="comic-panel pt-3 pr-3 pl-3 shadow-lg text-black">
            <p className="text-center mt-12">
              With the Omnitrix, Ben can transform into ten different aliens,
              each with unique abilities. From Heatblast’s fire powers to Four
              Arms’ super strength, Ben becomes a hero!
            </p>
            <img
              src="../assets/two.png"
              alt="Four Arms"
              className="h-72 w-60 m-0"
            />
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle bg-black text-white">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-black text-white">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          id="slide3"
          className="carousel-item relative w-full flex flex-col items-center"
        >
          <h2 className="text-3xl font-bold mb-4">Saving the World</h2>

          <div className="comic-panel pt-3 pr-3 pl-3 shadow-lg text-black">
            <p className="text-center mt-12">
              Ben teams up with his cousin Gwen and Grandpa Max to fight
              villains like Vilgax and protect the world from evil forces.
            </p>
            <img src="./assets/vilgax.png" alt="Vilgax" className="h-72 m-0" />
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle bg-black text-white">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle bg-black text-white">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 4 */}
        <div
          id="slide4"
          className="carousel-item relative w-full flex flex-col items-center"
        >
          <h2 className="text-3xl font-bold mb-4">Legacy</h2>
          <div className="comic-panel pt-3 pr-3 pl-3 shadow-lg text-black">
            <p>
              From a 10-year-old boy to a world-famous superhero, Ben’s journey
              is filled with adventures, challenges, and growth, inspiring fans
              of all ages.
            </p>
            <img src="../assets/fam.png" alt="Ben 10 Legacy" className="h-60" />
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle bg-black text-white">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-black text-white">
              ❯
            </a>
          </div>
        </div>
        </div>
        {/* Pagination btn */}
      <div className="flex w-full justify-center gap-2 py-2">
        <a
          href="#slide1"
          className="relative flex items-center px-4 py-3 overflow-hidden font-medium transition-all bg-green-600 rounded-md group"
        >
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-800 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
          </span>
          <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-800 rounded group-hover:-ml-4 group-hover:-mb-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-green-700 rounded-md group-hover:translate-x-0" />
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">
           <strong> 1</strong>
          </span>
        </a>
        <a
          href="#slide2"
          className="relative flex items-center px-4 py-3 overflow-hidden font-medium transition-all bg-green-600 rounded-md group"
        >
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-800 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
          </span>
          <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-800 rounded group-hover:-ml-4 group-hover:-mb-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-green-700 rounded-md group-hover:translate-x-0" />
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">
           <strong> 2</strong>
          </span>
        </a>
        <a
          href="#slide3"
          className="relative flex items-center px-4 py-3 overflow-hidden font-medium transition-all bg-green-600 rounded-md group"
        >
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-800 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
          </span>
          <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-800 rounded group-hover:-ml-4 group-hover:-mb-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-green-700 rounded-md group-hover:translate-x-0" />
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">
           <strong> 3</strong>
          </span>
        </a>
        <a
          href="#slide4"
          className="relative flex items-center px-4 py-3 overflow-hidden font-medium transition-all bg-green-600 rounded-md group"
        >
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-800 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
          </span>
          <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-800 rounded group-hover:-ml-4 group-hover:-mb-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-green-700 rounded-md group-hover:translate-x-0" />
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">
           <strong> 4</strong>
          </span>
        </a>
        </div>
        

      {/* <!-- forms --> */}
      <h1>Ben 10 Characters</h1>
      <form>
        <input
          className="group glass-morphism animate-borderMove"
          type="text"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          placeholder="Enter character name"
        />
        <textarea
          className="group glass-morphism animate-borderMove"
          style={{ resize: "none", height: "100px" }}
          type="text"
          value={characterDescription}
          onChange={(e) => setCharacterDescription(e.target.value)}
          placeholder="Enter character description"
        ></textarea>

        <label for="file" class="custum-file-upload">
          <div class="icon">
            <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 1C9.73478 1
               9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478
                3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21
                7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772
                19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9
                7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19
                 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046
                 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825
                 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175
                  15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                  fill=""
                ></path>
              </g>
            </svg>
          </div>
          <div class="text">
            <span>Click to upload character image</span>
          </div>
                      <input id="file" type="file" onChange={(e) => {
                          console.log(e.target.files[0])
                          const img = e.target.files[0]
                          if (img) {
                              setEditPostId(true)
                              
                          }
          }}/>
        </label>

        {/* <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Enter image URL"
      />       */}

        {editPostId ? (
          <button className="btnn" onClick={() => updatePost(editPostId)}>
            <strong>Update Post</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
        ) : (
          <button className="btnn" onClick={createPost}>
            <strong>New Post</strong>

            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
        )}
        </form>

        {/* Dummy card */}
      <div class="card">
        <img src="../assets/4arm.png" alt="" />
        <p class="heading">Four Arm</p>
      </div>
      <br />

        {/* List of cards */}
      <ol>
        {posts.map((post) => (
          <li key={post._id}>
            <div className="card">
              <p className="heading">
                <strong>{post.characterName}:</strong>
              </p>
              {post.characterDescription}
              <img
                src={post.imageUrl}
                alt={post.characterName}
                style={{ width: "100px", height: "auto" }}
              />
            </div>
            <div style={{ display: "flex", gap: "2rem", marginTop: "1rem" }}>
              <button
                onClick={() => {
                  setEditPostId(post._id);
                  setCharacterName(post.characterName);
                  setCharacterDescription(post.characterDescription);
                  setImageUrl(post.imageUrl);
                }}
              >
                <img src="../assets/edit.png" alt="" style={{ width: "60px" }} />
              </button>
              <button onClick={() => deletePost(post._id)}>
                <img src="../assets/del.png" alt="" style={{ width: "60px" }}/>
              </button>
            </div>
          </li>
        ))}
      </ol>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Logo and Description */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <img
              src="../assets/logo.png"
              alt="Ben 10 Logo"
              className="h-16 mx-auto md:mx-0"
            />
            <p className="mt-3 text-sm max-w-md">
              Join Ben Tennyson on his adventures to save the universe! Explore
              the Omnitrix, its aliens, and epic tales of heroism.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm space-y-1">
              <li>
                <a
                  href="#about"
                  className="hover:underline text-gray-400 hover:text-white"
                >
                  About Ben 10
                </a>
              </li>
              <li>
                <a
                  href="#episodes"
                  className="hover:underline text-gray-400 hover:text-white"
                >
                  Episodes
                </a>
              </li>
              <li>
                <a
                  href="#aliens"
                  className="hover:underline text-gray-400 hover:text-white"
                >
                  Meet the Aliens
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:underline text-gray-400 hover:text-white"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 text-gray-400">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500"
              >
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <i className="fab fa-youtube text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Ben 10 Universe. All Rights Reserved.
        </div>
      </div>
    </footer>
    </>
  );
};

export default Img;
