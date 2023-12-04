import React, { useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link, useHistory } from "react-router-dom";
import "./Projects.css";
import { Tooltip } from "@mui/material";

const CardContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2),
  gridTemplateColumns: "repeat(1, 1fr)",

  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
}));

const cardData = [
  {
    id: 1,
    title: "BOOK COLLEGE",
    image: "https://i.ibb.co/wKxqVkm/project-Image-1.png",
    clientSite: "https://github.com/Manikonline/book-colleges-client",
    serverSite: "https://github.com/Manikonline/book-colleges-server",
    liveLink: "https://book-colleges.web.app/",
    description:
      "Single page application using React-Router, Implemented authentication system using Firebase This is a College booking platform from where students can apply to their prepared colleges.\n\n\nA responsive MERN Stack Base College booking website where the user can visit the website from his phone or computer without any trouble ",
  },
  {
    id: 2,
    title: "MIL School",
    image: "https://i.ibb.co/zWdhYz1/cut.png",
    clientSite: "https://github.com/Manikonline/mil-club-client",
    serverSite: "https://github.com/Manikonline/mil-club-server",
    liveLink: "https://mil-school-c89cf.web.app/",
    description:
      "This is a Musical instruments website, where Instructors can add instrument classes, and users can purchase their preferred instrument class.\n\n\nThis website has a dashboard, where the data of the admin, instructor, and user is shown according to their roleIf a user wants to buy an instrument class, he must first create an account.",
  },
  {
    id: 3,
    title: "TOY BOX",
    image: "https://i.ibb.co/R37d43N/toybox-1.png",
    clientSite: "https://github.com/Manikonline/toy-box",
    serverSite: "https://github.com/Manikonline/Toy-box-server",
    liveLink: "https://toy-box-8d4dc.web.app/",
    description:
      "Single page application using React-Router, Implemented authentication system using Firebase A responsive MERN Stack Base Toy MarketPlace website where a user can explore the website well on his phone and computer.\n\n\nAfter successful login a user can add, update, delete any of his products",
  },
  {
    id: 4,
    title: "NextJS Material Kit.",
    image: "https://i.ibb.co/6rdq32r/cut-3-1.png",
    clientSite: "https://github.com/Manikonline/nextjs-material-kit",
    serverSite: "",
    liveLink: "https://symphonious-peony-d4a50a.netlify.app/",
    description:
      "It's a structure. or parts of a website similar to a library. This website is static. These are the ones where the only focus was on design.",
  },
  
  // Add more card data as needed
];

const modalStyles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#fff",
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    animation: "slideDown 0.5s ease-in-out",
    position: "relative",
  },
  closeButtonContainer: {
    position: "absolute",
    top: "2px",
    left: "150px",
    paddingBottom: "10px", // Add padding to the bottom
  },
  closeButton: {
    cursor: "pointer",
    marginBottom: "20px",
    color: "#333", // Adjust color to your preference
    fontSize: "1.8rem", // Adjust font size to your preference
  },
};

const Projects = ({ data = cardData }) => {
  const [modalOpen, setModalOpen] = useState(Array(data.length).fill(false));
  const history = useHistory();
  const handleModalOpen = (index) => {
    const newModalOpen = [...modalOpen];
    newModalOpen[index] = true;
    setModalOpen(newModalOpen);
  };

  const handleModalClose = (index) => {
    const newModalOpen = [...modalOpen];
    newModalOpen[index] = false;
    setModalOpen(newModalOpen);
  };
  const onClickOpenInNewIcon = (index, liveLink) => {
    if (liveLink) {
      window.location.href = liveLink;
    }
  };

  const onClick = (event, link) => {
    event.preventDefault();
    const path = link && link.pathname ? link.pathname : "/defaultPath";
    console.log("Navigating to:", path);

    // Use window.location.href to navigate to the new URL
    window.location.href = path;
  };
  return (
    <div id="projects" className="project-container pt-10">
      <div className="about-description ps-28 ">
        <h2>Projects</h2>
      </div>
      <CardContainer className="ps-28 pe-28 pb-10 card-container ">
        {data.map((card, index) => (
          <Card
            className="card-width mt-5"
            key={card.id}
            sx={{ maxWidth: 400 }}
          >
            <CardHeader className="card-title" title={card.title} />
            <CardMedia
              component="img"
              height="200"
              image={card.image}
              alt="Project Image"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <p className="project-des">Description:</p>
                {card.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="github"
                onClick={() => handleModalOpen(index)}
              >
                <Tooltip title="GitHub Code" >
                <GitHubIcon />
                </Tooltip>
                
              </IconButton>
              <Modal
                open={modalOpen[index]}
                onClose={() => handleModalClose(index)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <div style={modalStyles.container}>
                  <div style={modalStyles.content}>
                    <div style={modalStyles.closeButtonContainer}>
                      <IconButton
                        aria-label="close"
                        onClick={() => handleModalClose(index)}
                        style={modalStyles.closeButton}
                      >
                        <CloseIcon />
                      </IconButton>
                    </div>
                    <Typography
                      variant="h6"
                      style={modalStyles.title}
                      id="modal-title"
                      className="selectoption"
                    >
                      Select an Option
                    </Typography>
                    <Typography
                      style={modalStyles.option}
                      id="modal-description"
                    >
                      <Link
                        to={{ pathname: card.clientSite }}
                        onClick={(event) =>
                          onClick(event, { pathname: card.clientSite })
                        }
                        className="modal-link"
                      >
                        Client Site
                      </Link>
                    </Typography>
                    <Typography
                      style={modalStyles.option}
                      id="modal-description"
                    >
                      <Link
                        to={{ pathname: card.serverSite }}
                        onClick={(event) =>
                          onClick(event, { pathname: card.serverSite })
                        }
                        className="modal-link"
                      >
                        Server Site
                      </Link>
                    </Typography>
                  </div>
                </div>
              </Modal>
              <IconButton
                aria-label="share"
                onClick={() => onClickOpenInNewIcon(index, card.liveLink)}
              >
                <Tooltip title="Live Link" >
                <OpenInNewIcon />
                </Tooltip>
               
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </CardContainer>
    </div>
  );
};

export default Projects;
