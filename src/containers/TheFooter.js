import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a
          href="https://www.facebook.com/chubo2704/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Minh Nhân
        </a>
        <span className="ml-1">- Web quản trị app Nhân Du</span>
      </div>
      {/* <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a
          href="https://coreui.io/react"
          target="_blank"
          rel="noopener noreferrer"
        >
          CoreUI for React
        </a>
      </div> */}
    </CFooter>
  );
};

export default React.memo(TheFooter);
