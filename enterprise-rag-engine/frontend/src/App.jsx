import React, { useState } from 'react';
import axios from 'axios';
import { Upload, FileText, Send, Database, CheckCircle2, AlertCircle } from 'lucide-react';

function App() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [indexed, setIndexed] = useState(false);
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    setError('');
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://127.0.0.1:8000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setIndexed(true);
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to upload and index document.');
    } finally {
      setUploading(false);
    }
  };

  const handleQuery = async (e) => {
    e.preventDefault();
    if (!question) return;

    setLoading(true);
    setError('');
    try {
      const res = await axios.post('http://127.0.0.1:8000/query', { question });
      setResponse(res.data);
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to query RAG engine.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#f8fafc', fontFamily: 'sans-serif', padding: '2rem' }}>
      <header style={{ maxWidth: '800px', margin: '0 auto 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <Database color="#38bdf8" /> Enterprise RAG Knowledge Engine
        </h1>
        <p style={{ color: '#94a3b8' }}>Upload enterprise documents and query them with strict context verification.</p>
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Upload Card */}
        <section style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Upload size={20} /> Document Ingestion
          </h2>
          <form onSubmit={handleFileUpload} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ color: '#94a3b8' }}
            />
            <button
              type="submit"
              disabled={uploading || !file}
              style={{ backgroundColor: '#0284c7', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}
            >
              {uploading ? 'Processing...' : 'Upload & Index'}
            </button>
          </form>
          {indexed && (
            <p style={{ color: '#4ade80', marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <CheckCircle2 size={16} /> Document indexed into Qdrant Vector DB!
            </p>
          )}
        </section>

        {/* Query Card */}
        <section style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileText size={20} /> Ask Questions
          </h2>
          <form onSubmit={handleQuery} style={{ display: 'flex', gap: '1rem' }}>
            <input
              type="text"
              placeholder="e.g. What are the key compliance requirements mentioned?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              disabled={!indexed}
              style={{ flex: 1, padding: '0.5rem', borderRadius: '4px', border: '1px solid #475569', backgroundColor: '#0f172a', color: 'white' }}
            />
            <button
              type="submit"
              disabled={loading || !indexed}
              style={{ backgroundColor: indexed ? '#16a34a' : '#475569', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
            >
              <Send size={16} /> {loading ? 'Searching...' : 'Ask'}
            </button>
          </form>

          {error && (
            <p style={{ color: '#f87171', marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <AlertCircle size={16} /> {error}
            </p>
          )}
        </section>

        {/* Response Card */}
        {response && (
          <section style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Answer</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1rem' }}>{response.answer}</p>
            
            <h4 style={{ fontSize: '0.9rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Retrieved Context Sources</h4>
            {response.sources.map((src, idx) => (
              <div key={idx} style={{ backgroundColor: '#0f172a', padding: '0.75rem', borderRadius: '4px', marginBottom: '0.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
                {src}
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
