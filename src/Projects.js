import React from "react";
import Dictionary from "./Dictionary.png";
import Weather from "./Weather.png";
import Prague from "./Prague.png";

export default function Projects() {
  return (
    <div className="info-container text-center">
      <strong className="Projects fs-1">Projekte</strong>
      <div className="container text-center " id="projects">
        <div className="row align-items-center mt-5 mb-5">
          <div className="col-2 ">
            Wörterbuch-App <br />⇓<br />
            <a
              href="https://dicttionary.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Link zur Website
            </a>
          </div>
          <div className="col-6">
            <img
              className="img-fluid border "
              src={Dictionary}
              alt="Project picure"
            />
          </div>
          <div className="col-4 ">
            Dieses Projekt ist ein Wörterbuch, das Definitionen, Aussprache und
            relevante Bilder zu gesuchten Wörtern bereitstellt.
          </div>
          <div className="row align-items-center mt-5 mb-5">
            <div className="col-4">
              Dieses Projekt ist eine Wetter-Anwendung, die Wetter, Temperatur
              und weitere Details zu jeder gesuchten Stadt bereitstellt.
            </div>
            <div className="col-6">
              <img
                className="img-fluid border"
                src={Weather}
                alt="Project picure"
              />
            </div>
            <div className="col-2">
              Wetter-App <br />⇓<br />
              <a
                href="https://doodle-weather.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Link zur Website
              </a>
            </div>
          </div>
          <div className="row align-items-center mt-5 mb-5">
            <div className="col-2">
              Prag Reise
              <br /> ⇓<br />
              <a
                href="https://travel-to-prague.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Link zur Website
              </a>
            </div>
            <div className="col-6">
              <img
                className="img-fluid border"
                src={Prague}
                alt="Project picure"
              />
            </div>
            <div className="col-4">
              Dieses Projekt ist ein Trivia- und Reiseführer für die Stadt Prag.
              Es zeigt meine Gründe auf, warum ich eine Reise dorthin empfehle.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
