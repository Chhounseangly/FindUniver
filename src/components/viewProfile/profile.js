import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { DialogTitle } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";

export default function ViewProfile({ children, title, open, handleClose }) {
  return (
    <Dialog
      open={open}
      fullWidth
      modal={true}
      PaperProps={{
        sx: {
          width: "100%",
          height: "70%",
        },
      }}
    >
      <DialogTitle
        style={{
          fontFamily: `Battambang ,Arial, Helvetica, sans-seri`,
        }}
        className="  text-black flex justify-between font-khBtB"
      >
        {title}
        <Button className="-right-5" onClick={handleClose}>
          <AiOutlineClose size={20} color="black" />
        </Button>
      </DialogTitle>
      <DialogContent className="bg-white">{children}</DialogContent>
    </Dialog>
  );
}
