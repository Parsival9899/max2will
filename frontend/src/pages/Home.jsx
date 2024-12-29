import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { GoArrowDown } from "react-icons/go";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="text-white h-[68vh] bg-black flex flex-col justify-center pl-20 space-y-40">
        <div className="space-y-5">
          <h1 className="font-semibold text-7xl">
            Max2Win
          </h1>
          <h1 className="font-semibold text-7xl">
            Advance Trading Solution.
          </h1>
        </div>

        <div className="flex justify-between items-center max-w-7xl">
          <button className="flex justify-center items-center gap-2 border border-white p-5 rounded-full px-9">
            {" "}
            <BsArrowRight /> Get in touch
          </button>

          <button className="border border-gray-500 p-3 rounded-full text-3xl">
            <GoArrowDown />{" "}
          </button>
        </div>
      </div>

      {/* make video play section here */}

      <div className="w-full bg-gray-900 flex justify-center items-center">
        <video muted playsInline preload="none" loop autoPlay width="100%" height="" controls={false}>
          <source src="https://static.tradingview.com/static/bundles/chart-big.hvc1.28edcb3d97450fcb799f.mp4" type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>



      <div className=" bg-black text-white flex flex-col">
        <div className="m-36 space-y-32">
          <div className="font-extralight text-7xl">
            <p>We use the power of </p>
            <p> narrative, design, and</p>
            <p>technology to help </p>
            <p> start-ups grow. </p>
          </div>

          <hr className="w-full border border-gray-600" />

          <div className="flex justify-between items-center">
            {" "}

            {/*  row mein convert karna hai  */}
            <div>
              <video
                muted
                playsInline
                preload="none"
                loop
                autoPlay
                width="650"
                controls={false}
              >
                <source
                  src="https://www.ouiwill.com/wp-content/uploads/2021/06/Section01-2.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="font-normal text-2xl space-y-5">
              <p>Since 2013, we’ve garnered over 70 awards and have</p>
              <p>generated millions in start-up value, launching some of</p>
              <p>the most iconic tech brands of our era. After realizing </p>
              <p>that our approach to design generates insane valuation</p>
              <p>metrics, we introduced a new model – our Digital.</p>
              <p>Brand. Accelerator.</p>
            </div>
          </div>
        </div>
      </div>  



      {/* other section  */}
      <div className=" bg-white text-black flex flex-col">
        <div className="m-72 space-y-32">
          <div className="text-7xl text-center font-extralight space-y-4">
            <h2> To give startups </h2>
            <h2> an unfair </h2>
            <h2>advantage </h2>
          </div>
        </div>

        <div className="mx-36 space-y-48 mb-80">
          <div className="flex justify-cetrent items-center space-x-48">
            <img
              src="https://www.ouiwill.com/wp-content/uploads/2022/04/rivian.jpg"
              width="160"
              alt="image"
            />
            <img
              src="https://www.ouiwill.com/wp-content/uploads/2022/04/rappi.jpg"
              width="160"
              alt="image"
            />
            <img
              src="https://www.ouiwill.com/wp-content/uploads/2022/04/moxion.jpg"
              width="160"
              alt="image"
            />
            <img
              src="https://www.ouiwill.com/wp-content/uploads/2022/04/oura.jpg"
              width="160"
              alt="image"
            />
          </div>
          <div className="flex justify-cetrent items-center space-x-48">
            <img
              src="https://www.ouiwill.com/wp-content/uploads/2022/04/list-across.jpg"
              width="160"
              alt="image"
            />
            <img
              src="https://www.ouiwill.com/wp-content/uploads/2022/04/unpsun.jpg"
              width="160"
              alt="image"
            />
            <img
              src="https://www.ouiwill.com/wp-content/uploads/2022/04/kanarys.jpg"
              width="160"
              alt="image"
            />
            <img
              src="https://www.ouiwill.com/wp-content/uploads/2022/04/connect-homes.jpg"
              width="160"
              alt="image"
            />
          </div>
          <div className="flex justify-cetrent items-center space-x-48">
            <img
              src="https://www.ouiwill.com/wp-content/uploads/2022/04/ov-loop.jpg"
              width="160"
              alt="image"
            />
            <img
              src="https://www.ouiwill.com/wp-content/uploads/2022/04/pinch.jpg"
              width="160"
              alt="image"
            />
            <img
              src="https://www.ouiwill.com/wp-content/uploads/2022/04/hyperframe.jpg"
              width="160"
              alt="image"
            />
            <img
              src="https://www.ouiwill.com/wp-content/uploads/2022/04/nexbank.jpg"
              width="160"
              alt="image"
            />
          </div>
        </div>
      </div>

      {/* other section  */}

      <div className=" bg-black text-white flex flex-col">
        <div className="m-36 space-y-32">
          <div className="flex justify-between items-center">
            {" "}
            {/*  row mein convert karna hai  */}
            <div className="font-normal space-y-16">
              <div className="font-normal text-4xl space-y-5">
                <span>Designed to transform</span>
              </div>

              <div className="space-y-5 text-xl">
                <p>Across all creative disciplines, we’re a team of</p>
                <p>dreamers who have all-consuming passions. We</p>
                <p>believe good design drives influence, and this</p>
                <p>influence should be used for good. By aligning</p>
                <p>ourselves with partners that share the same sentiment,</p>
                <p>we can work together to enrich people’s lives through</p>
                <p>design while making the world a better place.</p>
              </div>

              <button className="flex justify-center items-center gap-2 border border-gray-400 p-4 py-5 rounded-full px-9">
                {" "}
                <BsArrowRight className="text-2xl" /> Services
              </button>
            </div>
            <div>
              <video
                muted
                playsInline
                preload="none"
                loop
                autoPlay
                width="700"
                controls={false}
              >
                <source
                  src="https://www.ouiwill.com/wp-content/uploads/2021/06/Section03-1.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* 2nd part of this */}
        <div className="m-36 space-y-32 bg-black">
          <div className="flex justify-between items-center">
            {" "}
            {/*  row mein convert karna hai  */}
            <div>
              <video
                muted
                playsInline
                preload="none"
                loop
                autoPlay
                width="650"
                controls={false}
              >
                <source
                  src="https://www.ouiwill.com/wp-content/uploads/2021/06/Section02-2.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="font-normal space-y-16 m-5">
              <div className="font-normal text-3xl space-y-2">
                <p>Making the world a better place,</p>
                <p>One brand at a time.</p>
              </div>

              <div className="space-y-5 text-xl">
                <p>Across all creative disciplines, we’re a team of</p>
                <p>dreamers who have all-consuming passions. We</p>
                <p>believe good design drives influence, and this</p>
                <p>influence should be used for good. By aligning</p>
                <p>ourselves with partners that share the same sentiment,</p>
                <p>we can work together to enrich people’s lives through</p>
                <p>design while making the world a better place.</p>
              </div>

              <div className="space-y-5 text-xl">
                <div className="font-normal text-3xl space-y-2">
                  <p>INDUSTRIES</p>
                </div>

                <p>Tech-for-good, Sustainability, Healthtech, SAS, Impact</p>
                <p>Investing, Biotech, Fintech, Non-profit, and others.</p>
              </div>
            </div>
          </div>
        </div>

        {/* other section  */}

        <div className=" bg-white  text-black flex flex-col">
          <div className="m-36">
            <div className=" text-center font-extralight space-y-4 ">
              <span className="text-2xl font-normal ">
                Create value. Launch faster. Extend your runway.
              </span>
              <div className="text-7xl">
                <h2> Apply to be selected for our elite </h2>
                <h2> accelerator program </h2>
              </div>

              <div className="pt-16 pb-24">
                <button className="border border-gray-400 p-4 py-5 rounded-full px-10 bg-black text-white">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* other section  */}

        <div className=" bg-black  text-white flex justify-center items-center">
          <div className="text-[300px] font-sans p-20">
            <span>Portfolio</span>
          </div>
        </div>

        {/* other section  */}

        <div className="bg-[url('https://www.ouiwill.com/wp-content/uploads/2021/04/rivian1.jpeg')] bg-cover bg-center h-[70vh] flex flex-col">
          <div className="m-12 ml-28 ">
            <div className="rounded mt-10 w-[140px]">
              <img
                src="https://www.ouiwill.com/wp-content/uploads/2021/04/rivian_logo.svg"
                alt="Description"
                className="h-auto rounded"
              />
            </div>
            <div className="mt-4">
              <p className="text-white text-2xl">
                Advancing the shift towards sustainable mobility
              </p>
            </div>
          </div>
        </div>

        {/* other section  */}

        <div className="flex justify-between">
          <div className="bg-[url('https://www.ouiwill.com/wp-content/uploads/2021/04/RappiCard-1-1654x1080.png')] bg-cover bg-center h-[70vh] w-[110vh] flex flex-col">
            <div className="m-12 ml-28">
              <div className="rounded mt-10 w-[100px]">
                <img
                  src="https://www.ouiwill.com/wp-content/uploads/2021/04/rappi_logo.svg"
                  alt="Description"
                  className="h-auto rounded"
                />
              </div>
              <div className="mt-4">
                <p className="text-white text-2xl">
                  Launching Latin America's alternative bank
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[url('https://www.ouiwill.com/wp-content/uploads/2021/06/04_MACRO_SNOOZEFEST-1060-V02-1200x1800.jpg')] bg-cover bg-center h-[70vh] w-[110vh]  flex flex-col">
            <div className="m-12 ml-28 ">
              <div className="rounded mt-10 w-[80px]">
                <img
                  src="https://www.ouiwill.com/wp-content/uploads/2021/06/oura_logo.svg"
                  alt="Description"
                  className="h-auto rounded"
                />
              </div>
              <div className="mt-4">
                <p className="text-white text-2xl">
                  Helping the World Harness its potential, One
                </p>
                <p className="text-white text-2xl">ring at a time</p>
              </div>
            </div>
          </div>
        </div>

        {/* other section  */}

        <div className=" bg-black  text-white flex justify-center items-center">
          <div className="text-[210px] font-sans p-20">
            <span>full Portfolio</span>
          </div>
        </div>

        {/* other section  */}

        <div className="bg-[url('https://www.ouiwill.com/wp-content/uploads/2021/06/push-disrupt-2880x1800.jpeg')] bg-cover bg-center h-screen">
            <div className="flex flex-col justify-center items-center mt-52 space-y-5">
                <div className="text-white text-xl font-normal">
                    <p>Presenting Disrupt</p>
                </div>
                <div className="text-white text-6xl font-normal text-center space-y-5">
                    <p>Our approach to </p>
                    <p>building the tech brands</p>
                    <p>of tomorrow</p>
                </div>
            </div>
        </div>
         {/* other section  */}

         <div className=" bg-black  text-white flex justify-center items-center">
          <div className="text-[210px] font-sans p-20">
            <span>full Portfolio</span>
          </div>
        </div>

        <Footer/>

        {/* end is below */}
      </div>
    </>
  );
};

export default Home;
