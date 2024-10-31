import { useEffect, useState } from "react";
import { CANData } from "./models"; // Ensure the path is correct
import { DataStore } from "@aws-amplify/datastore";

function App() {
  const [data, setData] = useState<CANData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataList = await DataStore.query(CANData);
      setData(dataList);
    };

    fetchData();

    const subscription = DataStore.observe(CANData).subscribe(() => {
      fetchData(); // Re-fetch data whenever there’s a change
    });

    return () => subscription.unsubscribe();
  }, []);

  async function createData() {
    const scan1 = parseFloat(window.prompt("Enter scan1 value") || "0");
    const scan2 = parseFloat(window.prompt("Enter scan2 value") || "0");
    const scan3 = parseFloat(window.prompt("Enter scan3 value") || "0");

    await DataStore.save(
      new CANData({
        scan1,
        scan2,
        scan3,
      })
    );
  }

  return (
    <main>
      <h1>CAN Data</h1>
      <button onClick={createData}>+ new</button>
      <ul>
        {data.map((entry) => (
          <li key={entry.id}>
            Scan1: {entry.scan1}, Scan2: {entry.scan2}, Scan3: {entry.scan3}
          </li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new data entry.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review the next step of this tutorial.
        </a>
      </div>
    </main>
  );
}

export default App;

