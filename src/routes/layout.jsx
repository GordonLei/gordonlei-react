import Navbar from "../components/updatedPageComponents/Navbar";
import Footer from "../components/Footer";
function Layout({ children }) {
  return (
    <main className="">
      <Navbar />
      {/*
        <div className="border border-red-400 p-4 mx-auto max-w-lg mt-16">
        Prior version of personal website:{" "}
        <a
          href="/OldSPA"
          className="text-sky-400 text-arch_alpha_mod underline"
        >
          {" "}
          Previous Website Layout
        </a>
      </div>
    */}

      <div className="grid grid-cols-3 my-16 p-4">
        {/* About me section */}
        <div>
          <div className="w-auto">
            <img
              className="h-80 mx-auto"
              src={process.env.PUBLIC_URL + "/img/profile.png"}
              alt="profile"
            />
          </div>
          <div className="text-center">
            <div className="font-bold text-4xl"> Gordon Lei </div>
            <div className="font-normal text-xl grid grid-cols-1 divide-y-4">
              {" "}
              Email:
              <a className="text-blue-400 " href="mailto: glei@andrew.cmu.edu">
                {" "}
                glei@andrew.cmu.edu
              </a>
            </div>
          </div>

          <hr />
          <div className="">
            <div>About</div>
            <div>
              {" "}
              Hi! I am Gordon Lei, a current Graduate Student pursuing a Masters
              in Software Engineering at Carnegie Mellon @ Silicon Valley. I am
              a NYU Tandon and Stuyvesant High School alumni
            </div>
          </div>
        </div>
        {/* Whatever replacable content  */}
        <div className="col-span-2">
          <div className="border border-slate-500  mx-4 p-4">{children}</div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Layout;
