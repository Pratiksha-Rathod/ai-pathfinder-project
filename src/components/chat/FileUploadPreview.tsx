
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FileUploadPreviewProps {
  file: File;
  onRemove: () => void;
}

export const FileUploadPreview: React.FC<FileUploadPreviewProps> = ({ file, onRemove }) => {
  const fileType = file.type.split('/')[0];
  const fileURL = URL.createObjectURL(file);
  
  // Component cleanup
  React.useEffect(() => {
    return () => {
      URL.revokeObjectURL(fileURL);
    };
  }, [fileURL]);
  
  const renderPreview = () => {
    switch (fileType) {
      case 'image':
        return (
          <div className="relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img 
              src={fileURL} 
              alt="Upload preview" 
              className="max-h-32 object-contain mx-auto"
            />
          </div>
        );
      case 'video':
        return (
          <div className="relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
            <video 
              className="max-h-32 mx-auto" 
              controls
            >
              <source src={fileURL} type={file.type} />
              Your browser does not support video playback.
            </video>
          </div>
        );
      case 'audio':
        return (
          <div className="relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 p-2">
            <audio 
              className="w-full" 
              controls
            >
              <source src={fileURL} type={file.type} />
              Your browser does not support audio playback.
            </audio>
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
            <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                {file.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {file.type || 'Unknown type'} • {Math.round(file.size/1024)} KB
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="ml-2 rounded-lg border border-gray-200 dark:border-gray-700 p-3 mr-16">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-sm font-medium">File Attachment</h4>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-6 w-6 rounded-full" 
          onClick={onRemove}
        >
          <X size={14} />
        </Button>
      </div>
      {renderPreview()}
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        Click send to analyze this file with Nova
      </p>
    </div>
  );
};
