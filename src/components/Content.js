import React from "react";
import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
const Content = () => {
  return (
    <>
      <style>
        {`
          .text-responsive {
            font-size: 1rem;
            text-align: justify;
            text-indent: 2em; /* Indent the first line of each paragraph */
            margin-bottom: 1.5rem; /* Space between paragraphs */
          }

          @media (min-width: 768px) {
            .text-responsive {
              font-size: 1.25rem;
            }
          }

          @media (min-width: 992px) {
            .text-responsive {
              font-size: 1.3rem;
            }
          }
        `}
      </style>

      <Container className="mt-5 mb-5">
        <Fade delay={1e2} cascade damping={1e-1}>
          <h3 style={{ marginBottom: "25px" }}>Welcome to ABC School</h3>
        </Fade>
        <p className="text-muted text-responsive">
          ABC School, established in 1990, is a renowned institution known for
          providing a strong academic foundation and promoting holistic
          development. For over three decades, we have consistently fostered an
          environment where students are encouraged to explore their potential,
          both inside and outside the classroom. With a dedicated faculty,
          modern facilities, and a diverse curriculum, we aim to create
          well-rounded individuals who excel in academics, leadership, sports,
          and the arts. Our commitment to quality education ensures that
          students not only gain knowledge but also develop critical thinking,
          creativity, and a passion for lifelong learning.
        </p>

        <p className="text-muted text-responsive">
          Join us at ABC School, where we nurture future leaders and provide a
          nurturing space for growth and success.
        </p>
      </Container>
    </>
  );
};

export default Content;
