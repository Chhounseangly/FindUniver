import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { DialogTitle } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";

export default function CustomForm({ children, title, open, handleClose }) {
  return (
    <Dialog
      open={open}
      fullWidth
      sx={{
        backdropFilter: "blur(1px)",
      }}
    >
      <DialogTitle className="bg-gray-900 text-white flex justify-between">
        {title}
        <Button className="-right-5" onClick={handleClose}>
          <AiOutlineClose size={20} color="white" />
        </Button>
      </DialogTitle>
      <DialogContent className="bg-gray-900">{children}</DialogContent>
    </Dialog>
  );
}
