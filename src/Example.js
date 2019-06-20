import React from "react";

import Example1 from "./[01] hello world/App";
import Example2 from "./[02] multiple components/App";
import Example3 from "./[03] props/App";
import Example4 from "./[04] useState hook/App";
import Example5 from "./[05] useState hook (array of objects with callbacks)/App";
import Example6a from "./[06a] forms - uncontrolled inputs/App";
import Example6b from "./[06b] forms - controlled inputs/App";
import Example7 from "./[07] api calls/App";
import Example8 from "./[08] useEffect/App";
import Example9 from "./[09] jsx avoid surrounding parent element/App";
import Example10 from "./[10] import-export/App";
import Example11 from "./[11] class components/App";
import Example12 from "./[12] props.children/App";
import Example88 from "./[88] empty example/App";
import Example99 from "./[99] empty example/App";

const Example = props => {
  const examples = [
    Example1,
    Example2,
    Example3,
    Example4,
    Example5,
    Example6a,
    Example6b,
    Example7,
    Example8,
    Example9,
    Example10,
    Example11,
    Example12,
    Example88,
    Example99
  ];

  const index = props.currentExampleId - 1;
  const SelectedExample = examples[index];
  return (
    <div className="example">
      <SelectedExample />
    </div>
  );
};

export default Example;
