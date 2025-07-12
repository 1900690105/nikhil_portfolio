"use client";
import { MessageCircle } from "lucide-react";
import ChatBot from "./ScrapBot";
import { useState } from "react";

const CompanyChatbot = ({ setMessages, messages }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <ChatBot
          setIsOpen={setIsOpen}
          setMessages={setMessages}
          messages={messages}
        />
      )}

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          title="ask about me"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110"
        >
          <MessageCircle size={24} />
        </button>
      </div>
    </>
  );
};

export default CompanyChatbot;

// "use client";
// import React, { Suspense, useState } from "react";
// import { MessageCircle } from "lucide-react";
// import ChatBot from "../components/ScrapBot";

// const CompanyChatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <div className="fixed bottom-6 right-6 z-50">
//         {/* Chat Window - positioned above the button */}
//         {isOpen && (
//           <div className="absolute bottom-20 right-0 mb-2 w-96 max-w-[90vw] h-96 max-h-[70vh]">
//             <Suspense>
//               <ChatBot setIsOpen={setIsOpen} />
//             </Suspense>
//           </div>
//         )}

//         {/* Chat Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse"
//         >
//           <MessageCircle size={24} />
//         </button>
//       </div>
//     </>
//   );
// };

// export default CompanyChatbot;

// // "use client";
// // import React, { Suspense, useState } from "react";
// // import { MessageCircle } from "lucide-react";
// // import ChatBot from "../components/ScrapBot";

// // const CompanyChatbot = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <>
// //       <div className="fixed bottom-6 right-6 z-50">
// //         {/* Chat Window - positioned above the button */}
// //         {isOpen && (
// //           <div className="absolute bottom-20 right-0 mb-2">
// //             <Suspense>
// //               <ChatBot setIsOpen={setIsOpen} />
// //             </Suspense>
// //           </div>
// //         )}

// //         {/* Chat Button */}
// //         <button
// //           onClick={() => setIsOpen(!isOpen)}
// //           className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse"
// //         >
// //           <MessageCircle size={24} />
// //         </button>
// //       </div>
// //     </>
// //   );
// // };

// // export default CompanyChatbot;
