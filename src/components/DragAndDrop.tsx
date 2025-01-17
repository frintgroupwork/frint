// "use client";
// import React, { useState } from "react";
// import { Card, CardBody, Button } from "@nextui-org/react";
// import Image from "next/image";

// const MultiTagDragDrop = () => {
//   return (
//     <div className="w-full h-screen">
//       <Image
//         alt="top-left"
//         src={"/quizbg/top-left2.svg"}
//         width={100}
//         height={80}
//         className="absolute top-0 left-0 max-sm:hidden"
//       />
//       <Image
//         alt="top-left"
//         src={"/quizbg/buttom-left2.svg"}
//         width={200}
//         height={100}
//         className="absolute bottom-0 -left-2 max-sm:hidden"
//       />
//       <Image
//         alt="top-left"
//         src={"/quizbg/top-right.svg"}
//         width={200}
//         height={100}
//         className="absolute top-0 right-0 max-sm:hidden"
//       />
//       <div className="flex flex-col w-full  h-screen justify-center items-center">
//         <Card className="">
//           <CardBody className="flex flex-col gap-2">
//             <h1 className="text-2xl font-bold text-[#1d4ed8] text-start">
//               Drag-and-Drop Activity
//             </h1>
//             <p className="text-gray-600  text-start">
//               Fill the correct key points of each question.
//             </p>
//             <div className="w-[80%]  flex flex-row justify-center items-start">
//               <div className="w-1/2 h-1/2 bg-red-100 "></div>
//               <div className="w-1/2 h-1/2 bg-red-400"></div>
//               <div className="w-1/2 h-[300px] bg-red-200"></div>
//             </div>

//             <Button color="primary" className="absolute w-1/3 right-0 bottom-0">
//               Next Question
//             </Button>
//           </CardBody>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default MultiTagDragDrop;
