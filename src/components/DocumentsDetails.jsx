import React, { useState } from 'react'
import FilledButton from '../ui/FilledButton';


const DocumentTable = ({ documents }) => {
    return (
      <div className="container mx-auto p-2">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">No.</th>
              <th className="px-4 py-2 border-b">Document Name</th>
              <th className="px-4 py-2 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b text-center">{index + 1}</td>
                <td className="px-4 py-2 border-b text-center">{doc.name}</td>
                <td className="px-4 py-2 border-b text-center">
                  <FilledButton text={'view'} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const DocumentUpload = ({ onUpload,handleCancel }) => {
    const [documentName, setDocumentName] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [error, setError] = useState('');
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file && file.type.startsWith('image/')) {
        setImageFile(file);
        setError('');
      } else {
        setError('Please select a valid image file.');
      }
    };
  
    const handleUpload = (e) => {
      e.preventDefault();
      if (!documentName || !imageFile) {
        setError('Both document name and image are required.');
        return;
      }
      // Mock upload logic
      onUpload({
        documentName,
        imageFile,
      });
      setDocumentName('');
      setImageFile(null);
      setError('');
    };
  
    return (
      <div className="w-full bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Upload Document</h2>
        <form onSubmit={handleUpload}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Document Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
              placeholder="Enter document name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full"
              onChange={handleImageChange}
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className='flex items-center gap-2'>
         <FilledButton text={'upload'} handleClick={handleUpload} />
         <FilledButton text={'cancel'} handleClick={handleCancel}  color='bg-red-500' />
          </div>
        </form>
        {imageFile && (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Preview:</h3>
            <img
              src={URL.createObjectURL(imageFile)}
              alt="Preview"
              className="w-full h-auto object-cover rounded-md border"
            />
          </div>
        )}
      </div>
    );
  };

const DocumentsDetails = () => {
    const documents = [
        { name: "Document 1" },
        { name: "Document 2" },
        { name: "Document 3" }
      ];

      const [openUpload, setOpenUpload] = useState(false);

      const handleUpload = (data) => {
        console.log('Uploaded document:', data);
        alert(`Document "${data.documentName}" uploaded successfully!`);
      };

  return (
    <div>
        <div className='flex flex-col'>
           {!openUpload?<span className='ml-auto'><FilledButton text={openUpload?'cancel':'upload'} handleClick={() => setOpenUpload(prev => !prev)} /></span>
            :<DocumentUpload onUpload={handleUpload} handleCancel={() => setOpenUpload(false)} />}
        </div>
        <p className='text-lg font-semibold '>Uploaded Documents</p>
        <DocumentTable documents={documents} />
    </div>
  )
}

export default DocumentsDetails