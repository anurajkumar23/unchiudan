import React from "react";

function NewsComp() {
  return (
    <div>
      <div className="mx-auto w-[21rem]  ">
        <div className="grid-cols-3">
          <div className="">
            <img
              className="w-full rounded-xl"
              src={imageSrc}
              alt="Blog Cover"
            />
          </div>
          <div className="cols-span-2 mx-auto">
            <h1>Hello Blog 1 </h1>
            <p>meow meow mwow</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsComp;
