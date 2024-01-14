import { useState } from "react";
import patchSvg from "../assets/patch.svg";
import PatchItem from "./PatchItem";
import { useNuiEvent } from "../hooks/useNuiEvent";

const PatchNotes = () => {
  const [patches, setPatches] = useState<string[]>([]);
  const [version, setVersion] = useState<number>(0.1);

  useNuiEvent("setPatches", setPatches);
  useNuiEvent("setVersion", setVersion);

  return (
    <div className="PatchNotes">
      <div className="icon">
        <img src={patchSvg} />
      </div>
      <h2>Utolsó Frissítés</h2>
      <div className="list">
        <h3 style={{ fontWeight: "normal" }} className="color-primary">
          Patch {version.toString()}V
        </h3>
        <ul>
          {patches.map((patch, i) => {
            if (i > 8) return;

            return <PatchItem key={i} patch={patch} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default PatchNotes;
