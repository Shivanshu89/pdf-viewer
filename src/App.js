
import { PDFReader } from 'reactjs-pdf-reader'

import demoFile from "./assets/comp.pdf";

export default function App() {


  return (
    <div width="100vw" style={{backgroundColor:'rgb(99,104,97)'}}>
    <PDFReader showAllPage={true}  url={demoFile}/>
   </div>
  );
}
