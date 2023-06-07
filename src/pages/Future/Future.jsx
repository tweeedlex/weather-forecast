import React, { useEffect, useState } from "react";

export const Future = () => {
  const [date, setDate] = useState("");
  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <div>
      Future
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
};
