import React from "react";
import styled from "styled-components";

const Container = styled("div")`
  width: 600px;
  height: 400px;
  display: flex;
  /* flex-direction: column */

`;
const Proekt = () => {
  return (
    <Container>
      <div>
        <img
          width={400}
          height={300}
          style={{ marginRight: "20px" }}
          src=" https://newsnn.ru/attachments/624c10df5def2eb34e81d081520a64e8808e2581/store/crop/0/0/441/297/441/297/0/b67136a722d10dd924c7b79837ba1f6bf6206af894408b5f9be982cd7394/1677759422794.png"
          alt=""
        />
        <p>
          <h2>Crocodile podkroduli</h2>
        </p>
        <p>
          <h2>30000$ </h2>
        </p>
        <p>
          <h2>Razmer: 41,42,43,44,45</h2>
        </p>
      </div>
      <div>
        <img
          width={400}
          height={300}
          style={{ marginRight: "20px" }}
          src="https://ireland.apollo.olxcdn.com/v1/files/v02ll34zaoaq3-UA/image"
          alt=""
        />
        <p>
          <h2>Original nike podkroduli</h2>
        </p>
        <p>
          <h2>20000$ </h2>
        </p>
        <p>
          <h2>Razmer: 41,42,43,44,45</h2>
        </p>
      </div>

      <div>
        <img
          width={400}
          height={300}
          style={{ marginRight: "20px" }}
          src="https://71.img.avito.st/image/1/1.LsWPq7a5giy5AkAp35s440QIhCY7iIruPgiAKDMCiC4.UCwLuLpA9VGe7u3rA_T0wpv6mgZWhFxVoTY1awxCl3M"
          alt=""
        />
        <p>
          <h2>Winter podkroduli</h2>
        </p>
        <p>
          <h2>50000$</h2>
        </p>
        <p>
          <h2>Razmer: 41,43,45</h2>
        </p>
      </div>
    </Container>
  );
};

export default Proekt;
