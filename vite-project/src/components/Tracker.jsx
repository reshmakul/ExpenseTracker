import { React } from "react";

const Tracker = ({ budget, totalExpenses, balance }) => {
  return (
    <div
      id="tracker-wrapper"
      className="bg-bg-900 p-10 flex justify-center align-center flex-col gap-8 pb-16"
    >
      <h1 className="text-white text-[2rem] p-2 pt-0">
        <span className="font-main text-primary">crunch</span> expense tracker
      </h1>
      <div
        id="tracker-balance"
        className="font-main text-primary  text-[14rem] leading-[10rem] flex justify-center align-center"
      >
        {balance}
        <span className="text-white text-[6rem] leading-[6rem]">EUR</span>
      </div>
      <div className="text-white flex justify-center align-center pb-6">
        balance
      </div>
      <div
        id="tracker-detail"
        className="flex flex-row w-full justify-center gap-8"
      >
        <div className="flex justify-center align-center flex-col border-primary/30 border-t-2 shadow-[0_0px_190px_0px] shadow-secondary/30 gap-2 bg-bg-800/80 h-56 rounded-xl p-8 duration-300 hover:shadow-secondary/60">
          <p className="text-secondary font-main text-[6rem]">
            {totalExpenses}
            <span className="text-white text-[3rem] leading-[3rem]">EUR</span>
          </p>
          <p className="text-white text-xl flex justify-center">
            total expenses
          </p>
        </div>
        <div className="flex justify-center h-56 align-center flex-col gap-2 bg-bg-800/90 border-primary/30 border-t-2 rounded-xl p-8 transition-all duration-300 shadow-[0_0px_150px_0px] shadow-primary/30 hover:shadow-primary/60">
          <p className="text-primary font-main  text-[6rem]">
            {budget}
            <span className="text-white text-[3rem] leading-[3rem]">EUR</span>
          </p>
          <p className="text-white text-xl flex justify-center">budget </p>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
