import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Layout({ children }) {
  return (
    <main className="">
      <Navbar />
      <div className="border border-red-400 p-4 mx-64 mt-16">
        Personal website is under construction! To visit how it looked like
        before, follow this link:{" "}
        <a
          href="/OldSPA"
          className="text-sky-400 text-arch_alpha_mod underline"
        >
          {" "}
          Previous Website Layout
        </a>
      </div>

      <div className="grid grid-cols-3 my-16">
        {/* About me section */}
        <div>
          <div className="w-auto mx-8">
            <img
              className="h-80"
              src={process.env.PUBLIC_URL + "/img/profile.png"}
              alt="profile"
            />
          </div>
          <div className="font-bold text-4xl p-2 "> Gordon Lei </div>
          <div className="font-medium text-2xl p-2 text-metropolis_alpha_yellow">
            {" "}
            Graduate Student @ Carnegie Mellon University Silicon Valley{" "}
          </div>
          <div className="font-normal text-xl p-2 text-metropolis_alpha_red grid grid-cols-1 divide-y-4">
            {" "}
            Email:
            <a className="text-blue-400 " href="mailto: glei@andrew.cmu.edu">
              {" "}
              glei@andrew.cmu.edu
            </a>
          </div>
        </div>
        {/* Whatever replacable content  */}
        <div className="col-span-2">
          <div className="border border-slate-500  mx-4">{children}</div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Layout;
