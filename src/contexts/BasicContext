import { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import ProductProvider from "./context/ProductProvider";
import routes from "./routes/routes";

// export const COUNTER_CONTEXT = createContext();

function BasicContext() {
  return (
    <div>
      <ProductProvider>
        <RouterProvider router={routes} />
      </ProductProvider>
    </div>
  );
  // const [count, setCount] = useState(0);
  // const value = { count, setCount };
  // return (
  //   <div>
  //     <COUNTER_CONTEXT.Provider value={value}>
  //       <RouterProvider router={routes} />
  //     </COUNTER_CONTEXT.Provider>
  //   </div>
  // );
}

export default BasicContext;
