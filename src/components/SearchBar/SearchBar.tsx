import { useState } from "react";
import { Wrapper, Input, Button, Icon } from "./SearchBar.styled";
import searchIcon from "../../assets/searchLogo.png";

interface ISearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: ISearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    onSearch(query.trim());
  };

  return (
    <Wrapper>
      <Input
        placeholder="Enter city, district, or name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
      />
      <Button onClick={handleSubmit} aria-label="Search">
        <Icon src={searchIcon} alt="Search" />
      </Button>
    </Wrapper>
  );
};
