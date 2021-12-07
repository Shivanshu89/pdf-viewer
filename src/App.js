
import { PDFReader } from 'reactjs-pdf-reader'
import './index.css'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { Spinner } from 'react-bootstrap'
import demoFile from "./assets/comp.pdf";
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line
    if (demoFile) {
      setLoading(false);
    }
  }, [])

  if (loading) {
  
    return (
      <Spinner  className="d-flex justify-content-center align-items-center" animation="border" style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
      }} role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }
  return (
    <div className="pdf-container d-flex" style={{ overflow: '', backgroundColor: 'rgb(99,104,97)' }}>
      <PDFReader showAllPage={true} scale="1.3" url={demoFile} />
      <div className="footer">
        <div className="socialdiv">
          <a target='_blank' rel="noreferrer" href="https://www.twitter.com/Habitat--sa" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a target='_blank' rel="noreferrer" href="https://www.twitter.com/Habitat--sa"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}
