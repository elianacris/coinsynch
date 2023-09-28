import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export interface ILanguage {
  code: string;
  name: string;
}

const languages: ILanguage[] = [
  {
    code: "pt-BR",
    name: "PT",
  },
  {
    code: "en",
    name: "EN",
  },
];

export default function ButtonTranslation() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { i18n } = useTranslation();

  const [currentLanguage, setLanguage] = useLocalStorage("language", {
    code: "pt-BR",
    name: "PT",
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguange = (language: ILanguage) => {
    setLanguage(language);
    i18n.changeLanguage(language.code);
    setAnchorEl(null);
  };

  return (
    <div style={{ marginLeft: "auto" }}>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          // color: "#0000",
          boxShadow: "none",
          width: "51px",
          height: "24px",
          ":hover": {
            // backgroundColor: "transparent",
            // color: "#0000",
          },
        }}
      >
        {currentLanguage.name}
        <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ boxShadow: "none" }}
      >
        {languages.map(
          (language: ILanguage) =>
            language.code !== currentLanguage.code && (
              <MenuItem
                key={language.code}
                sx={{
                  width: "51px",
                  height: "24px",
                  ":hover": {
                    // backgroundColor: "rgba(255, 94, 30, 0.12)",
                  },
                }}
                onClick={() => handleChangeLanguange(language)}
              >
                {language.name}
              </MenuItem>
            )
        )}
      </Menu>
    </div>
  );
}
