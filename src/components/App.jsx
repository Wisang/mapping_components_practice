import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createDT(item) {
  return (
    <Entry
      key={item.id}
      icon={item.emoji}
      emojiName={item.name}
      content={item.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createDT)}
      </dl>
    </div>
  );
}

export default App;
