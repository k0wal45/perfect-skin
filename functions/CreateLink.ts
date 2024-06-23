
const CreateLink = (text: string) => {

    return text
    .toLowerCase()                            
    .trim()                                 
    .replace(/\s+/g, '-');     
  
}

export default CreateLink