import * as React from 'react';
import MonacoEditor from "react-monaco-editor";

export const App = () => {
  return (
    <div className="main">
      <MonacoEditor height="90vh" language="javascript" />
    </div>
  )
}
