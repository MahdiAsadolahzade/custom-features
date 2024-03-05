import React from "react";
import Tooltip from "@/customs/Tooltip";

type Props = {};

const TryTooltip = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        marginTop: "100px",
        marginLeft:'100px',
        marginRight:'100px'
      }}
    >
      <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: '20px',
      justifyContent: 'center',
      alignContent: 'center',
      padding: '20px',
    }}>
     
     <Tooltip text="this is an example" position="top-left">
        <button className="button">top-left</button>
      </Tooltip>

      <Tooltip text="this is an example" position="top">
        <button className="button">top</button>
      </Tooltip>

      <Tooltip text="this is an example" position="top-right">
        <button className="button">top-right</button>
      </Tooltip>

      <Tooltip text="this is an example" position="left">
        <button className="button">left</button>
      </Tooltip>

      <Tooltip text="this is an example" position="center">
        <button className="button">center</button>
      </Tooltip>

      <Tooltip text="this is an example" position="right">
        <button className="button">right</button>
      </Tooltip>

      <Tooltip text="this is an example" position="bottom-left">
        <button className="button">buttom-left</button>
      </Tooltip>

      <Tooltip text="this is an example" position="bottom">
        <button className="button">buttom</button>
      </Tooltip>

      <Tooltip text="this is an example" position="bottom-right">
        <button className="button">buttom-right</button>
      </Tooltip>

     



    
    </div>



      <div style={{
        margin:'50px'
      }}>-------------------</div>
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        gap:'50px'

      }}>
        <Tooltip text="this is an example" position="bottom" arrow={true}>
          <button className="button">buttom</button>
        </Tooltip>

        <Tooltip text="this is an example" position="top" arrow={true}>
          <button className="button">top</button>
        </Tooltip>

        <Tooltip text="this is an example" position="left" arrow={true}>
          <button className="button">left</button>
        </Tooltip>


        <Tooltip text="this is an example" position="right" arrow={true}>
          <button className="button">right</button>
        </Tooltip>

        <Tooltip text="this is an example" position="bottom-left" arrow={true}>
          <button className="button">buttom-left</button>
        </Tooltip>

        <Tooltip text="this is an example" position="bottom-right" arrow={true}>
          <button className="button">buttom-right</button>
        </Tooltip>

        <Tooltip text="this is an example" position="top-left" arrow={true}>
          <button className="button">top-left</button>
        </Tooltip>

        <Tooltip text="this is an example" position="top-right" arrow={true}>
          <button className="button">top-right</button>
        </Tooltip>

        <Tooltip text="this is an example" position="center" arrow={true}>
          <button className="button">center</button>
        </Tooltip>
      </div>
    </div>
  );
};

export default TryTooltip;
