import React from "react";

function NewReminder(): React.ReactElement {
  return (
    <form>
      <label htmlFor="title"></label>
      <input id="title" type="text" className="form-control" />
      <button type="submit" className="btn btn-primary rounded-pill">
        Add Reminder
      </button>
    </form>
  );
}

export default NewReminder;
