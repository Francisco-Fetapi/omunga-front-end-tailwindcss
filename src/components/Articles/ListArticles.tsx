import Button from "../Button/Button";
import { FaChevronDown } from "react-icons/fa";

export default function ListArticles() {
  return (
    <div>
      <div className="flex justify-end">
        <Button variant="white" shadow iconEnd={<FaChevronDown />}>
          Filtrar por &nbsp;
        </Button>
      </div>
    </div>
  );
}
