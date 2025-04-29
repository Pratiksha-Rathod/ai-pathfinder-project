
// Main export file for the knowledge base system
import { generateHistoryResponse } from './history';
import { generateScienceResponse } from './science';
import { generateArtsResponse } from './arts';
import { generateMathResponse } from './math';
import { generateGeographyResponse } from './geography';
import { generateSpaceResponse } from './space';
import { generateEngineeringResponse } from './engineering';
import { generateFactsResponse } from './facts';

// Function to analyze file content
export const analyzeFile = (file: File): string => {
  // Get file extension
  const extension = file.name.split('.').pop()?.toLowerCase();
  
  // Basic file type detection
  const fileTypeResponses: Record<string, string> = {
    'pdf': "I've processed your PDF document. ",
    'doc': "I've analyzed your Word document. ",
    'docx': "I've analyzed your Word document. ",
    'txt': "I've read your text file. ",
    'jpg': "I've examined your image. ",
    'jpeg': "I've examined your image. ",
    'png': "I've examined your image. ",
    'mp4': "I've processed your video file. ",
    'mp3': "I've processed your audio file. ",
    'csv': "I've analyzed your CSV data. ",
    'xls': "I've reviewed your Excel spreadsheet. ",
    'xlsx': "I've reviewed your Excel spreadsheet. ",
    'ppt': "I've reviewed your PowerPoint presentation. ",
    'pptx': "I've reviewed your PowerPoint presentation. ",
  };
  
  // Return response based on file type
  return fileTypeResponses[extension || ''] || "I've analyzed your file. ";
};

// Main function to generate responses based on input query
export const generateSmartResponse = async (query: string, attachment?: File | null): Promise<string> => {
  const lowercaseQuery = query.toLowerCase();
  
  // Process attachment if present
  let response = attachment ? analyzeFile(attachment) : "";
  
  // Check query for topic indicators and generate appropriate response
  if (lowercaseQuery.includes('history') || 
      lowercaseQuery.includes('historical') || 
      lowercaseQuery.includes('ancient') || 
      lowercaseQuery.includes('dynasty') ||
      lowercaseQuery.includes('king') ||
      lowercaseQuery.includes('queen') ||
      lowercaseQuery.includes('war') ||
      lowercaseQuery.includes('empire') ||
      lowercaseQuery.includes('revolution') ||
      lowercaseQuery.includes('maharaj') ||
      lowercaseQuery.includes('emperor')) {
    response += await generateHistoryResponse(query);
  } 
  else if (lowercaseQuery.includes('science') || 
          lowercaseQuery.includes('physics') || 
          lowercaseQuery.includes('chemistry') || 
          lowercaseQuery.includes('biology') ||
          lowercaseQuery.includes('scientific') ||
          lowercaseQuery.includes('experiment')) {
    response += await generateScienceResponse(query);
  }
  else if (lowercaseQuery.includes('art') || 
          lowercaseQuery.includes('music') || 
          lowercaseQuery.includes('painting') || 
          lowercaseQuery.includes('sculpture') ||
          lowercaseQuery.includes('literature') ||
          lowercaseQuery.includes('poem')) {
    response += await generateArtsResponse(query);
  }
  else if (lowercaseQuery.includes('math') || 
          lowercaseQuery.includes('mathematics') || 
          lowercaseQuery.includes('equation') || 
          lowercaseQuery.includes('calculation') ||
          lowercaseQuery.includes('formula')) {
    response += await generateMathResponse(query);
  }
  else if (lowercaseQuery.includes('geography') || 
          lowercaseQuery.includes('country') || 
          lowercaseQuery.includes('mountain') || 
          lowercaseQuery.includes('river') ||
          lowercaseQuery.includes('ocean') ||
          lowercaseQuery.includes('continent')) {
    response += await generateGeographyResponse(query);
  }
  else if (lowercaseQuery.includes('space') || 
          lowercaseQuery.includes('astronomy') || 
          lowercaseQuery.includes('planet') || 
          lowercaseQuery.includes('star') ||
          lowercaseQuery.includes('galaxy') ||
          lowercaseQuery.includes('universe')) {
    response += await generateSpaceResponse(query);
  }
  else if (lowercaseQuery.includes('engineering') || 
          lowercaseQuery.includes('technology') || 
          lowercaseQuery.includes('machine') || 
          lowercaseQuery.includes('design') ||
          lowercaseQuery.includes('build')) {
    response += await generateEngineeringResponse(query);
  }
  else {
    // General facts and miscellaneous topics
    response += await generateFactsResponse(query);
  }
  
  return response;
};
