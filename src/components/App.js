
import React, { useState, useEffect } from 'react';

function App() {
    const [markdown, setMarkdown] = useState('');
    const [html, setHtml] = useState('');
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      // You can use a markdown-to-html library here to convert markdown to HTML.
      // For this example, we'll use a simple method that replaces newlines with <br>.
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
          <p className="loading">Loading...</p>
        ) : (
          <h1 dangerouslySetInnerHTML={{ __html: markdown }} /> 
        )}
      </div>
      </div>
    );
  }
  
export default App;