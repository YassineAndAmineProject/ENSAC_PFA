import React, { useState } from "react";

import RevealDropdown, { RevealDropdownTrigger } from "./base/RevealDropdown";

import BoardViewModal from "./BoardViewModal";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Badge, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const GridAndModalItem = ({ project }) => {
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const shouldDisplay = window.location.pathname.includes("dashboard");
  return (
    <>
      <RevealDropdownTrigger
        className="position-relative rounded-2 overflow-hidden p-4 cursor-pointer"
        style={{ height: 236 }}
        onClick={() => setOpenDetailsModal(true)}
      >
        <div
          className="bg-holder"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 39.41%, rgba(0, 0, 0, 0.4) 100%), url(${project.bg})`,
          }}
        />
        <div className="position-relative h-100 d-flex flex-column justify-content-between">
          <div className="d-flex justify-content-between align-items-center">
            <Badge
              variant="phoenix"
              bg={project.status.type}
              className="fs-10"
              data-bs-theme="light"
            >
              {project.status.label}
            </Badge>
            {shouldDisplay && (
              <div className="z-2">
                <RevealDropdown btnClassName="btn-icon" icon={faEllipsisV}>
                  <>
                    <Dropdown.Item eventKey="1">
                      <Link
                        style={{ textDecoration: "none", color: "inherit" }}
                        to={"#"}
                      >
                        Visualiser
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2">
                      <Link
                        style={{ textDecoration: "none", color: "inherit" }}
                        to={`/dashboard/app/add-new-course-to/trainingId`}
                      >
                        Ajouter un cours
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4" className="text-danger">
                      Supprimer
                    </Dropdown.Item>
                  </>
                </RevealDropdown>
              </div>
            )}
          </div>
          <h3 className="text-white fw-bold line-clamp-2">{project.name}</h3>
        </div>
      </RevealDropdownTrigger>

      {/* <BoardViewModal
        show={openDetailsModal}
        handleClose={() => setOpenDetailsModal(false)}
        project={project}
      /> */}
    </>
  );
};

export default GridAndModalItem;
