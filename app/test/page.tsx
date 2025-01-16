// // pages/your-page.tsx
// import { GetServerSideProps } from "next";
// import axiosInstance from "@/lib/axios"; // Import your custom Axios instance

// interface Data {
//   // Define the type of the data you're fetching
//   id: number;
//   name: string;
// }

// interface Props {
//   data: Data;
// }

// const YourPage: React.FC<Props> = ({ data }) => {
//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <p>ID: {data.id}</p>
//     </div>
//   );
// };

// // Fetch data server-side with getServerSideProps
// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     const response = await axiosInstance.get("/your-endpoint"); // Use your custom Axios instance

//     return {
//       props: {
//         data: response.data, // Pass the fetched data to your page
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: {
//         data: null, // In case of error, pass null or handle the error appropriately
//       },
//     };
//   }
// };

// export default YourPage;
