import { useState } from 'react';
import '../Styles.css';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function PricingSection() {
  const [mode,setMode] = useState("dark")

  const headerMAP = [
    {
      name: 'API',
    },
    {
      name: 'Model',
    },
    {
      name: 'Price per 1K tokens',
    },
  ];

  const rows = [
    ['OpenAI', 'GPT-3.5', "$0.002"],
    ['OpenAI', 'GPT-4', "$0.03"],
    ['Together AI', 'Llama-2-70b', '$0.0008'],
    ['Together AI', 'Llama-2-13b', "$0.00062"],
  ];

  const handleDisplayMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`App ${mode}`}>
    <div className="mode-button">
      <button onClick={handleDisplayMode}>
        {mode === 'dark' ? (
          <FaMoon size={24} className="icon" />
        ) : (
          <FaSun size={24} className="icon" />
        )}
      </button>
    </div>
      <section id='pricing'>
        <h2>API Pricing</h2>
        <p>
          Our API pricing is based on the model used and the number of tokens
          processed. Here's a breakdown of the costs:
        </p>
        <table>
          <thead>
            <tr>
              {headerMAP.map(e => (
                <th key={e.name}>{e.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {row.map((data, idx) => (
                  <td key={idx}>{data}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Token Estimation</h3>
        <p>
          On average, 1 token is approximately 4 characters or 0.75 words. For
          precise pricing, we recommend using our token calculator tool.
        </p>
        <h3>Billing</h3>
        <p>
          You will only be charged for the tokens used in generating the book.
          The API tracks token usage and bills accordingly. Detailed usage
          reports are available in your account dashboard.
        </p>
      </section>
    </div>
  );
}