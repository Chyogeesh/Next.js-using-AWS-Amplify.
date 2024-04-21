// pages/index.js
import Head from 'next/head';
import { useState, useEffect } from 'react';

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from GraphQL API
    fetchData();
  }, []);

  const fetchData = async () => {
    // Code to fetch data from GraphQL API
    try {
      const response = await fetch('YOUR_API_ENDPOINT');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Head>
        <title>My Next.js Website</title>
        <meta name="description" content="A simple Next.js website hosted on AWS Amplify." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to My Next.js Website</h1>
        {data && (
          <div>
            {/* Display fetched data */}
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </main>

      <footer>
        <p>© 2024 My Next.js Website</p>
      </footer>
    </div>
  );
}

export default Home;
