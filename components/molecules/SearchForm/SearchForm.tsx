"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/atoms/Button/Button";
import Icon from "@/components/atoms/Icon/Icon";

interface SearchFormProps {
  onSearch?: (query: string) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [query, setQuery] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch?.(query);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <Icon name="search" size={22} />

        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search heritage sites..."
          aria-label="Search heritage sites"
        />
      </div>

      <Button type="submit">
        Search
      </Button>
    </form>
  );
}