import { Dispatch, SetStateAction, useState } from "react";

const useArray = <T>(
  defaultValue: T[]
): [T[], Dispatch<SetStateAction<T[]>>] => {
  const [array, setArray] = useState<T[]>(defaultValue);

  const set = (newValue: any) => {
    if (Array.isArray(newValue)) setArray(newValue);
    else if (newValue) setArray([newValue]);
    else setArray([]);
  };

  return [array, set];
};

export default useArray;
