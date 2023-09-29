
import React, { useState, useEffect } from 'react';

function App() {
    const [markdown, setMarkdown] = useState('');
    const [html, setHtml] = useState('');
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      
      const convertedHtml = markdown.replace(/\n/g, '<br>');
      setHtml(convertedHtml);
    }, [markdown]);
  
    const handleMarkdownChange = (e) => {
      setMarkdown(e.target.value);
    };
  
    return (
      <div className="app">
        <div className="textarea">
          <textarea
            placeholder="Enter markdown task here..."
            value={markdown}
           
            onChange={handleMarkdownChange}
          />
        </div>
        <div className="preview">
        {loading ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          <strong><h1 dangerouslySetInnerHTML={{ __html: markdown }} /> </strong>
        )}
      </div>
      </div>
    );
  }
  
export default App;