import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SearchInput(props) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Form>
        <Form.Control
          type="text"
          placeholder="Enter word"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          variant="primary"
          className="mb-2 mt-2"
          onClick={() => props.setQuery(searchQuery)}
        >
          Add flashcard
        </Button>{" "}
      </Form>
    </div>
  );
}

export default SearchInput;
