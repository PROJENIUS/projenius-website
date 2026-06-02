import React, { useState, useRef, forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page } from "react-pdf";

import magazineFile from "/magazine.pdf";
import flipSoundFile from "/page-flip-01a.mp3";

import "../assets/css/MagazineSection.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const MagazinePageItem = forwardRef(
  ({ pageNumber, width }, ref) => {
    return (
      <div className="magazine-sec-page-wrap" ref={ref}>
        <Page
          pageNumber={pageNumber}
          width={width}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </div>
    );
  }
);

const MagazineSection = () => {
  const [totalPages, setTotalPages] = useState(null);
  const [activePage, setActivePage] = useState(0);

  const flipBookRef = useRef(null);

  const flipBookWidth = 600;
  const flipBookHeight = 800;

  const playFlipAudio = () => {
    const audio = new Audio(flipSoundFile);

    audio.play().catch(() => {});
  };

  const handleFlip = (e) => {
    setActivePage(e.data);
  };

  const goNextPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();

      playFlipAudio();
    }
  };

  const goPrevPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();

      playFlipAudio();
    }
  };

  const handleDocumentLoad = ({ numPages }) => {
    setTotalPages(numPages);
  };

  return (
    <section className="magazine-sec-main-wrapper">
      <div className="magazine-sec-layout-grid">

        {/* LEFT SIDE */}
        <div className="magazine-sec-book-area">

          <div className="magazine-sec-book-shadow">

            <Document
              file={magazineFile}
              onLoadSuccess={handleDocumentLoad}
            >
              {totalPages && (
                <HTMLFlipBook
                  width={flipBookWidth}
                  height={flipBookHeight}
                  size="stretch"
                  className="magazine-sec-flip-book"
                  ref={flipBookRef}
                  showCover={true}
                  useMouseEvents={true}
                  onFlip={handleFlip}
                >
                  {Array.from(
                    new Array(totalPages),
                    (_, index) => (
                      <MagazinePageItem
                        key={index}
                        pageNumber={index + 1}
                        width={flipBookWidth}
                      />
                    )
                  )}
                </HTMLFlipBook>
              )}
            </Document>

          </div>

          {/* CONTROLS */}
          <div className="magazine-sec-navigation-pill">

            <button
              className="magazine-sec-arrow-btn"
              onClick={goPrevPage}
            >
              ‹
            </button>

            <span className="magazine-sec-page-count">
              {activePage + 1} / {totalPages || 0}
            </span>

            <button
              className="magazine-sec-arrow-btn"
              onClick={goNextPage}
            >
              ›
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="magazine-sec-content-box">
              <span id="sub-heading">Our Magazine</span>
          <h2 className="" id="title">
            We Create With Purpose
          </h2>

          <p className="magazine-sec-description">
            A collective of designers, thinkers, and makers dedicated
            to crafting meaningful experiences. Explore our creative
            journey through the pages.
          </p>

          <a
            href={magazineFile}
            download
            className="btn d-flex w-50 align-item-center"
          >
            <div className="magazine-sec-download-icon me-3" > 
              ↓
            </div>

            Download Magazine
          </a>

        </div>

      </div>
    </section>
  );
};

export default MagazineSection;