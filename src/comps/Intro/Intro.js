import m1 from "../../images/m1.jpg";
import m2 from "../../images/m2.jpg";
const Intro = () => {
  return (
    <div
      className="flex flex-col md:flex-row my-5 px-5
    "
    >
      {/* left */}
      <div
        className=" md:w-[60%]   
      "
      >
        <div
          className=" border-b border-gray-300 pb-5
      md:border-r
      md:pr-6"
        >
          <p className="text-2xl text-center mb-5">
            Welcome To Adarsha Saula College
          </p>
          <div className="lg:flex items-start justify-evenly ">
            <img src={m1} alt="" className="lg:w-[60%] object-contain " />
            <div className="lg:w-[30%]  ">
              <p className="text-gray-500 text-sm mt-2 break-all">
                Adarsha Saula College a reputed and leading community college
                established in 2062 B.S. by enthusiastic personalities to
                fulfill the contemporary need of each and every student leading
                as a global manpower. 13 years of its wonderful performance has
                undoubtedly made Adarsha Saula Colege famous as one of the
                foremost educaitonal insitution in Lalitpur district.
              </p>
              <button className="bg3 text-white px-3 py-2 mt-2 hover:bg-green-500">
                LEARN MORE
              </button>
            </div>
          </div>

          {/* here */}

          <div
            className="mt-7    border-gray-400 
              border-t pt-5"
          >
            <p className="text-xl uppercase font-bold border-b border-gray-400 mb-4 pb-5">
              Recent News
            </p>
            <div className="content">
              <div className="sm:flex justify-between sm:space-x-5">
                <img
                  src={m2}
                  alt="err"
                  className="mb-3 block flex-grow w-[154px] object-cover
                cursor-pointer
                "
                />
                <div className="info ">
                  <p className="font-bold text-xl">
                    Pre-board Exam notice for Bachelor 1st and 2nd year
                  </p>
                  <div className="flex mb-5">
                    <p className="text-sm">
                      Posted in:
                      <span className="text-yellow-600 italic"> General</span>
                    </p>
                    <p className="text-sm ml-7">
                      on:
                      <span className="text-yellow-600 italic">
                        February 19, 2020
                      </span>
                    </p>
                  </div>
                  <p className="text-gray-500 ">
                    Notice for the Pre-board examination of Bachelor Fist and
                    Second year has been published. ...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div
        className="
              md:w-[30%]
              min-w-[400px]
              mt-10
              md:mt-0
              border-l
              m-auto px-5 
               border-gray-400 
              border-r
              "
      >
        <p className="w-full bg-yellow-900 h-1 mb-7 " />

        <p className="font-bold text-gray-700 mb-5 uppercase text-2xl">
          From the Facebook
        </p>

        <span

        //   style="vertical-align: bottom; width: 334px; height: 500px;"
        >
          <iframe
            name="f35f5c04adf54d8"
            data-testid="fb:page Facebook Social Plugin"
            title="fb:page Facebook Social Plugin"
            allowtransparency="true"
            allowfullscreen="true"
            scrolling="no"
            allow="encrypted-media"
            //   style="border: medium none; visibility: visible; width: 334px; height: 500px;"
            src="https://www.facebook.com/v2.8/plugins/page.php?adapt_container_width=true&amp;app_id=847331238638225&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df2f9c3053bd2b8c%26domain%3Dadarshacollege.edu.np%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fadarshacollege.edu.np%252Ff2795fd5d6be4cc%26relation%3Dparent.parent&amp;container_width=334&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FAdarsha-Saula-College-129358484358522%2F&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=false&amp;small_header=false&amp;tabs=timeline"
            className="h-[500px] w-[334px] m-auto "
            frameborder="0"
          ></iframe>
        </span>
      </div>
    </div>
  );
};

export default Intro;
