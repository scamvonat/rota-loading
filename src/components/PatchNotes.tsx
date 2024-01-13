import { useEffect, useState } from "react";
import patchSvg from "../assets/patch.svg";
import { fetchNui } from "../utils/fetchNui";
import PatchItem from "./PatchItem";
import { isEnvBrowser } from "../utils/misc";

const PatchNotes = () => {
  const [patches, setPatches] = useState<string[]>([]);
  const [version, setVersion] = useState<number>(0.1);

  const getPatches = async () => {
    const patches = await fetchNui("getPatches");

    if (patches) setPatches(patches);
  };

  const getVersion = async () => {
    const version = await fetchNui("getVersion");

    if (version) setVersion(version);
  };

  useEffect(() => {
    if (isEnvBrowser()) {
      for (let i = 0; i < 10; i++)
        setPatches((current) => [...current, "frissites-" + i]);
      return;
    }
    getPatches();
    getVersion();
  }, []);

  return (
    <div className="PatchNotes">
      <div className="icon">
        <img src={patchSvg} />
      </div>
      <h2>Utolsó Frissítés</h2>
      <div className="list">
        <h3 style={{ fontWeight: "normal" }} className="color-primary">
          Patch {version}V
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
